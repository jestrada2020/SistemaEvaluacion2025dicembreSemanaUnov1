// Utilidades compartidas (también las usa EvaluationGenerator.js)
const ExamUtils = {
    // Evita que texto escrito por el usuario (nombre, ID) se interprete como HTML
    escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },

    // Fórmula lista para innerHTML y KaTeX: vacía → nada (antes quedaba «$$»); se escapan
    // <, > y & para que el navegador no los tome como etiquetas. display: tamaño completo.
    math(latex, display = false) {
        const tex = String(latex ?? '').trim();
        if (!tex) return '';
        return `$${display ? '\\displaystyle ' : ''}${ExamUtils.escapeHtml(tex)}$`;
    },

    // Número para mostrar con coma decimal (2,5); los datos exportados siguen siendo números
    num(value, digits = 2) {
        return Number(value || 0).toLocaleString('es-CO', { maximumFractionDigits: digits });
    },

    // Barajado uniforme (Fisher-Yates). sort(() => 0.5 - Math.random()) está sesgado.
    shuffle(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    },

    // Devuelve una copia de la pregunta con las opciones barajadas y el índice
    // de la respuesta correcta reasignado. En el banco casi todas las respuestas
    // correctas están en la opción a), así que sin esto la evaluación es trivial.
    shuffleOptions(question) {
        if (!question || !Array.isArray(question.options)) return question;
        const order = ExamUtils.shuffle(question.options.map((_, i) => i));
        return {
            ...question,
            // orig = posición de la opción en el banco (permite analizar distractores
            // aunque cada estudiante vea las opciones en distinto orden)
            options: order.map(i => ({ ...question.options[i], orig: question.options[i].orig ?? i })),
            correct: order.indexOf(question.correct)
        };
    },

    // Pregunta que se responde manipulando una construcción de GeoGebra
    isGeoGebraTask(question) {
        return Boolean(question && question.answerType === 'geogebra');
    },

    // Calculadora adecuada para el ejercicio. Las construcciones propias conservan
    // su material; aquí solo se elige entre las aplicaciones genéricas de GeoGebra.
    getGeoGebraAppName(question) {
        const configured = question && question.geogebraAppName;
        if (configured && configured !== 'classic') return configured;

        const category = (question && question.categoryKey) || '';
        const text = `${(question && question.question) || ''} ${(question && question.latex) || ''}`.toLowerCase();

        if (category === 'calculomultivariado' || category === 'superficies_3d') return '3d';
        if (category === 'campos_vectoriales') {
            return /r\^?\{?3|x\s*,\s*y\s*,\s*z|espacio|superficie|s[oó]lido|flujo|rotacional|divergencia/.test(text) ? '3d' : 'cas';
        }
        if (category === 'estadistica_inferencial' ||
            (category === 'estadistica_probabilistica' && /distribuci|binomial|normal|poisson/.test(text))) {
            return 'probability';
        }
        if (/^geometria($|_)/.test(category)) return 'geometry';
        if ((category === 'calculodiferencial' || category === 'calculointegral') &&
            /grafic|gr[aá]fica|[aá]rea entre curvas|regi[oó]n.*curva/.test(text)) {
            return 'graphing';
        }
        return 'cas';
    },

    getGeoGebraAppLabel(question) {
        return {
            cas: 'CAS',
            classic: 'GeoGebra Clásico',
            graphing: 'Calculadora gráfica',
            '3d': 'Calculadora 3D',
            geometry: 'Geometría',
            probability: 'Probabilidad'
        }[ExamUtils.getGeoGebraAppName(question)] || 'GeoGebra';
    },

    // Respuesta registrada: índice de opción o resultado de una tarea GeoGebra
    isAnswered(value) {
        return Number.isInteger(value) || Boolean(value && value.ggb);
    },

    // Números al azar de una pregunta paramétrica (si js/parametric.js está cargado)
    instantiate(question, seed) {
        return (window.Parametric && window.Parametric.isParametric(question))
            ? window.Parametric.instantiate(question, seed)
            : question;
    },

    renderMath(element) {
        if (!element) return;
        if (typeof renderMathInElement === 'undefined') {
            console.warn('KaTeX no está cargado.');
            return;
        }
        renderMathInElement(element, {
            delimiters: [
                { left: '\\[', right: '\\]', display: true },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false
        });
        ExamUtils.allowTextWrap(element);
    },

    // KaTeX convierte los espacios de \text{...} en espacios no separables, así que un
    // enunciado largo no puede partirse y se sale del margen (pantalla y PDF). En los
    // enunciados con texto largo se cambian por espacios normales.
    allowTextWrap(element) {
        element.querySelectorAll('.latex-display .katex-html .mord.text').forEach(span => {
            if ((span.textContent || '').length < 30) return;
            const walker = document.createTreeWalker(span, NodeFilter.SHOW_TEXT);
            for (let node = walker.nextNode(); node; node = walker.nextNode()) {
                if (node.nodeValue.includes('\u00a0')) node.nodeValue = node.nodeValue.replace(/\u00a0/g, ' ');
            }
        });
    },

    percentage(points, max) {
        return max > 0 ? (points / max) * 100 : 0;
    },

    // ---- Codificación del paquete del examen ----
    // NO es cifrado fuerte: solo evita que las respuestas se lean a simple vista
    // en el almacenamiento del navegador. Toda página estática puede ser
    // inspeccionada por alguien con conocimientos de programación.
    ENCODING_PREFIX: 'EVX2:',

    encodePayload(obj) {
        const data = new TextEncoder().encode(JSON.stringify(obj));
        const key = crypto.getRandomValues(new Uint8Array(16));
        const out = new Uint8Array(key.length + data.length);
        out.set(key, 0);
        for (let i = 0; i < data.length; i++) out[key.length + i] = data[i] ^ key[i % key.length] ^ (i & 0xff);
        let bin = '';
        for (let i = 0; i < out.length; i += 0x8000) bin += String.fromCharCode.apply(null, out.subarray(i, i + 0x8000));
        return ExamUtils.ENCODING_PREFIX + btoa(bin);
    },

    decodePayload(text) {
        if (typeof text !== 'string' || !text.startsWith(ExamUtils.ENCODING_PREFIX)) return null;
        const bin = atob(text.slice(ExamUtils.ENCODING_PREFIX.length));
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const key = bytes.subarray(0, 16);
        const data = new Uint8Array(bytes.length - 16);
        for (let i = 0; i < data.length; i++) data[i] = bytes[16 + i] ^ key[i % 16] ^ (i & 0xff);
        return JSON.parse(new TextDecoder().decode(data));
    }
};
window.ExamUtils = ExamUtils;

// ---- Envío de resultados a Google Sheets (Apps Script) ----
const ResultsSync = {
    PENDING_KEY: 'pending_results',

    config() {
        return window.APP_CONFIG || {};
    },

    isEnabled() {
        const url = this.config().resultsEndpoint;
        return typeof url === 'string' && /^https:\/\/script\.google(usercontent)?\.com\//.test(url.trim());
    },

    async post(record) {
        // text/plain + no-cors: Apps Script no permite CORS con JSON; la respuesta no
        // se puede leer, pero el fetch solo falla si no hay conexión.
        await fetch(this.config().resultsEndpoint.trim(), {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ ...record, token: this.config().resultsToken || '' })
        });
    },

    getPending() {
        try {
            const list = JSON.parse(localStorage.getItem(this.PENDING_KEY) || '[]');
            return Array.isArray(list) ? list : [];
        } catch (e) {
            return [];
        }
    },

    setPending(list) {
        try {
            if (list.length) localStorage.setItem(this.PENDING_KEY, JSON.stringify(list));
            else localStorage.removeItem(this.PENDING_KEY);
        } catch (e) {
            console.warn('No se pudo guardar la cola de envíos', e);
        }
    },

    // Devuelve { status: 'sent' | 'queued' | 'disabled' }
    async submit(record) {
        if (!this.isEnabled()) return { status: 'disabled' };
        try {
            await this.post(record);
            return { status: 'sent' };
        } catch (e) {
            console.warn('Sin conexión; el resultado queda en cola', e);
            const list = this.getPending();
            if (!list.some(r => r.submissionId === record.submissionId)) list.push(record);
            this.setPending(list);
            return { status: 'queued' };
        }
    },

    // Reintenta los envíos pendientes. Devuelve cuántos quedan.
    async retryPending() {
        if (!this.isEnabled()) return this.getPending().length;
        const remaining = [];
        for (const record of this.getPending()) {
            try {
                await this.post(record);
            } catch (e) {
                remaining.push(record);
            }
        }
        this.setPending(remaining);
        return remaining.length;
    }
};
window.ResultsSync = ResultsSync;

