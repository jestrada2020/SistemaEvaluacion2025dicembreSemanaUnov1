/*
 * Preguntas paramétricas: cada estudiante recibe sus propios números.
 *
 * Una pregunta es paramétrica si tiene el campo `params`. Ejemplo:
 *
 *   {
 *     question: 'Derive la función:',
 *     params: {
 *       a: { min: 2, max: 9 },              // entero al azar entre 2 y 9
 *       n: { min: 2, max: 6 },
 *       k: [0.5, 1.5, 2.5],                 // uno de la lista
 *       m: '= a * n'                        // derivado de otros (se calcula)
 *     },
 *     where: 'a != n',                      // condición opcional (se vuelve a sortear si no se cumple)
 *     latex: '\\frac{d}{dx}\\left({{a}}x^{ {{n}} }\\right)',
 *     options: [
 *       { latex: '{{m}}x^{ {{n - 1}} }' },  // {{expresión}} se reemplaza por su valor
 *       { latex: '{{a}}x^{ {{n - 1}} }' },
 *       ...
 *     ],
 *     correct: 0
 *   }
 *
 * Expresiones permitidas en {{ }}, `where` y parámetros derivados:
 *   números, parámetros, + - * / ^ %, paréntesis, comparaciones (< > <= >= == !=), && || !,
 *   funciones: round(x, d), floor, ceil, abs, sqrt, min, max, gcd, lcm,
 *   signed(x)  -> "+ 3" o "- 3"  (para escribir "x + 3" / "x - 3")
 *   coef(x)    -> "" si x = 1, "-" si x = -1, si no el número (para "3x", "x", "-x")
 *   frac(p, q) -> fracción simplificada en LaTeX: \frac{p}{q}, o entero si se puede
 *   y la constante pi.
 * NO se usa eval: el evaluador solo entiende lo anterior.
 *
 * Si con los números sorteados dos opciones quedan iguales, se vuelve a sortear.
 * Funciona en el navegador (window.Parametric) y en Node (require).
 */
