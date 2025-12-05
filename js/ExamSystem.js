class ExamSystem {
    constructor() {
        this.categories = window.examCategories || {};

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

        this.initializeUI();
    }

    initializeUI() {
        this.renderCategories();
        this.bindEvents();
    }

    renderCategories() {
        const container = document.getElementById('categories-container');
        if (!container) return;
        container.innerHTML = ''; // Clear existing content
        Object.entries(this.categories).forEach(([id, category]) => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <button class="select-btn" data-id="${id}">Seleccionar</button>
            `;
            container.appendChild(card);
        });
    }

    bindEvents() {
        // Use event delegation for category selection buttons
        const catContainer = document.getElementById('categories-container');
        if (catContainer) {
            catContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('select-btn')) {
                    const categoryId = e.target.dataset.id;
                    this.toggleCategory(categoryId, e.target);
                }
            });
        }

        const startBtn = document.getElementById('start-button');
        if (startBtn) startBtn.addEventListener('click', () => this.startExam());

        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());

        const prevBtn = document.getElementById('prev-btn');
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());

        const finishBtn = document.getElementById('finish-btn');
        if (finishBtn) finishBtn.addEventListener('click', () => this.finishExam());


    }

    toggleCategory(categoryId, button) {
        if (this.selectedCategories.has(categoryId)) {
            this.selectedCategories.delete(categoryId);
            button.classList.remove('selected');
            button.textContent = 'Seleccionar';
        } else {
            this.selectedCategories.add(categoryId);
            button.classList.add('selected');
            button.textContent = 'Seleccionado';
        }
    }

    startExam() {
        if (this.selectedCategories.size === 0) {
            alert('Por favor, selecciona al menos una categoría');
            return;
        }

        this.currentQuestions = [];
        this.selectedCategories.forEach(categoryId => {
            if (this.categories[categoryId] && this.categories[categoryId].questions) {
                this.categories[categoryId].questions.forEach(question => {
                    this.currentQuestions.push({ ...question, category: categoryId });
                });
            }
        });

        if (this.currentQuestions.length === 0) {
            alert('No hay preguntas disponibles en las categorías seleccionadas.');
            return;
        }

        this.startExamSession();
    }

    startCustomExam(questions) {
        console.log("startCustomExam called with:", questions);
        if (!questions || questions.length === 0) {
            alert('No hay preguntas para iniciar la evaluación.');
            return;
        }

        this.currentQuestions = questions.map(q => {
            if (!q.question) {
                console.error("Invalid question format:", q);
                return null;
            }
            return {
                ...q.question,
                points: q.points || 0
            };
        }).filter(q => q !== null);

        if (this.currentQuestions.length === 0) {
            alert('Error: No se pudieron procesar las preguntas.');
            return;
        }

        this.showLoginForm();
    }

    showLoginForm() {
        const examSection = document.getElementById('exam-section');
        const container = document.getElementById('question-container');
        const navButtons = document.querySelector('.nav-buttons');

        if (!examSection || !container) return;

        // Hide navigation buttons during login
        if (navButtons) navButtons.classList.add('hidden');

        // Show exam section but replace content with login form
        examSection.classList.remove('hidden');
        document.getElementById('setup-section').classList.add('hidden');
        document.getElementById('generator-section').classList.add('hidden');

        container.innerHTML = `
            <div class="login-form-container" style="max-width: 500px; margin: 40px auto; padding: 30px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h3 style="text-align: center; margin-bottom: 20px; color: #333;">Datos del Estudiante</h3>
                <form id="student-login-form" onsubmit="event.preventDefault(); examSystem.handleLogin();">
                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold;">Apellidos y Nombres:</label>
                        <input type="text" id="student-name" required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; margin-bottom: 5px; font-weight: bold;">ID / Cédula:</label>
                        <input type="text" id="student-id" required style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                    </div>
                    <button type="submit" class="nav-btn" style="width: 100%; background: #28a745; color: white; border: none;">Iniciar Evaluación</button>
                </form>
            </div>
        `;
    }

    handleLogin() {
        const nameInput = document.getElementById('student-name');
        const idInput = document.getElementById('student-id');

        if (nameInput.value.trim() && idInput.value.trim()) {
            this.userInfo = {
                name: nameInput.value.trim(),
                id: idInput.value.trim()
            };

            // Restore navigation buttons
            const navButtons = document.querySelector('.nav-buttons');
            if (navButtons) navButtons.classList.remove('hidden');

            this.startExamSession();
        } else {
            alert('Por favor complete todos los campos.');
        }
    }

    startExamSession() {
        console.log("Starting exam session...");
        document.getElementById('setup-section').classList.add('hidden');
        document.getElementById('generator-section').classList.add('hidden'); // Ensure generator is hidden
        document.getElementById('exam-section').classList.remove('hidden');
        document.getElementById('results-section').classList.add('hidden');

        this.currentIndex = 0;
        this.displayCurrentQuestion();
    }

    displayCurrentQuestion() {
        try {
            const question = this.currentQuestions[this.currentIndex];
            console.log("Displaying question:", question);
            // alert("Displaying question: " + (question ? question.question : "undefined"));

            const container = document.getElementById('question-container');
            if (!container) {
                console.error("Question container not found!");
                return;
            }

            if (!question || !question.question) {
                console.error("Invalid question data:", question);
                container.innerHTML = '<div class="error-message">Error: Datos de pregunta inválidos.</div>';
                return;
            }

            let questionHTML = `
                <div class="question">
                    <h3>${question.question}</h3>
            `;

            if (question.image) {
                questionHTML += `
                    <div class="question-image">
                        <img src="${question.image}" alt="Question Image">
                    </div>
                `;
            }

            if (question.geogebraId || question.geogebraAppName) {
                questionHTML += `
                    <div class="geogebra-wrapper">
                        <div class="geogebra-controls">
                            <button class="geogebra-btn" onclick="examSystem.resizeGeoGebra('decrease')">Reducir</button>
                            <button class="geogebra-btn" onclick="examSystem.resizeGeoGebra('increase')">Ampliar</button>
                            <button class="geogebra-btn" onclick="examSystem.resetGeoGebraSize()">Restablecer</button>
                            <button class="geogebra-btn" onclick="examSystem.openGeoGebraPopup('${question.geogebraId || ''}', '${question.geogebraAppName || ''}')">Ventana Emergente</button>
                            <span class="size-indicator">Altura: <span id="size-value">400</span>px</span>
                        </div>
                        <div class="geogebra-container" id="geogebra-${this.currentIndex}"></div>
                    </div>
                `;
            }

            questionHTML += `
                <div class="latex-display">$${question.latex}$</div>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <label class="option-label">
                            <input type="radio" name="answer" value="${index}"
                                 ${this.answers[this.currentIndex] === index ? 'checked' : ''}>
                            <span>$${option.latex}$</span>
                        </label>
                    `).join('')}
                </div>
                ${question.hint ? `<div class="hint"><em>Pista: ${question.hint}</em></div>` : ''}
                </div>
            `;

            container.innerHTML = questionHTML;

            // Initialize GeoGebra if needed and available
            if (question.geogebraId || question.geogebraAppName) {
                if (typeof GGBApplet !== 'undefined') {
                    const params = {
                        width: 800,
                        height: 425,
                        showToolBar: true,
                        showAlgebraInput: true,
                        showMenuBar: false,
                        enableLabelDrags: true,
                        enableShiftDragZoom: true,
                        enableRightClick: true,
                        showResetIcon: true,
                        useBrowserForJS: true
                    };

                    if (question.geogebraId) params.material_id = question.geogebraId;
                    if (question.geogebraAppName) params.appName = question.geogebraAppName;

                    const ggbApp = new GGBApplet(params, true);
                    ggbApp.inject(`geogebra-${this.currentIndex}`);
                } else {
                    console.warn('GeoGebra library not loaded.');
                    const ggbContainer = document.getElementById(`geogebra-${this.currentIndex}`);
                    if (ggbContainer) {
                        ggbContainer.innerHTML = '<div class="alert alert-warning">GeoGebra no pudo cargarse. Verifique su conexión a internet.</div>';
                    }
                }
            }

            // Render Math if available
            if (typeof renderMathInElement !== 'undefined') {
                renderMathInElement(container, {
                    delimiters: [
                        { left: "\\[", right: "\\]", display: true },
                        { left: "$", right: "$", display: false }
                    ],
                    throwOnError: false
                });
            } else {
                console.warn('KaTeX library not loaded.');
            }

            this.updateNavigation();
        } catch (error) {
            console.error('Error displaying question:', error);
            const container = document.getElementById('question-container');
            if (container) {
                container.innerHTML = `<div class="error-message">Error al mostrar la pregunta: ${error.message}</div>`;
            }
        }
    }

    resizeGeoGebra(action) {
        const container = document.querySelector('.geogebra-container');
        const sizeIndicator = document.getElementById('size-value');
        if (!container) return;

        const currentHeight = parseInt(container.style.height || '400');
        const step = 50;
        let newHeight;

        if (action === 'increase') {
            newHeight = Math.min(currentHeight + step, 800);
        } else {
            newHeight = Math.max(currentHeight - step, 200);
        }

        container.style.height = `${newHeight}px`;
        sizeIndicator.textContent = newHeight;

        if (window.ggbApplet) {
            window.ggbApplet.setHeight(newHeight);
            window.ggbApplet.setWidth(container.offsetWidth);
        }
    }

    resetGeoGebraSize() {
        const container = document.querySelector('.geogebra-container');
        const sizeIndicator = document.getElementById('size-value');
        if (!container) return;

        const defaultHeight = 400;

        container.style.height = `${defaultHeight}px`;
        sizeIndicator.textContent = defaultHeight;

        if (window.ggbApplet) {
            window.ggbApplet.setHeight(defaultHeight);
            window.ggbApplet.setWidth(container.offsetWidth);
        }
    }

    openGeoGebraPopup(geogebraId, geogebraAppName) {
        const width = 1000;
        const height = 800;
        const left = (screen.width - width) / 2;
        const top = (screen.height - height) / 2;

        const popup = window.open('', 'GeoGebraPopup', `width=${width},height=${height},top=${top},left=${left}`);

        if (popup) {
            popup.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>GeoGebra Visualizer</title>
                    <script src="https://www.geogebra.org/apps/deployggb.js"><\/script>
                    <style>
                        body { margin: 0; padding: 0; overflow: hidden; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f0f2f5; }
                        #ggb-element { width: 100%; height: 100%; }
                    </style>
                </head>
                <body>
                    <div id="ggb-element"></div>
                    <script>
                        const params = {
                            "width": window.innerWidth,
                            "height": window.innerHeight,
                            "showToolBar": true,
                            "showAlgebraInput": true,
                            "showMenuBar": true,
                            "enableLabelDrags": true,
                            "enableShiftDragZoom": true,
                            "enableRightClick": true,
                            "showResetIcon": true,
                            "useBrowserForJS": true,
                            "allowStyleBar": true,
                            "borderColor": "#ffffff"
                        };
                        
                        if ('${geogebraId}') {
                            params.material_id = '${geogebraId}';
                        }
                        if ('${geogebraAppName}') {
                            params.appName = '${geogebraAppName}';
                        }

                        const applet = new GGBApplet(params, true);
                        window.onload = function() {
                            applet.inject('ggb-element');
                        };
                        window.onresize = function() {
                            if(window.ggbApplet) {
                                window.ggbApplet.setSize(window.innerWidth, window.innerHeight);
                            }
                        };
                    <\/script>
                </body>
                </html>
            `);
            popup.document.close();
        } else {
            alert('Por favor, permite las ventanas emergentes para ver el gráfico.');
        }
    }

    updateNavigation() {
        document.getElementById('prev-btn').classList.toggle('hidden', this.currentIndex === 0);
        document.getElementById('next-btn').classList.toggle('hidden', this.currentIndex === this.currentQuestions.length - 1);
        document.getElementById('finish-btn').classList.toggle('hidden', this.currentIndex !== this.currentQuestions.length - 1);
    }

    nextQuestion() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            alert('Por favor, selecciona una respuesta antes de continuar');
            return;
        }

        this.answers[this.currentIndex] = parseInt(selectedAnswer.value);
        this.currentIndex++;
        this.displayCurrentQuestion();
    }

    previousQuestion() {
        this.currentIndex--;
        this.displayCurrentQuestion();
    }

    finishExam() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            this.answers[this.currentIndex] = parseInt(selectedAnswer.value);
        }

        this.calculateResults();
    }

    calculateResults() {
        this.results.correctAnswers = 0;
        this.results.totalQuestions = this.currentQuestions.length;
        this.results.details = [];

        this.results.totalPoints = 0;
        this.results.maxPoints = 0;

        this.currentQuestions.forEach((question, index) => {
            const userAnswer = this.answers[index];
            const isCorrect = userAnswer === question.correct;
            const points = question.points || 0;

            this.results.maxPoints += points;

            if (isCorrect) {
                this.results.correctAnswers++;
                this.results.totalPoints += points;
            }

            this.results.details.push({
                question: question.question,
                isCorrect: isCorrect,
                userAnswer: question.options[userAnswer]?.latex || 'No respondida',
                correctAnswer: question.options[question.correct].latex,
                latex: question.latex,
                points: points,
                earnedPoints: isCorrect ? points : 0
            });
        });

        // Round points to 2 decimal places
        this.results.totalPoints = Math.round(this.results.totalPoints * 100) / 100;
        this.results.maxPoints = Math.round(this.results.maxPoints * 100) / 100;

        this.saveResultToHistory();
        this.displayResults();
    }

    saveResultToHistory() {
        if (!this.userInfo) return;

        const historyItem = {
            date: new Date().toLocaleDateString('es-CO'), // Format: DD/MM/YYYY or similar based on locale
            timestamp: new Date().toISOString(),
            name: this.userInfo.name,
            id: this.userInfo.id,
            score: this.results.totalPoints,
            maxScore: this.results.maxPoints,
            percentage: ((this.results.totalPoints / this.results.maxPoints) * 100).toFixed(2)
        };

        let history = [];
        try {
            const stored = localStorage.getItem('exam_history');
            if (stored) history = JSON.parse(stored);
        } catch (e) {
            console.warn("Error reading history", e);
        }

        history.push(historyItem);
        localStorage.setItem('exam_history', JSON.stringify(history));
    }

    displayResults() {
        document.getElementById('exam-section').classList.add('hidden');
        document.getElementById('results-section').classList.remove('hidden');

        const scoreDisplay = document.getElementById('score-display');
        const percentage = this.results.maxPoints > 0
            ? (this.results.totalPoints / this.results.maxPoints) * 100
            : 0;

        // User Info Header
        const userInfoHtml = this.userInfo ? `
            <div class="user-info-result" style="background: #e9ecef; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; color: #495057;">Estudiante: ${this.userInfo.name}</h3>
                <p style="margin: 0; font-size: 1.1em;"><strong>ID:</strong> ${this.userInfo.id}</p>
            </div>
        ` : '';

        // Score Display
        scoreDisplay.innerHTML = `
            ${userInfoHtml}
            <div style="text-align: center; margin: 20px 0;">
                <div style="font-size: 2.5em; font-weight: bold; color: ${percentage >= 60 ? '#28a745' : '#dc3545'};">
                    ${this.results.totalPoints} / ${this.results.maxPoints} Puntos
                </div>
                <div style="font-size: 1.2em; color: #6c757d;">
                    ${this.results.correctAnswers} de ${this.results.totalQuestions} respuestas correctas (${percentage.toFixed(1)}%)
                </div>
            </div>
            <div style="text-align: center; margin-bottom: 20px;">
                <button onclick="examSystem.saveAllResults()" class="action-btn export-btn" style="background: #28a745; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 1em; margin-right: 10px;">
                    Guardar Resultados (Sincronizado)
                </button>
                <button onclick="examSystem.exportIndividualDetail()" class="action-btn export-btn" style="background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 1em;">
                    Descargar Detalle (Solo Este)
                </button>
            </div>
        `;

        const detailsContainer = document.getElementById('detailed-results');
        detailsContainer.innerHTML = this.results.details.map((detail, index) => `
            <div class="question-result ${detail.isCorrect ? 'correct' : 'incorrect'}">
                <div style="display: flex; justify-content: space-between;">
                    <strong>Pregunta ${index + 1}</strong>
                    <span>${detail.earnedPoints} / ${detail.points} pts</span>
                </div>
                <p>${detail.question}</p>
                <div class="latex-display">$${detail.latex}$</div>
                <p>Tu respuesta: $${detail.userAnswer}$</p>
                ${!detail.isCorrect ? `<p>Respuesta correcta: $${detail.correctAnswer}$</p>` : ''}
            </div>
        `).join('');

        if (typeof renderMathInElement !== 'undefined') {
            renderMathInElement(detailsContainer, {
                delimiters: [
                    { left: "\\[", right: "\\]", display: true },
                    { left: "$", right: "$", display: false }
                ],
                throwOnError: false
            });
        }
    }

    exportHistoryToExcel() {
        if (typeof XLSX === 'undefined') {
            alert('La librería SheetJS no está cargada. No se puede exportar.');
            return;
        }

        let history = [];
        try {
            const stored = localStorage.getItem('exam_history');
            if (stored) history = JSON.parse(stored);
        } catch (e) {
            console.warn("Error reading history", e);
        }

        if (history.length === 0) {
            alert("No hay historial de evaluaciones guardado.");
            return;
        }

        // Group by Date
        const grouped = {};
        history.forEach(item => {
            // Use date as key. Sanitize for sheet name (remove / or :)
            const dateKey = item.date.replace(/\//g, '-');
            if (!grouped[dateKey]) grouped[dateKey] = [];
            grouped[dateKey].push(item);
        });

        const wb = XLSX.utils.book_new();

        Object.keys(grouped).forEach(dateKey => {
            const sheetData = [
                ['Apellidos y Nombres', 'ID / CC', 'NOTA', 'Puntaje Máximo', 'Porcentaje', 'Hora']
            ];

            grouped[dateKey].forEach(entry => {
                const time = new Date(entry.timestamp).toLocaleTimeString();
                sheetData.push([
                    entry.name,
                    entry.id,
                    entry.score,
                    entry.maxScore,
                    entry.percentage + '%',
                    time
                ]);
            });

            const ws = XLSX.utils.aoa_to_sheet(sheetData);
            // Sheet names max 31 chars
            const safeName = dateKey.substring(0, 31);
            XLSX.utils.book_append_sheet(wb, ws, safeName);
        });

        XLSX.writeFile(wb, "Resultados_Evaluacion_Generada.xlsx");
    }

    exportIndividualDetail() {
        if (typeof XLSX === 'undefined') {
            alert('La librería SheetJS no está cargada. No se puede exportar.');
            return;
        }

        // Prepare data
        const headers = ['Nombre', 'ID', 'Puntaje Total', 'Puntaje Máximo', 'Porcentaje', 'Fecha'];
        const userData = [
            this.userInfo ? this.userInfo.name : 'Anónimo',
            this.userInfo ? this.userInfo.id : 'N/A',
            this.results.totalPoints,
            this.results.maxPoints,
            `${((this.results.totalPoints / this.results.maxPoints) * 100).toFixed(2)}%`,
            new Date().toLocaleString()
        ];

        const detailsHeaders = ['No.', 'Pregunta', 'Respuesta Usuario', 'Correcta', 'Puntos Obtenidos', 'Puntos Posibles'];
        const detailsData = this.results.details.map((d, i) => [
            i + 1,
            d.question,
            d.userAnswer.replace(/\$/g, ''), // Remove latex delimiters for cleaner excel
            d.isCorrect ? 'Correcta' : 'Incorrecta',
            d.earnedPoints,
            d.points
        ]);

        // Create workbook
        const wb = XLSX.utils.book_new();

        // Summary Sheet
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

        XLSX.utils.book_append_sheet(wb, wsSummary, "Resultados");

        // Write file
        const fileName = `Detalle_${this.userInfo ? this.userInfo.name.replace(/\s+/g, '_') : 'Evaluacion'}_${this.userInfo ? this.userInfo.id : ''}.xlsx`;
        XLSX.writeFile(wb, fileName);
    }

    saveAllResults() {
        if (!confirm('Se descargarán dos archivos:\n1. El reporte detallado de este estudiante.\n2. El histórico general actualizado.\n\nPor favor, asegúrese de guardar cada uno en su carpeta correspondiente:\n- Detalle -> "RESULTADOS detallados por Evaluacion"\n- Histórico -> "RESULTADOS historicos de evaluaciones"')) {
            return;
        }

        // Download Individual Detail
        this.exportIndividualDetail();

        // Small delay to ensure browser handles second download
        setTimeout(() => {
            this.exportHistoryToExcel();
        }, 1000);
    }

    resetExam() {
        this.selectedCategories.clear();
        this.answers = {};
        this.currentQuestions = [];
        this.currentIndex = 0;

        document.querySelectorAll('.select-btn').forEach(btn => {
            btn.classList.remove('selected');
            btn.textContent = 'Seleccionar';
        });

        document.getElementById('results-section').classList.add('hidden');
        document.getElementById('setup-section').classList.remove('hidden');
    }
}
