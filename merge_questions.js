// Genera js/data/questions.js a partir de js/modules/*.js y valida el banco.
//
//   node merge_questions.js
//
// - Los módulos se ejecutan en un entorno aislado (vm), no con eval.
// - Se leen en orden alfabético fijo (el resultado no depende del sistema de archivos).
// - Si hay ERRORES (respuesta fuera de rango, opciones repetidas, fórmula que KaTeX
//   no puede mostrar...), NO se escribe questions.js y el comando termina con código 1.
// - Las ADVERTENCIAS (p. ej. preguntas repetidas entre módulos) se muestran pero no bloquean.
// - Las preguntas con `disabled: 'motivo'` se omiten sin renumerar las demás.

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const Parametric = require(path.join(__dirname, 'js', 'parametric.js'));
const GeoGebraEstados = require(path.join(__dirname, 'js', 'geogebraEstados.js'));
const PARAMETRIC_SAMPLES = 40; // versiones que se generan para validar cada pregunta paramétrica

const modulesDir = path.join(__dirname, 'js', 'modules');
const outputFile = path.join(__dirname, 'js', 'data', 'questions.js');

// KaTeX local (la misma versión que usa la aplicación) para validar fórmulas
let katex = null;
try {
    katex = require(path.join(__dirname, 'lib', 'katex', 'katex.min.js'));
} catch (e) {
    console.warn('Aviso: no se encontró lib/katex/katex.min.js; no se validarán las fórmulas.');
}

// ---- 1. Cargar módulos en un entorno aislado ----
const sandbox = { window: { examCategories: {} } };
vm.createContext(sandbox);

const files = fs.readdirSync(modulesDir).filter(f => f.endsWith('.js')).sort();
let loadErrors = 0;
for (const file of files) {
    const code = fs.readFileSync(path.join(modulesDir, file), 'utf8');
    try {
        vm.runInContext(code, sandbox, { filename: file });
    } catch (e) {
        loadErrors++;
        console.error(`ERROR cargando ${file}: ${e.message}`);
    }
}

// ---- 2. Validar y reunir ----
const errors = [];
const warnings = [];
const seen = new Map();
const allQuestions = [];
const categories = {};

const norm = s => String(s).replace(/\s+/g, '');
const checkTex = (tex, where) => {
    if (!katex) return;
    const warn = console.warn;
    console.warn = () => {}; // KaTeX avisa de caracteres como «¿» que sí se muestran
    try {
        katex.renderToString(String(tex), { throwOnError: true, strict: 'ignore' });
    } catch (e) {
        errors.push(`${where}: KaTeX no puede mostrar «${String(tex).slice(0, 60)}» (${e.message.split('\n')[0].slice(0, 90)})`);
    } finally {
        console.warn = warn;
    }
};

// Enunciado (texto normal con fórmulas entre $...$): valida cada fórmula y avisa si
// queda notación matemática fuera de los $ (se vería «x^2» o «A^{-1}» tal cual).
const checkQuestionText = (text, where) => {
    const s = String(text || '');
    if ((s.match(/\$/g) || []).length % 2) {
        errors.push(`${where}: el enunciado tiene un $ sin cerrar`);
        return;
    }
    s.replace(/\$([^$]+)\$/g, (m, tex) => { checkTex(tex, where); return m; });
    const plain = s.replace(/\$[^$]*\$/g, '').replace(/\{\{[^}]*\}\}/g, '');
    if (/[\^_]|\\[a-zA-Z]+|sqrt\(/.test(plain)) {
        warnings.push(`${where}: notación matemática fuera de $...$ («${plain.slice(0, 60)}»)`);
    }
};

