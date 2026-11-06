/**
 * Recepción de resultados del Sistema de Evaluación Matemática.
 *
 * Se pega en Extensiones > Apps Script de una hoja de cálculo de Google y se
 * publica como "Aplicación web" (ver INSTRUCCIONES.md).
 *
 * Crea (si no existen) dos hojas:
 *   - "Resultados": una fila por estudiante y evaluación.
 *   - "Detalle":    una fila por pregunta respondida.
 */

// Debe coincidir con resultsToken en js/config.js
const TOKEN = 'cambie-este-texto';

const RESULTS_HEADERS = [
  'Recibido', 'ID envío', 'ID evaluación', 'Evaluación', 'Curso',
  'Apellidos y Nombres', 'ID / CC', 'Nota', 'Puntaje máximo', 'Porcentaje',
  'Correctas', 'Total preguntas', 'Inicio', 'Fin', 'Duración (min)'
];

const DETAIL_HEADERS = [
  'ID envío', 'ID evaluación', 'Apellidos y Nombres', 'ID / CC', 'No.',
  'ID pregunta', 'Categoría', 'Pregunta', 'Respuesta estudiante',
  'Respuesta correcta', 'Resultado', 'Puntos obtenidos', 'Puntos posibles',
  'Opción (banco)' // letra de la opción elegida según el orden del banco (análisis de distractores)
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000); // evita que dos envíos simultáneos se mezclen
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.token !== TOKEN) return reply_({ ok: false, error: 'token' });
    if (!data.submissionId || !data.name || !data.id) return reply_({ ok: false, error: 'datos' });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const results = sheet_(ss, 'Resultados', RESULTS_HEADERS);
    const detail = sheet_(ss, 'Detalle', DETAIL_HEADERS);

    // Un mismo envío puede llegar dos veces (reintento sin conexión): no duplicar
    const last = results.getLastRow();
    if (last > 1) {
      const ids = results.getRange(2, 2, last - 1, 1).getValues().map(r => String(r[0]));
      if (ids.indexOf(String(data.submissionId)) !== -1) return reply_({ ok: true, duplicate: true });
    }

    results.appendRow([
      new Date(), data.submissionId, data.examId || '', data.examTitle || '', data.course || '',
      text_(data.name), text_(data.id), num_(data.score), num_(data.maxScore), num_(data.percentage) / 100,
      num_(data.correctCount), num_(data.totalQuestions),
      date_(data.startedAt), date_(data.finishedAt), num_(data.durationMin)
    ]);
    results.getRange(results.getLastRow(), 10).setNumberFormat('0.0%');

    const rows = (data.details || []).map(d => [
      data.submissionId, data.examId || '', text_(data.name), text_(data.id), num_(d.n),
      d.questionId || '', d.category || '', text_(d.question), text_(d.userAnswer),
      text_(d.correctAnswer), d.isCorrect ? 'Correcta' : 'Incorrecta', num_(d.earned), num_(d.points),
      d.optionOrig || ''
    ]);
    if (rows.length) {
      detail.getRange(detail.getLastRow() + 1, 1, rows.length, DETAIL_HEADERS.length).setValues(rows);
    }

    return reply_({ ok: true });
  } catch (err) {
    return reply_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Permite comprobar en el navegador que la URL publicada funciona
function doGet() {
  return reply_({ ok: true, mensaje: 'Servicio de resultados activo' });
}

function sheet_(ss, name, headers) {
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(headers);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }
  return sh;
}

// Evita que un texto que empieza por = + - @ se interprete como fórmula
function text_(v) {
  const s = String(v == null ? '' : v).slice(0, 5000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function num_(v) {
  const n = Number(v);
  return isFinite(n) ? n : '';
}

function date_(v) {
  const d = v ? new Date(v) : null;
  return d && !isNaN(d.getTime()) ? d : '';
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