// La clase se crea dentro de una función para que la clave de respuestas quede
// en una variable privada (no accesible como examSystem.algo ni como global).
const ExamSystem = (() => {
    const answerKeys = new WeakMap();
    const SESSION_KEY = 'examSession';

    class ExamSystem {
        constructor() {
            this.categories = ExamSystem.loadCategories();

            this.selectedCategories = new Set();
            this.currentQuestions = [];
            this.currentIndex = 0;
            this.answers = {};
            this.results = {
                correctAnswers: 0,
                totalQuestions: 0,
                totalPoints: 0,
                maxPoints: 0,
                details: []
            };
            this.userInfo = null;
            this.examInProgress = false;
            this.isCustomExam = false;
            this.examMeta = { examId: '', title: 'Evaluación' };
            // En práctica se muestran pistas y respuestas; en la evaluación en línea
            // lo decide el docente desde el generador.
            this.settings = { showHints: true, showCorrect: true };
            this.startedAt = null;
            answerKeys.set(this, []);

            // GeoGebra
            this.defaultGgbHeight = 450;
            this.ggbHeight = this.defaultGgbHeight;
            this.ggbApi = null;
            this.ggbContainerId = null;

            this.initializeUI();
        }

        // Categorías para el modo práctica. Se leen del banco generado (questions.js),
        // el mismo que usa el generador; así index.html no carga los 24 módulos.
        // Si una página carga los módulos directamente, se usan esos.
        static loadCategories() {
            const bank = window.allQuestions;
            if (bank && bank.categories && Array.isArray(bank.questions)) {
                const categories = {};
                Object.entries(bank.categories).forEach(([key, meta]) => {
                    categories[key] = { name: meta.name, description: meta.description, questions: [] };
                });
                bank.questions.forEach(q => {
                    if (categories[q.categoryKey]) categories[q.categoryKey].questions.push(q);
                });
                return categories;
            }
            return window.examCategories || {};
        }

        initializeUI() {
            this.renderCategories();
            this.bindEvents();
            this.updateSelectionSummary();
        }

        // Preguntas disponibles en las categorías elegidas (sin las desactivadas)
        availableCount() {
            let n = 0;
            this.selectedCategories.forEach(id => {
                n += ((this.categories[id] && this.categories[id].questions) || []).filter(q => !q.disabled).length;
            });
            return n;
        }

        updateSelectionSummary() {
            const el = document.getElementById('practice-summary');
            if (!el) return;
            const k = this.selectedCategories.size;
            el.textContent = k === 0
                ? 'Ninguna categoría seleccionada.'
                : `${k} categoría${k === 1 ? '' : 's'} seleccionada${k === 1 ? '' : 's'} · ${this.availableCount()} preguntas disponibles.`;
        }

        setAllCategories(selected) {
            document.querySelectorAll('#categories-container .select-btn').forEach(btn => {
                if (this.selectedCategories.has(btn.dataset.id) !== selected) this.toggleCategory(btn.dataset.id, btn);
            });
        }

        renderCategories() {
            const container = document.getElementById('categories-container');
            if (!container) return;
            container.innerHTML = '';
            Object.entries(this.categories).forEach(([id, category]) => {
                const card = document.createElement('div');
                card.className = 'category-card';
                const total = (category.questions || []).filter(q => !q.disabled).length;
                card.innerHTML = `
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                    <p class="category-count">${total} preguntas</p>
                    <button type="button" class="select-btn" data-id="${id}" aria-pressed="false"
                        aria-label="Seleccionar ${ExamUtils.escapeHtml(category.name)}">Seleccionar</button>
                `;
                container.appendChild(card);
            });
        }

        bindEvents() {
            // Teclado: Enter sobre una opción avanza (o finaliza en la última pregunta).
            // Las flechas ya cambian de opción por ser botones de radio.
            document.addEventListener('keydown', (e) => {
                if (e.key !== 'Enter' || !this.examInProgress) return;
                if (!e.target.matches || !e.target.matches('input[name="answer"]')) return;
                e.preventDefault();
                const last = this.currentIndex === this.currentQuestions.length - 1;
                if (last) this.finishExam(); else this.nextQuestion();
            });

            const catContainer = document.getElementById('categories-container');
            if (catContainer) {
                catContainer.addEventListener('click', (e) => {
                    if (e.target.classList.contains('select-btn')) {
                        this.toggleCategory(e.target.dataset.id, e.target);
                    }
                });
            }

            document.getElementById('select-all-cats')?.addEventListener('click', () => this.setAllCategories(true));
            document.getElementById('clear-cats')?.addEventListener('click', () => this.setAllCategories(false));

            const startBtn = document.getElementById('start-button');
            if (startBtn) startBtn.addEventListener('click', () => this.startExam());

            const nextBtn = document.getElementById('next-btn');
            if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());

            const prevBtn = document.getElementById('prev-btn');
            if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());

            const finishBtn = document.getElementById('finish-btn');
            if (finishBtn) finishBtn.addEventListener('click', () => this.finishExam());

            // Guardar la respuesta en cuanto se marca (no solo al pulsar "Siguiente")
            const questionContainer = document.getElementById('question-container');
            if (questionContainer) {
                questionContainer.addEventListener('change', (e) => {
                    if (e.target.name === 'answer') {
                        this.answers[this.currentIndex] = parseInt(e.target.value, 10);
                        this.updateProgress();
                        this.saveSession();
                    }
                });
            }

            // Avisar antes de cerrar/recargar con una evaluación sin terminar
            window.addEventListener('beforeunload', (e) => {
                if (this.examInProgress) {
                    e.preventDefault();
                    e.returnValue = '';
                }
            });

            // Ajustar el ancho de GeoGebra cuando cambia el tamaño de la ventana
            let resizeTimer = null;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => this.applyGeoGebraSize(), 200);
            });
        }

        toggleCategory(categoryId, button) {
            if (this.selectedCategories.has(categoryId)) {
                this.selectedCategories.delete(categoryId);
                button.classList.remove('selected');
                button.textContent = 'Seleccionar';
                button.setAttribute('aria-pressed', 'false');
            } else {
                this.selectedCategories.add(categoryId);
                button.classList.add('selected');
                button.textContent = 'Seleccionada';
                button.setAttribute('aria-pressed', 'true');
            }
            button.closest('.category-card')?.classList.toggle('is-selected', this.selectedCategories.has(categoryId));
            this.updateSelectionSummary();
        }

        // Separa la clave de las preguntas: currentQuestions no contiene "correct"
        setQuestions(questionsWithKey) {
            answerKeys.set(this, questionsWithKey.map(q => q.correct));
            this.currentQuestions = questionsWithKey.map(q => {
                const { correct, ...rest } = q;
                return rest;
            });
        }

        // Modo práctica: todas las preguntas de las categorías elegidas, 1 punto cada una
        startExam() {
            if (this.selectedCategories.size === 0) {
                Avisos.mostrar('Seleccione al menos una categoría.', 'warning');
                return;
            }

            // Antes, «abc», 0, -3 o el campo vacío iniciaban en silencio con TODAS las preguntas
            const countInput = document.getElementById('practice-count');
            const raw = countInput ? countInput.value.trim() : '20';
            const requested = Number(raw);
            if (!raw || !Number.isInteger(requested) || requested < 1) {
                Avisos.mostrar('Escriba el número de preguntas: un entero mayor que 0 (por ejemplo, 20).', 'warning');
                countInput?.focus();
                return;
            }

            const questions = [];
            this.selectedCategories.forEach(categoryId => {
                const category = this.categories[categoryId];
                if (category && category.questions) {
                    category.questions.forEach((question, i) => {
                        if (question.disabled) return; // pregunta en revisión
                        questions.push({
                            ...ExamUtils.instantiate(question),
                            id: question.id || `${categoryId}_${i + 1}`,
                            category: category.name || categoryId,
                            points: 1
                        });
                    });
                }
            });

            if (questions.length === 0) {
                Avisos.mostrar('No hay preguntas disponibles en las categorías seleccionadas.', 'warning');
                return;
            }

            const limit = Math.min(requested, questions.length);
            if (requested > questions.length) {
                Avisos.mostrar(`Las categorías elegidas tienen ${questions.length} preguntas: la práctica tendrá ${questions.length}.`, 'info');
            }

            this.isCustomExam = false;
            this.settings = { showHints: true, showCorrect: true, timeLimitMin: 0 };
            this.setQuestions(ExamUtils.shuffle(questions).slice(0, limit).map(q => ExamUtils.shuffleOptions(q)));
            this.startExamSession();
        }

        // Modo evaluación generada (exam.html). Acepta:
        //  - el paquete v2 del generador: { v: 2, examId, title, settings, questions, key }
        //  - el formato antiguo: [{ question, points }]
        startCustomExam(input) {
            let questions = [];

            if (input && input.v === 2 && Array.isArray(input.questions)) {
                this.examMeta = { examId: input.examId || '', title: input.title || 'Evaluación' };
                this.settings = {
                    showHints: Boolean(input.settings && input.settings.showHints),
                    showCorrect: Boolean(input.settings && input.settings.showCorrect),
                    timeLimitMin: Math.max(0, Number(input.settings && input.settings.timeLimitMin) || 0)
                };
                questions = input.questions.map((q, i) => ({ ...q, correct: input.key[i] }));
            } else if (Array.isArray(input)) {
                // Formato antiguo: se mantiene el comportamiento anterior (todo visible)
                this.settings = { showHints: true, showCorrect: true };
                questions = input
                    .filter(q => q && q.question)
                    .map(q => ({ ...q.question, points: Number(q.points) || 0 }));
            }

            // Las tareas de GeoGebra no tienen opciones: se responden en la construcción
            questions = questions.filter(q => q && q.question && (Array.isArray(q.options) || ExamUtils.isGeoGebraTask(q)));
            if (questions.length === 0) {
                Avisos.mostrar('No hay preguntas para iniciar la evaluación.', 'warning');
                return;
            }

            this.isCustomExam = true;
            // Respeta el orden y puntaje del docente, pero baraja las opciones por estudiante
            this.setQuestions(questions.map(q => ExamUtils.shuffleOptions(
                ExamUtils.instantiate({ ...q, points: Number(q.points) || 0 })
            )));
            this.showLoginForm();
        }

        // ---- Recuperación si se recarga la pestaña (sessionStorage, codificado) ----
        saveSession() {
            if (!this.isCustomExam || !this.examInProgress) return;
            try {
                sessionStorage.setItem(SESSION_KEY, ExamUtils.encodePayload({
                    examMeta: this.examMeta,
                    settings: this.settings,
                    questions: this.currentQuestions,
                    key: answerKeys.get(this),
                    answers: this.answers,
                    ggbStates: this.ggbStates || {},
                    index: this.currentIndex,
                    userInfo: this.userInfo,
                    startedAt: this.startedAt
                }));
            } catch (e) {
                console.warn('No se pudo guardar el avance', e);
            }
        }

        clearSession() {
            try { sessionStorage.removeItem(SESSION_KEY); } catch (e) { /* sin acceso */ }
        }

        // Devuelve true si había una evaluación en curso y se restauró
        restoreSession() {
            let state = null;
            try {
                state = ExamUtils.decodePayload(sessionStorage.getItem(SESSION_KEY));
            } catch (e) {
                state = null;
            }
            if (!state || !Array.isArray(state.questions) || !state.userInfo) return false;

            this.isCustomExam = true;
            this.examMeta = state.examMeta || this.examMeta;
            this.settings = state.settings || this.settings;
            this.currentQuestions = state.questions;
            answerKeys.set(this, state.key || []);
            this.userInfo = state.userInfo;
            this.startedAt = state.startedAt || new Date().toISOString();

            document.getElementById('setup-section')?.classList.add('hidden');
            document.getElementById('generator-section')?.classList.add('hidden');
            document.getElementById('exam-section').classList.remove('hidden');
            document.getElementById('results-section').classList.add('hidden');
            document.querySelector('.nav-buttons')?.classList.remove('hidden');

            this.answers = state.answers || {};
            this.ggbStates = state.ggbStates || {};
            this.currentIndex = Math.min(Math.max(state.index || 0, 0), this.currentQuestions.length - 1);
            this.examInProgress = true;
            this.displayCurrentQuestion();
            this.startTimer();
            return true;
        }

        showLoginForm() {
            const examSection = document.getElementById('exam-section');
            const container = document.getElementById('question-container');
            const navButtons = document.querySelector('.nav-buttons');

            if (!examSection || !container) return;

            if (navButtons) navButtons.classList.add('hidden');

            examSection.classList.remove('hidden');
            document.getElementById('setup-section')?.classList.add('hidden');
            document.getElementById('generator-section')?.classList.add('hidden');

            container.innerHTML = `
                <div class="login-form-container">
                    <h3>Datos del Estudiante</h3>
                    <form id="student-login-form">
                        <div class="login-field">
                            <label for="student-name">Apellidos y Nombres:</label>
                            <input type="text" id="student-name" required autocomplete="name">
                        </div>
                        <div class="login-field">
                            <label for="student-id">ID / Cédula:</label>
                            <input type="text" id="student-id" required inputmode="numeric">
                        </div>
                        <button type="submit" class="nav-btn login-submit">Iniciar Evaluación</button>
                    </form>
                </div>
            `;

            document.getElementById('student-login-form').addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
            document.getElementById('student-name').focus();
        }

        handleLogin() {
            const name = document.getElementById('student-name').value.trim();
            const id = document.getElementById('student-id').value.trim();

            if (!name || !id) {
                Avisos.mostrar('Por favor complete todos los campos.', 'warning');
                return;
            }

            this.userInfo = { name, id };

            const navButtons = document.querySelector('.nav-buttons');
            if (navButtons) navButtons.classList.remove('hidden');

            this.startExamSession();
        }

        startExamSession() {
            document.getElementById('setup-section')?.classList.add('hidden');
            document.getElementById('generator-section')?.classList.add('hidden');
            document.getElementById('exam-section').classList.remove('hidden');
            document.getElementById('results-section').classList.add('hidden');

            this.answers = {};
            this.currentIndex = 0;
            this.examInProgress = true;
            this.startedAt = new Date().toISOString();
            this.saveSession();
            this.displayCurrentQuestion();
            this.startTimer();
        }

        // ---- Temporizador (tiempo límite definido por el docente) ----
        // Se calcula desde startedAt, así que recargar la página no reinicia el reloj.
        startTimer() {
            this.stopTimer();
            const limit = Number(this.settings.timeLimitMin) || 0;
            if (!limit || !this.examInProgress) return;

            let el = document.getElementById('exam-timer');
            if (!el) {
                el = document.createElement('div');
                el.id = 'exam-timer';
                el.className = 'exam-timer';
                el.setAttribute('role', 'timer');
                const section = document.getElementById('exam-section');
                section.insertBefore(el, document.getElementById('question-container'));
            }
            el.classList.remove('hidden');

            const deadline = new Date(this.startedAt).getTime() + limit * 60000;
            const tick = () => {
                const left = Math.max(0, deadline - Date.now());
                const min = Math.floor(left / 60000);
                const sec = Math.floor((left % 60000) / 1000);
                el.textContent = `Tiempo restante: ${min}:${String(sec).padStart(2, '0')}`;
                el.classList.toggle('exam-timer-warning', left <= 5 * 60000);
                if (left <= 0) {
                    this.stopTimer();
                    this.finishExam(true);
                }
            };
            tick();
            this.timerInterval = setInterval(tick, 1000);
        }

        stopTimer() {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }

        displayCurrentQuestion() {
            const container = document.getElementById('question-container');
            if (!container) return;

            try {
                const question = this.currentQuestions[this.currentIndex];

                if (!question || !question.question) {
                    container.innerHTML = '<div class="error-message">Error: Datos de pregunta inválidos.</div>';
                    return;
                }

                const hasGeoGebra = Boolean(question.geogebraId || question.geogebraAppName);
                this.ggbApi = null;
                this.ggbContainerId = hasGeoGebra ? `geogebra-${this.currentIndex}` : null;

                let questionHTML = `
                    <div class="progress-info" id="progress-info"></div>
                    <div class="question">
                        <h3 id="question-heading" tabindex="-1">${this.currentIndex + 1}. ${ExamUtils.escapeHtml(question.question)}
                            ${question.points ? `<span class="question-points">(${ExamUtils.num(question.points)} ${Number(question.points) === 1 ? 'pt' : 'pts'})</span>` : ''}
                        </h3>
                `;

                // La fórmula va con el enunciado (antes quedaba debajo del recuadro de GeoGebra)
                if (question.latex && question.latex.trim()) {
                    questionHTML += `<div class="latex-display">${ExamUtils.math(question.latex)}</div>`;
                }

                if (question.image) {
                    questionHTML += `
                        <div class="question-image">
                            <img src="${question.image}" alt="Imagen de la pregunta">
                        </div>
                    `;
                }

                // Las apps genéricas (sin construcción propia) se cargan solo si el
                // estudiante las pide; una vez abierta, se mantiene en las siguientes.
                const isTask = ExamUtils.isGeoGebraTask(question);
                const lazyGeneric = hasGeoGebra && !isTask && !question.geogebraId && !this.ggbGenericOpened;
                const appLabel = !question.geogebraId && question.geogebraAppName
                    ? ExamUtils.getGeoGebraAppLabel(question)
                    : '';
                if (lazyGeneric) {
                    questionHTML += `
                        <div class="geogebra-optional">
                            <button type="button" class="geogebra-btn ggb-open-btn" data-ggb="open">Abrir GeoGebra: ${appLabel || 'calculadora'} (opcional)</button>
                        </div>
                    `;
                } else if (hasGeoGebra) {
                    questionHTML += `
                        <div class="geogebra-wrapper">
                            <div class="geogebra-controls">
                                ${appLabel ? `<span class="geogebra-app-label">Aplicación: <strong>${appLabel}</strong></span>` : ''}
                                <button type="button" class="geogebra-btn" data-ggb="decrease">Reducir</button>
                                <button type="button" class="geogebra-btn" data-ggb="increase">Ampliar</button>
                                <button type="button" class="geogebra-btn" data-ggb="reset">Restablecer</button>
                                <button type="button" class="geogebra-btn" data-ggb="popup">Ventana Emergente</button>
                                <span class="size-indicator">Altura: <span id="size-value">${this.ggbHeight}</span>px</span>
                            </div>
                            <div class="geogebra-container" id="${this.ggbContainerId}" style="height: ${this.ggbHeight}px;">
                                <div class="geogebra-loading">Cargando GeoGebra…</div>
                            </div>
                        </div>
                    `;
                }

                const selected = this.answers[this.currentIndex];
                const showHint = this.settings.showHints && question.hint;
                questionHTML += `
                    ${isTask ? `
                    <div class="ggb-task" role="note">
                        <strong>Responda en la construcción de GeoGebra.</strong>
                        Su respuesta se guarda automáticamente al pasar a otra pregunta; puede volver y corregirla.
                        ${selected && selected.ggb ? '<div class="ggb-task-saved">✔ Respuesta guardada.</div>' : ''}
                    </div>` : `
                    <div class="options" role="radiogroup" aria-labelledby="question-heading">
                        ${question.options.map((option, index) => `
                            <label class="option-label">
                                <input type="radio" name="answer" value="${index}" ${selected === index ? 'checked' : ''}>
                                <span class="option-letter">${String.fromCharCode(97 + index)})</span>
                                <span>${ExamUtils.math(option.latex)}</span>
                            </label>
                        `).join('')}
                    </div>`}
                    ${showHint ? `<div class="hint"><em>Pista: ${ExamUtils.escapeHtml(question.hint)}</em></div>` : ''}
                    </div>
                `;

                container.innerHTML = questionHTML;

                if (hasGeoGebra) {
                    container.querySelectorAll('[data-ggb]').forEach(btn => {
                        btn.addEventListener('click', () => {
                            const action = btn.dataset.ggb;
                            if (action === 'open') {
                                // Se dibuja la pregunta con el recuadro de GeoGebra y se carga
                                this.ggbGenericOpened = true;
                                this.displayCurrentQuestion();
                            } else if (action === 'popup') this.openGeoGebraPopup(question.geogebraId, question.geogebraAppName, question);
                            else if (action === 'reset') this.resetGeoGebraSize();
                            else this.resizeGeoGebra(action);
                        });
                    });
                    // Espera breve: si el estudiante pasa de pregunta rápido no se carga
                    // (ni se destruye a medio cargar) un applet que no va a ver.
                    const expectedId = this.ggbContainerId;
                    clearTimeout(this.ggbInjectTimer);
                    if (!lazyGeneric) {
                        this.ggbInjectTimer = setTimeout(() => {
                            if (this.ggbContainerId === expectedId) this.injectGeoGebra(question);
                        }, 400);
                    }
                }

                ExamUtils.renderMath(container);
                this.updateNavigation();
                this.updateProgress();
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Llevar el foco al enunciado para teclado y lectores de pantalla
                // (no en la primera carga, para no robar el foco al formulario)
                if (this.focusQuestionOnRender) document.getElementById('question-heading')?.focus({ preventScroll: true });
                this.focusQuestionOnRender = true;
            } catch (error) {
                console.error('Error displaying question:', error);
                container.innerHTML = `<div class="error-message">Error al mostrar la pregunta: ${ExamUtils.escapeHtml(error.message)}</div>`;
            }
        }

        injectGeoGebra(question, attempt = 0) {
            const containerId = this.ggbContainerId;
            const ggbContainer = document.getElementById(containerId);
            if (!ggbContainer) return;

            // deployggb.js se carga en segundo plano (async): esperar hasta 15 s
            if (typeof GGBApplet === 'undefined') {
                if (attempt < 30) {
                    ggbContainer.innerHTML = '<div class="geogebra-loading">Cargando GeoGebra…</div>';
                    setTimeout(() => {
                        if (this.ggbContainerId === containerId) this.injectGeoGebra(question, attempt + 1);
                    }, 500);
                } else {
                    ggbContainer.innerHTML = '<div class="geogebra-error">GeoGebra no pudo cargarse. Verifique su conexión a internet. Puede responder la pregunta sin la calculadora.</div>';
                }
                return;
            }

            const params = {
                id: 'ggbApplet',
                width: Math.max(ggbContainer.clientWidth, 300),
                height: this.ggbHeight,
                showToolBar: true,
                showAlgebraInput: true,
                showKeyboardOnFocus: false, // el teclado virtual de GeoGebra tapaba la construcción
                showMenuBar: false,
                enableLabelDrags: true,
                enableShiftDragZoom: true,
                enableRightClick: true,
                showResetIcon: true,
                useBrowserForJS: true,
                language: 'es',
                appletOnLoad: (api) => {
                    // Ignorar si el estudiante ya cambió de pregunta mientras cargaba
                    if (this.ggbContainerId !== containerId) return;
                    this.ggbApi = api;
                    this.applyGeoGebraSize();
                    // geogebraState: datos de esta pregunta en una construcción compartida (js/geogebraEstados.js)
                    if (question.geogebraId && window.GeoGebraEstados) {
                        const fallos = GeoGebraEstados.aplicar(api, question);
                        if (fallos.length) console.warn('Estado de GeoGebra: comandos no aplicados', question.id, fallos);
                    }
                    if (ExamUtils.isGeoGebraTask(question)) this.prepareGeoGebraTask(api, question);
                }
            };

            if (question.geogebraId) params.material_id = question.geogebraId;
            else if (question.geogebraAppName) params.appName = ExamUtils.getGeoGebraAppName(question);

            try {
                ggbContainer.innerHTML = '';
                new GGBApplet(params, true).inject(containerId);

                // Si un material propio fue borrado de geogebra.org, el applet nunca carga:
                // ofrecer la calculadora genérica en lugar de dejar la zona en blanco.
                if (params.material_id) {
                    clearTimeout(this.ggbFallbackTimer);
                    this.ggbFallbackTimer = setTimeout(() => {
                        if (this.ggbContainerId !== containerId || this.ggbApi) return;
                        const box = document.getElementById(containerId);
                        if (!box) return;
                        box.innerHTML = `
                            <div class="geogebra-error">
                                <div>La construcción de GeoGebra de esta pregunta no está disponible (puede haber sido eliminada o no hay conexión).
                                <br><button type="button" class="geogebra-btn ggb-fallback-btn">Abrir calculadora GeoGebra</button></div>
                            </div>`;
                        box.querySelector('.ggb-fallback-btn').addEventListener('click', () => {
                            this.injectGeoGebra({ geogebraAppName: 'classic' });
                        });
                    }, 25000);
                }
            } catch (e) {
                console.error('Error al iniciar GeoGebra:', e);
                ggbContainer.innerHTML = '<div class="geogebra-error">No fue posible mostrar la construcción de GeoGebra.</div>';
            }
        }

        // Tarea GeoGebra: restaurar lo que hizo el estudiante o crear la construcción inicial
        prepareGeoGebraTask(api, question) {
            const index = this.currentIndex;
            this.ggbStates = this.ggbStates || {};
            try {
                if (this.ggbStates[index]) {
                    api.setBase64(this.ggbStates[index]);
                } else {
                    (question.geogebraCommands || []).forEach(cmd => api.evalCommand(cmd));
                }
                // Estado inicial: si no cambia, la pregunta cuenta como no respondida
                this.ggbInitialState = this.ggbStates[index] ? null : api.getBase64();
                this.ggbTaskIndex = index;
            } catch (e) {
                console.error('No se pudo preparar la tarea de GeoGebra', e);
            }
        }

        // Lee la respuesta de la tarea antes de salir de la pregunta
        captureGeoGebraAnswer() {
            const question = this.currentQuestions[this.currentIndex];
            const api = this.ggbApi;
            if (!ExamUtils.isGeoGebraTask(question) || !api || this.ggbTaskIndex !== this.currentIndex) return;
            try {
                const state = api.getBase64();
                const changed = this.ggbInitialState === null || state !== this.ggbInitialState;
                const check = question.geogebraCheck || {};
                const name = 'zzVerificacion';
                api.evalCommand(`${name} = ${check.condition}`);
                const ok = api.getValue(name) === 1;
                api.deleteObject(name);
                const report = check.report ? api.getValueString(check.report) : '';
                this.ggbStates = this.ggbStates || {};
                this.ggbStates[this.currentIndex] = state;
                if (changed || ExamUtils.isAnswered(this.answers[this.currentIndex])) {
                    this.answers[this.currentIndex] = { ggb: true, ok, report };
                }
            } catch (e) {
                console.error('No se pudo leer la respuesta en GeoGebra', e);
            }
        }

        applyGeoGebraSize() {
            const container = this.ggbContainerId ? document.getElementById(this.ggbContainerId) : null;
            if (!container) return;
            container.style.height = `${this.ggbHeight}px`;
            const sizeIndicator = document.getElementById('size-value');
            if (sizeIndicator) sizeIndicator.textContent = this.ggbHeight;
            if (this.ggbApi && typeof this.ggbApi.setSize === 'function') {
                this.ggbApi.setSize(container.clientWidth, this.ggbHeight);
            }
        }

        resizeGeoGebra(action) {
            const step = 50;
            this.ggbHeight = action === 'increase'
                ? Math.min(this.ggbHeight + step, 900)
                : Math.max(this.ggbHeight - step, 250);
            this.applyGeoGebraSize();
        }

        resetGeoGebraSize() {
            this.ggbHeight = this.defaultGgbHeight;
            this.applyGeoGebraSize();
        }

        openGeoGebraPopup(geogebraId, geogebraAppName, question = null) {
            const width = 1000;
            const height = 800;
            const left = (screen.width - width) / 2;
            const top = (screen.height - height) / 2;

            const popup = window.open('', 'GeoGebraPopup', `width=${width},height=${height},top=${top},left=${left}`);
            if (!popup) {
                Avisos.mostrar('Por favor, permite las ventanas emergentes para ver el gráfico.', 'warning');
                return;
            }

            // Los valores se pasan como JSON para no romper el script si contienen comillas
            // La ventana emergente muestra la construcción con el mismo estado que la pregunta
            const estado = (question && window.GeoGebraEstados && GeoGebraEstados.comandos(question)) || [];
            const appName = question && !geogebraId ? ExamUtils.getGeoGebraAppName(question) : (geogebraAppName || '');
            const appLabel = question && !geogebraId ? ExamUtils.getGeoGebraAppLabel(question) : '';
            const config = JSON.stringify({ material_id: geogebraId || '', appName, estado })
                .replace(/</g, '\\u003c');

            popup.document.write(`<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>GeoGebra${appLabel ? ` - ${appLabel}` : ''}</title>
    <script src="https://www.geogebra.org/apps/deployggb.js"><\/script>
    <style>
        html, body { margin: 0; padding: 0; overflow: hidden; height: 100%; background: #f0f2f5; font-family: sans-serif; }
        #ggb-element { width: 100%; height: 100%; }
    </style>
</head>
<body>
    <div id="ggb-element"></div>
    <script>
        const cfg = ${config};
        const params = {
            width: window.innerWidth,
            height: window.innerHeight,
            showToolBar: true,
            showAlgebraInput: true,
            showMenuBar: true,
            enableLabelDrags: true,
            enableShiftDragZoom: true,
            enableRightClick: true,
            showResetIcon: true,
            useBrowserForJS: true,
            allowStyleBar: true,
            language: 'es',
            borderColor: '#ffffff'
        };
        if (cfg.material_id) params.material_id = cfg.material_id;
        else if (cfg.appName) params.appName = cfg.appName;
        params.appletOnLoad = function (api) {
            (cfg.estado || []).forEach(function (cmd) { api.evalCommand(cmd); });
        };

        window.onload = function () {
            if (typeof GGBApplet === 'undefined') {
                document.body.innerHTML = '<p style="padding:20px">GeoGebra no pudo cargarse. Verifique su conexión a internet.</p>';
                return;
            }
            new GGBApplet(params, true).inject('ggb-element');
        };
        window.onresize = function () {
            if (window.ggbApplet && window.ggbApplet.setSize) {
                window.ggbApplet.setSize(window.innerWidth, window.innerHeight);
            }
        };
    <\/script>
</body>
</html>`);
            popup.document.close();
        }

        updateNavigation() {
            const last = this.currentQuestions.length - 1;
            document.getElementById('prev-btn').classList.toggle('hidden', this.currentIndex === 0);
            document.getElementById('next-btn').classList.toggle('hidden', this.currentIndex === last);
            // Práctica: «Finalizar» siempre visible (antes había que responder todas para llegar a él)
            document.getElementById('finish-btn').classList.toggle('hidden', this.isCustomExam && this.currentIndex !== last);
        }

        countAnswered() {
            return Object.keys(this.answers).filter(k => ExamUtils.isAnswered(this.answers[k])).length;
        }

        updateProgress() {
            const info = document.getElementById('progress-info');
            if (!info) return;
            const total = this.currentQuestions.length;
            const answered = this.countAnswered();
            const pct = total > 0 ? (answered / total) * 100 : 0;
            info.innerHTML = `
                <div class="progress-text">Pregunta ${this.currentIndex + 1} de ${total} · Respondidas: ${answered}</div>
                <div class="exam-progress-bar" role="progressbar" aria-label="Preguntas respondidas"
                     aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${answered}">
                    <div class="progress-fill" style="width: ${pct}%"></div>
                </div>
            `;
        }

        saveCurrentSelection() {
            if (ExamUtils.isGeoGebraTask(this.currentQuestions[this.currentIndex])) {
                this.captureGeoGebraAnswer();
                return true; // se puede avanzar aunque no se haya modificado
            }
            const selectedAnswer = document.querySelector('input[name="answer"]:checked');
            if (selectedAnswer) {
                this.answers[this.currentIndex] = parseInt(selectedAnswer.value, 10);
            }
            return Boolean(selectedAnswer);
        }

        nextQuestion() {
            if (!this.saveCurrentSelection()) {
                Avisos.mostrar('Marque una respuesta antes de continuar.', 'warning');
                return;
            }
            this.currentIndex++;
            this.saveSession();
            this.displayCurrentQuestion();
        }

        previousQuestion() {
            // Antes se perdía la respuesta marcada en la pregunta actual al retroceder
            this.saveCurrentSelection();
            this.currentIndex--;
            this.saveSession();
            this.displayCurrentQuestion();
        }

        // timeUp = true cuando se acaba el tiempo: se entrega sin preguntar
        async finishExam(timeUp = false) {
            if (!this.examInProgress) return;
            if (this.finishing && !timeUp) return; // ya hay una confirmación abierta (el fin del tiempo sí pasa)
            this.saveCurrentSelection();

            const pending = this.currentQuestions.length - this.countAnswered();
            const tipo = this.isCustomExam ? 'la evaluación' : 'la práctica';
            const message = pending > 0
                ? `Tiene ${pending} pregunta(s) sin responder, que contarán como incorrectas. ¿Desea finalizar ${tipo} de todos modos?`
                : (this.isCustomExam ? '¿Desea finalizar y enviar la evaluación?' : '¿Desea finalizar la práctica y ver los resultados?');
            if (timeUp) {
                Avisos.cerrarConfirmacion(false); // si había una confirmación abierta
                Avisos.mostrar('Se acabó el tiempo. La evaluación se entregó automáticamente con las respuestas marcadas.', 'warning', { duracion: 0 });
            } else {
                this.finishing = true;
                const ok = await Avisos.confirmar(message, { si: 'Finalizar', no: 'Seguir respondiendo' });
                this.finishing = false;
                // El tiempo pudo acabarse mientras se decidía: ya se entregó
                if (!ok || !this.examInProgress) return;
                this.saveCurrentSelection();
            }

            this.stopTimer();
            document.getElementById('exam-timer')?.classList.add('hidden');
            this.examInProgress = false;
            this.clearSession();
            this.calculateResults();
        }

        calculateResults() {
            const key = answerKeys.get(this) || [];
            this.results.correctAnswers = 0;
            this.results.totalQuestions = this.currentQuestions.length;
            this.results.details = [];
            this.results.totalPoints = 0;
            this.results.maxPoints = 0;
            this.finishedAt = new Date().toISOString();

            const letter = i => (Number.isInteger(i) ? `${String.fromCharCode(97 + i)}) ` : '');

            this.currentQuestions.forEach((question, index) => {
                const userAnswer = this.answers[index];
                const correct = key[index];
                const isTask = ExamUtils.isGeoGebraTask(question);
                const isCorrect = isTask
                    ? Boolean(userAnswer && userAnswer.ggb && userAnswer.ok)
                    : Number.isInteger(userAnswer) && userAnswer === correct;
                const points = Number(question.points) || 0;

                this.results.maxPoints += points;
                if (isCorrect) {
                    this.results.correctAnswers++;
                    this.results.totalPoints += points;
                }

                this.results.details.push({
                    questionId: question.id || '',
                    question: question.question,
                    category: question.category || '',
                    isCorrect,
                    isTask,
                    answered: ExamUtils.isAnswered(userAnswer),
                    userAnswer: isTask
                        ? (userAnswer && userAnswer.ggb ? `En GeoGebra${userAnswer.report ? ': ' + userAnswer.report : ''}` : null)
                        : question.options[userAnswer]?.latex ?? null,
                    userLetter: isTask ? '' : letter(userAnswer),
                    userOrig: isTask ? null : question.options[userAnswer]?.orig ?? null,
                    correctAnswer: isTask
                        ? ((question.geogebraCheck && question.geogebraCheck.expected) || 'Según la construcción')
                        : question.options[correct]?.latex ?? '',
                    correctLetter: isTask ? '' : letter(correct),
                    latex: question.latex,
                    hint: question.hint || '',
                    points,
                    earnedPoints: isCorrect ? points : 0
                });
            });

            this.results.totalPoints = Math.round(this.results.totalPoints * 100) / 100;
            this.results.maxPoints = Math.round(this.results.maxPoints * 100) / 100;

            this.saveResultToHistory();
            this.displayResults();
            this.sendResults();
        }

        buildResultRecord() {
            const cfg = window.APP_CONFIG || {};
            const started = this.startedAt ? new Date(this.startedAt) : null;
            const finished = new Date(this.finishedAt);
            return {
                submissionId: `${this.examMeta.examId || 'EV'}-${this.userInfo.id}-${finished.getTime()}`,
                examId: this.examMeta.examId,
                examTitle: this.examMeta.title,
                course: cfg.courseName || '',
                startedAt: this.startedAt,
                finishedAt: this.finishedAt,
                durationMin: started ? Math.round((finished - started) / 600) / 100 : null,
                name: this.userInfo.name,
                id: this.userInfo.id,
                score: this.results.totalPoints,
                maxScore: this.results.maxPoints,
                percentage: Number(ExamUtils.percentage(this.results.totalPoints, this.results.maxPoints).toFixed(2)),
                correctCount: this.results.correctAnswers,
                totalQuestions: this.results.totalQuestions,
                details: this.results.details.map((d, i) => ({
                    n: i + 1,
                    questionId: d.questionId,
                    category: d.category,
                    question: d.question,
                    userAnswer: d.answered ? `${d.userLetter}${d.userAnswer}` : 'No respondida',
                    correctAnswer: `${d.correctLetter}${d.correctAnswer}`,
                    isCorrect: d.isCorrect,
                    points: d.points,
                    earned: d.earnedPoints,
                    // Letra de la opción elegida según el orden del banco (no el barajado)
                    optionOrig: Number.isInteger(d.userOrig) ? String.fromCharCode(97 + d.userOrig) : ''
                }))
            };
        }

        async sendResults() {
            const status = document.getElementById('sync-status');
            if (!this.userInfo || !this.isCustomExam) return;
            if (!ResultsSync.isEnabled()) {
                if (status) status.textContent = '';
                return;
            }
            if (status) {
                status.className = 'sync-status sync-pending';
                status.textContent = 'Enviando resultados al docente…';
            }
            const { status: result } = await ResultsSync.submit(this.buildResultRecord());
            if (!status) return;
            if (result === 'sent') {
                status.className = 'sync-status sync-ok';
                status.textContent = '✔ Resultados enviados al docente.';
            } else {
                status.className = 'sync-status sync-error';
                status.innerHTML = 'Sin conexión: los resultados quedaron guardados en este equipo y se enviarán automáticamente la próxima vez que se abra la aplicación con internet. <button type="button" id="retry-sync-btn" class="nav-btn">Reintentar ahora</button>';
                document.getElementById('retry-sync-btn')?.addEventListener('click', async () => {
                    const left = await ResultsSync.retryPending();
                    status.className = left ? 'sync-status sync-error' : 'sync-status sync-ok';
                    status.textContent = left ? `Aún sin conexión (${left} pendiente(s)).` : '✔ Resultados enviados al docente.';
                });
            }
        }

        saveResultToHistory() {
            if (!this.userInfo) return;

            const now = new Date();
            const historyItem = {
                date: now.toLocaleDateString('es-CO'),
                timestamp: now.toISOString(),
                name: this.userInfo.name,
                id: this.userInfo.id,
                score: this.results.totalPoints,
                maxScore: this.results.maxPoints,
                percentage: ExamUtils.percentage(this.results.totalPoints, this.results.maxPoints).toFixed(2)
            };

            let history = [];
            try {
                const stored = localStorage.getItem('exam_history');
                if (stored) history = JSON.parse(stored);
                if (!Array.isArray(history)) history = [];
            } catch (e) {
                console.warn('Error leyendo el historial', e);
            }

            history.push(historyItem);
            try {
                localStorage.setItem('exam_history', JSON.stringify(history));
            } catch (e) {
                console.warn('No se pudo guardar el historial', e);
                Avisos.mostrar('Advertencia: el navegador no permitió guardar el historial local. Descargue el detalle de resultados.', 'danger');
            }
        }

        displayResults() {
            document.getElementById('exam-section').classList.add('hidden');
            document.getElementById('results-section').classList.remove('hidden');

            const scoreDisplay = document.getElementById('score-display');
            const detailsContainer = document.getElementById('detailed-results');
            const percentage = ExamUtils.percentage(this.results.totalPoints, this.results.maxPoints);
            const esc = ExamUtils.escapeHtml;
            const showCorrect = this.settings.showCorrect;

            const userInfoHtml = this.userInfo ? `
                <div class="user-info-result">
                    <h3>Estudiante: ${esc(this.userInfo.name)}</h3>
                    <p><strong>ID:</strong> ${esc(this.userInfo.id)}</p>
                </div>
            ` : '';

            // Los botones de guardado solo tienen sentido cuando hay datos del estudiante
            const actionsHtml = this.userInfo ? `
                <div id="sync-status" class="sync-status"></div>
                <div class="result-actions">
                    <button type="button" id="save-all-btn" class="action-btn export-btn result-btn-green">Guardar Resultados (Detalle + Histórico)</button>
                    <button type="button" id="save-detail-btn" class="action-btn export-btn result-btn-blue">Descargar Detalle (Solo Este)</button>
                </div>
            ` : '';

            if (scoreDisplay) {
                scoreDisplay.innerHTML = `
                    ${userInfoHtml}
                    <div class="score-summary">
                        <div class="score-big ${percentage >= 60 ? 'score-pass' : 'score-fail'}">
                            ${ExamUtils.num(this.results.totalPoints)} / ${ExamUtils.num(this.results.maxPoints)} Puntos
                        </div>
                        <div class="score-sub">
                            ${this.results.correctAnswers} de ${this.results.totalQuestions} respuestas correctas (${ExamUtils.num(percentage, 1)} %)
                        </div>
                    </div>
                    ${actionsHtml}
                `;
                document.getElementById('save-all-btn')?.addEventListener('click', () => this.saveAllResults());
                document.getElementById('save-detail-btn')?.addEventListener('click', () => this.exportIndividualDetail());
            }

            if (detailsContainer) {
                detailsContainer.innerHTML = this.results.details.map((detail, index) => `
                    <div class="question-result ${detail.isCorrect ? 'correct' : 'incorrect'}">
                        <div class="question-result-header">
                            <strong>Pregunta ${index + 1}</strong>
                            <span>${ExamUtils.num(detail.earnedPoints)} / ${ExamUtils.num(detail.points)} ${Number(detail.points) === 1 ? 'pt' : 'pts'}</span>
                        </div>
                        <p>${ExamUtils.escapeHtml(detail.question)}</p>
                        ${detail.latex && String(detail.latex).trim() ? `<div class="latex-display">${ExamUtils.math(detail.latex)}</div>` : ''}
                        <p>Tu respuesta: ${!detail.answered ? '<em>No respondida</em>'
                            : detail.isTask ? ExamUtils.escapeHtml(detail.userAnswer)
                            : `${detail.userLetter}${ExamUtils.math(detail.userAnswer)}`}</p>
                        ${!detail.isCorrect && showCorrect ? `<p>Respuesta correcta: ${detail.isTask
                            ? ExamUtils.escapeHtml(detail.correctAnswer)
                            : `${detail.correctLetter}${ExamUtils.math(detail.correctAnswer)}`}</p>` : ''}
                        ${!detail.isCorrect && this.settings.showHints && detail.hint ? `<p class="result-hint">Pista: ${ExamUtils.escapeHtml(detail.hint)}</p>` : ''}
                    </div>
                `).join('');
                ExamUtils.renderMath(detailsContainer);
            }

            // En la página con barra lateral el desplazamiento está en #content
            (document.getElementById('content') || window).scrollTo({ top: 0 });
            document.getElementById('results-title')?.focus({ preventScroll: true });
        }

        exportHistoryToExcel() {
            if (typeof XLSX === 'undefined') {
                Avisos.mostrar('La librería SheetJS no está cargada. No se puede exportar.', 'danger');
                return;
            }

            let history = [];
            try {
                const stored = localStorage.getItem('exam_history');
                if (stored) history = JSON.parse(stored);
            } catch (e) {
                console.warn('Error leyendo el historial', e);
            }

            if (!Array.isArray(history) || history.length === 0) {
                Avisos.mostrar('No hay historial de evaluaciones guardado.', 'warning');
                return;
            }

            // Una hoja por fecha
            const grouped = {};
            history.forEach(item => {
                const dateKey = String(item.date || 'sin-fecha').replace(/[\\/?*[\]:]/g, '-');
                if (!grouped[dateKey]) grouped[dateKey] = [];
                grouped[dateKey].push(item);
            });

            const wb = XLSX.utils.book_new();
            Object.keys(grouped).forEach(dateKey => {
                const sheetData = [['Apellidos y Nombres', 'ID / CC', 'NOTA', 'Puntaje Máximo', 'Porcentaje', 'Hora']];
                grouped[dateKey].forEach(entry => {
                    sheetData.push([
                        entry.name,
                        entry.id,
                        entry.score,
                        entry.maxScore,
                        entry.percentage + '%',
                        new Date(entry.timestamp).toLocaleTimeString('es-CO')
                    ]);
                });
                XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(sheetData), dateKey.substring(0, 31));
            });

            XLSX.writeFile(wb, 'Resultados_Evaluacion_Generada.xlsx');
        }

        exportIndividualDetail() {
            if (typeof XLSX === 'undefined') {
                Avisos.mostrar('La librería SheetJS no está cargada. No se puede exportar.', 'danger');
                return;
            }

            const showCorrect = this.settings.showCorrect;
            // ID de evaluación e ID de envío: el análisis los usa para no contar dos veces el mismo
            // envío si también llegó a Google Sheets, y para separar evaluaciones distintas
            const headers = ['Nombre', 'ID', 'Puntaje Total', 'Puntaje Máximo', 'Porcentaje', 'Fecha', 'ID evaluación', 'ID envío'];
            const userData = [
                this.userInfo ? this.userInfo.name : 'Anónimo',
                this.userInfo ? this.userInfo.id : 'N/A',
                this.results.totalPoints,
                this.results.maxPoints,
                `${ExamUtils.percentage(this.results.totalPoints, this.results.maxPoints).toFixed(2)}%`,
                new Date().toLocaleString('es-CO'),
                this.examMeta.examId || '',
                this.userInfo && this.finishedAt ? this.buildResultRecord().submissionId : ''
            ];

            // La respuesta correcta solo se incluye si el docente permitió mostrarla
            const detailsHeaders = ['No.', 'ID pregunta', 'Categoría', 'Pregunta', 'Enunciado (LaTeX)', 'Respuesta Usuario',
                ...(showCorrect ? ['Respuesta Correcta'] : []), 'Resultado', 'Puntos Obtenidos', 'Puntos Posibles', 'Opción (banco)'];
            const detailsData = this.results.details.map((d, i) => [
                i + 1,
                d.questionId,
                d.category,
                d.question,
                d.latex,
                d.answered ? `${d.userLetter}${d.userAnswer}` : 'No respondida',
                ...(showCorrect ? [`${d.correctLetter}${d.correctAnswer}`] : []),
                d.isCorrect ? 'Correcta' : 'Incorrecta',
                d.earnedPoints,
                d.points,
                Number.isInteger(d.userOrig) ? String.fromCharCode(97 + d.userOrig) : ''
            ]);

            const wb = XLSX.utils.book_new();
            const wsSummary = XLSX.utils.aoa_to_sheet([
                ['REPORTE DE EVALUACIÓN'],
                [],
                headers,
                userData,
                [],
                ['DETALLE DE PREGUNTAS'],
                detailsHeaders,
                ...detailsData
            ]);
            XLSX.utils.book_append_sheet(wb, wsSummary, 'Resultados');

            const safe = s => String(s).trim().replace(/\s+/g, '_').replace(/[^\p{L}\p{N}_-]/gu, '');
            const fileName = this.userInfo
                ? `Detalle_${safe(this.userInfo.name)}_${safe(this.userInfo.id)}.xlsx`
                : 'Detalle_Evaluacion.xlsx';
            XLSX.writeFile(wb, fileName);
        }

        async saveAllResults() {
            if (!await Avisos.confirmar('Se descargarán dos archivos:\n1. El reporte detallado de este estudiante.\n2. El histórico general de este navegador.\n\nGuarde cada uno en su carpeta:\n- Detalle -> "RESULTADOS detallados por Evaluacion"\n- Histórico -> "RESULTADOS historicos de evaluaciones"')) {
                return;
            }

            this.exportIndividualDetail();
            // Pequeña pausa para que el navegador acepte la segunda descarga
            setTimeout(() => this.exportHistoryToExcel(), 1000);
        }

        // keepCategories: «Nueva práctica» deja marcadas las mismas categorías
        resetExam(keepCategories = false) {
            const keep = keepCategories ? new Set(this.selectedCategories) : new Set();
            this.selectedCategories.clear();
            this.answers = {};
            this.currentQuestions = [];
            this.currentIndex = 0;
            this.examInProgress = false;
            answerKeys.set(this, []);

            document.querySelectorAll('.select-btn').forEach(btn => {
                btn.classList.remove('selected');
                btn.textContent = 'Seleccionar';
                btn.setAttribute('aria-pressed', 'false');
                btn.closest('.category-card')?.classList.remove('is-selected');
                if (keep.has(btn.dataset.id)) this.toggleCategory(btn.dataset.id, btn);
            });
            this.updateSelectionSummary();

            document.getElementById('results-section').classList.add('hidden');
            document.getElementById('setup-section').classList.remove('hidden');
        }
    }

    return ExamSystem;
})();
window.ExamSystem = ExamSystem;