(function (root) {
    'use strict';

    // Generador pseudoaleatorio con semilla (mulberry32): misma semilla => mismos números
    function rng(seed) {
        let a = (seed >>> 0) || 0x9e3779b9;
        return function () {
            a = (a + 0x6D2B79F5) >>> 0;
            let t = a;
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }

    function randomSeed() {
        if (root.crypto && root.crypto.getRandomValues) {
            return root.crypto.getRandomValues(new Uint32Array(1))[0];
        }
        return Math.floor(Math.random() * 4294967296);
    }

    // ---------- Evaluador de expresiones (sin eval) ----------
    function tokenize(src) {
        const tokens = [];
        let i = 0;
        while (i < src.length) {
            const c = src[i];
            if (/\s/.test(c)) { i++; continue; }
            if (/[0-9.]/.test(c)) {
                let j = i;
                while (j < src.length && /[0-9.]/.test(src[j])) j++;
                if (src[j] === 'e' && /[-+0-9]/.test(src[j + 1] || '')) {
                    j += 2;
                    while (j < src.length && /[0-9]/.test(src[j])) j++;
                }
                tokens.push({ t: 'num', v: parseFloat(src.slice(i, j)) });
                i = j;
                continue;
            }
            if (/[A-Za-z_]/.test(c)) {
                let j = i;
                while (j < src.length && /[A-Za-z_0-9]/.test(src[j])) j++;
                tokens.push({ t: 'id', v: src.slice(i, j) });
                i = j;
                continue;
            }
            const two = src.slice(i, i + 2);
            if (['<=', '>=', '==', '!=', '&&', '||'].includes(two)) {
                tokens.push({ t: 'op', v: two });
                i += 2;
                continue;
            }
            if ('+-*/^%(),<>!'.includes(c)) {
                tokens.push({ t: 'op', v: c });
                i++;
                continue;
            }
            throw new Error(`Carácter no permitido en la expresión: «${c}»`);
        }
        return tokens;
    }

    const gcd = (a, b) => {
        a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b));
        while (b) [a, b] = [b, a % b];
        return a;
    };

    const FUNCTIONS = {
        round: (x, d = 0) => { const f = 10 ** d; return Math.round(x * f) / f; },
        floor: Math.floor,
        ceil: Math.ceil,
        abs: Math.abs,
        sqrt: Math.sqrt,
        min: Math.min,
        max: Math.max,
        gcd,
        lcm: (a, b) => Math.abs(a * b) / gcd(a, b),
        signed: (x) => (x < 0 ? `- ${fmt(-x)}` : `+ ${fmt(x)}`),
        coef: (x) => (x === 1 ? '' : x === -1 ? '-' : fmt(x)),
        frac: (p, q) => {
            if (q === 0) throw new Error('frac: denominador 0');
            const g = gcd(p, q) || 1;
            let n = Math.round(p / g), d = Math.round(q / g);
            if (d < 0) { n = -n; d = -d; }
            if (d === 1) return String(n);
            return `${n < 0 ? '-' : ''}\\frac{${Math.abs(n)}}{${d}}`;
        }
    };

    function evaluate(src, vars) {
        const tokens = tokenize(String(src));
        let pos = 0;
        const peek = () => tokens[pos];
        const eat = (v) => {
            const tk = tokens[pos];
            if (!tk || tk.v !== v) throw new Error(`Se esperaba «${v}» en «${src}»`);
            pos++;
        };
        const num = (x) => {
            if (typeof x !== 'number') throw new Error(`Se esperaba un número en «${src}»`);
            return x;
        };

        function primary() {
            const tk = tokens[pos++];
            if (!tk) throw new Error(`Expresión incompleta: «${src}»`);
            if (tk.t === 'num') return tk.v;
            if (tk.t === 'id') {
                if (peek() && peek().v === '(') {
                    const fn = FUNCTIONS[tk.v];
                    if (!fn) throw new Error(`Función desconocida: ${tk.v}`);
                    eat('(');
                    const args = [];
                    if (peek() && peek().v !== ')') {
                        args.push(or());
                        while (peek() && peek().v === ',') { pos++; args.push(or()); }
                    }
                    eat(')');
                    return fn(...args);
                }
                if (tk.v === 'pi') return Math.PI;
                if (!Object.prototype.hasOwnProperty.call(vars, tk.v)) throw new Error(`Parámetro desconocido: ${tk.v}`);
                return vars[tk.v];
            }
            if (tk.v === '(') {
                const v = or();
                eat(')');
                return v;
            }
            if (tk.v === '-') return -num(power());
            if (tk.v === '+') return num(power());
            if (tk.v === '!') return !primary();
            throw new Error(`Símbolo inesperado «${tk.v}» en «${src}»`);
        }
        function power() {
            const base = primary();
            if (peek() && peek().v === '^') { pos++; return num(base) ** num(unary()); }
            return base;
        }
        function unary() {
            if (peek() && peek().v === '-') { pos++; return -num(unary()); }
            return power();
        }
        function mul() {
            let v = unary();
            while (peek() && ['*', '/', '%'].includes(peek().v)) {
                const op = tokens[pos++].v;
                const r = num(unary());
                v = op === '*' ? num(v) * r : op === '/' ? num(v) / r : num(v) % r;
            }
            return v;
        }
        function add() {
            let v = mul();
            while (peek() && ['+', '-'].includes(peek().v)) {
                const op = tokens[pos++].v;
                const r = num(mul());
                v = op === '+' ? num(v) + r : num(v) - r;
            }
            return v;
        }
        function cmp() {
            let v = add();
            while (peek() && ['<', '>', '<=', '>=', '==', '!='].includes(peek().v)) {
                const op = tokens[pos++].v;
                const r = add();
                const eq = Math.abs(v - r) < 1e-9;
                v = op === '<' ? v < r : op === '>' ? v > r : op === '<=' ? v <= r || eq
                    : op === '>=' ? v >= r || eq : op === '==' ? eq : !eq;
            }
            return v;
        }
        function and() {
            let v = cmp();
            while (peek() && peek().v === '&&') { pos++; const r = cmp(); v = v && r; }
            return v;
        }
        function or() {
            let v = and();
            while (peek() && peek().v === '||') { pos++; const r = and(); v = v || r; }
            return v;
        }

        const result = or();
        if (pos !== tokens.length) throw new Error(`Sobra texto en la expresión «${src}»`);
        return result;
    }

    // Números "limpios": 3, 2.5, 0.3333 (máx. 4 decimales)
    function fmt(v) {
        if (typeof v === 'string') return v;
        if (typeof v === 'boolean') return v ? '1' : '0';
        if (!isFinite(v)) throw new Error('Resultado no finito (¿división por cero?)');
        const r = Math.round(v * 10000) / 10000;
        return String(Object.is(r, -0) ? 0 : r);
    }

    // dec: separador decimal del resultado. '.' para GeoGebra (comandos y verificación),
    // '{,}' dentro de fórmulas (KaTeX no deja espacio tras la coma) y ',' en texto normal.
    function fill(text, vars, dec = '.') {
        if (typeof text !== 'string') return text;
        return text.replace(/\{\{([^{}]+)\}\}/g, (_, expr) => {
            const s = fmt(evaluate(expr, vars));
            return dec === '.' ? s : s.replace(/(\d)\.(\d)/g, (m, a, b) => a + dec + b);
        });
    }

    // Texto con fórmulas entre $...$ (enunciado, pista): coma en el texto, {,} en las fórmulas
    function fillText(text, vars) {
        if (typeof text !== 'string') return text;
        return text.split(/(\$[^$]*\$)/).map((part, i) => fill(part, vars, i % 2 ? '{,}' : ',')).join('');
    }

    function sampleParams(spec, random) {
        const vars = {};
        const derived = [];
        Object.entries(spec).forEach(([name, def]) => {
            if (Array.isArray(def)) {
                vars[name] = def[Math.floor(random() * def.length)];
            } else if (typeof def === 'string' && def.trim().startsWith('=')) {
                derived.push([name, def.trim().slice(1)]);
            } else if (def && typeof def === 'object') {
                const step = def.step || 1;
                const count = Math.floor((def.max - def.min) / step + 1e-9) + 1;
                let v, guard = 0;
                do {
                    v = Math.round((def.min + step * Math.floor(random() * count)) * 1e6) / 1e6;
                } while (Array.isArray(def.exclude) && def.exclude.includes(v) && ++guard < 100);
                vars[name] = v;
            } else if (typeof def === 'number') {
                vars[name] = def;
            } else {
                throw new Error(`Parámetro «${name}» con formato no válido`);
            }
        });
        derived.forEach(([name, expr]) => { vars[name] = evaluate(expr, vars); });
        return vars;
    }

    const isParametric = (q) => Boolean(q && q.params && typeof q.params === 'object');

    // Devuelve una copia concreta de la pregunta (sin `params`) con los números sorteados
    function instantiate(question, seed) {
        if (!isParametric(question)) return question;
        const base = (seed === undefined || seed === null) ? randomSeed() : seed;
        let lastError = null;
        for (let attempt = 0; attempt < 60; attempt++) {
            const random = rng((base + attempt * 7919) >>> 0);
            try {
                const vars = sampleParams(question.params, random);
                if (question.where && !evaluate(question.where, vars)) continue;
                const options = (question.options || []).map(o => ({ ...o, latex: fill(o.latex, vars, '{,}') }));
                const keys = options.map(o => String(o.latex).replace(/\s+/g, ''));
                if (new Set(keys).size !== keys.length) continue; // dos opciones iguales: re-sortear
                const { params, where, ...rest } = question;
                const instance = {
                    ...rest,
                    question: fillText(question.question, vars),
                    latex: fill(question.latex, vars, '{,}'),
                    hint: fillText(question.hint, vars),
                    options,
                    paramValues: vars
                };
                // Tareas GeoGebra paramétricas: comandos y verificación con los mismos números
                if (Array.isArray(question.geogebraCommands)) {
                    instance.geogebraCommands = question.geogebraCommands.map(c => fill(c, vars));
                }
                if (question.geogebraCheck) {
                    instance.geogebraCheck = {
                        ...question.geogebraCheck,
                        condition: fill(question.geogebraCheck.condition, vars),
                        expected: fill(question.geogebraCheck.expected, vars)
                    };
                }
                return instance;
            } catch (e) {
                lastError = e;
            }
        }
        throw new Error(`No se pudo generar la pregunta paramétrica${question.id ? ' ' + question.id : ''}: ${lastError ? lastError.message : 'las opciones se repiten o la condición "where" casi nunca se cumple'}`);
    }

    const Parametric = { rng, randomSeed, evaluate, fill, fmt, sampleParams, isParametric, instantiate };
    root.Parametric = Parametric;
    if (typeof module !== 'undefined' && module.exports) module.exports = Parametric;
})(typeof window !== 'undefined' ? window : globalThis);
