// Aplicación con la interfaz de la Caja de Herramientas: menú lateral y pestañas.
// Las secciones de práctica, generador y análisis están en index.html y conservan su
// estado al cambiar de pestaña (se ocultan, no se borran).
const app = {
    currentTool: null,
    practiceView: 'setup-section', // vista de la práctica que estaba abierta (elegir, responder o resultados)
    generatorReady: false,

    // ---------- Menú ----------
    loadTool(tool, opciones = {}) {
        const secciones = [...document.querySelectorAll('[data-tool-section]')];
        if (!secciones.some(s => s.dataset.toolSection === tool)) tool = 'introduccion1';

        // Recordar qué parte de la práctica estaba visible antes de salir
        if (this.currentTool === 'practica') {
            const visible = ['setup-section', 'exam-section', 'results-section']
                .find(id => !document.getElementById(id).classList.contains('hidden'));
            if (visible) this.practiceView = visible;
        }

        document.querySelectorAll('#sidebar button.active').forEach(b => b.classList.remove('active'));
        const boton = document.querySelector(`#sidebar button[data-tool="${tool}"]`);
        if (boton) boton.classList.add('active');
        this.currentTool = tool;

        secciones.forEach(s => s.classList.add('hidden'));
        // La previsualización del generador es una ventana sobre la página: se cierra al cambiar de pestaña
        document.getElementById('preview-modal')?.classList.add('hidden');

        if (tool === 'practica') {
            const enCurso = window.examSystem && examSystem.examInProgress;
            document.getElementById(enCurso ? 'exam-section' : this.practiceView).classList.remove('hidden');
        } else {
            const seccion = document.querySelector(`[data-tool-section="${tool}"]`);
            this.llenar(tool, seccion);
            seccion.classList.remove('hidden');
        }
        if (tool === 'generador' && !this.generatorReady) {
            window.evaluationGenerator.init();
            this.generatorReady = true;
        }

        // Dirección enlazable (index.html#generador) sin recargar
        if (location.hash.slice(1) !== tool) history.replaceState(null, '', `#${tool}`);
        document.getElementById('content').scrollTo({ top: 0 });
        // Tras un clic del usuario, llevar el foco al contenido (lectores de pantalla y teclado)
        if (opciones.foco) {
            const titulo = document.querySelector(`[data-tool-section="${tool}"]:not(.hidden) h2`);
            if (titulo) {
                titulo.setAttribute('tabindex', '-1');
                titulo.focus({ preventScroll: true });
            }
        }
    },

    // Contenido generado de las pestañas fijas (una sola vez)
    llenar(tool, seccion) {
        if (!seccion || seccion.dataset.lleno) return;
        const html = {
            introduccion1: () => this.introduccion(),
            videos: () => VideosCanal.html(),
            g_Geogebra: () => this.geogebra(),
            manualUsuario: () => this.manual()
        }[tool];
        if (!html) return;
        seccion.innerHTML = html();
        seccion.dataset.lleno = '1';
        ExamUtils.renderMath(seccion);
    },

    // Abre la práctica con una categoría ya elegida (botones de «Aprendo con videos»)
    practicar(clave) {
        this.loadTool('practica', { foco: true });
        if (examSystem.examInProgress) {
            Avisos.mostrar('Hay una práctica en curso: termínela antes de empezar otra.', 'warning');
            return;
        }
        if (this.practiceView !== 'setup-section') examSystem.resetExam();
        this.practiceView = 'setup-section';
        document.querySelectorAll('#categories-container .select-btn').forEach(btn => {
            const quiere = btn.dataset.id === clave;
            if (quiere !== examSystem.selectedCategories.has(btn.dataset.id)) examSystem.toggleCategory(btn.dataset.id, btn);
        });
        const elegido = document.querySelector(`#categories-container .select-btn[data-id="${clave}"]`);
        if (elegido) {
            elegido.closest('.category-card').scrollIntoView({ block: 'center' });
            Avisos.mostrar(`Categoría seleccionada: ${elegido.closest('.category-card').querySelector('h3').textContent}. Elija el número de preguntas y pulse «Comenzar Práctica».`, 'info');
        }
    },

    // Muestra un aviso dentro de un contenedor de la página (como en la Caja de Herramientas)
    showMessage(targetId, text, type = 'warning') {
        const target = document.getElementById(targetId);
        if (!target) return;
        target.innerHTML = '';
        if (!text) return;
        const box = document.createElement('div');
        box.className = `alert alert-${type} alert-dismissible py-2 mb-2`;
        box.setAttribute('role', 'alert');
        box.textContent = text;
        const close = document.createElement('button');
        close.type = 'button';
        close.className = 'btn-close';
        close.setAttribute('aria-label', 'Cerrar');
        close.addEventListener('click', () => box.remove());
        box.appendChild(close);
        target.appendChild(box);
    },

    // Manual en ventana emergente; si el navegador la bloquea, lo avisa en la página
    abrirManual() {
        const ancho = Math.min(1000, screen.availWidth - 40), alto = screen.availHeight - 60;
        const ventana = window.open('docs/manual_usuario.pdf?v=2.10', 'manualUsuario',
            `width=${ancho},height=${alto},left=${Math.max(0, (screen.availWidth - ancho) / 2)},top=20,resizable=yes,scrollbars=yes`);
        if (!ventana) {
            this.showMessage('manualMensaje', 'El navegador bloqueó la ventana emergente. Permita las ventanas emergentes para esta página o use «Descargar PDF».');
            return;
        }
        ventana.focus();
    },

    // Copia un comando de GeoGebra y lo confirma en el propio botón
    copiar(boton) {
        const texto = boton.dataset.cmd;
        const listo = () => {
            const antes = boton.innerHTML;
            boton.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i><span class="visually-hidden">Copiado</span>';
            boton.classList.replace('btn-outline-secondary', 'btn-success');
            setTimeout(() => { boton.innerHTML = antes; boton.classList.replace('btn-success', 'btn-outline-secondary'); }, 1200);
        };
        const respaldo = () => {
            const area = document.createElement('textarea');
            area.value = texto;
            area.className = 'copiar-oculto';
            document.body.appendChild(area);
            area.select();
            let ok = false;
            try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
            area.remove();
            if (ok) listo();
            else this.showMessage('copiarMensaje', `No se pudo copiar automáticamente. Seleccione y copie el comando: ${texto}`, 'warning');
        };
        if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(texto).then(listo, respaldo);
        else respaldo();
    },

    introduccion() {
        // [herramienta, nombre, descripción]
        const herramientas = [
            ['practica', 'Práctica por categorías', 'El estudiante elige categorías y número de preguntas; al terminar ve su nota, la respuesta correcta y las pistas.'],
            ['generador', 'Generador de evaluaciones', 'Arma evaluaciones de 50 puntos con el banco: PDF, versiones A/B/C con su clave, Excel, LaTeX, evaluación en línea y archivo para estudiantes.'],
            ['analisis', 'Análisis de resultados', 'Dificultad, discriminación y distractores de cada pregunta a partir de los resultados (Google Sheets o Excel), con alertas de claves equivocadas.'],
            ['videos', 'Aprendo con videos', 'Videos del canal del profesor John Jairo Estrada asociados a las categorías del banco, con el botón para practicarlas.'],
            ['g_Geogebra', 'Geogebra Clásico', 'Acceso a GeoGebra Clásico, Cálculo simbólico (CAS), Calculadora gráfica y 3D, con comandos para comprobar las respuestas.'],
            ['manualUsuario', 'Manual de usuario', 'Guía completa de la aplicación en PDF, con capturas y ejemplos de cada herramienta.']
        ];
        const nCat = window.allQuestions ? Object.keys(window.allQuestions.categories || {}).length : 0;
        const nPreg = window.allQuestions ? window.allQuestions.questions.length : 0;
        return `
        <div class="intro-tool">
            <h2 class="mb-4">Introducción a la Caja de Herramientas</h2>
            <div class="card mb-4">
                <div class="card-body">
                    <p>Hace algún tiempo el profesor Carlos Andrés Escobar Guerra propuso la creación de unas cartillas para los cursos de matemáticas de la Facultad de Ciencias y Biotecnología. La elaboración de las cartillas produjo la necesidad de tener las herramientas para desarrollar sus actividades.</p>
                    <p>Así se llegó a la creación de una caja de herramientas con aplicaciones de aritmética, matemáticas I, II y III, y aplicaciones más avanzadas. La caja de herramientas hace más dinámica la clase y ayuda a que los estudiantes adquieran los saberes esenciales más rápidamente; depende del profesor y de los estudiantes no pasar por alto los detalles que conducen a la solución.</p>
                    <p>Para solucionar muchos de los ejercicios y problemas no es necesario ser un gran estudiante de matemáticas; eso sí, hay que saber interiorizar y entender los conceptos que ayudan a solucionar el problema. En la caja de herramientas encontrará los instrumentos que le ayudarán a hacerlo; depende del alumno escoger la herramienta adecuada.</p>
                    <p>Otra gran ventaja de esta caja de herramientas es que todas las aplicaciones están reunidas en un solo espacio virtual, pensadas y diseñadas especialmente para responder a las necesidades de nuestros estudiantes.</p>
                    <p>Para su desarrollo se utilizaron tecnologías como R, LaTeX, Flexdashboard, Bookdown, Shiny y GeoGebra. El diseño visual de la página se trabajó con HTML y CSS, y para hacerla más interactiva y dinámica incorporamos JavaScript.</p>
                    <p class="mb-0">El equipo de trabajo está conformado por el profesor Carlos Andrés Escobar Guerra, Pablo Andrés Guzmán, John Jairo Estrada Álvarez y Juan Alberto Arias Quiceno. Agradecemos especialmente la invaluable ayuda del profesor de estadística y programación Pablo Andrés Guzmán, quien inspiró la creación de un grupo de estudio en el que compartía sus conocimientos de R y de otros programas, y que actualmente da su opinión sobre las nuevas aplicaciones. John Jairo Estrada, el cerebro del proyecto, es el programador de todas las aplicaciones.</p>
                </div>
            </div>
            <h3 class="mb-3">Herramientas disponibles</h3>
            <p class="text-muted">Elija una herramienta en el menú lateral o con los botones de abajo. El banco tiene ${nPreg} preguntas en ${nCat} categorías; algunas son paramétricas (cada estudiante recibe sus propios números) y otras se responden moviendo una construcción de GeoGebra.</p>
            <div class="alert alert-info">
                <strong>Flujo de trabajo del docente:</strong> 1) arme la evaluación en el <em>Generador</em>; 2) imprímala (con versiones A/B/C) o preséntela en línea; 3) reciba los resultados en Google Sheets o en Excel; 4) revise en <em>Análisis de resultados</em> qué preguntas conviene corregir.
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
                ${herramientas.map(([id, nombre, descripcion]) => `
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body d-flex flex-column">
                            <h4 class="card-title h5">${nombre}</h4>
                            <p class="card-text small flex-grow-1">${descripcion}</p>
                            <button type="button" class="btn btn-outline-primary btn-sm align-self-start" data-tool-open="${id}" aria-label="Abrir ${nombre}">Abrir</button>
                        </div>
                    </div>
                </div>`).join('')}
            </div>
        </div>`;
    },

    geogebra() {
        const tarjeta = (titulo, icono, color, texto, url) => `
            <div class="col-lg-3 col-md-6">
                <div class="card h-100">
                    <div class="card-header text-center">${titulo}</div>
                    <div class="card-body d-flex flex-column align-items-center">
                        <i class="fas ${icono} display-4 mb-3 ${color}" aria-hidden="true"></i>
                        <p class="mb-3 text-center">${texto}</p>
                        <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary w-100 mt-auto">
                            <i class="fas fa-external-link-alt me-2" aria-hidden="true"></i> Abrir ${titulo}<span class="visually-hidden"> (pestaña nueva)</span>
                        </a>
                    </div>
                </div>
            </div>`;
        // [para qué, comando, resultado] — comprobados en el CAS de GeoGebra en español (6 nov 2026)
        const comandos = [
            ['Derivada', 'Derivada(3x^4)', '$12x^{3}$'],
            ['Integral definida', 'Integral(x^2, 0, 3)', '$9$'],
            ['Integral indefinida', 'Integral(x exp(x))', '$x e^{x} - e^{x} + c$'],
            ['Límite', 'Límite(sin(x)/x, 0)', '$1$'],
            ['Resolver una ecuación', 'Resuelve(2x + 15 = -1)', '$\\{x = -8\\}$'],
            ['Resolver un sistema', 'Resuelve({2x + y = 7, x - y = -1}, {x, y})', '$\\{x = 2,\\ y = 3\\}$'],
            ['Factorizar', 'Factoriza(x^2 - 5x + 6)', '$(x - 2)(x - 3)$'],
            ['Determinante', 'Determinante({{2, 1}, {1, 3}})', '$5$'],
            ['Media de datos', 'Media({1, 2, 20, 14, 11})', '$\\frac{48}{5} = 9.6$'],
            ['Probabilidad normal', 'Normal(0, 1, 1.96)', '$P(Z \\le 1.96) \\approx 0.975$'],
            ['Resolver una EDO', 'ResuelveEDO(y\' = y, (0, 1))', '$y = e^{x}$']
        ];
        const fila = ([para, cmd, res]) => `
            <tr><td>${para}</td>
                <td><code>${ExamUtils.escapeHtml(cmd)}</code>
                    <button type="button" class="btn btn-sm btn-outline-secondary ms-1 py-0" title="Copiar el comando" aria-label="Copiar el comando ${ExamUtils.escapeHtml(cmd)}" data-cmd="${ExamUtils.escapeHtml(cmd)}"><i class="fas fa-copy" aria-hidden="true"></i></button></td>
                <td>${res}</td></tr>`;
        return `
        <h2 class="mb-4"><i class="fas fa-compass text-primary" aria-hidden="true"></i> GeoGebra Clásico</h2>
        <p class="mb-4">Acceso a las aplicaciones oficiales de GeoGebra, en español, para comprobar las respuestas de las preguntas.</p>
        <div class="row g-4">
            ${tarjeta('GeoGebra Clásico', 'fa-shapes', 'text-primary', 'Versión completa: gráficas, geometría, hoja de cálculo y cálculo simbólico.', 'https://www.geogebra.org/classic?lang=es')}
            ${tarjeta('Cálculo simbólico (CAS)', 'fa-calculator', 'text-secondary', 'Derivadas, integrales, ecuaciones y factorización con resultados exactos.', 'https://www.geogebra.org/cas?lang=es')}
            ${tarjeta('Calculadora gráfica', 'fa-chart-line', 'text-info', 'Gráficas de funciones, rectas y cónicas; cortes y áreas.', 'https://www.geogebra.org/graphing?lang=es')}
            ${tarjeta('Calculadora 3D', 'fa-cube', 'text-success', 'Planos, superficies y vectores en el espacio.', 'https://www.geogebra.org/3d?lang=es')}
        </div>
        <div class="card mt-4 card-comandos">
            <div class="card-body">
                <h3 class="card-title h5"><i class="fas fa-lightbulb text-warning" aria-hidden="true"></i> Comandos para comprobar las respuestas</h3>
                <p class="mb-2">Copie cada comando con <i class="fas fa-copy" aria-hidden="true"></i> y péguelo en la barra de entrada de GeoGebra Clásico o del CAS.</p>
                <div class="table-responsive">
                    <table class="table table-sm table-bordered align-middle mb-2">
                        <thead class="table-light"><tr><th scope="col">Para</th><th scope="col">Escriba en GeoGebra</th><th scope="col">Resultado</th></tr></thead>
                        <tbody>${comandos.map(fila).join('')}</tbody>
                    </table>
                </div>
                <div id="copiarMensaje" aria-live="polite"></div>
                <ul class="small mb-0">
                    <li>Los decimales llevan punto (0.5). Las listas y matrices van entre llaves: <code>{1, 2, 3}</code>, <code>{{fila 1}, {fila 2}}</code>.</li>
                    <li>Los comandos se comprobaron en la vista Cálculo simbólico (CAS), que da resultados exactos con fracciones y radicales. Para <em>e</em>ˣ escriba <code>exp(x)</code>.</li>
                    <li>Dentro de la práctica y de la evaluación en línea, las preguntas con calculadora tienen el botón «Abrir calculadora GeoGebra».</li>
                </ul>
            </div>
        </div>
        <div class="alert alert-warning mt-3 mb-0">
            <i class="fas fa-exclamation-triangle" aria-hidden="true"></i> Las aplicaciones de GeoGebra se abren en una pestaña nueva del navegador y necesitan conexión a internet.
        </div>`;
    },

    manual() {
        const pdf = 'docs/manual_usuario.pdf?v=2.10';
        return `
        <div class="manual-tool">
            <h2 class="mb-3"><i class="fas fa-book text-primary" aria-hidden="true"></i> Manual de usuario</h2>
            <p>Guía de uso de todas las herramientas, con capturas y ejemplos. Puede leerla aquí, abrirla en una ventana aparte para consultarla mientras trabaja, o descargarla.</p>
            <div class="d-flex flex-wrap gap-2 mb-3">
                <button type="button" class="btn btn-primary" data-abrir-manual>
                    <i class="fas fa-external-link-alt" aria-hidden="true"></i> Ver en ventana emergente
                </button>
                <a class="btn btn-outline-secondary" href="${pdf}" download="Manual de usuario - Evaluación matemática.pdf">
                    <i class="fas fa-download" aria-hidden="true"></i> Descargar PDF
                </a>
            </div>
            <div id="manualMensaje" aria-live="polite"></div>
            <iframe src="${pdf}" title="Manual de usuario (PDF)" class="visor-manual"></iframe>
            <p class="small text-muted mt-2">Si el manual no se ve en el recuadro, use «Ver en ventana emergente» o «Descargar PDF».</p>
        </div>`;
    }
};
window.app = app;

