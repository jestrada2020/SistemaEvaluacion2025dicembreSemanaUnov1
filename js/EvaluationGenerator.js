class EvaluationGenerator {
    constructor() {
        this.questions = [];
        this.selectedQuestions = [];
        this.totalPoints = 0;
        this.minQuestions = 20;
        this.targetPoints = 50;
        this.headerLayout = { addedSpace: 0 };
    }

    loadDatabase() {
        if (window.allQuestions && window.allQuestions.questions) {
            this.questions = window.allQuestions.questions;
            this.renderInterface();
        } else {
            console.error('Error loading questions database: window.allQuestions not found');
            alert('Error cargando la base de datos de preguntas. Asegúrate de que questions.js se ha cargado correctamente.');
        }
    }

    init() {
        this.loadDatabase();
        this.bindEvents();
    }

    bindEvents() {
        // Event delegation or direct binding will be handled in renderInterface or main setup
        document.addEventListener('click', (e) => {
            if (e.target.id === 'save-eval-btn') {
                this.validateAndSave();
            } else if (e.target.id === 'generate-random-btn') {
                this.generateRandom();
            }
        });
    }

    renderInterface() {
        const container = document.getElementById('generator-container');
        if (!container) return;

        container.innerHTML = `
            <div class="generator-layout">
                <div class="panel available-questions">
                    <h3>Banco de Preguntas</h3>
                    <div class="filter-controls">
                        <input type="text" id="search-questions" placeholder="Buscar...">
                        <select id="category-filter">
                            <option value="all">Todas las categorías</option>
                            ${this.getUniqueCategories().map(c => `<option value="${c}">${c}</option>`).join('')}
                        </select>
                    </div>
                    <div id="questions-list" class="questions-list">
                        ${this.renderQuestionsList(this.questions)}
                    </div>
                </div>
                
                <div class="panel selected-questions">
                    <h3>Evaluación en Construcción</h3>
                    
                    <div class="random-controls" style="margin-bottom: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
                        <h4>Generación Aleatoria</h4>
                        <div style="margin-bottom: 10px;">
                            <button class="action-btn" style="padding: 5px 10px; font-size: 0.8em; background-color: #17a2b8;" onclick="evaluationGenerator.selectAllModules()">Seleccionar Todos</button>
                            <button class="action-btn" style="padding: 5px 10px; font-size: 0.8em; background-color: #6c757d;" onclick="evaluationGenerator.deselectAllModules()">Deseleccionar Todos</button>
                        </div>
                        <div id="module-checkboxes" style="max-height: 200px; overflow-y: auto; border: 1px solid #ddd; padding: 5px;">
                             ${this.getUniqueCategories().sort().map(c => `
                                <label style="font-size: 0.9em; display: flex; align-items: center; margin-bottom: 3px;">
                                    <input type="checkbox" class="module-check" value="${c.replace(/"/g, '&quot;')}" checked> <span style="margin-left: 5px;">${c}</span>
                                </label>
                             `).join('')}
                        </div>
                        <div class="controls-row" style="display: flex; gap: 10px; align-items: center; margin-top: 10px;">
                            <label>
                                Cantidad de preguntas (Mínimo 20):
                                <input type="number" id="random-count" value="20" min="20" style="width: 60px; padding: 5px;">
                            </label>
                            <button id="generate-random-btn" class="action-btn" style="margin: 0; background: #6f42c1;">Generar</button>
                            <button class="action-btn" style="margin: 0; background: #dc3545;" onclick="evaluationGenerator.clearSelection()">Limpiar</button>
                        </div>
                    </div>

                    <div class="stats">
                        <span>Preguntas: <span id="count-val">${this.selectedQuestions.length}</span></span>
                        <span>Puntos: <span id="points-val">${this.totalPoints}</span>/${this.targetPoints}</span>
                    </div>
                    <div id="selected-list" class="questions-list">
                        ${this.renderSelectedList()}
                    </div>
                    <button id="save-eval-btn" class="action-btn">Previsualizar Evaluación</button>
                </div>
            </div>
        `;

        this.attachDynamicEvents();
    }

    getUniqueCategories() {
        return [...new Set(this.questions.map(q => q.category))];
    }

    renderQuestionsList(questions) {
        return questions.map(q => `
            <div class="question-item" data-id="${q.id}">
                <div class="q-content">
                    <strong>${q.category}</strong>
                    <p>${q.question}</p>
                    <small>${q.latex}</small>
                </div>
                <button class="add-btn" onclick="evaluationGenerator.addQuestion('${q.id}')">+</button>
            </div>
        `).join('');
    }

    renderSelectedList() {
        if (this.selectedQuestions.length === 0) {
            return '<p class="empty-msg">No hay preguntas seleccionadas</p>';
        }
        return this.selectedQuestions.map((item, index) => `
            <div class="question-item selected" data-index="${index}">
                <div class="q-content">
                    <p>${item.question.question}</p>
                </div>
                <div class="q-controls">
                    <input type="number" class="points-input" value="${item.points}" 
                           onchange="evaluationGenerator.updatePoints(${index}, this.value)" min="0" step="0.5">
                    <button class="remove-btn" onclick="evaluationGenerator.removeQuestion(${index})">×</button>
                </div>
            </div>
        `).join('');
    }

    addQuestion(id) {
        const question = this.questions.find(q => q.id === id);
        if (question) {
            // Check if already added
            if (this.selectedQuestions.some(sq => sq.question.id === id)) {
                alert('Esta pregunta ya está en la evaluación.');
                return;
            }
            this.selectedQuestions.push({
                question: question,
                points: 0,
                layout: { pageBreak: false, addedSpace: 0 }
            });
            this.updateStats();
            this.refreshSelectedView();
        }
    }

    removeQuestion(index) {
        this.selectedQuestions.splice(index, 1);
        this.updateStats();
        this.refreshSelectedView();
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
            if (window.renderMathInElement) {
                renderMathInElement(container, {
                    delimiters: [
                        { left: "\\[", right: "\\]", display: true },
                        { left: "$", right: "$", display: false }
                    ],
                    throwOnError: false
                });
            }
        }
    }

    attachDynamicEvents() {
        const searchInput = document.getElementById('search-questions');
        const categorySelect = document.getElementById('category-filter');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.filterQuestions(e.target.value, categorySelect.value));
        }
        if (categorySelect) {
            categorySelect.addEventListener('change', (e) => this.filterQuestions(searchInput.value, e.target.value));
        }

        // Initial render math
        const container = document.getElementById('questions-list');
        if (window.renderMathInElement && container) {
            renderMathInElement(container, {
                delimiters: [
                    { left: "\\[", right: "\\]", display: true },
                    { left: "$", right: "$", display: false }
                ],
                throwOnError: false
            });
        }
    }

    filterQuestions(searchText, category) {
        const filtered = this.questions.filter(q => {
            const matchesText = q.question.toLowerCase().includes(searchText.toLowerCase()) ||
                q.latex.includes(searchText);
            const matchesCategory = category === 'all' || q.category === category;
            return matchesText && matchesCategory;
        });

        const container = document.getElementById('questions-list');
        if (container) {
            container.innerHTML = this.renderQuestionsList(filtered);
            if (window.renderMathInElement) {
                renderMathInElement(container, {
                    delimiters: [
                        { left: "\\[", right: "\\]", display: true },
                        { left: "$", right: "$", display: false }
                    ],
                    throwOnError: false
                });
            }
        }
    }

    generateRandom() {
        // Get selected modules
        const checkboxes = document.querySelectorAll('.module-check:checked');
        const selectedModules = Array.from(checkboxes).map(cb => cb.value);

        if (selectedModules.length === 0) {
            alert('Por favor, selecciona al menos un módulo para la generación aleatoria.');
            return;
        }

        // Get count
        const countInput = document.getElementById('random-count');
        let count = parseInt(countInput.value) || 20;
        if (count < 20) {
            alert('El mínimo de preguntas es 20. Se ajustará automáticamente.');
            count = 20;
            countInput.value = 20;
        }

        // Filter questions by selected modules
        const availableQuestions = this.questions.filter(q => selectedModules.includes(q.category));

        if (availableQuestions.length < count) {
            alert(`No hay suficientes preguntas en los módulos seleccionados (${availableQuestions.length}) para generar una evaluación de ${count} preguntas.`);
            return;
        }

        // Shuffle questions
        const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());

        // Select first N
        const selected = shuffled.slice(0, count);

        // Calculate points per question (Total 50)
        const pointsPerQuestion = this.targetPoints / count;
        // Round to 2 decimals
        const roundedPoints = Math.round(pointsPerQuestion * 100) / 100;

        this.selectedQuestions = selected.map(q => ({
            question: q,
            points: roundedPoints,
            layout: { pageBreak: false, addedSpace: 0 }
        }));

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
    }

    clearSelection() {
        if (confirm('¿Estás seguro de que quieres borrar toda la selección actual?')) {
            this.selectedQuestions = [];
            this.updateStats();
            this.refreshSelectedView();
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
            alert(`Debes seleccionar al menos ${this.minQuestions} preguntas.`);
            return;
        }

        if (Math.abs(this.totalPoints - this.targetPoints) > 0.01) {
            alert(`El valor total de los puntos debe ser exactamente ${this.targetPoints}. Actual: ${this.totalPoints}`);
            return;
        }

        this.previewExam();
    }

    runOnlineExam() {
        if (confirm('¿Estás seguro de que deseas iniciar la evaluación en línea? Se abrirá en una nueva ventana.')) {
            const data = JSON.stringify(this.selectedQuestions);

            // 1. Try localStorage
            try {
                localStorage.setItem('examData', data);
            } catch (e) {
                console.warn("localStorage failed:", e);
            }

            // 2. Try sessionStorage (often works better for tabs)
            try {
                sessionStorage.setItem('examData', data);
            } catch (e) {
                console.warn("sessionStorage failed:", e);
            }

            // Open exam.html in a popup
            const width = 1000;
            const height = 800;
            const left = (screen.width - width) / 2;
            const top = (screen.height - height) / 2;

            const popup = window.open('exam.html', 'OnlineExam', `width=${width},height=${height},top=${top},left=${left},scrollbars=yes`);

            // 3. Direct injection fallback if popup opens
            if (popup) {
                // Wait for popup to load then inject data if needed
                popup.onload = function () {
                    if (popup.examSystem && !popup.examSystem.currentQuestions.length) {
                        console.log("Injecting data directly into popup");
                        popup.examSystem.startCustomExam(this.selectedQuestions);
                    }
                }.bind(this);
            } else {
                alert("Por favor, permite las ventanas emergentes para iniciar el examen.");
            }
        }
    }

    previewExam() {
        const modal = document.getElementById('preview-modal');
        const container = document.getElementById('preview-container');

        if (!modal || !container) return;

        container.innerHTML = `
            <div class="print-header" style="margin-bottom: ${30 + this.headerLayout.addedSpace}px;">
                <div class="preview-controls-bar">
                    <span style="font-size: 12px; font-weight: bold; margin-right: 10px;">Encabezado:</span>
                    <button class="layout-btn" onclick="evaluationGenerator.addHeaderSpace(20)">+ Espacio Inferior</button>
                </div>

                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 style="margin: 0;">Evaluación de Matemáticas</h2>
                    <p style="margin: 5px 0 0 0;">Generado el: <span id="print-date">${new Date().toLocaleString()}</span></p>
                </div>
                
                <div style="margin-top: 20px;">
                    <div style="display: flex; gap: 20px; align-items: flex-end; margin-bottom: 15px;">
                        <div style="flex: 2;">
                            <span class="header-label">Estudiante:</span>
                            <div class="header-line"></div>
                        </div>
                        <div style="flex: 1;">
                            <span class="header-label">ID:</span>
                            <div class="header-line"></div>
                        </div>
                    </div>
                     <div style="display: flex; gap: 20px; align-items: flex-end;">
                        <div style="flex: 1;"></div>
                        <div style="flex: 1;">
                            <span class="header-label">Fecha y Hora de Realización:</span>
                            <div class="header-line"></div>
                        </div>
                    </div>
                </div>
            </div>
            ` + this.selectedQuestions.map((item, index) => `
            ${item.layout && item.layout.pageBreak ? '<div class="page-break"></div><div class="page-break-marker"></div>' : ''}
            <div class="preview-question" style="margin-bottom: ${20 + (item.layout ? item.layout.addedSpace : 0)}px;">
                <div class="preview-controls-bar">
                    <button class="layout-btn" onclick="evaluationGenerator.moveQuestion(${index}, -1)" ${index === 0 ? 'disabled' : ''}>▲ Subir</button>
                    <button class="layout-btn" onclick="evaluationGenerator.moveQuestion(${index}, 1)" ${index === this.selectedQuestions.length - 1 ? 'disabled' : ''}>▼ Bajar</button>
                    <button class="layout-btn" onclick="evaluationGenerator.addSpace(${index}, 20)">+ Espacio</button>
                    <button class="layout-btn ${item.layout && item.layout.pageBreak ? 'active' : ''}" onclick="evaluationGenerator.togglePageBreak(${index})">Salto de Página</button>
                </div>
                <p><strong>${index + 1}.</strong> ${item.question.question} (${item.points} pts)</p>
                <div class="latex-display">$${item.question.latex}$</div>
                ${item.question.options.map((opt, i) => `
                    <div style="margin-left: 20px;">
                        <span style="font-weight: bold;">${String.fromCharCode(97 + i)})</span> $${opt.latex}$
                    </div>
                `).join('')}
            </div>
        `).join('');

        modal.classList.remove('hidden');

        if (window.renderMathInElement) {
            renderMathInElement(container, {
                delimiters: [
                    { left: "\\[", right: "\\]", display: true },
                    { left: "$", right: "$", display: false }
                ],
                throwOnError: false
            });
        }
    }

    exportPDF() {
        const dateEl = document.getElementById('print-date');
        if (dateEl) dateEl.textContent = new Date().toLocaleString();
        window.print();
    }

    exportExcel() {
        if (typeof XLSX === 'undefined') {
            alert('La librería SheetJS no está cargada.');
            return;
        }

        const data = this.selectedQuestions.map((item, index) => ({
            'No.': index + 1,
            'Categoría': item.question.category,
            'Pregunta': item.question.question,
            'LaTeX': item.question.latex,
            'Puntos': item.points
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Evaluación");
        XLSX.writeFile(wb, "evaluacion.xlsx");
    }

    exportLaTeX() {
        let texContent = `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{graphicx}
\\usepackage{geometry}
\\geometry{a4paper, margin=1in}

\\title{Evaluación de Matemáticas}
\\date{\\today}

\\begin{document}

\\begin{center}
    {\\Large \\textbf{Evaluación de Matemáticas}} \\\\
    \\vspace{0.2cm}
    Generado el: \\today
\\end{center}

\\vspace{0.5cm}

\\noindent \\textbf{Estudiante:} \\hrulefill \\hspace{1cm} \\textbf{ID:} \\makebox[4cm]{\\hrulefill} \\\\
\\vspace{0.5cm}
\\noindent \\hspace*{\\fill} \\textbf{Fecha y Hora de Realización:} \\makebox[5cm]{\\hrulefill}

\\vspace{1cm}

\\begin{enumerate}
`;

        this.selectedQuestions.forEach(item => {
            texContent += `    \\item ${item.question.question} (${item.points} pts)
    
    \\[ ${item.question.latex} \\]
    
    \\begin{enumerate}
`;
            item.question.options.forEach(opt => {
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

    exportJSON() {
        const examData = {
            title: "Evaluación Generada",
            date: new Date().toISOString(),
            info_header: {
                student: "Estudiante",
                id: "ID",
                datetime: "Fecha y Hora de Realización"
            },
            totalPoints: this.totalPoints,
            questions: this.selectedQuestions.map(item => ({
                id: item.question.id,
                points: item.points
            }))
        };
        this.downloadFile(JSON.stringify(examData, null, 2), "evaluacion.json", "application/json");
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
