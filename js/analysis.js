/*
 * Análisis de resultados por pregunta (análisis de ítems).
 *
 * Lee los resultados en cualquiera de estos formatos (uno o varios archivos a la vez):
 *   - Libro de Google Sheets descargado como .xlsx (hoja «Detalle», creada por Codigo.gs)
 *   - La hoja «Detalle» exportada como .csv
 *   - Los Excel individuales «Detalle_Nombre_ID.xlsx» que descarga cada estudiante
 *
 * Indicadores por pregunta:
 *   - Dificultad p: proporción de aciertos (0 = nadie acierta, 1 = todos aciertan).
 *   - Discriminación D: p del 27 % con mejor nota − p del 27 % con peor nota.
 *   - Correlación ítem-resto r: correlación entre acertar la pregunta y la nota en
 *     las DEMÁS preguntas (no se cuenta la propia pregunta).
 *   - Distractores: cuántos eligieron cada opción.
 * Funciona en el navegador (window.ItemAnalysis) y en Node (require) para pruebas.
 */
(function (root) {
    'use strict';

    const THRESHOLDS = {
        minN: 5,          // con menos respuestas los indicadores no son fiables
        minSubsD: 10,     // con menos envíos, los grupos del 27 % tienen 1-2 estudiantes: D es solo orientativa
        easy: 0.9,
        hard: 0.2,
        lowD: 0.2,
        lowR: 0.15,
        negD: -0.05,      // margen para no alarmar por ruido
        negR: -0.1,
        groupShare: 0.27
    };

    const text = v => (v === undefined || v === null ? '' : String(v)).trim();
    const num = v => {
        const n = Number(String(v).replace(',', '.'));
        return Number.isFinite(n) ? n : 0;
    };
    // "b) 3x^2" -> "b"; sirve si no existe la columna «Opción (banco)»
    const stripLetter = s => text(s).replace(/^[a-h]\)\s*/i, '');

    // ---------- Lectura de filas normalizadas ----------

    // Hoja «Detalle» de Google Sheets (o su CSV)
    function fromDetailSheet(rows, source) {
        return rows.filter(r => text(r['ID pregunta']) || text(r['Pregunta'])).map(r => {
            const answer = text(r['Respuesta estudiante']);
            const orig = text(r['Opción (banco)']).toLowerCase();
            return {
                submission: text(r['ID envío']) || `${source}:${text(r['ID / CC'])}`,
                student: text(r['ID / CC']),
                studentName: text(r['Apellidos y Nombres']),
                examId: text(r['ID evaluación']),
                qid: text(r['ID pregunta']) || text(r['Pregunta']),
                category: text(r['Categoría']),
                question: text(r['Pregunta']),
                correct: text(r['Resultado']).toLowerCase() === 'correcta',
                answered: answer !== '' && answer.toLowerCase() !== 'no respondida',
                option: orig || stripLetter(answer),
                optionText: stripLetter(answer),
                earned: num(r['Puntos obtenidos']),
                points: num(r['Puntos posibles'])
            };
        });
    }

    // Excel individual descargado por el estudiante (hoja «Resultados»).
    // Versión actual: columna «Resultado» e ID de envío; versión 1 (diciembre de 2025):
    // la columna «Correcta» trae «Correcta»/«Incorrecta» y no hay ID de pregunta.
    function fromIndividualSheet(aoa, source) {
        const headerIdx = aoa.findIndex(row => text(row[0]) === 'No.' &&
            row.some(c => text(c) === 'Resultado' || text(c) === 'Correcta'));
        if (headerIdx < 0) return [];
        const header = aoa[headerIdx].map(text);
        const col = name => header.indexOf(name);
        const resultCol = col('Resultado') >= 0 ? 'Resultado' : 'Correcta';
        // Datos del estudiante: la fila siguiente a la cabecera «Nombre, ID, ...» (por nombre de columna)
        const infoIdx = aoa.findIndex(row => text(row[0]) === 'Nombre' && text(row[1]) === 'ID');
        const infoHead = infoIdx >= 0 ? aoa[infoIdx].map(text) : [];
        const info = infoIdx >= 0 ? aoa[infoIdx + 1] || [] : [];
        const field = name => (infoHead.indexOf(name) >= 0 ? text(info[infoHead.indexOf(name)]) : '');
        const student = field('ID') || source;
        const date = field('Fecha');
        // Con ID de envío, el mismo envío que también está en Google Sheets se cuenta una vez
        const submission = field('ID envío') || `${source}|${student}|${date}`;
        return aoa.slice(headerIdx + 1).filter(row => text(row[col('No.')])).map(row => {
            const get = name => (col(name) >= 0 ? row[col(name)] : '');
            const answer = text(get('Respuesta Usuario'));
            const orig = text(get('Opción (banco)')).toLowerCase();
            return {
                submission,
                student,
                studentName: field('Nombre'),
                examId: field('ID evaluación'),
                qid: text(get('ID pregunta')) || text(get('Pregunta')),
                category: text(get('Categoría')),
                question: text(get('Pregunta')),
                correct: text(get(resultCol)).toLowerCase() === 'correcta',
                answered: answer !== '' && answer.toLowerCase() !== 'no respondida',
                option: orig || stripLetter(answer),
                optionText: stripLetter(answer),
                earned: num(get('Puntos Obtenidos')),
                points: num(get('Puntos Posibles'))
            };
        });
    }

    // Recibe un libro de SheetJS y devuelve filas normalizadas
    function rowsFromWorkbook(XLSX, wb, source) {
        let out = [];
        wb.SheetNames.forEach(name => {
            const ws = wb.Sheets[name];
            const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
            if (!aoa.length) return;
            const head = aoa[0].map(text);
            if (head.includes('ID pregunta') && head.includes('Resultado') && head.includes('ID / CC')) {
                out = out.concat(fromDetailSheet(XLSX.utils.sheet_to_json(ws, { defval: '' }), source));
            } else if (aoa.some(r => text(r[0]) === 'DETALLE DE PREGUNTAS')) {
                out = out.concat(fromIndividualSheet(aoa, source));
            }
        });
        return out;
    }

    // Archivos que se reconocen pero no traen respuestas por pregunta (para explicar el motivo)
    function describeWorkbook(XLSX, wb) {
        const heads = wb.SheetNames.map(n => (XLSX.utils.sheet_to_json(wb.Sheets[n], { header: 1, defval: '' })[0] || []).map(text));
        if (heads.some(h => h.includes('NOTA') && h.includes('ID / CC'))) {
            return 'es el histórico de notas (Resultados_Evaluacion_Generada): trae la nota de cada estudiante, pero no sus respuestas pregunta por pregunta';
        }
        if (heads.some(h => h.includes('Nota') && h.includes('Correctas') && h.includes('ID envío'))) {
            return 'es la hoja «Resultados» de Google Sheets (una fila por estudiante); cargue el libro completo o la hoja «Detalle»';
        }
        return '';
    }

    // ---------- Estadística ----------
    function mean(a) { return a.length ? a.reduce((s, x) => s + x, 0) / a.length : NaN; }
    function sd(a) {
        if (a.length < 2) return NaN;
        const m = mean(a);
        return Math.sqrt(a.reduce((s, x) => s + (x - m) * (x - m), 0) / a.length);
    }

    function analyze(rows, opts = {}) {
        const T = { ...THRESHOLDS, ...opts };

        // Un mismo envío no debe contarse dos veces (p. ej. el mismo archivo cargado dos veces)
        const seen = new Set();
        rows = rows.filter(r => {
            const k = `${r.submission}|${r.qid}`;
            if (seen.has(k)) return false;
            seen.add(k);
            return true;
        });

        // Nota de cada envío como fracción (puntos; si no hay puntos, aciertos)
        const subs = new Map();
        rows.forEach(r => {
            const s = subs.get(r.submission) || { id: r.submission, student: r.student, name: r.studentName, earned: 0, points: 0, correct: 0, n: 0, items: new Map() };
            s.earned += r.earned; s.points += r.points; s.correct += r.correct ? 1 : 0; s.n++;
            s.items.set(r.qid, r);
            subs.set(r.submission, s);
        });
        const subList = [...subs.values()];
        subList.forEach(s => { s.score = s.points > 0 ? s.earned / s.points : s.correct / s.n; });

        // Grupos superior e inferior (27 %)
        const sorted = [...subList].sort((a, b) => b.score - a.score);
        const g = Math.max(1, Math.round(sorted.length * T.groupShare));
        const upper = new Set(sorted.slice(0, g).map(s => s.id));
        const lower = new Set(sorted.slice(-g).map(s => s.id));
        const groupsValid = sorted.length >= 4;

        // Por pregunta
        const byQ = new Map();
        rows.forEach(r => {
            const q = byQ.get(r.qid) || { qid: r.qid, category: r.category, question: r.question, rows: [] };
            q.rows.push(r);
            byQ.set(r.qid, q);
        });

        const items = [...byQ.values()].map(q => {
            const n = q.rows.length;
            const nCorrect = q.rows.filter(r => r.correct).length;
            const p = n ? nCorrect / n : NaN;

            const pIn = set => {
                const rs = q.rows.filter(r => set.has(r.submission));
                return rs.length ? rs.filter(r => r.correct).length / rs.length : NaN;
            };
            const D = groupsValid ? pIn(upper) - pIn(lower) : NaN;

            // Correlación ítem-resto (punto-biserial con la nota sin esta pregunta)
            const rest = q.rows.map(r => {
                const s = subs.get(r.submission);
                const pts = s.points > 0;
                const restScore = pts
                    ? (s.points - r.points > 0 ? (s.earned - r.earned) / (s.points - r.points) : NaN)
                    : (s.n > 1 ? (s.correct - (r.correct ? 1 : 0)) / (s.n - 1) : NaN);
                return { x: r.correct ? 1 : 0, y: restScore };
            }).filter(v => Number.isFinite(v.y));
            let r = NaN;
            if (rest.length >= 3) {
                const ys = rest.map(v => v.y);
                const s = sd(ys);
                const ones = rest.filter(v => v.x === 1).map(v => v.y);
                const zeros = rest.filter(v => v.x === 0).map(v => v.y);
                if (s > 0 && ones.length && zeros.length) {
                    const pp = ones.length / rest.length;
                    r = (mean(ones) - mean(zeros)) / s * Math.sqrt(pp * (1 - pp));
                }
            }

            // Distractores
            const options = new Map();
            q.rows.forEach(r => {
                const key = r.answered ? (r.option || '(sin dato)') : '(sin responder)';
                const o = options.get(key) || { key, text: r.answered ? r.optionText : '', count: 0, correct: false, upper: 0, lower: 0 };
                o.count++;
                if (r.correct) o.correct = true;
                if (upper.has(r.submission)) o.upper++;
                if (lower.has(r.submission)) o.lower++;
                options.set(key, o);
            });
            const optionList = [...options.values()].sort((a, b) => String(a.key).localeCompare(String(b.key)));

            // Alertas
            const flags = [];
            if (n < T.minN) flags.push({ level: 'info', text: `Pocos datos (${n} respuestas)` });
            if (n >= T.minN) {
                if (p >= T.easy) flags.push({ level: 'warn', text: 'Muy fácil' });
                if (p <= T.hard) flags.push({ level: 'warn', text: 'Muy difícil' });
                // Con pocos envíos una sola respuesta mueve D en 0,5: las alertas de
                // discriminación bajan a «Atención» y se marcan como orientativas
                const fewSubs = subList.length < T.minSubsD;
                const note = fewSubs ? ` (orientativo: solo ${subList.length} envíos)` : '';
                if ((Number.isFinite(D) && D < T.negD) || (Number.isFinite(r) && r < T.negR)) {
                    flags.push({ level: fewSubs ? 'warn' : 'error', text: `Discriminación negativa: los mejores estudiantes fallan más. Revise la clave y el enunciado${note}` });
                } else if ((Number.isFinite(D) && D < T.lowD) || (Number.isFinite(r) && r < T.lowR)) {
                    flags.push({ level: 'warn', text: `Discrimina poco entre estudiantes fuertes y débiles${note}` });
                }
                // Un distractor que atrae más a los mejores que la respuesta correcta
                const correctOpt = optionList.find(o => o.correct);
                if (!correctOpt) flags.push({ level: 'error', text: 'Nadie eligió la respuesta correcta: revise la clave, el enunciado o si el tema se vio en clase' });
                optionList.filter(o => !o.correct && o.key !== '(sin responder)').forEach(o => {
                    if (correctOpt && groupsValid && o.upper > correctOpt.upper) {
                        flags.push({ level: fewSubs ? 'warn' : 'error', text: `La opción «${o.key}» atrae más a los mejores que la correcta: ¿clave equivocada?${note}` });
                    }
                });
            }

            return {
                qid: q.qid, category: q.category, question: q.question,
                n, nCorrect, p, D, r, options: optionList, flags
            };
        });

        // Por categoría
        const cats = new Map();
        items.forEach(it => {
            const c = cats.get(it.category) || { category: it.category, items: 0, n: 0, correct: 0 };
            c.items++; c.n += it.n; c.correct += it.nCorrect;
            cats.set(it.category, c);
        });
        const categories = [...cats.values()].map(c => ({ ...c, p: c.n ? c.correct / c.n : NaN }))
            .sort((a, b) => a.p - b.p);

        const scores = subList.map(s => s.score);
        return {
            submissions: subList.length,
            questions: items.length,
            meanScore: mean(scores),
            sdScore: sd(scores),
            groupsValid,
            groupSize: g,
            items: items.sort((a, b) => (b.flags.filter(f => f.level === 'error').length - a.flags.filter(f => f.level === 'error').length) || (a.p - b.p)),
            categories,
            students: subList.map(s => ({ id: s.student, name: s.name, submission: s.id, score: s.score, correct: s.correct, n: s.n }))
                .sort((a, b) => b.score - a.score),
            studentCount: new Set(subList.map(s => s.student)).size
        };
    }

    const ItemAnalysis = { THRESHOLDS, rowsFromWorkbook, describeWorkbook, fromDetailSheet, fromIndividualSheet, analyze };
    root.ItemAnalysis = ItemAnalysis;
    if (typeof module !== 'undefined' && module.exports) module.exports = ItemAnalysis;
})(typeof window !== 'undefined' ? window : globalThis);