document.addEventListener('DOMContentLoaded', () => {
    window.examSystem = new ExamSystem();
    // Reenviar resultados que quedaron pendientes por falta de internet
    ResultsSync.retryPending();

    // Un solo manejador para el menú, las tarjetas y los botones de las pestañas generadas
    document.addEventListener('click', (e) => {
        const menu = e.target.closest('#sidebar button[data-tool]');
        if (menu) return app.loadTool(menu.dataset.tool, { foco: true });
        const abrir = e.target.closest('[data-tool-open]');
        if (abrir) return app.loadTool(abrir.dataset.toolOpen, { foco: true });
        const practicar = e.target.closest('[data-practicar]');
        if (practicar) return app.practicar(practicar.dataset.practicar);
        const copiar = e.target.closest('[data-cmd]');
        if (copiar) return app.copiar(copiar);
        if (e.target.closest('[data-abrir-manual]')) return app.abrirManual();
    });

    // «Nueva práctica» en la pantalla de resultados
    document.getElementById('restart-btn').addEventListener('click', () => {
        examSystem.resetExam(true); // conserva las categorías elegidas
        app.practiceView = 'setup-section';
        document.getElementById('content').scrollTo({ top: 0 });
    });

    // Pestaña inicial: la de la dirección (index.html#generador) o la Introducción.
    // analisis.html (dirección antigua) redirige a index.html#analisis.
    app.loadTool(location.hash.slice(1) || 'introduccion1');

    // Cambios de la dirección sin recargar (editar #pestaña, enlaces internos)
    window.addEventListener('hashchange', () => {
        const tool = location.hash.slice(1);
        if (tool && tool !== app.currentTool) app.loadTool(tool, { foco: true });
    });
});