const categoryKeys = Object.keys(sandbox.window.examCategories).sort();
for (const key of categoryKeys) {
    const category = sandbox.window.examCategories[key];
    if (!category || !Array.isArray(category.questions)) {
        errors.push(`Categoría ${key}: no tiene un arreglo "questions"`);
        continue;
    }
    let active = 0;

    category.questions.forEach((q, index) => {
        const id = `${key}_${index + 1}`;
        if (q.disabled) {
            console.log(`Omitida ${id}: ${q.disabled}`);
            return;
        }

        if (!q.question || typeof q.question !== 'string') errors.push(`${id}: falta el enunciado (question)`);
        // geogebraState distinto de 0 en una construcción propia: debe existir en js/geogebraEstados.js
        if (GeoGebraEstados.comandos(q) === null) {
            errors.push(`${id}: geogebraState '${q.geogebraState}' no está definido para la construcción ${q.geogebraId} en js/geogebraEstados.js`);
        }
        if (typeof q.latex !== 'string') errors.push(`${id}: falta el campo latex`);
        checkQuestionText(q.question, `${id} (texto del enunciado)`);
        // Pistas: sus fórmulas entre $...$ también deben poder mostrarse
        String(q.hint || '').replace(/\$([^$]+)\$/g, (m, tex) => { checkTex(tex, `${id} (pista)`); return m; });
        if ((String(q.hint || '').match(/\$/g) || []).length % 2) errors.push(`${id}: la pista tiene un $ sin cerrar`);

        // Tarea que se responde en GeoGebra: sin opciones, con condición de verificación
        if (q.answerType === 'geogebra') {
            if (!q.geogebraCheck || typeof q.geogebraCheck.condition !== 'string' || !q.geogebraCheck.condition.trim()) {
                errors.push(`${id}: tarea GeoGebra sin geogebraCheck.condition`);
            }
            if (!q.geogebraAppName && !q.geogebraId) errors.push(`${id}: tarea GeoGebra sin geogebraAppName ni geogebraId`);
            if (q.geogebraCommands && !Array.isArray(q.geogebraCommands)) errors.push(`${id}: geogebraCommands debe ser una lista`);
            if (Parametric.isParametric(q)) {
                for (let seed = 1; seed <= PARAMETRIC_SAMPLES; seed++) {
                    try {
                        const v = Parametric.instantiate({ ...q, id }, seed * 2654435761);
                        checkTex(v.latex, `${id} (enunciado) [${JSON.stringify(v.paramValues)}]`);
                    } catch (e) {
                        errors.push(`${id}: ${e.message}`);
                        break;
                    }
                }
            } else {
                checkTex(q.latex, `${id} (enunciado)`);
            }
        } else {
            if (!Array.isArray(q.options) || q.options.length < 2) {
                errors.push(`${id}: necesita al menos 2 opciones`);
                return;
            }
            if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct >= q.options.length) {
                errors.push(`${id}: "correct" (${q.correct}) está fuera del rango de opciones`);
            }

            // Paramétrica: se validan varias versiones generadas; si no, la pregunta tal cual
            let versions = [q];
            if (Parametric.isParametric(q)) {
                versions = [];
                for (let seed = 1; seed <= PARAMETRIC_SAMPLES; seed++) {
                    try {
                        versions.push(Parametric.instantiate({ ...q, id }, seed * 2654435761));
                    } catch (e) {
                        errors.push(`${id}: ${e.message}`);
                        break;
                    }
                }
            }
            versions.forEach((v, n) => {
                const tag = versions.length > 1 ? ` [versión ${n + 1}: ${JSON.stringify(v.paramValues)}]` : '';
                const opts = v.options.map(o => norm(o && o.latex));
                if (new Set(opts).size !== opts.length) errors.push(`${id}: tiene opciones repetidas${tag}`);
                checkTex(v.latex, `${id} (enunciado)${tag}`);
                v.options.forEach((o, i) => checkTex(o && o.latex, `${id} (opción ${String.fromCharCode(97 + i)})${tag}`));
            });
        }

        const fp = norm(`${q.question}|${q.latex}`);
        if (seen.has(fp)) warnings.push(`${id} repite el enunciado de ${seen.get(fp)}`);
        else seen.set(fp, id);

        allQuestions.push({
            ...q,
            id,                               // ID por posición en el módulo
            category: category.name || key,  // nombre visible
            categoryKey: key                  // clave del módulo
        });
        active++;
    });

    categories[key] = {
        name: category.name || key,
        description: category.description || '',
        count: active
    };
}

// ---- 3. Informe ----
warnings.forEach(w => console.warn(`Advertencia: ${w}`));
if (loadErrors || errors.length) {
    errors.forEach(e => console.error(`ERROR: ${e}`));
    console.error(`\n${errors.length + loadErrors} error(es). NO se modificó ${path.relative(__dirname, outputFile)}. Corrija los módulos y vuelva a ejecutar.`);
    process.exit(1);
}

// ---- 4. Escribir ----
const output = `// ARCHIVO GENERADO por merge_questions.js (${new Date().toISOString()}).
// No lo edite a mano: modifique js/modules/*.js y ejecute "node merge_questions.js".
window.allQuestions = ${JSON.stringify({ categories, questions: allQuestions }, null, 4)};
`;
fs.writeFileSync(outputFile, output);

const nParam = allQuestions.filter(q => Parametric.isParametric(q)).length;
const nTask = allQuestions.filter(q => q.answerType === 'geogebra').length;
console.log(`${files.length} módulos, ${allQuestions.length} preguntas activas (${nParam} paramétricas, ${nTask} tareas GeoGebra), ${warnings.length} advertencia(s).`);
console.log(`Escrito ${path.relative(__dirname, outputFile)}`);
