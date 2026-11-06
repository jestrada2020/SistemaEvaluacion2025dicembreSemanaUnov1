# Práctica, evaluaciones y análisis

Aplicación de la **Caja de Herramientas Matemáticas** (Facultad de Ciencias y Biotecnología) para practicar y evaluar matemáticas con un banco de **1317 preguntas en 24 categorías**: aritmética, álgebra, ecuaciones, geometría, cálculo diferencial, integral y en varias variables, ecuaciones diferenciales, álgebra lineal, estadística, análisis numérico, combinatoria, regla de tres y más.

## Herramientas

| Pestaña | Qué hace |
|---|---|
| Introducción | Presentación de la Caja de Herramientas y tarjetas para abrir cada herramienta. |
| Práctica por categorías | El estudiante elige categorías y número de preguntas; al terminar ve su nota, la respuesta correcta y las pistas. |
| Generador de evaluaciones | Evaluaciones de 50 puntos, armadas a mano o al azar. Exporta PDF, **versiones A/B/C con su clave**, Excel, LaTeX y JSON (para volver a cargarlas). Las presenta en línea en el mismo equipo, con un archivo `.examen` o con un enlace. |
| Análisis de resultados | Dificultad, discriminación, correlación ítem-resto y distractores de cada pregunta, con alertas (por ejemplo, clave equivocada). Lee Google Sheets (xlsx o csv) y los Excel de los estudiantes. |
| Aprendo con videos | 24 videos verificados del canal del profesor John Jairo Estrada, con botones para practicar cada categoría. |
| Geogebra Clásico | Enlaces a GeoGebra en español y comandos (comprobados en el CAS) para verificar respuestas. |
| Manual de usuario | `docs/manual_usuario.pdf`: visor, ventana emergente y descarga. |

La página del estudiante es `exam.html`: ingreso, preguntas, tiempo límite, recuperación si se recarga, resultados y envío a Google Sheets.

### Tipos de preguntas
- **Opción múltiple**: las opciones se barajan para cada estudiante.
- **Paramétricas** (`params`): cada estudiante, cada práctica y cada versión impresa recibe sus propios números.
- **Tareas de GeoGebra** (`answerType: 'geogebra'`): se responden moviendo una construcción; la aplicación comprueba una condición al salir de la pregunta.

## Uso
1. Abra `index.html` en un navegador actual (Chrome, Edge o Firefox). No necesita instalación.
2. Sin internet funcionan las fórmulas (KaTeX), la práctica, el generador, las exportaciones y el análisis: las librerías están en `lib/`.
3. GeoGebra, los videos y el envío a Google Sheets necesitan internet.
4. Para recibir los resultados en Google Sheets siga `google_apps_script/INSTRUCCIONES.md` y escriba la dirección en `js/config.js`.

## Cómo editar el banco de preguntas
Las preguntas están en `js/modules/*.js` (un archivo por categoría). Después de editar:

```bash
node merge_questions.js
```

El comando valida el banco: respuesta dentro del rango, opciones distintas, fórmulas que KaTeX puede mostrar y 40 versiones de cada pregunta paramétrica. Luego reescribe `js/data/questions.js`. Si encuentra un error, **no escribe nada** y muestra el ID de la pregunta.