// ======================================================================
// Interfaz de la pestaña «Análisis de resultados» (antes js/analysis-page.js).
// Solo en el navegador: en Node (pruebas) se carga únicamente el cálculo de arriba.
// ======================================================================
if (typeof document !== "undefined") (function () {
    'use strict';

    const esc = s => ExamUtils.escapeHtml(s);
    const fmt = (v, d = 2) => (Number.isFinite(v) ? v.toFixed(d).replace('.', ',') : '—');
    const pct = v => (Number.isFinite(v) ? `${Math.round(v * 100)} %` : '—');
    const FLAG_ICON = { error: '⛔', warn: '⚠', info: 'ℹ' };
    const FLAG_LABEL = { error: 'Revisar', warn: 'Atención', info: 'Nota' };

    let allRows = [];
    let result = null;
    const loadedFiles = new Set();

    // ---------- Carga de archivos ----------
    const input = document.getElementById('files-input');
    const drop = document.getElementById('drop-zone');
    const status = document.getElementById('load-status');

    input.addEventListener('change', () => loadFiles(input.files));
    ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('dragging'); }));
    ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('dragging'); }));
    drop.addEventListener('drop', e => loadFiles(e.dataTransfer.files));

    // CSV guardado por Excel en español: suele venir en Windows-1252, no en UTF-8. Leído como
    // UTF-8 perdía las columnas con tilde («Categoría», «ID envío», «Opción (banco)»).
    function decodeCsv(buf) {
        try {
            return new TextDecoder('utf-8', { fatal: true }).decode(buf);
        } catch (e) {
            return new TextDecoder('windows-1252').decode(buf);
        }
    }

    async function loadFiles(fileList) {
        const files = [...(fileList || [])];
        if (!files.length) return;
        let added = 0;
        const problems = [];
        for (const file of files) {
            if (loadedFiles.has(file.name + file.size)) {
                problems.push(`${file.name}: ya estaba cargado`);
                continue;
            }
            try {
                const buf = await file.arrayBuffer();
                const wb = file.name.toLowerCase().endsWith('.csv')
                    ? XLSX.read(decodeCsv(buf), { type: 'string' })
                    : XLSX.read(buf);
                const rows = ItemAnalysis.rowsFromWorkbook(XLSX, wb, file.name);
                if (!rows.length) {
                    const why = ItemAnalysis.describeWorkbook(XLSX, wb);
                    problems.push(why
                        ? `${file.name}: ${why}. Para analizar preguntas cargue la hoja «Detalle» o los Excel «Detalle_…».`
                        : `${file.name}: no se reconoció el formato (¿es la hoja «Detalle» o un Excel «Detalle_…»?)`);
                    continue;
                }
                allRows = allRows.concat(rows);
                loadedFiles.add(file.name + file.size);
                added++;
            } catch (e) {
                problems.push(`${file.name}: no se pudo leer (${e.message})`);
            }
        }
        input.value = '';
        if (added || result) render();
        document.getElementById('clear-files-btn').classList.toggle('hidden', loadedFiles.size === 0);
        // Respuestas únicas (si dos archivos traen el mismo envío, se cuenta una vez)
        const all = result ? ItemAnalysis.analyze(allRows) : null; // todas las evaluaciones
        const unique = all ? all.items.reduce((s, it) => s + it.n, 0) : 0;
        const dup = allRows.length - unique;
        status.innerHTML = `${loadedFiles.size} archivo(s) cargado(s): ${unique} respuestas de ${all ? all.submissions : 0} envíos.` +
            (dup > 0 ? ` Se descartaron ${dup} respuestas repetidas (el mismo envío en dos archivos).` : '') +
            (problems.length ? `<br><span class="load-problem">⚠ ${problems.map(esc).join('<br>⚠ ')}</span>` : '');
    }

    // ---------- Render ----------
    // Evaluaciones presentes en los datos (las filas sin ID de evaluación van juntas)
    function updateExamFilter() {
        const box = document.getElementById('exam-filter');
        const select = document.getElementById('exam-select');
        const subsBy = new Map();
        allRows.forEach(r => {
            const k = r.examId || '';
            if (!subsBy.has(k)) subsBy.set(k, new Set());
            subsBy.get(k).add(r.submission);
        });
        const exams = [...subsBy.entries()].sort((a, b) => b[1].size - a[1].size);
        if (exams.length < 2) {
            box.classList.add('hidden');
            select.value = '';
            return;
        }
        const previous = select.value;
        select.innerHTML = exams.map(([id, set]) =>
            `<option value="${esc(id || '(sin ID)')}">${esc(id || 'Sin ID de evaluación')} — ${set.size} envío(s)</option>`).join('') +
            '<option value="*">Todas mezcladas (no recomendado)</option>';
        // Por defecto, la evaluación con más envíos
        select.value = [...select.options].some(o => o.value === previous) ? previous : select.options[0].value;
        box.classList.remove('hidden');
    }

    function selectedRows() {
        const box = document.getElementById('exam-filter');
        const v = document.getElementById('exam-select').value;
        const note = document.getElementById('exam-filter-note');
        if (box.classList.contains('hidden') || !v) return allRows;
        if (v === '*') {
            note.textContent = '⚠ Con evaluaciones distintas mezcladas, la discriminación compara notas de pruebas diferentes: úsela con cuidado.';
            return allRows;
        }
        note.textContent = 'Los archivos traen varias evaluaciones: se analiza una a la vez, porque la discriminación compara a los estudiantes que presentaron la misma prueba.';
        return allRows.filter(r => (r.examId || '(sin ID)') === v);
    }

    function render() {
        updateExamFilter();
        result = ItemAnalysis.analyze(selectedRows());
        document.getElementById('report').classList.remove('hidden');
        renderKpis();
        renderItems();
        renderCategories();
        renderStudents();
    }

    function renderKpis() {
        const alerts = result.items.filter(i => i.flags.some(f => f.level === 'error')).length;
        const tiles = [
            ['Envíos', result.submissions, 'evaluaciones entregadas'],
            ['Estudiantes', result.studentCount, 'distintos'],
            ['Preguntas', result.questions, `${alerts} con alerta grave`],
            ['Nota media', pct(result.meanScore), Number.isFinite(result.sdScore) ? `desviación ${pct(result.sdScore)}` : '']
        ];
        document.getElementById('kpi-row').innerHTML = tiles.map(([label, value, sub]) => `
            <div class="kpi-tile">
                <div class="kpi-label">${label}</div>
                <div class="kpi-value">${value}</div>
                <div class="kpi-sub">${sub}</div>
            </div>`).join('') + (result.groupsValid ? '' :
            '<p class="kpi-note">⚠ Con menos de 4 envíos no se calcula la discriminación.</p>') +
            (result.groupsValid && result.submissions < ItemAnalysis.THRESHOLDS.minSubsD
                ? `<p class="kpi-note">⚠ Solo ${result.submissions} envíos: la discriminación es orientativa (los grupos superior e inferior tienen ${result.groupSize} estudiante(s)).</p>` : '');
    }

    function sortItems(items) {
        const by = document.getElementById('sort-by').value;
        const sev = it => it.flags.filter(f => f.level === 'error').length * 10 + it.flags.filter(f => f.level === 'warn').length;
        const val = v => (Number.isFinite(v) ? v : Infinity);
        const copy = [...items];
        if (by === 'p') copy.sort((a, b) => val(a.p) - val(b.p));
        else if (by === 'D') copy.sort((a, b) => val(a.D) - val(b.D));
        else if (by === 'n') copy.sort((a, b) => b.n - a.n);
        else if (by === 'qid') copy.sort((a, b) => a.qid.localeCompare(b.qid, 'es', { numeric: true }));
        else copy.sort((a, b) => sev(b) - sev(a) || val(a.p) - val(b.p));
        return copy;
    }

    function renderItems() {
        const only = document.getElementById('only-flags').checked;
        let items = sortItems(result.items);
        if (only) items = items.filter(i => i.flags.some(f => f.level !== 'info'));
        const container = document.getElementById('items-container');
        if (!items.length) {
            container.innerHTML = '<p class="empty-msg">No hay preguntas con alertas.</p>';
            return;
        }
        container.innerHTML = items.map(it => {
            const level = it.flags.some(f => f.level === 'error') ? 'error' : it.flags.some(f => f.level === 'warn') ? 'warn' : 'ok';
            const max = Math.max(1, ...it.options.map(o => o.count));
            return `
            <article class="item-card item-${level}">
                <header class="item-head">
                    <div>
                        <span class="item-id">${esc(it.qid)}</span>
                        <span class="item-cat">${esc(it.category)}</span>
                        <p class="item-q">${esc(it.question)}</p>
                    </div>
                    <dl class="item-stats">
                        <div><dt>Respuestas</dt><dd>${it.n}</dd></div>
                        <div><dt>Dificultad p</dt><dd>${fmt(it.p)}</dd></div>
                        <div><dt>Discriminación D</dt><dd>${fmt(it.D)}</dd></div>
                        <div><dt>Ítem-resto r</dt><dd>${fmt(it.r)}</dd></div>
                    </dl>
                </header>
                ${it.flags.length ? `<ul class="flags">${it.flags.map(f => `
                    <li class="flag flag-${f.level}"><span aria-hidden="true">${FLAG_ICON[f.level]}</span> <strong>${FLAG_LABEL[f.level]}:</strong> ${esc(f.text)}</li>`).join('')}</ul>` : '<p class="flag flag-ok-text">✔ Sin alertas</p>'}
                <figure class="dist">
                    <figcaption>Opciones elegidas (${it.n} respuestas)</figcaption>
                    ${it.options.map(o => `
                    <div class="dist-row${o.correct ? ' is-correct' : ''}" tabindex="0"
                         data-tip="${esc(`Opción ${o.key}${o.correct ? ' (correcta)' : ''}: ${o.count} estudiante(s), ${pct(o.count / it.n)}${result.groupsValid ? ` · grupo superior: ${o.upper} · grupo inferior: ${o.lower}` : ''}${o.text ? ` · ${o.text}` : ''}`)}">
                        <span class="dist-key">${esc(o.key)}</span>
                        <span class="dist-track"><span class="dist-bar" style="width: ${(o.count / max) * 100}%"></span></span>
                        <span class="dist-val">${pct(o.count / it.n)}${o.correct ? ' <strong class="dist-correct">✔ correcta</strong>' : ''}</span>
                    </div>`).join('')}
                </figure>
            </article>`;
        }).join('');
        // Enunciados con fórmulas entre $...$ (p. ej. «Calcule la inversa $A^{-1}$:»)
        if (typeof ExamUtils !== 'undefined') container.querySelectorAll('.item-q').forEach(el => ExamUtils.renderMath(el));
    }

    function renderCategories() {
        document.getElementById('cats-table').innerHTML = `
            <caption class="visually-hidden">Aciertos por categoría</caption>
            <thead><tr><th scope="col">Categoría</th><th scope="col">Preguntas</th><th scope="col">Respuestas</th><th scope="col">Aciertos</th></tr></thead>
            <tbody>${result.categories.map(c => `
                <tr><th scope="row">${esc(c.category || '(sin categoría)')}</th><td>${c.items}</td><td>${c.n}</td>
                <td><span class="cell-bar"><span style="width:${(c.p || 0) * 100}%"></span></span> ${pct(c.p)}</td></tr>`).join('')}
            </tbody>`;
    }

    function renderStudents() {
        document.getElementById('students-table').innerHTML = `
            <caption class="visually-hidden">Nota de cada envío</caption>
            <thead><tr><th scope="col">Estudiante</th><th scope="col">ID</th><th scope="col">Aciertos</th><th scope="col">Nota</th></tr></thead>
            <tbody>${result.students.map(s => `
                <tr><th scope="row">${esc(s.name || '—')}</th><td>${esc(s.id)}</td><td>${s.correct} / ${s.n}</td><td>${pct(s.score)}</td></tr>`).join('')}
            </tbody>`;
    }

    // ---------- Tooltip (ratón y teclado) ----------
    const tip = document.getElementById('viz-tooltip');
    const showTip = (el, x, y) => {
        tip.textContent = el.dataset.tip;
        tip.hidden = false;
        const r = tip.getBoundingClientRect();
        tip.style.left = `${Math.min(x + 12, window.innerWidth - r.width - 8)}px`;
        tip.style.top = `${y + 14}px`;
    };
    document.addEventListener('mousemove', e => {
        const el = e.target.closest('[data-tip]');
        if (el) showTip(el, e.clientX, e.clientY); else tip.hidden = true;
    });
    document.addEventListener('focusin', e => {
        const el = e.target.closest('[data-tip]');
        if (!el) return;
        const r = el.getBoundingClientRect();
        showTip(el, r.left + 40, r.bottom - 10);
    });
    document.addEventListener('focusout', () => { tip.hidden = true; });

    document.getElementById('only-flags').addEventListener('change', () => result && renderItems());
    document.getElementById('exam-select').addEventListener('change', () => result && render());
    document.getElementById('clear-files-btn').addEventListener('click', () => {
        allRows = [];
        result = null;
        loadedFiles.clear();
        document.getElementById('report').classList.add('hidden');
        document.getElementById('exam-filter').classList.add('hidden');
        document.getElementById('clear-files-btn').classList.add('hidden');
        status.textContent = 'Se quitaron los archivos. Puede cargar otros.';
    });
    document.getElementById('sort-by').addEventListener('change', () => result && renderItems());

    // ---------- Exportar ----------
    document.getElementById('export-btn').addEventListener('click', () => {
        if (!result) return;
        const wb = XLSX.utils.book_new();
        const r2 = v => (Number.isFinite(v) ? Math.round(v * 100) / 100 : '');
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(result.items.map(it => ({
            'ID pregunta': it.qid, 'Categoría': it.category, 'Pregunta': it.question,
            'Respuestas': it.n, 'Aciertos': it.nCorrect, 'Dificultad p': r2(it.p),
            'Discriminación D': r2(it.D), 'Ítem-resto r': r2(it.r),
            'Alertas': it.flags.map(f => `${FLAG_LABEL[f.level]}: ${f.text}`).join(' | ')
        }))), 'Preguntas');
        const dist = [];
        result.items.forEach(it => it.options.forEach(o => dist.push({
            'ID pregunta': it.qid, 'Opción': o.key, 'Correcta': o.correct ? 'Sí' : '',
            'Veces elegida': o.count, '%': r2(o.count / it.n), 'Grupo superior': o.upper, 'Grupo inferior': o.lower, 'Texto': o.text
        })));
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(dist), 'Distractores');
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(result.categories.map(c => ({
            'Categoría': c.category, 'Preguntas': c.items, 'Respuestas': c.n, 'Aciertos %': r2(c.p)
        }))), 'Categorías');
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(result.students.map(s => ({
            'Estudiante': s.name, 'ID': s.id, 'Aciertos': s.correct, 'Preguntas': s.n, 'Nota %': r2(s.score)
        }))), 'Estudiantes');
        // El nombre indica qué evaluación se analizó (si los archivos traían varias)
        const exam = document.getElementById('exam-filter').classList.contains('hidden') ? '' : document.getElementById('exam-select').value;
        const tag = exam === '*' ? '_todas' : exam ? `_${exam.replace(/[^\w-]+/g, '_')}` : '';
        XLSX.writeFile(wb, `Analisis_de_preguntas${tag}.xlsx`);
    });

    // Para pruebas automáticas
    window.__analysisLoad = loadFiles;
})();
