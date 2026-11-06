// Lógica de exam.html (antes era un <script> en línea).
// Orden: 1) sesión en curso, 2) enlace #EVX2:..., 3) generador en este navegador, 4) archivo .examen
document.addEventListener('DOMContentLoaded', () => {
    window.examSystem = new ExamSystem();
    ResultsSync.retryPending();

    // 1. ¿Evaluación en curso en esta pestaña (se recargó la página)?
    if (window.examSystem.restoreSession()) return;

    // 2. Evaluación dentro del enlace (exam.html#EVX2:...). Se quita de la barra
    //    de direcciones para que no quede a la vista.
    let raw = null;
    if (location.hash.length > 1) {
        try { raw = decodeURIComponent(location.hash.slice(1)); } catch (e) { raw = null; }
        history.replaceState(null, '', location.pathname + location.search);
    }

    // 3. Paquete enviado por el generador en este mismo navegador. Se borra al leerlo.
    if (!raw) {
        try {
            raw = localStorage.getItem('examData');
            localStorage.removeItem('examData');
        } catch (e) { console.warn('localStorage no disponible', e); }
    }

    // 4. Respaldo: pedirlo directamente a la ventana del generador
    if (!raw) {
        try {
            if (window.opener && window.opener.evaluationGenerator) {
                raw = window.opener.evaluationGenerator.getEncodedExam();
            }
        } catch (e) { /* origen distinto */ }
    }

    if (!startFromRaw(raw, false)) showFileLoader();
});

// Devuelve true si los datos eran una evaluación válida y se inició
function startFromRaw(raw, fromFile) {
    if (!raw) return false;
    let examData = null;
    try {
        // Paquete codificado (v2) o formato antiguo en JSON plano
        examData = ExamUtils.decodePayload(String(raw).trim()) || JSON.parse(raw);
    } catch (e) {
        console.error('Datos de evaluación ilegibles', e);
    }
    const hasQuestions = examData && (Array.isArray(examData) ? examData.length : (examData.questions || []).length);
    if (!hasQuestions) {
        if (fromFile) Avisos.mostrar('El archivo no contiene una evaluación válida. Pida al docente el archivo .examen correcto.', 'danger');
        return false;
    }
    document.getElementById('file-loader')?.remove();
    document.getElementById('exam-section').classList.remove('hidden');
    window.examSystem.startCustomExam(examData);
    return true;
}

// Sin datos: permitir abrir el archivo .examen que entrega el docente
function showFileLoader() {
    document.getElementById('exam-section').classList.add('hidden');
    const box = document.createElement('div');
    box.id = 'file-loader';
    box.className = 'file-loader';
    box.innerHTML = `
        <h1>Evaluación en línea</h1>
        <p>Abra el archivo de la evaluación (<strong>.examen</strong>) que le entregó el docente:</p>
        <label class="nav-btn file-loader-btn">
            Cargar archivo de evaluación
            <input type="file" id="exam-file-input" accept=".examen,.txt" hidden>
        </label>
        <details>
            <summary>¿No tiene el archivo?</summary>
            <ul>
                <li>Si el docente abrió la evaluación desde el generador en este equipo, vuelva a pulsar «Realizar Evaluación en Línea» (por seguridad los datos se borran al cargarlos).</li>
                <li>Si recibió un enlace, ábralo completo, sin recortarlo.</li>
                <li>El modo incógnito o algunos navegadores bloquean el almacenamiento local con archivos abiertos desde el disco.</li>
            </ul>
        </details>
    `;
    const host = document.getElementById('exam-main') || document.body;
    host.insertBefore(box, host.firstChild);
    document.getElementById('exam-file-input').addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => startFromRaw(reader.result, true);
        reader.readAsText(file);
        e.target.value = '';
    });
}

// Botón «Cerrar Evaluación» de la pantalla de resultados
document.getElementById('close-exam-btn')?.addEventListener('click', () => window.close());