- Agregue las preguntas nuevas **al final** del módulo, para que no cambien los ID de las demás.
- Para retirar una pregunta sin borrarla: `disabled: 'motivo'`.
- **Fórmulas**: el campo `latex` y las opciones ya son fórmulas (no lleve `$`). En el texto del enunciado (`question`) escriba las fórmulas entre `$...$`, por ejemplo `'Calcule la inversa $A^{-1}$:'`; si no, se verá «A^{-1}» tal cual. Las palabras dentro de una fórmula van en `\\text{...}` (`'\\text{Infinitas soluciones}'`); sin él se ven en cursiva y sin espacios. `merge_questions.js` valida las fórmulas del enunciado y avisa si queda notación fuera de los `$`. En las pistas (`hint`) también se pueden escribir fórmulas entre `$...$`.
- **Decimales con coma**: en el texto `2,5`; dentro de fórmulas `2{,}5` (si no, KaTeX muestra «2, 5»). En tuplas con decimales separe con punto y coma: `B(10;\\ 0{,}5)`. En `params`, `where`, `geogebraCommands` y `geogebraCheck` use punto (son expresiones que se calculan).
- No ponga en `latex` un relleno como `'\\text{Tipo?}'`: si la pregunta no tiene fórmula, deje `latex: ''`. Si el enunciado está en el campo `latex` (por ejemplo, un acertijo), páselo a `question`.
- La sintaxis de las paramétricas está explicada al comienzo de `js/parametric.js`.
- Si varias preguntas comparten una construcción de GeoGebra, cada una lleva su `geogebraState` (1, 2, 3…). Los valores de sus deslizadores se definen en `js/geogebraEstados.js`. `merge_questions.js` avisa si falta un estado.

## Al publicar cambios
`index.html` y `exam.html` cargan sus archivos con `?v=2.10`. Si modifica algún `.js` o `.css`, **suba ese número** en los dos archivos (y en las rutas del PDF de `js/app.js`): así los navegadores no mezclan archivos nuevos con copias viejas guardadas en caché. Si alguien ve el generador vacío, debe recargar con Ctrl + Shift + R.

## Subir a GitHub
El proyecto tiene menos de 100 archivos, el máximo que admite GitHub al subirlos desde la página web. Para no pasar de ese límite:
- En `lib/` solo se guardan las fuentes `.woff2` (todos los navegadores actuales las usan). Si actualiza KaTeX o Font Awesome, borre los `.woff` y `.ttf` y quítelos de las líneas `src:` de `katex.min.css` y `all.min.css`.
- Los estilos nuevos van en un archivo existente de `css/`, y el código nuevo en un archivo existente de `js/`.
- Cuente los archivos con `find . -type f | wc -l`.

## Estructura de archivos
```
index.html                 Aplicación (menú lateral y pestañas)
exam.html                  Evaluación en línea del estudiante
analisis.html              Redirige a index.html#analisis (dirección antigua)
merge_questions.js         Valida y genera js/data/questions.js
css/caja_herramientas.css  Estilo canónico de la Caja de Herramientas
css/styles.css, generator.css, app.css   Estilos propios (generator.css incluye también el análisis)
js/app.js                  Menú, Introducción, GeoGebra y manual
js/avisos.js               Avisos y confirmaciones dentro de la página
js/ExamSystem.js           Práctica y evaluación en línea, tareas de GeoGebra, Google Sheets
js/EvaluationGenerator.js  Generador, versiones, exportaciones
js/parametric.js           Preguntas paramétricas (evaluador sin eval)
js/geogebraEstados.js      Estados de las construcciones (geogebraState: deslizadores por pregunta)
js/analysis.js             Análisis de ítems: cálculo (también en Node) e interfaz de la pestaña
js/videos.js               Aprendo con videos
js/exam-page.js            Carga de la evaluación en exam.html
js/config.js               Dirección de Google Sheets
js/modules/*.js            Banco de preguntas (fuente)
js/data/questions.js       Banco generado
js/data/huellas_anteriores.js  Huellas de preguntas corregidas (cargar evaluaciones JSON antiguas)
google_apps_script/        Script y guía para Google Sheets
lib/                       KaTeX, SheetJS, Bootstrap 5.3 y Font Awesome 6 (copias locales; solo fuentes .woff2)
docs/                      Manual de usuario (HTML con su estilo, PDF e imágenes)
```

## Cómo actualizar el manual
Edite `docs/manual_usuario.html` y genere el PDF desde `docs/`:

```bash
google-chrome --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=30000 \
  --allow-file-access-from-files --print-to-pdf=manual_usuario.pdf manual_usuario.html
```

## Equipo
Carlos Andrés Escobar Guerra, Pablo Andrés Guzmán, John Jairo Estrada Álvarez y Juan Alberto Arias Quiceno.

## Versión
2.0 · noviembre de 2026. Ver `CHANGELOG.md` (al final, la revisión detallada).
