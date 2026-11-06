class EvaluationGenerator {
    constructor() {
        this.questions = [];
        this.selectedQuestions = [];
        this.totalPoints = 0;
        this.minQuestions = 20;
        this.targetPoints = 50;
        this.headerLayout = { addedSpace: 0 };
        // Paginación del banco (antes se dibujaban las 1305 preguntas de una vez)
        this.filtered = [];
        this.page = 0;
        this.pageSize = 40;
        this.searchTimer = null;
    }

    // Texto sin tildes ni mayúsculas para buscar ("ecuacion" encuentra "Ecuación")
    static normalize(text) {
        return String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    }

    // Huella de una pregunta del banco: permite reconocerla al importar aunque su ID cambie
    static fingerprint(q) {
        const text = EvaluationGenerator.normalize(`${q.question}|${q.latex}`).replace(/\s+/g, '');
        let h = 5381;
        for (let i = 0; i < text.length; i++) h = ((h * 33) ^ text.charCodeAt(i)) >>> 0;
        return h.toString(36);
    }

    loadDatabase() {
        if (window.allQuestions && window.allQuestions.questions) {
            this.questions = window.allQuestions.questions;
            this.renderInterface();
        } else {
            console.error('Error loading questions database: window.allQuestions not found');
            Avisos.mostrar('Error cargando la base de datos de preguntas. Asegúrate de que questions.js se ha cargado correctamente.', 'danger');
        }
    }

    // Si el navegador guardó en caché una versión anterior de algún archivo, las piezas no
    // encajan y el generador fallaba en silencio (banco vacío, «Generar» sin efecto).
    static checkFiles() {
        const faltan = [];
        if (typeof ExamUtils === 'undefined' || typeof ExamUtils.math !== 'function' || typeof ExamUtils.num !== 'function') faltan.push('js/ExamSystem.js');
        if (!window.Parametric || typeof window.Parametric.instantiate !== 'function') faltan.push('js/parametric.js');
        if (!window.allQuestions || !Array.isArray(window.allQuestions.questions)) faltan.push('js/data/questions.js');
        return faltan;
    }

    static showError(error) {
        console.error('Generador de evaluaciones:', error);
        const faltan = EvaluationGenerator.checkFiles();
        const msg = faltan.length
            ? `El generador no puede funcionar porque el navegador está usando una versión anterior de ${faltan.join(', ')}. Recargue la página sin caché: Ctrl + Shift + R (en Mac, Cmd + Shift + R).`
            : `Ocurrió un error en el generador: ${error && error.message ? error.message : error}. Recargue la página (Ctrl + Shift + R) e inténtelo de nuevo.`;
        Avisos.mostrar(msg, 'danger', { duracion: 0 });
    }

    init() {
        const faltan = EvaluationGenerator.checkFiles();
        if (faltan.length) {
            EvaluationGenerator.showError(new Error('archivos incompatibles'));
            const c = document.getElementById('generator-container');
            if (c) c.innerHTML = '<p class="empty-msg">El generador no se pudo cargar. Recargue la página con Ctrl + Shift + R.</p>';
            return;
        }
        try {
            this.loadDatabase();
        } catch (error) {
            EvaluationGenerator.showError(error);
        }
        this.bindEvents();
    }

    bindEvents() {
        if (this.eventsBound) return; // evita listeners duplicados si init() se llama dos veces
        this.eventsBound = true;

        // Un solo manejador para todos los botones del generador (sin onclick en el HTML)
        document.addEventListener('click', (e) => {
            const el = e.target.closest('[data-action]');
            if (!el || el.disabled) return;
            const index = parseInt(el.dataset.index, 10);
            const actions = {
                'save-eval': () => this.validateAndSave(),
                'generate-random': () => this.generateRandom(),
                'select-all-modules': () => this.selectAllModules(),
                'deselect-all-modules': () => this.deselectAllModules(),
                'clear-selection': () => this.clearSelection(),
                'distribute-points': () => this.distributePoints(),
                'import-json': () => document.getElementById('import-json-input')?.click(),
                'add-question': () => this.addQuestion(el.dataset.id),
                'remove-question': () => this.removeQuestion(index),
                'header-space': () => this.addHeaderSpace(20),
                'move-up': () => this.moveQuestion(index, -1),
                'move-down': () => this.moveQuestion(index, 1),
                'add-space': () => this.addSpace(index, 20),
                'page-break': () => this.togglePageBreak(index),
                'run-online': () => this.runOnlineExam(),
                'export-pdf': () => this.exportPDF(),
                'export-excel': () => this.exportExcel(),
                'export-latex': () => this.exportLaTeX(),
                'export-json': () => this.exportJSON(),
                'student-file': () => this.downloadStudentFile(),
                'student-link': () => this.copyStudentLink(),
                'close-preview': () => this.closePreview(),
                'print-versions': () => this.printVersions()
            };
            const action = actions[el.dataset.action];
            if (action) {
                e.preventDefault();
                // Un error ya no deja el botón «muerto» sin explicación
                try {
                    const r = action();
                    if (r && typeof r.catch === 'function') r.catch(err => EvaluationGenerator.showError(err));
                } catch (error) {
                    EvaluationGenerator.showError(error);
                }
            }
        });

        // Puntos de cada pregunta seleccionada
        document.addEventListener('change', (e) => {
            if (e.target.classList.contains('points-input')) {
                this.updatePoints(parseInt(e.target.dataset.index, 10), e.target.value);
            }
        });

        // La hoja se actualiza al cambiar el título o el cuadro de instrucciones
        ['exam-title', 'instr-include', 'instr-type', 'instr-minutes'].forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            el.addEventListener(id === 'exam-title' || id === 'instr-minutes' ? 'input' : 'change', () => {
                const modal = document.getElementById('preview-modal');
                if (modal && !modal.classList.contains('hidden')) this.refreshPreviewHeader();
            });
        });

        // Escape cierra la previsualización
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('preview-modal');
            if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) this.closePreview();
        });
    }

    // Nueva pregunta seleccionada: opciones barajadas y semilla propia (paramétricas)
    newItem(question, points = 0) {
        return {
            question: ExamUtils.shuffleOptions(question),
            points,
            seed: window.Parametric ? Parametric.randomSeed() : 0,
            layout: { pageBreak: false, addedSpace: 0 }
        };
    }

    // La pregunta tal como se ve e imprime (paramétrica: con los números de su semilla)
    view(item, seed) {
        return ExamUtils.instantiate(item.question, seed ?? item.seed);
    }

    // Texto del enunciado y fórmulas listos para innerHTML: se escapan <, > y & para que
    // el navegador no los tome como etiquetas (p. ej. «x<y» borraba el resto); KaTeX lee
    // el texto ya decodificado, así que las fórmulas se dibujan igual.
    static text(value) {
        return ExamUtils.escapeHtml(value);
    }

    // Fórmula en línea. display = true: tamaño de fórmula destacada (fracciones,
    // integrales y sumas a tamaño completo), para la hoja impresa.
    static math(latex, display = false) {
        return ExamUtils.math(latex, display);
    }

    // «2,5 pts» (coma decimal, como en las casillas de puntos)
    static pts(points) {
        return `${ExamUtils.num(points)} ${Number(points) === 1 ? 'pt' : 'pts'}`;
    }

    static badges(q) {
        return (window.Parametric && Parametric.isParametric(q) ? '<span class="q-badge">🎲 Paramétrica</span>' : '') +
            (ExamUtils.isGeoGebraTask(q) ? '<span class="q-badge q-badge-ggb">🖐 Se responde en GeoGebra (solo en línea)</span>' : '');
    }

    closePreview() {
        document.getElementById('preview-modal')?.classList.add('hidden');
        document.getElementById('save-eval-btn')?.focus();
    }

    // Tipos de evaluación con su artículo («del quiz», «de la prueba»)
    static get INSTR_TYPES() {
        return {
            quiz: ['quiz', 'm'], parcial: ['parcial', 'm'], examen: ['examen', 'm'], 'examen-final': ['examen final', 'm'],
            taller: ['taller', 'm'], seguimiento: ['seguimiento', 'm'], evaluacion: ['evaluación', 'f'], prueba: ['prueba', 'f']
        };
    }

    // Opciones del cuadro de instrucciones (ventana de previsualización)
    getInstr() {
        const minutes = parseInt(document.getElementById('instr-minutes')?.value, 10);
        const type = document.getElementById('instr-type')?.value;
        return {
            include: document.getElementById('instr-include')?.checked ?? true,
            type: EvaluationGenerator.INSTR_TYPES[type] ? type : 'quiz',
            minutes: Number.isInteger(minutes) && minutes > 0 ? minutes : 45
        };
    }

    // Las cuatro líneas del cuadro, en texto plano
    instrLines(instr = this.getInstr()) {
        const [name, gender] = EvaluationGenerator.INSTR_TYPES[instr.type];
        const del = gender === 'f' ? `de la ${name}` : `del ${name}`;
        const todo = gender === 'f' ? `toda la ${name}` : `todo el ${name}`;
        return [
            '¡Por favor, muestre todo el desarrollo de su trabajo de forma ordenada!',
            'No se dará crédito a las respuestas que no tengan trabajo argumentado.',
            `No se responden dudas durante el desarrollo ${del}.`,
            `Tiene ${instr.minutes} ${instr.minutes === 1 ? 'minuto' : 'minutos'} para dar respuesta a ${todo}.`
        ];
    }

    renderInstrBox() {
        const instr = this.getInstr();
        if (!instr.include) return '';
        return `<div class="instr-box">${this.instrLines(instr).map(l => `<p>${ExamUtils.escapeHtml(l)}</p>`).join('')}</div>`;
    }

    getTitle() {
        return document.getElementById('exam-title')?.value.trim() || 'Evaluación de Matemáticas';
    }

    renderInterface() {
        const container = document.getElementById('generator-container');
        if (!container) return;

        container.innerHTML = `
            <div class="generator-layout">
                <div class="panel available-questions">
                    <h3>Banco de Preguntas</h3>
                    <div class="filter-controls">
                        <input type="search" id="search-questions" placeholder="Buscar..." aria-label="Buscar en el banco de preguntas">
                        <select id="category-filter" aria-label="Filtrar por categoría">
                            <option value="all">Todas las categorías</option>
                            ${this.getUniqueCategories().map(c => `<option value="${c}">${c}</option>`).join('')}
                        </select>
                    </div>
                    <div id="questions-list" class="questions-list" aria-live="polite" tabindex="0" role="region" aria-label="Preguntas del banco"></div>
                    <div id="questions-pager" class="questions-pager"></div>
                </div>
                
                <div class="panel selected-questions">
                    <h3>Evaluación en Construcción</h3>
                    
                    <div class="random-controls">
                        <h4>Generación Aleatoria</h4>
                        <div class="module-actions">
                            <button type="button" class="action-btn btn-small btn-info" data-action="select-all-modules">Seleccionar Todos</button>
                            <button type="button" class="action-btn btn-small btn-gray" data-action="deselect-all-modules">Deseleccionar Todos</button>
                        </div>
                        <fieldset id="module-checkboxes" class="module-checkboxes">
                            <legend class="visually-hidden">Módulos para la generación aleatoria</legend>
                             ${this.getUniqueCategories().sort().map(c => `
                                <label class="module-label">
                                    <input type="checkbox" class="module-check" value="${c.replace(/"/g, '&quot;')}" checked> <span>${c}</span>
                                </label>
                             `).join('')}
                        </fieldset>
                        <div class="controls-row">
                            <label>
                                Cantidad de preguntas (Mínimo 20):
                                <input type="number" id="random-count" value="20" min="20">
                            </label>
                            <button type="button" id="generate-random-btn" class="action-btn btn-inline btn-purple" data-action="generate-random">Generar</button>
                            <button type="button" class="action-btn btn-inline btn-red" data-action="clear-selection">Limpiar</button>
                            <button type="button" class="action-btn btn-inline btn-orange" data-action="distribute-points" title="Reparte ${this.targetPoints} puntos entre las preguntas seleccionadas">Repartir puntos</button>
                        </div>
                        <label class="module-label include-tasks">
                            <input type="checkbox" id="include-ggb-tasks">
                            <span>Incluir tareas que se responden en GeoGebra (solo sirven en la evaluación en línea)</span>
                        </label>
                    </div>

                    <div class="stats">
                        <span>Preguntas: <span id="count-val">${this.selectedQuestions.length}</span></span>
                        <span>Puntos: <span id="points-val">${this.totalPoints}</span>/${this.targetPoints}</span>
                    </div>
                    <div id="selected-list" class="questions-list" tabindex="0" role="region" aria-label="Preguntas de la evaluación en construcción">
                        ${this.renderSelectedList()}
                    </div>
                    <button type="button" id="save-eval-btn" class="action-btn" data-action="save-eval">Previsualizar Evaluación</button>
                    <div class="import-row">
                        <button type="button" class="action-btn secondary-action" data-action="import-json" title="Carga un archivo evaluacion.json descargado antes desde la previsualización">Cargar evaluación guardada (JSON)</button>
                        <input type="file" id="import-json-input" accept=".json,application/json" hidden>
                    </div>
                </div>
            </div>
        `;

        this.attachDynamicEvents();
    }

    getUniqueCategories() {
        return [...new Set(this.questions.map(q => q.category))];
    }

    renderQuestionsList(questions) {
        const selectedIds = new Set(this.selectedQuestions.map(sq => sq.question.id));
        return questions.map(q => {
            const added = selectedIds.has(q.id);
            const ex = ExamUtils.instantiate(q, 1); // paramétrica: un ejemplo con números
            return `
            <div class="question-item ${added ? 'already-added' : ''}" data-id="${q.id}">
                <div class="q-content">
                    <strong>${EvaluationGenerator.text(q.category)}</strong> <span class="q-id">${q.id}</span> ${EvaluationGenerator.badges(q)}
                    <p>${EvaluationGenerator.text(ex.question)}</p>
                    <small>${EvaluationGenerator.math(ex.latex)}</small>
                </div>
                <button type="button" class="add-btn" data-action="add-question" data-id="${q.id}"
                    ${added ? 'disabled title="Ya está en la evaluación" aria-label="Ya agregada"' : 'title="Agregar a la evaluación" aria-label="Agregar pregunta"'}>${added ? '✓' : '+'}</button>
            </div>`;
        }).join('');
    }

    // Dibuja solo la página actual del banco filtrado
    renderQuestionsPage() {
        const container = document.getElementById('questions-list');
        const pager = document.getElementById('questions-pager');
        if (!container) return;

        const total = this.filtered.length;
        const pages = Math.max(1, Math.ceil(total / this.pageSize));
        this.page = Math.min(Math.max(this.page, 0), pages - 1);
        const start = this.page * this.pageSize;

        container.innerHTML = total
            ? this.renderQuestionsList(this.filtered.slice(start, start + this.pageSize))
            : '<p class="empty-msg">Ninguna pregunta coincide con la búsqueda.</p>';
        ExamUtils.renderMath(container);
        container.scrollTop = 0;

        if (pager) {
            pager.innerHTML = `
                <button type="button" class="layout-btn" data-page="prev" ${this.page === 0 ? 'disabled' : ''}>◀ Anterior</button>
                <span>${total ? `${start + 1}–${Math.min(start + this.pageSize, total)} de ${total}` : '0 resultados'} · Página ${this.page + 1} de ${pages}</span>
                <button type="button" class="layout-btn" data-page="next" ${this.page >= pages - 1 ? 'disabled' : ''}>Siguiente ▶</button>
            `;
        }
    }

    renderSelectedList() {
        if (this.selectedQuestions.length === 0) {
            return '<p class="empty-msg">No hay preguntas seleccionadas</p>';
        }
        return this.selectedQuestions.map((item, index) => {
            const q = this.view(item);
            return `
            <div class="question-item selected" data-index="${index}" data-id="${q.id}">
                <div class="q-content">
                    <span class="q-id">${index + 1}. ${q.id}</span> ${EvaluationGenerator.badges(item.question)}
                    <p>${EvaluationGenerator.text(q.question)}</p>
                    <small>${EvaluationGenerator.math(q.latex)}</small>
                </div>
                <div class="q-controls">
                    <input type="number" class="points-input" value="${item.points}" data-index="${index}"
                           min="0" step="0.5" aria-label="Puntos de la pregunta ${index + 1}">
                    <button type="button" class="remove-btn" data-action="remove-question" data-index="${index}"
                            title="Quitar de la evaluación" aria-label="Quitar la pregunta ${index + 1}">×</button>
                </div>
            </div>`;
        }).join('');
    }

    addQuestion(id) {
        const question = this.questions.find(q => q.id === id);
        if (question) {
            // Check if already added
            if (this.selectedQuestions.some(sq => sq.question.id === id)) {
                Avisos.mostrar('Esta pregunta ya está en la evaluación.', 'warning');
                return;
            }
            // Copia con opciones barajadas: el banco tiene casi todas las correctas en a)
            this.selectedQuestions.push(this.newItem(question, 0));
            this.updateStats();
            this.refreshSelectedView();
            this.renderQuestionsPage();
        }
    }

    removeQuestion(index) {
        this.selectedQuestions.splice(index, 1);
        this.updateStats();
        this.refreshSelectedView();
        this.renderQuestionsPage();
    }

    updatePoints(index, value) {
        this.selectedQuestions[index].points = parseFloat(value) || 0;
        this.updateStats();
    }

    updateStats() {
        this.totalPoints = this.selectedQuestions.reduce((sum, item) => sum + item.points, 0);
        // Round to 2 decimal places to avoid floating point errors
        this.totalPoints = Math.round(this.totalPoints * 100) / 100;

        const countEl = document.getElementById('count-val');
        const pointsEl = document.getElementById('points-val');

        if (countEl) countEl.textContent = this.selectedQuestions.length;
        if (pointsEl) pointsEl.textContent = this.totalPoints;

        // Visual feedback
        if (countEl) countEl.style.color = this.selectedQuestions.length >= 20 ? 'green' : 'red';
        if (pointsEl) pointsEl.style.color = Math.abs(this.totalPoints - this.targetPoints) < 0.1 ? 'green' : 'red';
    }

    refreshSelectedView() {
        const container = document.getElementById('selected-list');
        if (container) {
            container.innerHTML = this.renderSelectedList();
            // Re-render math
            ExamUtils.renderMath(container);
        }
    }

    attachDynamicEvents() {
        const searchInput = document.getElementById('search-questions');
        const categorySelect = document.getElementById('category-filter');

        if (searchInput) {
            // Espera a que se deje de escribir (250 ms) antes de filtrar
            searchInput.addEventListener('input', () => {
                clearTimeout(this.searchTimer);
                this.searchTimer = setTimeout(() => this.filterQuestions(searchInput.value, categorySelect.value), 250);
            });
        }
        if (categorySelect) {
            categorySelect.addEventListener('change', (e) => this.filterQuestions(searchInput.value, e.target.value));
        }

        const pager = document.getElementById('questions-pager');
        if (pager) {
            pager.addEventListener('click', (e) => {
                const btn = e.target.closest('[data-page]');
                if (!btn || btn.disabled) return;
                this.page += btn.dataset.page === 'next' ? 1 : -1;
                this.renderQuestionsPage();
            });
        }

        const importInput = document.getElementById('import-json-input');
        if (importInput) {
            importInput.addEventListener('change', () => {
                const file = importInput.files && importInput.files[0];
                if (file) this.importJSON(file);
                importInput.value = '';
            });
        }

        this.filterQuestions('', 'all');
    }

    filterQuestions(searchText, category) {
        const needle = EvaluationGenerator.normalize(searchText).trim();
        this.filtered = this.questions.filter(q => {
            const matchesCategory = category === 'all' || q.category === category;
            if (!matchesCategory) return false;
            if (!needle) return true;
            return EvaluationGenerator.normalize(`${q.question} ${q.latex} ${q.id}`).includes(needle);
        });
        this.page = 0;
        this.renderQuestionsPage();
    }

    generateRandom() {
        // Get selected modules
        const checkboxes = document.querySelectorAll('.module-check:checked');
        const selectedModules = Array.from(checkboxes).map(cb => cb.value);

        if (selectedModules.length === 0) {
            Avisos.mostrar('Por favor, selecciona al menos un módulo para la generación aleatoria.', 'warning');
            return;
        }

        // Get count
        const countInput = document.getElementById('random-count');
        let count = parseInt(countInput.value) || 20;
        if (count < 20) {
            Avisos.mostrar('El mínimo de preguntas es 20. Se ajustará automáticamente.', 'warning');
            count = 20;
            countInput.value = 20;
        }

        // Filter questions by selected modules
        // Las tareas de GeoGebra no se pueden imprimir: solo se incluyen si se pide
        const includeTasks = Boolean(document.getElementById('include-ggb-tasks')?.checked);
        const availableQuestions = this.questions.filter(q => selectedModules.includes(q.category) &&
            (includeTasks || !ExamUtils.isGeoGebraTask(q)));

        if (availableQuestions.length < count) {
            Avisos.mostrar(`No hay suficientes preguntas en los módulos seleccionados (${availableQuestions.length}) para generar una evaluación de ${count} preguntas.`, 'warning');
            return;
        }

        // Shuffle questions
        const shuffled = ExamUtils.shuffle(availableQuestions);

        // Select first N
        const selected = shuffled.slice(0, count);

        // Calculate points per question (Total 50)
        const pointsPerQuestion = this.targetPoints / count;
        // Round to 2 decimals
        const roundedPoints = Math.round(pointsPerQuestion * 100) / 100;

        this.selectedQuestions = selected.map(q => this.newItem(q, roundedPoints));

        // Adjust last question points to ensure exact 50 sum if there's a rounding difference
        const currentSum = this.selectedQuestions.reduce((sum, q) => sum + q.points, 0);
        const diff = this.targetPoints - currentSum;
        if (Math.abs(diff) > 0.001) {
            this.selectedQuestions[this.selectedQuestions.length - 1].points += diff;
            // Round again just in case
            this.selectedQuestions[this.selectedQuestions.length - 1].points = Math.round(this.selectedQuestions[this.selectedQuestions.length - 1].points * 100) / 100;
        }

        this.updateStats();
        this.refreshSelectedView();
        this.renderQuestionsPage();
        this.announceSelection(`Evaluación generada: ${count} preguntas de ${selectedModules.length} módulo(s), ${this.totalPoints} puntos. Revise la lista y pulse «Previsualizar Evaluación».`);
    }

    // Confirma lo que se hizo y lleva la vista a la lista (antes podía quedar fuera de la pantalla)
    announceSelection(message) {
        Avisos.mostrar(message, 'success');
        const list = document.getElementById('selected-list');
        if (!list) return;
        list.scrollTop = 0;
        list.scrollIntoView({ behavior: 'smooth', block: 'start' });
        list.classList.remove('recien-generada');
        void list.offsetWidth; // reinicia la animación
        list.classList.add('recien-generada');
    }

    // Reparte targetPoints en partes iguales (la última absorbe el redondeo)
    distributePoints() {
        const n = this.selectedQuestions.length;
        if (n === 0) {
            Avisos.mostrar('No hay preguntas seleccionadas.', 'warning');
            return;
        }
        const each = Math.round((this.targetPoints / n) * 100) / 100;
        this.selectedQuestions.forEach(item => { item.points = each; });
        const diff = this.targetPoints - each * n;
        this.selectedQuestions[n - 1].points = Math.round((each + diff) * 100) / 100;
        this.updateStats();
        this.refreshSelectedView();
    }

    async clearSelection() {
        if (await Avisos.confirmar('¿Borrar todas las preguntas de la evaluación en construcción?', { si: 'Borrar', peligro: true })) {
            this.selectedQuestions = [];
            this.updateStats();
            this.refreshSelectedView();
            this.renderQuestionsPage();
        }
    }

    selectAllModules() {
        const checkboxes = document.querySelectorAll('.module-check');
        checkboxes.forEach(cb => cb.checked = true);
    }

    deselectAllModules() {
        const checkboxes = document.querySelectorAll('.module-check');
        checkboxes.forEach(cb => cb.checked = false);
    }

    validateAndSave() {
        if (this.selectedQuestions.length < this.minQuestions) {
            Avisos.mostrar(`Debes seleccionar al menos ${this.minQuestions} preguntas.`, 'warning');
            return;
        }

        if (Math.abs(this.totalPoints - this.targetPoints) > 0.01) {
            Avisos.mostrar(`El valor total de los puntos debe ser exactamente ${this.targetPoints}. Actual: ${this.totalPoints}`, 'warning');
            return;
        }

        this.previewExam();
    }

    // Paquete v2 para exam.html: la clave va separada de las preguntas y todo se
    // codifica para que no se lea a simple vista en el almacenamiento del navegador.
    buildExamPayload() {
        const now = new Date();
        const pad = n => String(n).padStart(2, '0');
        const examId = `EV-${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
        const titleInput = document.getElementById('exam-title');
        const fields = ['id', 'category', 'categoryKey', 'question', 'latex', 'options', 'hint', 'image', 'geogebraId', 'geogebraAppName', 'geogebraState',
            'params', 'where', 'answerType', 'geogebraCommands', 'geogebraCheck'];

        return {
            v: 2,
            examId,
            title: (titleInput && titleInput.value.trim()) || 'Evaluación de Matemáticas',
            createdAt: now.toISOString(),
            settings: {
                showHints: Boolean(document.getElementById('opt-show-hints')?.checked),
                showCorrect: Boolean(document.getElementById('opt-show-correct')?.checked),
                timeLimitMin: Math.max(0, parseInt(document.getElementById('exam-time-limit')?.value, 10) || 0)
            },
            questions: this.selectedQuestions.map(item => {
                const q = { points: item.points };
                fields.forEach(f => { if (item.question[f] !== undefined) q[f] = item.question[f]; });
                return q;
            }),
            key: this.selectedQuestions.map(item => (ExamUtils.isGeoGebraTask(item.question) ? null : item.question.correct))
        };
    }

    // Usado por exam.html como respaldo si el navegador bloquea localStorage
    getEncodedExam() {
        return this.lastEncodedExam || null;
    }

    async runOnlineExam() {
        if (!(await Avisos.confirmar('Se abrirá la evaluación en línea en una ventana nueva. ¿Iniciar?', { si: 'Iniciar' }))) return;

        const payload = this.buildExamPayload();
        const encoded = ExamUtils.encodePayload(payload);
        this.lastEncodedExam = encoded;

        // exam.html lo lee y lo borra de localStorage en cuanto carga
        try {
            localStorage.setItem('examData', encoded);
        } catch (e) {
            console.warn('localStorage no disponible:', e);
        }

        const width = 1000;
        const height = 800;
        const left = (screen.width - width) / 2;
        const top = (screen.height - height) / 2;
        const popup = window.open('exam.html', 'OnlineExam', `width=${width},height=${height},top=${top},left=${left},scrollbars=yes`);

        if (!popup) {
            Avisos.mostrar('Por favor, permite las ventanas emergentes para iniciar el examen.', 'warning');
        }
    }

    // Encabezado de la hoja impresa (versionLabel: "Versión B", etc.)
    renderPrintHeader(versionLabel = '', controls = true) {
        return `
            <div class="print-header" style="margin-bottom: ${30 + this.headerLayout.addedSpace}px;">
                ${controls ? `
                <div class="preview-controls-bar">
                    <span class="preview-bar-label">Encabezado:</span>
                    <button type="button" class="layout-btn" data-action="header-space">+ Espacio Inferior</button>
                </div>` : ''}

                <div class="print-title">
                    <h2>${ExamUtils.escapeHtml(this.getTitle())}${versionLabel ? ` <span class="version-label">— ${versionLabel}</span>` : ''}</h2>
                    <p>Generado el: <span class="print-date">${new Date().toLocaleString('es-CO')}</span></p>
                </div>

                <div class="print-fields">
                    <div class="print-row">
                        <div class="flex-2">
                            <span class="header-label">Estudiante:</span>
                            <div class="header-line"></div>
                        </div>
                        <div class="flex-1">
                            <span class="header-label">ID:</span>
                            <div class="header-line"></div>
                        </div>
                    </div>
                     <div class="print-row print-row-last">
                        <div class="flex-1"></div>
                        <div class="flex-1">
                            <span class="header-label">Fecha y Hora de Realización:</span>
                            <div class="header-line"></div>
                        </div>
                    </div>
                </div>
                ${this.renderInstrBox()}
            </div>`;
    }

    // Enunciado y opciones de una pregunta ya concreta (q = pregunta con números)
    renderQuestionBody(q, number, points) {
        const body = ExamUtils.isGeoGebraTask(q)
            ? '<p class="print-task-note"><em>(Esta pregunta se responde en GeoGebra, solo en la evaluación en línea.)</em></p>'
            : q.options.map((opt, i) => `
                    <div class="preview-option">
                        <span class="option-letter">${String.fromCharCode(97 + i)})</span> ${EvaluationGenerator.math(opt.latex, true)}
                    </div>`).join('');
        return `
                <p><strong>${number}.</strong> ${EvaluationGenerator.text(q.question)} (${EvaluationGenerator.pts(points)})</p>
                ${q.latex && q.latex.trim() ? `<div class="latex-display">${EvaluationGenerator.math(q.latex, true)}</div>` : ''}
                ${body}`;
    }

    // Solo el encabezado: no se pierde la posición de lectura de la hoja
    refreshPreviewHeader() {
        const header = document.querySelector('#preview-container .print-header');
        if (!header) return;
        const tmp = document.createElement('div');
        tmp.innerHTML = this.renderPrintHeader();
        header.replaceWith(tmp.firstElementChild);
    }

    previewExam() {
        const modal = document.getElementById('preview-modal');
        const container = document.getElementById('preview-container');

        if (!modal || !container) return;

        container.innerHTML = this.renderPrintHeader() + this.selectedQuestions.map((item, index) => `
            ${item.layout && item.layout.pageBreak ? '<div class="page-break"></div><div class="page-break-marker"></div>' : ''}
            <div class="preview-question" style="margin-bottom: ${20 + (item.layout ? item.layout.addedSpace : 0)}px;">
                <div class="preview-controls-bar">
                    <button type="button" class="layout-btn" data-action="move-up" data-index="${index}" ${index === 0 ? 'disabled' : ''} aria-label="Subir la pregunta ${index + 1}">▲ Subir</button>
                    <button type="button" class="layout-btn" data-action="move-down" data-index="${index}" ${index === this.selectedQuestions.length - 1 ? 'disabled' : ''} aria-label="Bajar la pregunta ${index + 1}">▼ Bajar</button>
                    <button type="button" class="layout-btn" data-action="add-space" data-index="${index}">+ Espacio</button>
                    <button type="button" class="layout-btn ${item.layout && item.layout.pageBreak ? 'active' : ''}" data-action="page-break" data-index="${index}" aria-pressed="${Boolean(item.layout && item.layout.pageBreak)}">Salto de Página</button>
                    ${EvaluationGenerator.badges(item.question)}
                </div>
                ${this.renderQuestionBody(this.view(item), index + 1, item.points)}
            </div>
        `).join('');

        const wasHidden = modal.classList.contains('hidden');
        modal.classList.remove('hidden');
        if (wasHidden) modal.querySelector('.close-modal')?.focus();

        ExamUtils.renderMath(container);
    }

    // ---- Versiones impresas A, B, C... con distinto orden de preguntas y opciones ----
    // La versión A conserva el orden del docente; las demás se barajan. Las preguntas
    // paramétricas reciben números distintos en cada versión. Las tareas de GeoGebra
    // no se imprimen.
    buildVersions(count) {
        const printable = this.selectedQuestions
            .map((item, i) => ({ item, original: i + 1 }))
            .filter(x => !ExamUtils.isGeoGebraTask(x.item.question));
        const versions = [];
        for (let v = 0; v < count; v++) {
            const label = String.fromCharCode(65 + v);
            const order = v === 0 ? printable : ExamUtils.shuffle(printable);
            versions.push({
                label,
                questions: order.map(({ item, original }) => {
                    const template = v === 0 ? item.question : ExamUtils.shuffleOptions(item.question);
                    const q = ExamUtils.instantiate(template, v === 0 ? item.seed : (window.Parametric ? Parametric.randomSeed() : 0));
                    return { q, original, points: item.points, addedSpace: item.layout ? item.layout.addedSpace : 0 };
                })
            });
        }
        return { versions, skipped: this.selectedQuestions.length - printable.length };
    }

    printVersions() {
        const select = document.getElementById('version-count');
        const count = Math.min(Math.max(parseInt(select && select.value, 10) || 2, 1), 6);
        const { versions, skipped } = this.buildVersions(count);
        if (!versions[0].questions.length) {
            Avisos.mostrar('No hay preguntas imprimibles (las tareas de GeoGebra solo sirven en línea).', 'warning');
            return;
        }
        if (skipped) Avisos.mostrar(`${skipped} tarea(s) de GeoGebra no se incluyen en las versiones impresas (solo sirven en línea).`, 'info');

        this.downloadVersionKeys(versions);

        const container = document.getElementById('preview-container');
        container.innerHTML = versions.map((ver, v) => `
            ${v > 0 ? '<div class="page-break"></div>' : ''}
            ${this.renderPrintHeader(`Versión ${ver.label}`, false)}
            ${ver.questions.map((x, i) => `
                <div class="preview-question" style="margin-bottom: ${20 + x.addedSpace}px;">
                    ${this.renderQuestionBody(x.q, i + 1, x.points)}
                </div>`).join('')}
        `).join('');
        ExamUtils.renderMath(container);

        // Al cerrar el diálogo de impresión se vuelve a la previsualización normal
        window.addEventListener('afterprint', () => this.previewExam(), { once: true });
        window.print();
    }

    // Excel con la clave de cada versión (y la equivalencia con la pregunta original)
    downloadVersionKeys(versions) {
        if (typeof XLSX === 'undefined') {
            Avisos.mostrar('La librería SheetJS no está cargada: no se pudo descargar la clave de las versiones.', 'danger');
            return;
        }
        const letter = i => String.fromCharCode(97 + i);
        const n = versions[0].questions.length;
        const summary = [['No.', ...versions.map(v => `Versión ${v.label}`)]];
        for (let i = 0; i < n; i++) {
            summary.push([i + 1, ...versions.map(v => letter(v.questions[i].q.correct))]);
        }
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(summary), 'Claves');
        versions.forEach(ver => {
            const rows = ver.questions.map((x, i) => ({
                'No.': i + 1,
                'Pregunta original (versión A)': versions[0].questions.findIndex(y => y.original === x.original) + 1,
                'ID': x.q.id,
                'Respuesta': letter(x.q.correct),
                'Texto de la respuesta': x.q.options[x.q.correct].latex,
                'Puntos': x.points
            }));
            XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), `Versión ${ver.label}`);
        });
        const safe = this.getTitle().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w-]+/g, '_').slice(0, 40);
        XLSX.writeFile(wb, `Claves_versiones_${safe}.xlsx`);
    }

    exportPDF() {
        document.querySelectorAll('.print-date').forEach(el => { el.textContent = new Date().toLocaleString('es-CO'); });
        window.print();
    }

    exportExcel() {
        if (typeof XLSX === 'undefined') {
            Avisos.mostrar('La librería SheetJS no está cargada.', 'danger');
            return;
        }

        const letter = i => String.fromCharCode(97 + i);
        const shown = this.selectedQuestions.map(item => this.view(item));
        const answerOf = q => (ExamUtils.isGeoGebraTask(q)
            ? `GeoGebra: ${(q.geogebraCheck && q.geogebraCheck.expected) || 'según la construcción'}`
            : letter(q.correct));
        const maxOptions = Math.max(0, ...shown.map(q => (q.options || []).length));
        const data = this.selectedQuestions.map((item, index) => {
            const q = shown[index];
            const row = {
                'No.': index + 1,
                'ID': q.id,
                'Categoría': q.category,
                'Tipo': ExamUtils.isGeoGebraTask(q) ? 'Tarea GeoGebra' : (window.Parametric && Parametric.isParametric(item.question) ? 'Paramétrica' : 'Opción múltiple'),
                'Pregunta': q.question,
                'LaTeX': q.latex
            };
            for (let i = 0; i < maxOptions; i++) {
                row[`Opción ${letter(i)})`] = q.options && q.options[i] ? q.options[i].latex : '';
            }
            row['Respuesta correcta'] = answerOf(q);
            row['Puntos'] = item.points;
            return row;
        });

        // Hoja aparte con la clave para calificar la versión impresa
        const key = this.selectedQuestions.map((item, index) => ({
            'No.': index + 1,
            'Respuesta': answerOf(shown[index]),
            'Puntos': item.points
        }));

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(data), "Evaluación");
        XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(key), "Clave");
        XLSX.writeFile(wb, "evaluacion.xlsx");
    }

    exportLaTeX() {
        const texEscapeTitle = this.getTitle().replace(/[\\%&#_{}$^~]/g, c => ({ '\\': '\\textbackslash{}', '^': '\\^{}', '~': '\\~{}' }[c] || '\\' + c));
        let texContent = `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish,es-noshorthands]{babel}
% Símbolos escritos directamente en algunos enunciados (≈, ², ³, °, ·)
\\DeclareUnicodeCharacter{2248}{\\ensuremath{\\approx}}
\\DeclareUnicodeCharacter{00B2}{\\ensuremath{^2}}
\\DeclareUnicodeCharacter{00B3}{\\ensuremath{^3}}
\\DeclareUnicodeCharacter{00B0}{\\ensuremath{^\\circ}}
\\DeclareUnicodeCharacter{00B7}{\\ensuremath{\\cdot}}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{graphicx}
\\usepackage{geometry}
\\usepackage{enumitem}
\\geometry{a4paper, margin=1in}
% Cuadro de instrucciones (si su plantilla ya define \\ExamInstrBox, se usa la suya)
\\providecommand{\\ExamInstrBox}[1]{\\begin{center}\\fbox{\\parbox{0.92\\textwidth}{#1}}\\end{center}}

\\title{${texEscapeTitle}}
\\date{\\today}

\\begin{document}

\\begin{center}
    {\\Large \\textbf{${texEscapeTitle}}} \\\\
    \\vspace{0.2cm}
    Generado el: \\today
\\end{center}

\\vspace{0.5cm}

\\noindent \\textbf{Estudiante:} \\hrulefill \\hspace{1cm} \\textbf{ID:} \\makebox[4cm]{\\hrulefill} \\\\
\\vspace{0.5cm}
\\noindent \\hspace*{\\fill} \\textbf{Fecha y Hora de Realización:} \\makebox[5cm]{\\hrulefill}
${this.getInstr().include ? `
\\vspace{0.4cm}
\\ExamInstrBox{\\centering ${this.instrLines().join('\n    \\\\ ')}}
` : ''}
\\vspace{1cm}

\\begin{enumerate}
`;

        // Escapa en una sola pasada los caracteres especiales del texto (no de las fórmulas)
        const texMap = { '\\': '\\textbackslash{}', '%': '\\%', '&': '\\&', '#': '\\#', '_': '\\_', '{': '\\{', '}': '\\}', '$': '\\$', '^': '\\^{}', '~': '\\~{}' };
        const texEscape = t => String(t).replace(/[\\%&#_{}$^~]/g, c => texMap[c]);
        // Fórmula destacada con saltos de línea (\\\\) fuera de un entorno: en \\[ \\] no valen y
        // las líneas salían pegadas («2 h1 bomba»); se envuelven en gathered (amsmath)
        const texDisplay = t => (/\\\\/.test(t) && !/\\begin\{/.test(t) ? `\\begin{gathered} ${t} \\end{gathered}` : t);
        // Enunciado: texto escapado, fórmulas entre $...$ tal cual
        const texQuestion = t => String(t).split(/(\$[^$]+\$)/).map((part, i) => (i % 2 ? part : texEscape(part))).join('');

        this.selectedQuestions.forEach(item => {
            const q = this.view(item);
            texContent += `    \\item ${texQuestion(q.question)} (${EvaluationGenerator.pts(item.points)})

${q.latex && q.latex.trim() ? `    \\[ ${texDisplay(q.latex)} \\]

` : ''}`;
            if (ExamUtils.isGeoGebraTask(q)) {
                texContent += `    \\textit{(Esta pregunta se responde en GeoGebra, solo en la evaluación en línea.)}
    \\vspace{0.5cm}

`;
                return;
            }
            texContent += `    \\begin{enumerate}[label=\\alph*)]
`;
            q.options.forEach(opt => {
                texContent += `        \\item $${opt.latex}$
`;
            });
            texContent += `    \\end{enumerate}
    \\vspace{0.5cm}

`;
        });

        texContent += `\\end{enumerate}
\\end{document}`;

        this.downloadFile(texContent, "evaluacion.tex", "text/plain");
    }

    // Guarda la evaluación para volver a cargarla después (botón «Cargar evaluación guardada»).
    // Incluye una huella de cada pregunta para reconocerla aunque su ID cambie,
    // y el orden de las opciones para que la versión impresa coincida.
    exportJSON() {
        const examData = {
            format: 'evaluacion-generador',
            version: 2,
            title: this.getTitle(),
            date: new Date().toISOString(),
            settings: {
                showHints: Boolean(document.getElementById('opt-show-hints')?.checked),
                showCorrect: Boolean(document.getElementById('opt-show-correct')?.checked),
                timeLimitMin: Math.max(0, parseInt(document.getElementById('exam-time-limit')?.value, 10) || 0),
                instr: this.getInstr()
            },
            totalPoints: this.totalPoints,
            headerLayout: this.headerLayout,
            questions: this.selectedQuestions.map(item => ({
                id: item.question.id,
                fingerprint: EvaluationGenerator.fingerprint(item.question),
                points: item.points,
                optionOrder: (item.question.options || []).map(o => o.latex),
                seed: item.seed,
                layout: item.layout || { pageBreak: false, addedSpace: 0 }
            }))
        };
        this.downloadFile(JSON.stringify(examData, null, 2), "evaluacion.json", "application/json");
    }

    importJSON(file) {
        const reader = new FileReader();
        reader.onload = async () => {
            let data;
            try {
                data = JSON.parse(reader.result);
            } catch (e) {
                Avisos.mostrar('El archivo no es un JSON válido.', 'danger');
                return;
            }
            if (!data || !Array.isArray(data.questions)) {
                Avisos.mostrar('El archivo no contiene una evaluación del generador.', 'danger');
                return;
            }
            if (this.selectedQuestions.length &&
                !(await Avisos.confirmar('Se reemplazará la evaluación en construcción. ¿Continuar?', { si: 'Reemplazar' }))) return;

            const byId = new Map(this.questions.map(q => [q.id, q]));
            const byPrint = new Map(this.questions.map(q => [EvaluationGenerator.fingerprint(q), q]));
            // Preguntas corregidas después de guardar el archivo (js/data/huellas_anteriores.js)
            const byIdNow = new Map(this.questions.map(q => [q.id, q]));
            Object.entries(window.huellasAnteriores || {}).forEach(([fp, id]) => {
                if (!byPrint.has(fp) && byIdNow.has(id)) byPrint.set(fp, byIdNow.get(id));
            });
            const missing = [];
            const changedId = [];

            this.selectedQuestions = data.questions.map((saved, i) => {
                let q = byId.get(saved.id);
                // Si el ID ahora apunta a otra pregunta (se insertó una antes), buscar por huella
                if (saved.fingerprint && (!q || EvaluationGenerator.fingerprint(q) !== saved.fingerprint)) {
                    const found = byPrint.get(saved.fingerprint);
                    if (found) {
                        if (found.id !== saved.id) changedId.push(`${saved.id} → ${found.id}`);
                        q = found;
                    } else if (data.version === 2) {
                        q = null;
                    }
                }
                if (!q) {
                    missing.push(`${i + 1} (${saved.id})`);
                    return null;
                }
                return {
                    question: this.applyOptionOrder(q, saved.optionOrder),
                    seed: Number.isInteger(saved.seed) ? saved.seed : (window.Parametric ? Parametric.randomSeed() : 0),
                    points: Number(saved.points) || 0,
                    layout: saved.layout || { pageBreak: false, addedSpace: 0 }
                };
            }).filter(Boolean);

            if (data.headerLayout) this.headerLayout = data.headerLayout;
            if (data.title && document.getElementById('exam-title')) document.getElementById('exam-title').value = data.title;
            if (data.settings) {
                const set = (id, v) => { const el = document.getElementById(id); if (el) el.checked = Boolean(v); };
                set('opt-show-hints', data.settings.showHints);
                set('opt-show-correct', data.settings.showCorrect);
                const tl = document.getElementById('exam-time-limit');
                if (tl) tl.value = Number(data.settings.timeLimitMin) || 0;
                const instr = data.settings.instr;
                if (instr) {
                    const inc = document.getElementById('instr-include');
                    if (inc) inc.checked = instr.include !== false;
                    const ty = document.getElementById('instr-type');
                    if (ty && EvaluationGenerator.INSTR_TYPES[instr.type]) ty.value = instr.type;
                    const mi = document.getElementById('instr-minutes');
                    if (mi && Number(instr.minutes) > 0) mi.value = Number(instr.minutes);
                }
            }

            this.updateStats();
            this.refreshSelectedView();
            this.renderQuestionsPage();

            let msg = `Evaluación cargada: ${this.selectedQuestions.length} pregunta(s), ${this.totalPoints} puntos.`;
            if (changedId.length) msg += `\n\nPreguntas reconocidas con un ID nuevo: ${changedId.join(', ')}.`;
            if (missing.length) msg += `\n\nNo se encontraron en el banco actual (se omitieron): ${missing.join(', ')}.`;
            Avisos.mostrar(msg, 'success');
        };
        reader.readAsText(file);
    }

    // Reordena las opciones como estaban al guardar; si no coinciden, las baraja
    applyOptionOrder(question, order) {
        if (!Array.isArray(question.options)) return question; // tarea GeoGebra
        if (!Array.isArray(order) || order.length !== question.options.length) {
            return ExamUtils.shuffleOptions(question);
        }
        const used = new Set();
        const indices = order.map(latex => {
            const i = question.options.findIndex((o, k) => !used.has(k) && o.latex === latex);
            if (i >= 0) used.add(i);
            return i;
        });
        if (indices.some(i => i < 0)) return ExamUtils.shuffleOptions(question);
        return {
            ...question,
            options: indices.map(i => question.options[i]),
            correct: indices.indexOf(question.correct)
        };
    }

    // ---- Repartir la evaluación a otros computadores ----
    // Archivo .examen: el estudiante lo abre con «Cargar archivo de evaluación» en exam.html
    downloadStudentFile() {
        if (!this.selectedQuestions.length) return;
        const payload = this.buildExamPayload();
        const safeTitle = payload.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w-]+/g, '_').slice(0, 40);
        this.downloadFile(ExamUtils.encodePayload(payload), `${safeTitle}_${payload.examId}.examen`, 'text/plain');
        Avisos.mostrar(`Se descargó el archivo de la evaluación (${payload.examId}).\n\nEntrégueselo a los estudiantes junto con la carpeta de la aplicación: en exam.html deben pulsar «Cargar archivo de evaluación».\n\nEl archivo contiene la clave codificada (no legible a simple vista, pero no cifrada).`, 'success');
    }

    // Enlace con la evaluación dentro de la dirección (solo si la app está publicada en internet)
    async copyStudentLink() {
        if (!this.selectedQuestions.length) return;
        if (!/^https?:$/.test(location.protocol)) {
            Avisos.mostrar('El enlace solo sirve si la aplicación está publicada en internet (por ejemplo, GitHub Pages).\n\nComo la está abriendo desde un archivo local, use «Descargar archivo para estudiantes».', 'info');
            return;
        }
        const payload = this.buildExamPayload();
        const url = new URL('exam.html', location.href);
        url.hash = encodeURIComponent(ExamUtils.encodePayload(payload));
        try {
            await navigator.clipboard.writeText(url.toString());
            Avisos.mostrar(`Enlace copiado (${payload.examId}). Compártalo con los estudiantes.\n\nLongitud: ${url.toString().length} caracteres.`, 'success');
        } catch (e) {
            Avisos.mostrar(`No se pudo copiar automáticamente. Copie este enlace:\n${url.toString()}`, 'info', { duracion: 0 });
        }
    }

    moveQuestion(index, direction) {
        if (direction === -1 && index > 0) {
            [this.selectedQuestions[index], this.selectedQuestions[index - 1]] = [this.selectedQuestions[index - 1], this.selectedQuestions[index]];
            this.previewExam();
        } else if (direction === 1 && index < this.selectedQuestions.length - 1) {
            [this.selectedQuestions[index], this.selectedQuestions[index + 1]] = [this.selectedQuestions[index + 1], this.selectedQuestions[index]];
            this.previewExam();
        }
    }

    togglePageBreak(index) {
        if (!this.selectedQuestions[index].layout) {
            this.selectedQuestions[index].layout = { pageBreak: false, addedSpace: 0 };
        }
        this.selectedQuestions[index].layout.pageBreak = !this.selectedQuestions[index].layout.pageBreak;
        this.previewExam();
    }

    addSpace(index, amount) {
        if (!this.selectedQuestions[index].layout) {
            this.selectedQuestions[index].layout = { pageBreak: false, addedSpace: 0 };
        }
        this.selectedQuestions[index].layout.addedSpace += amount;
        // Cap at some reasonable value if needed, e.g. 200px
        if (this.selectedQuestions[index].layout.addedSpace > 300) this.selectedQuestions[index].layout.addedSpace = 0;
        this.previewExam();
    }

    addHeaderSpace(amount) {
        this.headerLayout.addedSpace += amount;
        if (this.headerLayout.addedSpace > 300) this.headerLayout.addedSpace = 0;
        this.previewExam();
    }

    downloadFile(content, filename, contentType) {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Initialize
window.evaluationGenerator = new EvaluationGenerator();
