# Registro de cambios

## Versión 2.10 (noviembre de 2026): menos de 100 archivos para GitHub
GitHub admite como máximo 100 archivos al subirlos desde la página web; el proyecto tenía 148.
- Se borraron las fuentes `.woff` y `.ttf` de KaTeX y Font Awesome (44 archivos) y se quitaron de sus hojas de estilo: los navegadores actuales usan las `.woff2`, que se conservan.
- `css/analysis.css` se unió al final de `css/generator.css` (las dos solo se cargan en `index.html`).
- `js/analysis-page.js` se unió al final de `js/analysis.js`; esa parte solo se ejecuta en el navegador, así que el cálculo se sigue pudiendo cargar en Node para pruebas.
- `docs/estilo_manual.css` quedó dentro de `docs/manual_usuario.html`.
- `Mejoras_AppGeogebra.md` pasó como anexo al final de este archivo.
- Archivos con `?v=2.10`.

## Versión 2.9 (noviembre de 2026): pestaña «Análisis de resultados»

### Cálculos verificados
- Dificultad p, discriminación D (grupos del 27 %) e ítem-resto r coinciden con una implementación independiente (Python) en un conjunto de 30 envíos y 10 preguntas, también con puntos escritos «2,5». La pregunta con clave equivocada recibe las dos alertas graves.

### Corregido
- Los Excel individuales de la versión 1 (diciembre de 2025), como `Detalle_Estrada_Alvarez_John_Jairo_71555444.xlsx`, no se reconocían (su columna se llama «Correcta», no «Resultado»): ahora se leen.
- El histórico `Resultados_Evaluacion_Generada.xlsx` daba «no se reconoció el formato»: ahora se explica que solo trae notas, no respuestas por pregunta.
- Un CSV guardado por Excel en Windows-1252 perdía las columnas con tilde («Categoría», «ID envío», «Opción (banco)»): sin categorías ni letras de distractores, y sin aviso. Ahora se detecta la codificación.
- Un envío presente en el Excel del estudiante y en Google Sheets se contaba dos veces: el Excel individual incluye ahora el ID de evaluación y el ID de envío.
- Con pocos envíos (por ejemplo 6) se marcaban como graves alertas de discriminación basadas en grupos de 2 estudiantes: con menos de 10 envíos son «Atención (orientativo)».

### Nuevo
- Si los archivos traen varias evaluaciones, se elige cuál analizar (por defecto la de más envíos); «Todas mezcladas» con aviso.
- Botón **Quitar todos los archivos**; la barra de la opción correcta va en verde; el Excel del análisis lleva el ID de la evaluación en el nombre.
- Manual: sección 8 y figuras 12 y 13.

## Versión 2.8 (noviembre de 2026): unión con la copia «Unov2» (carpeta Vídeos)

Las dos copias quedan idénticas. De la copia de Vídeos (cambios del 6 de noviembre, 09:07–09:11) se incorporó:
- **Calculadora GeoGebra según el tema**: en las preguntas sin construcción propia se abre la aplicación adecuada (Calculadora 3D en Cálculo multivariado y Superficies, Probabilidad en Estadística inferencial y distribuciones, Geometría en las de geometría, Calculadora gráfica en áreas y gráficas, CAS en el resto), con la etiqueta «Aplicación: …» y en la ventana emergente.
- `categoryKey` en el paquete de la evaluación en línea (lo necesita lo anterior en `exam.html`).
- Su arreglo del alto del generador y su aviso «Evaluación generada» ya estaban cubiertos por las versiones 2.6 y 2.7.

## Versión 2.7 (noviembre de 2026): cuadro de instrucciones en las evaluaciones generadas

### Nuevo
- Debajo de Estudiante, ID y Fecha, la hoja impresa lleva un **cuadro de instrucciones**: «¡Por favor, muestre todo el desarrollo de su trabajo de forma ordenada!», «No se dará crédito a las respuestas que no tengan trabajo argumentado.», «No se responden dudas durante el desarrollo del quiz.», «Tiene 45 minutos para dar respuesta a todo el quiz.».
- En la previsualización se elige el **tipo de evaluación** (quiz, parcial, examen, examen final, taller, seguimiento, evaluación, prueba; el texto ajusta «del/de la», «todo el/toda la») y la **duración** en minutos («1 minuto» en singular); la casilla quita el cuadro. La hoja se actualiza al momento.
- El cuadro aparece en las versiones impresas A–F y en el LaTeX como `\ExamInstrBox{\centering …}`; el `.tex` define la macro con `\providecommand`, así que si su plantilla ya tiene `\ExamInstrBox` se usa la suya. Las opciones se guardan y se cargan con la evaluación (JSON).

### Corregido en la exportación LaTeX
- La fecha salía en inglés («November 6, 2026»): ahora `babel` en español (sin atajos, para no alterar `<` y `>`).
- Las fórmulas con varias líneas (regla de tres) salían pegadas («2 h1 bomba»): `\\` no vale dentro de `\[ \]`; se envuelven en `gathered`.
- Caracteres ≈, ², ³, °, · escritos directamente en enunciados detenían la compilación: se declaran.
- Comprobado compilando con `pdflatex` una exportación de las **1317 preguntas** del banco: 0 errores, 259 páginas.
- «1 pt» en singular en la hoja y en el LaTeX.

## Versión 2.6 (noviembre de 2026): la evaluación generada no se veía en pantallas de portátil

- Causa: el diseño del generador medía exactamente el alto de la ventana menos 100 px y los controles del panel derecho ocupan unos 650 px. En pantallas de 768–900 px de alto, la lista «Evaluación en construcción» quedaba con 0 px de alto: «Generar» sí armaba la evaluación (el contador decía «Preguntas: 20 · Puntos: 50/50»), pero no se veía ninguna pregunta. Comprobado en Chrome y Firefox a 1366×768 y 1400×900.
- El diseño crece con su contenido; el banco y la lista tienen alto mínimo (320 px) y su propia barra de desplazamiento.
- Una fórmula larga ensanchaba la columna y la página se desbordaba a lo ancho (1123 px en 970 px a 1280 de ancho): ahora las columnas no crecen con el contenido. Con menos de 1100 px de ancho, una sola columna.
- Al generar, un aviso confirma cuántas preguntas y puntos se armaron, y la vista baja a la lista, que se resalta un momento.
- Versión de los archivos: `?v=2.6`.

## Versión 2.5 (noviembre de 2026): el generador no generaba evaluaciones

- Causa: el navegador conservaba en caché una versión anterior de `js/ExamSystem.js` mientras cargaba el `js/EvaluationGenerator.js` nuevo. Al faltar `ExamUtils.math`, el banco aparecía vacío y «Generar» no hacía nada, sin ningún aviso (solo un error en la consola). Reproducido mezclando ambas versiones.
- `index.html` y `exam.html` cargan todos sus archivos con la versión en la dirección (`?v=2.5`): al publicar cambios, el navegador descarga los nuevos. El PDF del manual también.
- El generador comprueba al iniciar que los archivos sean compatibles; si no, lo dice en la página y explica cómo recargar sin caché (Ctrl + Shift + R).
- Un error en cualquier botón del generador se muestra como aviso en la página en lugar de fallar en silencio.

## Versión 2.4 (noviembre de 2026): pestaña «Práctica por categorías»

### Corregido
- El número de preguntas no se validaba: «abc», 0, −3 o el campo vacío iniciaban en silencio una práctica con **todas** las preguntas de las categorías (90 con dos categorías), y «2.5» se tomaba como 2. Ahora se pide un entero mayor que 0; si se piden más de las disponibles, se avisa y se usan todas.
- Solo se podía finalizar en la última pregunta, y para llegar había que responderlas todas: no había forma de terminar antes una práctica de 20 preguntas. Ahora «Finalizar» está disponible en todas las preguntas de la práctica (en la evaluación en línea sigue solo en la última) y avisa que las preguntas sin responder cuentan como incorrectas.
- Los resultados no mostraban las pistas, aunque la página lo anunciaba: ahora aparecen en las preguntas falladas.
- «Nueva práctica» borraba las categorías elegidas: ahora quedan marcadas para repetir la práctica.
- La calculadora GeoGebra opcional ocupaba un recuadro vacío de 450 px antes de la fórmula y las opciones: ahora es un botón; el recuadro aparece al abrirla. La fórmula de cada pregunta va justo debajo del enunciado.
- Títulos «Práctica en curso» y «Resultados de la práctica» (decían «evaluación»); «1 pt» en singular; mensajes en «usted», como el resto de la página.

### Nuevo
- Barra fija con el resumen de la selección («3 categorías seleccionadas · 147 preguntas disponibles»), **Seleccionar todas**, **Quitar todas**, el número de preguntas y **Comenzar Práctica**: antes estos controles quedaban al final de las 24 tarjetas.
- La tarjeta elegida se resalta en verde.

### Verificación
- Batería en el navegador: sin categoría, cantidades inválidas, más preguntas que las disponibles, Anterior conserva la respuesta, finalizar con preguntas pendientes, nota igual al número de tarjetas verdes, pistas en los resultados, «Nueva práctica», botones «Practicar» de «Aprendo con videos» y evaluación en línea (sin cambios de comportamiento). Generador y demás pestañas sin errores de consola.
- Manual: sección 4 y figuras 2 a 5 actualizadas.

## Versión 2.3 (noviembre de 2026): coma decimal

- Todo el banco usa coma decimal (457 textos): `2,5` en el texto y `2{,}5` dentro de las fórmulas (KaTeX deja un espacio después de una coma sola: «2, 5»).
- Tuplas y parámetros con decimales usan punto y coma como separador: $B(10;\ 0{,}5)$, $(0{,}5;\ 2;\ 1)$. Las tuplas de enteros conservan la coma: $(1,1,1)$.
- Preguntas paramétricas: los números generados salen con coma en el texto y en las fórmulas; los comandos y la verificación de GeoGebra siguen con punto, que es lo que GeoGebra entiende.
- Puntos con coma en la práctica, los resultados, la hoja impresa y la exportación LaTeX («2,5 pts»). Los datos que se envían a Google Sheets y a Excel siguen siendo números.
- `huellas_anteriores.js` reconoce también las preguntas cambiadas en esta versión (430 en total).

## Versión 2.2 (noviembre de 2026): revisión del contenido del banco

Se revisaron las 1317 preguntas una por una (claves recalculadas a mano; sistemas lineales y PVI verificados por sustitución).

### Claves erradas (la respuesta marcada era incorrecta o no estaba entre las opciones)
- `calculointegral_7` (punto medio, 4 rectángulos): la suma es 25; la opción no existía y se marcaba 21.
- `calculointegral_14` (resorte): W = 2,5 J; se marcaba 1,5 J.
- `ecuaciones_diferenciales_36`: la clave resolvía y′ = (x−y)/(x+y), no la ecuación del enunciado; se corrigió el enunciado.
- `ecuaciones_diferenciales_38` y `_39`: la solución marcada no cumplía la ecuación o la condición inicial.
- `sistemas_ecuaciones_18` y `_20`: (1,2,3) y (1,5; 2; 3) no cumplían el sistema; `_24`: la solución es (1,1,1), no (4/3, 4/3, 4/3); `_46`: faltaba la solución (−1, 3, −1).

### Preguntas con dos respuestas correctas
- Opciones equivalentes: `ecuaciones_2`, `_21`, `_35`; `ecuaciones_diferenciales_18`, `_33`, `_35`, `_37`, `_41`; `factorizacion_8`, `_10`, `_15`, `_19`; `geometria_vectorial_44` (√3 y 3/√3).
- Afirmaciones también ciertas: ángulo exterior = suplemento del adyacente (`geometria_triangulo_7`), a/sen A = 2R (`_29`), Boole ≤ 1 (`estadistica_probabilistica_30`), curtosis 0 en exceso (`estadistica_descriptiva_58`, `estadistica_inferencial_61`), 27 °C ≈ 300 K (`cambio_unidades_54`), 1000 B en kB (`cambio_unidades_55`–`60`, ahora en sistema binario explícito), matriz positiva definida en Gauss-Seidel (`analisis_numerico_19`), corrección de Yates (`estadistica_inferencial_55`), divergencia cero en un tornado (`campos_vectoriales_50`), sistema dependiente cuyos distractores eran soluciones (`sistemas_ecuaciones_26`), acertijos y analogías (`razonamiento_logico_18`, `_35`, `_38`), rectas coincidentes (`geometria_triangulo_53`).

### Enunciados
- 263 preguntas conceptuales tenían como fórmula un relleno («Tipo?», «Superficie?») que se mostraba como una línea suelta: se quitó. La aplicación ya no dibuja una fórmula vacía.
- Enunciados ambiguos, incompletos o tautológicos: `analisis_numerico_3`, `_27` (r² es el coeficiente de determinación), `calculointegral_15` (qué lado es vertical), `combinatoria_11`, `_55`, `estadistica_probabilistica_51`, `estadistica_inferencial_56`, `geometria_triangulo_38` (texto sin terminar), concordancia en `estadistica_descriptiva_59`–`66`.
- Erratas («revolucón», «al rededor», «circulo»), miles con coma («147,000 N» → 147 000 N), «!=» → ≠, nombres de variables con formato ($v_i$, $T_f$, $[0, 2\pi]$…), distractores absurdos (5/0, 133,3 baldosas), comando de GeoGebra en español (`Binomial`).
- Se quitaron del código las notas a medio terminar del autor («Placeholder, need to verify…»).

### Pistas
- 22 pistas con LaTeX sin delimitar (p. ej. `\int_0^1 (x - x^2) dx`) ahora llevan sus fórmulas entre `$...$` y se dibujan con KaTeX. `merge_questions.js` las valida.
- Pistas incorrectas o inútiles corregidas (p. ej. el área del círculo tenía la fórmula del radio).

### Aplicación
- Práctica y evaluación en línea: enunciados, opciones y pistas escapan `<` y `&` (como el generador desde la 2.1); función común `ExamUtils.math`.
- `js/data/huellas_anteriores.js` reconoce 371 preguntas modificadas, para cargar evaluaciones JSON guardadas con las versiones 2.0 y 2.1.

## Versión 2.1 (noviembre de 2026): fórmulas en el Generador de evaluaciones

### Corregido
- 77 enunciados mostraban la notación matemática como texto («Calcule la inversa A^{-1}:», «Si V_{n,2} = 20», «x^2/a^2 + y^2/b^2 = 1», «sqrt(1 - x^2 - y^2)»). Ahora llevan sus fórmulas entre `$...$` y se dibujan con KaTeX en el banco, la lista de la evaluación, la previsualización, el PDF, la práctica, la evaluación en línea y el análisis.
- 19 opciones con palabras escritas como fórmula se veían en cursiva y sin espacios («Infinitassoluciones», «Rango», «II», «Cara»); ahora usan `\text{}`. «Undefined» pasó a «Indefinido».
- La lista «Evaluación en construcción» mostraba solo el texto del enunciado, sin su fórmula ni su ID (p. ej. «Resuelva el sistema 3x3:» sin el sistema). Ahora muestra número, ID y fórmula.
- Previsualización y PDF: fórmulas y opciones a tamaño completo (`\displaystyle`); antes las fracciones de las opciones salían diminutas y pegadas entre sí.
- La hoja de la previsualización tenía la altura de la ventana: a partir de la tercera o cuarta pregunta el contenido quedaba fuera del recuadro blanco. Ahora crece con su contenido.
- Los signos `<`, `>` y `&` de fórmulas y enunciados se escapan antes de insertarlos en la página (una fórmula como `x<y` se habría tomado como etiqueta HTML).
- Descargar LaTeX: las fórmulas del enunciado se conservan (antes `A^{-1}` salía como `A\^{}\{-1\}`).
- Puntos con coma decimal en la hoja («2,5 pts»), como en las casillas.

### Compatibilidad
- Las evaluaciones guardadas en JSON antes de esta corrección siguen cargando: `js/data/huellas_anteriores.js` reconoce las 79 preguntas cuyo texto cambió.
- `merge_questions.js` valida con KaTeX las fórmulas del enunciado y avisa si queda notación fuera de `$...$`.

### Verificación
- Las 1317 preguntas del banco, dibujadas en el banco, en la lista y en la previsualización: 0 errores de KaTeX, 0 fórmulas crudas, 0 desbordes horizontales y 0 preguntas fuera de la hoja.
- Práctica (40 preguntas de Álgebra lineal y Superficies): 0 fórmulas crudas. Consola sin errores en todas las pestañas.

## Versión 2.0 (noviembre de 2026)

Detalle completo, con valores y verificaciones, en el anexo al final de este archivo.

### Interfaz unificada con la Caja de Herramientas
- Menú lateral con las pestañas Introducción, Práctica, Generador, Análisis, Aprendo con videos, Geogebra Clásico y Manual de usuario. Cada pestaña conserva su estado y tiene una dirección propia (`index.html#generador`).
- Estilo canónico (`css/caja_herramientas.css`) con Bootstrap 5.3 y Font Awesome 6 en copias locales (funciona sin internet).
- Introducción con el texto de la Caja de Herramientas y tarjetas «Abrir».
- Avisos dentro de la página y ventana de confirmación propia, en lugar de `alert`, `confirm` y `prompt` (36 sustituciones: 30, 5 y 1).
- `exam.html` con el mismo estilo, sin menú lateral. El análisis pasó a ser una pestaña y `analisis.html` redirige a ella.
- Pestaña «Aprendo con videos»: 24 videos del canal del profesor, verificados (canal y descripción), en 10 temas. Se descartaron dos videos de EDO (mezclas, logística) porque el banco no tiene esos temas.
- Pestaña GeoGebra con comandos comprobados en el CAS en español. Se cambió `Integral(x e^x)` por `Integral(x exp(x))`, porque el CAS tomaba `e` como una variable.
- Manual de usuario en PDF (24 páginas, 16 figuras) con visor, ventana emergente y descarga.
- Contraste AA: Bootstrap 5.3.0-alpha1 tiene alertas con 4,33:1; se ajustaron sus tonos y el azul activo del menú (`#007bff` daba 3,98:1). axe-core: 0 problemas en todas las pantallas.

### Corregido (fallos de la versión 1)
- La práctica no mostraba los resultados (contenedores con otro ID) y daba 0/0 puntos.
- El 98 % de las respuestas correctas estaba en la opción a): ahora se barajan.
- El PDF empezaba con una página en blanco y no imprimía el título de la evaluación.
- Los enunciados largos se cortaban en el margen, en pantalla y en el PDF.
- GeoGebra se recortaba y no se adaptaba al ancho; 7 materiales ya no existían en geogebra.org.

### Nuevo
- 9 preguntas paramétricas de opción múltiple y 3 tareas que se responden en GeoGebra (también paramétricas).
- Versiones impresas A–F con su clave en Excel.
- Análisis de ítems: dificultad, discriminación, correlación ítem-resto y distractores.
- Evaluación en línea con respuestas codificadas, recuperación tras recargar, tiempo límite, archivo `.examen`, enlace y envío a Google Sheets.
- Generador paginado, búsqueda sin tildes, guardar y cargar evaluaciones (JSON) con reconocimiento por huella.
- `merge_questions.js` valida el banco y no escribe si hay errores.

### Banco de preguntas
- `geogebraState` ajusta los deslizadores (y las funciones libres) de cada pregunta en las construcciones compartidas (`js/geogebraEstados.js`). Antes no se usaba, y 14 de las 18 preguntas mostraban una construcción con datos distintos a los suyos. Verificado en las 18 contra el cálculo de GeoGebra.
- `aritmetica_2` y `aritmetica_3` (diagrama de Venn): la clave era errónea; ahora preguntan por regiones y ya no son duplicadas.
- 7 materiales de GeoGebra borrados de geogebra.org (79 preguntas) se reasignaron a la calculadora genérica.
- Se corrigieron claves, opciones duplicadas, pistas copiadas, fórmulas que no se mostraban y preguntas que se respondían solas.
- Una pregunta incompleta quedó desactivada (`calculointegral_6`).

## Versiones anteriores
- **Versión 1 (diciembre de 2025):** sistema de evaluación con práctica por categorías, generador de evaluaciones (PDF, Excel, LaTeX, JSON) y evaluación en línea en `exam.html`.

---

# Anexo: revisión detallada del 6 de noviembre de 2026 (antes Mejoras_AppGeogebra.md)

**Fecha de la revisión:** 2026-11-06
**Alcance:** `index.html`, `exam.html`, `js/ExamSystem.js`, `js/EvaluationGenerator.js`, `merge_questions.js`, `css/`, los 24 módulos de `js/modules/` y el banco generado `js/data/questions.js` (1306 preguntas).
**Respaldo previo a los cambios:** `respaldo_antes_mejoras_2026-11-06.tar.gz` (en la raíz del proyecto).

Leyenda: ✅ corregido en esta sesión · ⏳ pendiente (recomendado) · 💡 idea de mejora

---

### 1. Resumen ejecutivo

La aplicación tiene dos modos:

1. **Modo práctica** (`index.html` → elegir categorías → *Comenzar Evaluación*).
2. **Modo evaluación** (`index.html` → *Generador de Evaluación* → previsualizar → PDF/Excel/LaTeX/JSON o *Realizar Evaluación en Línea*, que abre `exam.html`).

Los problemas más graves encontrados (todos ya corregidos):

| # | Problema | Impacto | Estado |
|---|----------|---------|--------|
| 1 | **La respuesta correcta es casi siempre la opción a)**: 1278 de 1306 preguntas (98 %) tienen `correct: 0`. | Un estudiante que siempre marque "a)" saca casi 50/50. La evaluación no mide nada. | ✅ |
| 2 | **El modo práctica se bloqueaba al terminar**: `displayResults()` busca `#score-display` y `#detailed-results`, pero `index.html` tenía `#final-score` y `#feedback-container` → error `Cannot set properties of null`. | El estudiante nunca veía sus resultados en el modo práctica. | ✅ |
| 3 | **El modo práctica daba 0/0 puntos** (las preguntas no tenían `points`). | Puntaje y porcentaje sin sentido. | ✅ |
| 4 | **Al pulsar "Anterior" se perdía la respuesta** marcada en la pregunta actual. | Respuestas perdidas sin aviso. | ✅ |
| 5 | **GeoGebra cortado**: el applet se creaba de 800×425 px dentro de un contenedor de 400 px con `overflow: hidden`, y con ancho fijo (no se adaptaba a pantallas pequeñas). Los botones Ampliar/Reducir no cambiaban el tamaño real del applet de forma fiable. | Construcción recortada; mal uso en tabletas/celulares. | ✅ |
| 6 | **3 fórmulas no se mostraban** (KaTeX fallaba por `%` sin escapar). | Opciones de respuesta rotas. | ✅ |
| 7 | **Errores de contenido** en el banco (respuesta marcada incorrecta, opciones duplicadas, pistas de otra pregunta). | Calificación injusta. | ✅ |
| 8 | Nombre del estudiante insertado como HTML sin escapar (inyección HTML). | Riesgo bajo, pero real. | ✅ |

---

### 2. Cambios realizados en esta sesión

#### 2.1 Lógica de evaluación (`js/ExamSystem.js`)

- ✅ **Barajado de opciones** (`ExamUtils.shuffleOptions`): cada pregunta se copia con las opciones en orden aleatorio y el índice `correct` reasignado. Se aplica:
  - en el modo práctica (al iniciar);
  - en el generador, al añadir preguntas o generar aleatoriamente (así la versión impresa/LaTeX/Excel ya no tiene todas en a));
  - en `exam.html`, de nuevo **por estudiante** (dos estudiantes vecinos ven órdenes distintos).
  - Verificado en navegador: 20 preguntas generadas → respuestas correctas repartidas `a=5, b=4, c=5, d=6`.
- ✅ **Barajado uniforme (Fisher–Yates)** en lugar de `sort(() => 0.5 - Math.random())`, que está sesgado.
- ✅ **Modo práctica**: preguntas en orden aleatorio y 1 punto por pregunta.
- ✅ **Respuesta guardada al instante** al marcar una opción (evento `change`) y también al pulsar "Anterior".
- ✅ **Barra de progreso**: "Pregunta X de N · Respondidas: K".
- ✅ **Confirmación al finalizar**, avisando cuántas preguntas quedan sin responder.
- ✅ **Aviso al cerrar/recargar la pestaña** con la evaluación en curso (`beforeunload`).
- ✅ Letras a), b), c), d) visibles en las opciones y en los resultados; la opción marcada se resalta.
- ✅ División por cero protegida en porcentajes (`ExamUtils.percentage`).
- ✅ Nombre e ID del estudiante escapados (`ExamUtils.escapeHtml`). Verificado: escribir `<b>XSS</b>` se muestra como texto.
- ✅ Formulario de ingreso sin `onsubmit` en línea; estilos movidos a CSS.
- ✅ Botones de guardado solo aparecen cuando hay datos del estudiante (en práctica no tienen sentido).
- ✅ Excel de detalle ahora incluye: categoría, enunciado LaTeX, respuesta del estudiante, **respuesta correcta**, resultado y puntos. Nombre de archivo saneado.
- ✅ Nombres de hoja de Excel saneados (caracteres `\ / ? * [ ] :` no permitidos).
- ✅ El mensaje de "Guardar Resultados" coincide con los nombres de las carpetas (renombradas a `RESULTADOS …` en la tercera sesión).
- ✅ Eliminados `console.log` de depuración.

#### 2.2 GeoGebra

- ✅ El applet se crea con el **ancho real del contenedor** y la misma altura que el contenedor (450 px por defecto): ya no se recorta.
- ✅ Se usa `appletOnLoad` para guardar la API del applet; Ampliar/Reducir/Restablecer llaman a `setSize(ancho, alto)` sobre ese applet concreto (rango 250–900 px).
- ✅ El tamaño elegido se **conserva entre preguntas**.
- ✅ Se reajusta el ancho al cambiar el tamaño de la ventana.
- ✅ Mensaje "Cargando GeoGebra…" y mensaje claro si no hay internet.
- ✅ Carga diferida 400 ms: si el estudiante pasa de pregunta rápido, no se crea (ni se destruye a medio cargar) un applet. Esto eliminó 15 errores internos de GeoGebra (`Cannot read properties of null (reading 'H')`) que aparecían en la prueba automática.
- ✅ Interfaz de GeoGebra en español (`language: 'es'`).
- ✅ Ventana emergente: los parámetros se pasan como JSON (antes se concatenaban dentro del script y una comilla los rompía); comprueba si GeoGebra cargó.

#### 2.3 Generador (`js/EvaluationGenerator.js`)

- ✅ Botón **"Repartir puntos"**: reparte los 50 puntos en partes iguales entre las preguntas seleccionadas (antes, al añadir a mano, cada pregunta quedaba con 0 puntos y había que escribirlos uno por uno).
- ✅ Excel de la evaluación: columnas de todas las opciones, respuesta correcta y una hoja **"Clave"** para calificar la versión impresa.
- ✅ LaTeX: opciones etiquetadas a), b), c) (`enumitem`) y texto de la pregunta escapado (`% & # _ { } $ ^ ~ \`), para que el `.tex` compile.
- ✅ El respaldo para enviar datos a la ventana del examen ya no lanza errores con `file://`.

#### 2.4 HTML y CSS

- ✅ `index.html`: contenedores de resultados con los IDs correctos.
- ✅ `exam.html`: eliminado el borde rojo de depuración, eliminado un contenedor de puntaje duplicado, eliminado el `setTimeout` de 100 ms (causaba una doble inicialización con el respaldo del generador), tarjeta blanca para el examen.
- ✅ `css/styles.css`: estilos para progreso, opción seleccionada, formulario, resultados, mensajes de GeoGebra y ajustes para celular (`max-width: 600px`).

#### 2.5 Banco de preguntas (módulos + `questions.js` regenerado con `node merge_questions.js`)

| Pregunta | Problema | Corrección |
|----------|----------|------------|
| `ecuaciones_diferenciales_40` (PVI `y' = y/x + sec(y/x)`, `y(1)=π`) | La opción marcada `y = x·arcsin(ln x)` da `y(1)=0 ≠ π`, y estaba **repetida** en a) y b). | Respuesta correcta: `y = x(π − arcsin(ln x))`; `x·arcsin(ln x)` queda como distractor. |
| `calculointegral_5` (área bajo `-0.5x²+3` en [-2,1]) | Opciones a) y b) idénticas (1.5 u²). | b) cambiada a 9 u². Se comprobó que la respuesta marcada (7.5 u²) es correcta. |
| `estadistica_descriptiva_41`, `_49`, `estadistica_probabilistica_48` | `%` sin escapar dentro de `\text{}` → KaTeX no las mostraba. | `\%`. |
| `aritmetica_1`, `_2`, `_3` | La pista hablaba de "la pendiente de la recta tangente" (copiada de cálculo). | Pistas acordes a fracciones y conjuntos. |

Validación tras los cambios: **0 errores de KaTeX** en las 1306 preguntas y sus opciones; `questions.js` sincronizado con los módulos (0 diferencias).

#### 2.6 Prueba automática realizada

Con Chrome sin interfaz se probó: modo práctica (Geometría del Plano, 70 preguntas) → GeoGebra cargado a 800×450 → responder, retroceder, volver (respuesta conservada) → finalizar → 70 resultados mostrados. Generador → 20 preguntas / 50 puntos → previsualización sin errores de KaTeX → evaluación en línea en ventana nueva → ingreso de datos → 20 preguntas → resultados. **0 errores de JavaScript.**

#### 2.7 Segunda sesión — pendientes de prioridad alta

**a) Pistas y respuestas configurables** (`index.html` → previsualización, `js/EvaluationGenerator.js`)
- ✅ Encima de «Realizar Evaluación en Línea» hay tres controles: **Título** de la evaluación, **«Mostrar pistas durante la evaluación en línea»** y **«Mostrar las respuestas correctas al finalizar»**. Las dos casillas vienen **desmarcadas**. No se imprimen.
- ✅ El modo práctica sigue mostrando pistas y respuestas.
- ✅ Si no se muestran las respuestas, el estudiante ve su nota y qué preguntas acertó, pero no cuál era la correcta. Tampoco aparece en el Excel que descarga.

**b) Protección de la clave** (`js/ExamSystem.js`, `exam.html`)
- ✅ El generador envía un **paquete v2 codificado** (`EVX2:…`, no legible a simple vista) con las preguntas y, aparte, la clave.
- ✅ `exam.html` lo **borra de `localStorage` en cuanto lo lee**. Verificado: `localStorage.examData` queda vacío.
- ✅ La clave queda en una variable privada: `examSystem.currentQuestions` ya **no contiene `correct`** y no hay variable global con las respuestas (verificado).
- ✅ Las opciones se siguen barajando por estudiante.
- ✅ Sigue aceptando el formato antiguo (lista JSON) por compatibilidad.
- ⚠️ **Limitación honesta:** es ofuscación, no cifrado. Alguien que sepa usar el depurador del navegador puede encontrar la clave. Para notas con peso real, vigila la sesión o usa un servidor.

**c) Recuperación tras recargar**
- ✅ El avance (respuestas, pregunta actual, datos del estudiante, orden barajado) se guarda **codificado** en `sessionStorage` en cada respuesta. Verificado: tras recargar en la pregunta 4, vuelve a la pregunta 4 con 3 respuestas.

**d) Resultados en Google Sheets** (`js/config.js`, `google_apps_script/`)
- ✅ Al finalizar, si `js/config.js` tiene la URL, se envía nota, duración, curso e ID de la evaluación, más el detalle de cada pregunta (respuesta del estudiante, respuesta correcta, puntos).
- ✅ **Sin internet:** el resultado queda en cola en el equipo, se reenvía solo al abrir de nuevo la aplicación y hay botón «Reintentar ahora». Verificado: sin red → «quedaron guardados»; al reintentar → «✔ Resultados enviados», cola vacía.
- ✅ `google_apps_script/Codigo.gs` crea las hojas **Resultados** (una fila por estudiante) y **Detalle** (una fila por pregunta). Descarta envíos duplicados, rechaza un token incorrecto y evita que un nombre como `=FORMULA()` se ejecute como fórmula. Probado con una simulación de Google Sheets.
- ✅ Paso a paso para publicarlo en `google_apps_script/INSTRUCCIONES.md`.

**e) Revisión real de las construcciones GeoGebra**
Se abrió cada material (`geogebraId`) en Chrome y se leyeron sus objetos con la API de GeoGebra:
- ❗ **7 materiales ya no existen en geogebra.org** (error 404): `kGf9gP7v` (68 preguntas), `u2784331` (3), `k6w7u2j9` (4), `W9aP5g4e`, `sPcNq45n`, `jJj72N8A`, `ewb6r64w` (1 cada uno). En total **79 preguntas** mostraban «Cargando GeoGebra…» para siempre. Ninguna dependía de la construcción, así que pasaron a la calculadora genérica (`classic`; `3d` en multivariado). Cada cambio tiene un comentario en el módulo.
- ✅ **Protección para el futuro:** si un material no carga en 25 s, el estudiante ve un aviso y el botón «Abrir calculadora GeoGebra». Verificado.
- ✅ Se comprobaron a mano los cálculos de las preguntas con construcción propia: áreas entre curvas, volúmenes, integrales dobles y triples, Herón y series. Las dos de la tangente al círculo (α = 30° y 244°) se verificaron **moviendo el deslizador en la construcción real**: pendientes −0.1624 y 0.4615, correctas.

| Pregunta | Problema | Corrección |
|----------|----------|------------|
| `calculointegral_36` (Pappus) | a) `2π²a²b` y c) `2πb(πa²)` son **la misma expresión** (dos correctas). | c) → `πb(πa²)`. |
| `calculointegral_6` | Enunciado cortado, perímetro en u² y material de otro tema (tasa de variación media). | **Desactivada** con `disabled:`; el ID de las demás no cambia. |
| `geometria_2`, `geometria_3` | Redondeo: Herón da 34.98 y 58.79, las opciones decían 34.9 y 58.7. | 35.0 y 58.8. |
| `geometria_1-3`, `calculomultivariado_2-4` | Pista sobre «la recta tangente», copiada de otra pregunta. | Pista de Herón / de integral iterada. |
| `calculodiferencial_1-3` | Errata «rectagente». | «recta tangente». |

**f) Preguntas que se responden solas** (búsqueda automática de la respuesta dentro del enunciado)

| Pregunta | Problema | Corrección |
|----------|----------|------------|
| `cambio_unidades_21`, `_32`, `_46` | Pedían convertir **1** unidad y el factor estaba en el enunciado. | Cantidades 5 gal, 3 slug y 25 nudos, con distractores de errores típicos (galón imperial, milla terrestre, dividir en vez de multiplicar). |
| `geometria_vectorial_33` | El enunciado mostraba `n₁ ∥ n₂` y la respuesta era «Paralelos». | `n₁ ? n₂`. |
| `geometria_vectorial_37` | El enunciado mostraba la ecuación pedida. | Se muestran solo el punto y el vector director. |

Revisadas y **dejadas como están** porque son válidas: verdadero/falso sobre definiciones (`geometria_plano_3`, `_14`, `superficies_3d_1`, `aritmetica_34-35`, `estadistica_inferencial_56`), inversas de matrices de permutación (son su propia inversa), silogismos y acertijos.

**g) Mecanismo `disabled`**
- ✅ Una pregunta con `disabled: 'motivo'` no entra en `questions.js` ni en el modo práctica, y los ID de las demás no se renumeran. Útil para retirar preguntas en revisión sin borrarlas.

**Pruebas:** dos suites automáticas en Chrome (`file://` y servidor con Google interceptado) más la simulación de Apps Script: **0 errores**. Banco: **1305 preguntas activas, 0 errores de KaTeX**.

#### 2.8 Tercera sesión — pendientes de prioridad media

**Modo práctica**
- ✅ Campo **«Número de preguntas de práctica»** (por defecto 20), elegidas al azar entre las categorías seleccionadas. Las tarjetas muestran cuántas preguntas activas tiene cada categoría.

**Temporizador** (n.º 7)
- ✅ En la previsualización: **«Tiempo límite (min)»**, donde 0 = sin límite.
- ✅ Reloj fijo arriba del examen; se pone rojo en los últimos 5 minutos.
- ✅ Al llegar a 0 se entrega solo con las respuestas marcadas.
- ✅ Se calcula desde la hora de inicio, así que **recargar la página no reinicia el reloj**.
- ✅ La duración real llega a Google Sheets.

**GeoGebra más liviano** (n.º 12)
- ✅ Las ~1180 preguntas con calculadora genérica (`classic`, `cas`, `geometry`, `probability`, `3d`) muestran un botón **«Abrir calculadora GeoGebra»** en lugar de descargarla en cada pregunta. Una vez abierta, se carga sola en las siguientes.
- ✅ Las preguntas con **construcción propia** la siguen cargando automáticamente.
- ✅ `deployggb.js` se carga en segundo plano (`async`): sin internet, la página ya no se queda esperándolo. Si no llega en 15 s, se avisa que se puede responder sin la calculadora.

**Sin internet** (n.º 13)
- ✅ KaTeX 0.16.9 (con fuentes) y SheetJS 0.20.0 copiados en `lib/`, con sus licencias (MIT y Apache-2.0).
- ✅ Verificado bloqueando los CDN: las fórmulas y las exportaciones a Excel funcionan y no se hace **ninguna** petición a los CDN.

**Generador** (n.º 9 y 14)
- ✅ Banco **paginado de 40 en 40**, con «◀ Anterior / Siguiente ▶» y contador «1–40 de 1305».
- ✅ Búsqueda con espera de 250 ms, **sin distinguir tildes ni mayúsculas**. También busca por ID.
- ✅ Las fórmulas del banco se ven renderizadas (antes aparecía el código LaTeX).
- ✅ Las preguntas ya agregadas se marcan con ✓ y no se pueden repetir.
- ✅ **«Guardar evaluación (JSON)»** guarda título, configuración, puntos, saltos de página, **orden de las opciones** y una **huella** de cada pregunta.
- ✅ **«Cargar evaluación guardada (JSON)»** la restaura idéntica (verificado: mismos ID, puntos, orden y clave). Si el ID de una pregunta cambió porque se insertó otra antes en el módulo, la reconoce por su huella y lo informa. Las que ya no existen se omiten y se listan.

**Repartir la evaluación** (n.º 16)
- ✅ **«Descargar archivo para estudiantes»** genera un archivo `.examen` codificado. En otro computador, `exam.html` muestra **«Cargar archivo de evaluación»**. Funciona abriendo los archivos directamente, sin servidor.
- ✅ **«Copiar enlace para estudiantes»** (solo si la app está publicada en internet, p. ej. GitHub Pages) pone la evaluación dentro del enlace. Al abrirlo, se quita de la barra de direcciones.
- ✅ Un archivo inválido muestra un aviso y no rompe la página.
- ⚠️ El `.examen` y el enlace llevan la clave **codificada, no cifrada** (misma limitación que en la sección 2.7).

**Banco**
- ✅ `superficies_3d_7` (duplicado de `geometria_vectorial_39`) reemplazada por: «El plano z = 3 corta a la esfera x²+y²+z² = 25; radio de la circunferencia». Respuesta 4, porque √(25−9) = 4.

**Carpetas** (n.º 15)
- ✅ `RESULTDOS …` → `RESULTADOS detallados por Evaluacion` y `RESULTADOS historicos de evaluaciones`, con sus archivos intactos; el mensaje de la app se actualizó.

**Pruebas:** nueva suite en Chrome con los CDN bloqueados (práctica, GeoGebra bajo demanda, paginación, búsqueda, guardar y cargar, huella, `.examen`, enlace, temporizador, archivo inválido) más las dos suites anteriores: **0 errores**.

#### 2.9 Cuarta sesión — pendientes de prioridad baja

**`merge_questions.js`** (n.º 17)
- ✅ Ejecuta los módulos en un entorno aislado (`vm`) en lugar de `eval`, en **orden alfabético fijo**.
- ✅ **Valida** antes de escribir: `correct` dentro del rango, al menos 2 opciones, opciones repetidas, enunciado y `latex` presentes, y **cada fórmula pasa por KaTeX** (la misma copia de `lib/`).
- ✅ Si hay errores **no escribe** `questions.js`, lista los problemas con su ID y termina con código 1. Verificado: con una respuesta fuera de rango y una llave sin cerrar, detectó ambas y dejó el archivo intacto.
- ✅ Las advertencias (preguntas repetidas) no bloquean. Hoy queda una: `aritmetica_3` repite el enunciado de `aritmetica_2`.
- ✅ El archivo generado incluye nombre, descripción y número de preguntas de cada categoría, más la clave de módulo de cada pregunta. Verificado: las 1305 preguntas son idénticas a las de la versión anterior.

**Sin código en línea** (n.º 18)
- ✅ `index.html` y `exam.html` no tienen `onclick` ni `<script>` en línea. El arranque pasó a `js/main.js` y `js/exam-page.js`.
- ✅ El generador usa **un solo manejador** con `data-action` en lugar de un `onclick` por botón (verificado: 0 `onclick` en todo el DOM, también tras abrir la previsualización).
- ✅ «Volver» del generador pide confirmación si hay una evaluación en construcción.
- ⚠️ **Política de seguridad de contenido (CSP): no se activó.** La app se usa sobre todo abriendo los archivos directamente (`file://`), donde Chrome no aplica `'self'` de forma fiable. Además GeoGebra carga código de varios dominios y usa *workers* y *blobs*. Una CSP mal ajustada dejaría GeoGebra en blanco en plena evaluación. Si se publica en un servidor, se puede activar desde allí con pruebas.

**Menos carga en `index.html`** (n.º 19)
- ✅ El modo práctica lee las categorías de `questions.js` (el mismo banco que el generador). `index.html` hace **24 peticiones menos** y no tiene el banco dos veces en memoria. Verificado: 0 archivos de `js/modules/` cargados, 24 categorías.
- ⚠️ **Importante:** después de editar un módulo hay que ejecutar `node merge_questions.js`. Antes el modo práctica veía los cambios al instante; ahora, igual que el generador, los ve al regenerar.

**Accesibilidad** (n.º 20). Auditoría automática con **axe-core (WCAG 2 A y AA): 0 problemas** en inicio, pregunta, resultados, generador, previsualización y `exam.html`.
- Enlace «Saltar al contenido» (primer Tab), regiones `main`/`section` con títulos y anuncios en vivo para lectores de pantalla.
- Opciones como grupo de radio etiquetado con el enunciado: las flechas cambian de opción y **Enter avanza** (o finaliza en la última).
- Al cambiar de pregunta, el foco va al enunciado; al terminar, al título de resultados; al abrir el generador, al buscador; al abrir la previsualización, al botón cerrar.
- **Escape** cierra la previsualización y el foco vuelve a «Previsualizar».
- La «×» de cerrar ahora es un botón real.
- Barra de progreso con `role="progressbar"`, categorías con `aria-pressed`, botones «+», «×», «▲», «▼» con nombre accesible.
- Foco visible (contorno naranja) y respeto de «reducir movimiento».
- **Contraste:** se midió cada color. Los azules, verdes, grises y naranjas originales daban entre 2.6:1 y 4.0:1 con texto blanco (mínimo 4.5:1) y se oscurecieron. La barra de controles de la previsualización estaba al 30 % de opacidad: ilegible e invisible con teclado.

**Estilos** (n.º 21)
- ✅ Los `style="..."` fijos del generador, la previsualización, los resultados y `exam.html` pasaron a clases en `css/generator.css` y `css/styles.css`.

**Dos fallos de impresión que ya existían, encontrados al revisar el PDF**
- ❗ **La primera página del PDF salía en blanco** y el examen empezaba en la segunda: el resto de la página estaba oculto con `visibility` pero seguía ocupando espacio. Además, **el título de la evaluación no se imprimía** (`h2 { display: none }`). Comprobado generando el PDF con la versión original (5 páginas, la 1.ª vacía). Ahora: 4 páginas, título en la 1.ª.
- ❗ **Los enunciados largos se cortaban en el margen** (28 preguntas, p. ej. «…lado superior a 1m de profundida»). KaTeX convierte los espacios de `\text{…}` en no separables. Ahora el texto largo parte por palabras, en pantalla y en el PDF; fracciones y matrices no se parten.

**Otros:** el título escrito en la previsualización se usa también en el encabezado impreso y en el archivo LaTeX (escapado: `&` → `\&`). El botón de inicio dice «Comenzar Práctica».

**Pruebas:** cuatro suites en Chrome (archivo local, servidor con Google Sheets simulado, funciones de prioridad media con CDN bloqueados, y teclado + axe-core) más la revisión del PDF generado: **0 errores**.

#### 2.10 Quinta sesión — ideas de mejora

**Idea 1. Preguntas paramétricas** (`js/parametric.js`)
- Una pregunta con `params` genera sus números al azar: enteros en un rango (`{min, max, step, exclude}`), un valor de una lista o un valor derivado (`'= a*n'`). Admite una condición (`where`) y `{{expresión}}` en el enunciado, las opciones, la pista y los comandos de GeoGebra.
- **Evaluador propio sin `eval`**: aritmética, comparaciones, `round`, `gcd`, `lcm`, `frac` (fracción simplificada), `signed` («+ 3» o «− 3»), `coef`. Rechaza `constructor`, `alert(1)`, `__proto__`, `;` y `.` (26 pruebas unitarias).
- Generador con semilla (mulberry32): la previsualización, el PDF y el Excel muestran los mismos números; cada estudiante, cada práctica y cada versión impresa reciben otros. Medido con 40 000 sorteos: distribución uniforme (χ² = 47,7, gl 39) y coincidencias del 2,39 % con 40 combinaciones (lo esperado es 2,5 %).
- Si dos opciones salen iguales, se vuelve a sortear. `merge_questions.js` genera **40 versiones** de cada paramétrica y valida cada una (opciones distintas y KaTeX).
- 9 preguntas nuevas, agregadas **al final** de los módulos para no cambiar los ID existentes. Cada distractor corresponde a un error típico:

| ID | Pregunta | Distractores |
|---|---|---|
| `calculodiferencial_51` | $\frac{d}{dx}(a x^n)$ | olvidar el exponente, no bajarlo, $(n-1)a$ |
| `calculodiferencial_52` | pendiente de $x^2 + bx$ en $x = k$ | confundir $f(k)$ con $f'(k)$ |
| `ecuaciones_51` | $ax + b = c$ con solución entera | error de signo al trasponer, olvidar $b$ |
| `aritmetica_51` | $\frac{a}{b} + \frac{c}{d}$ simplificada | sumar numeradores y denominadores, multiplicar |
| `regla_de_tres_61` | cuadernos y precio | tratarla como inversa |
| `geometria_triangulo_61` | área $\frac{bh}{2}$ | olvidar dividir entre 2 |
| `geometria_triangulo_62` | hipotenusa $(3k, 4k, 5k)$ | sumar los catetos, olvidar la raíz |
| `estadistica_descriptiva_71` | media de 5 datos | dividir entre $n-1$, rango medio |
| `cambio_unidades_61` | km/h → m/s | multiplicar por 3,6 |

**Idea 2. Tareas que se responden en GeoGebra** (`answerType: 'geogebra'`)
- La construcción se crea con `geogebraCommands`. Al salir de la pregunta, la aplicación evalúa `geogebraCheck.condition` dentro de GeoGebra, guarda el estado (`getBase64`) y, al volver o recargar, lo restaura. Si el estudiante no toca la construcción, la pregunta cuenta como no respondida.
- 3 tareas paramétricas: llevar A al vértice de $(x-h)^2+k$; ajustar la pendiente $m$ para que la recta pase por P; hacer el triángulo ABC rectángulo en C.
- La verificación del triángulo usa el **coseno** del ángulo ACB. `Angle(A, C, B)` daba 270° si C quedaba debajo de AB y habría calificado mal una respuesta correcta.
- **Prueba real en GeoGebra:** respuesta correcta → acierto; A fuera del vértice → fallo; tarea sin tocar → no respondida; al volver a la pregunta, A sigue donde se dejó.
- Se excluyen de las versiones impresas y de la generación aleatoria, salvo que se marque «Incluir tareas…».
- Error interno de GeoGebra (`'H'`) al cambiar de pregunta en el mismo instante en que GeoGebra repinta: inofensivo (la calificación es correcta) y solo aparece con la velocidad del robot de pruebas. Con 1,5 s entre acciones no aparece.

**Idea 3. Análisis de resultados por pregunta** (`js/analysis.js`, pestaña «Análisis de resultados»)
- Lee el libro de Google Sheets (hoja «Detalle», .xlsx o .csv) y los Excel individuales. Descarta los envíos repetidos entre archivos.
- Calcula, por pregunta: dificultad $p$, discriminación $D$ (grupos del 27 %), correlación ítem-resto $r$ y distractores (con los grupos superior e inferior).
- Alertas: muy fácil o muy difícil, discrimina poco, **discriminación negativa**, **un distractor que atrae más a los mejores que la correcta** y nadie eligió la correcta.
- **Validado con datos simulados de verdad conocida** (60 estudiantes, 10 preguntas). Detectó la clave equivocada (la opción «a» atraía a 16 del grupo superior frente a 0 de la registrada), la fácil, la difícil y la de azar, sin falsas alarmas en las 6 normales.
- Para el análisis de distractores con opciones barajadas, cada respuesta guarda la **letra según el orden del banco** («Opción (banco)», nueva columna al final en Sheets y en el Excel del estudiante).
- Visualización según la guía de datos: barras de un color validado, porcentaje escrito al lado, «✔ correcta» en texto (no solo color), alertas con icono y etiqueta, detalle al pasar el ratón o con teclado, y exportación a Excel.

**Idea 4. Versiones impresas A–F**
- La versión A conserva el orden del docente; las demás barajan preguntas y opciones, y las paramétricas cambian de números. Cada versión empieza en una página nueva.
- Excel con la hoja «Claves» y una hoja por versión (equivalencia con la versión A, ID, texto de la respuesta, puntos).
- **Verificado:** 54 comprobaciones de clave contra el texto impreso de cada versión, 0 discrepancias.

**Idea 5. Interfaz unificada con la Caja de Herramientas** (procedimiento de la skill *ReformadorYFiscal_Aplicaciones*)
- La aplicación de referencia ya no está en `~/Música`. Se usó la hermana ya unificada `Descargas/Algebra_Lineal_Operaciones_BASE_MODIFICADO_5OCT2026` (estilo canónico, `app.js`, manual).
- Barra lateral con 7 pestañas; Introducción canónica con tarjetas; GeoGebra; manual; «Aprendo con videos». Las secciones existentes se conservaron con sus mismos ID (se ocultan, no se borran), así que el estado se mantiene al cambiar de pestaña. Cada pestaña tiene dirección propia (`#generador`), con soporte de Atrás y Adelante.
- Bootstrap 5.3 y Font Awesome 6 descargados a `lib/` (la guía los carga de internet; aquí se mantiene el funcionamiento sin conexión). Se conserva **KaTeX** local en lugar de MathJax 2.7.5: toda la aplicación y las pruebas lo usan, y funciona sin internet.
- Se renombraron `.modal`, `.modal-content` y `.progress-bar`, que chocaban con Bootstrap (la previsualización habría quedado oculta y la barra de progreso, toda azul).
- **Avisos en la página** (`js/avisos.js`): 30 `alert`, 5 `confirm` y 1 `prompt` sustituidos por avisos de color y una ventana de confirmación accesible (Escape cancela, foco atrapado). Si el tiempo se acaba con una confirmación abierta, la evaluación se entrega igual.
- Contraste: el azul activo del menú (`#007bff`, 3,98:1) y las alertas de Bootstrap alpha1 (4,33:1) se oscurecieron lo justo. axe-core: **0 problemas** en las 6 pantallas.
- **Aprendo con videos:** 24 videos verificados con el script de la skill (canal y descripción), en 10 temas. Se descartaron dos videos de EDO porque el banco no tiene esos temas. Se listan las 10 categorías sin videos y el catálogo de la skill quedó actualizado.
- **GeoGebra:** comandos comprobados ejecutándolos en el CAS de GeoGebra en español. Se corrigió `Integral(x e^x)` → `Integral(x exp(x))`.
- **Manual en PDF** (`docs/manual_usuario.pdf`, 24 páginas, 16 figuras, 13 secciones), revisado con hoja de contactos: 0 fórmulas sin renderizar y sin páginas huérfanas.
- Fallos encontrados al revisar: botones de la previsualización desbordados, teclado de GeoGebra tapando la tarea y cambio de pestaña por dirección sin efecto. Corregidos.
- `README.md` y `CHANGELOG.md` reescritos.

**Pruebas:** 7 suites en Chrome (incluidas tareas GeoGebra reales y versiones), comprobación de las 7 pestañas y de los 14 botones de video, axe-core, validación del banco (1317 preguntas, 0 errores) y simulación del análisis. **0 errores.**

#### 2.11 Sexta sesión — `geogebraState` ajusta los deslizadores de cada pregunta

**Qué hace ahora:** varias preguntas comparten una misma construcción propia. Su `geogebraState` elige, en el nuevo archivo `js/geogebraEstados.js`, qué datos debe mostrar esa construcción para la pregunta. Al cargarse, la aplicación ejecuta esos comandos en GeoGebra: ajusta deslizadores y, cuando hace falta, funciones o puntos libres. Se aplica en la práctica, en la evaluación en línea (el estado viaja en el paquete; antes no se enviaba) y en la ventana emergente. `geogebraState '0'` deja la construcción como está guardada, y las calculadoras genéricas no se tocan.

**Inventario:** los estados distintos de 0 solo aparecen en 12 construcciones propias (18 preguntas). Se leyeron los deslizadores y objetos libres de cada una con la API de GeoGebra.

**Hallazgo:** como el estado nunca se había aplicado, **varias construcciones mostraban datos distintos a los de su pregunta**:

| Pregunta | Pedía | La construcción mostraba |
|---|---|---|
| `calculointegral_1` | $0{,}5x^2 + 3$ sobre el eje X en $[-1, 2]$ | $g(x) = x - 3$ en $[-2, 1]$ |
| `calculointegral_2` | entre $0{,}5x^2 + 3$ y $-x^2 - 1$ en $[-2, 1]$ | $g(x) = 0{,}12x + 0{,}5$ en $[-3, 3]$ |
| `calculointegral_4` | entre $x = \sqrt{4 - y^2}$ y $x = 1$, $y \in [0, 1]$ | $r(y) = 0$, $y \in [-1, 1]$ |
| `calculointegral_5` | $-0{,}5x^2 + 3$ en $[-2, 1]$ | $0{,}3x^2 - x + 3$ en $[-1, 4]$ |
| `calculomultivariado_2` | tetraedro, integrando 1 | región circular, integrando 8 |
| `calculomultivariado_3`, `_5` | sus regiones e integrandos | $\sqrt{9 - x^2}$ en $[0, 3] \times [2, 4]$ |
| `calculodiferencial_2`, `_3` | $\alpha = 244°$ y $30°$ | $\alpha = 210°$ |
| `geometria_1`–`_3` | lados de cada triángulo | lados $10, 7, 5$ |

**Verificación con las construcciones reales:** se aplicó cada uno de los 18 estados y se leyó lo que calcula GeoGebra. Todos los comandos se aplicaron y todos los resultados coinciden con la respuesta correcta:
- fracción $\frac{7}{12}$ y tangente $y = 2x - 5$ (pendiente 2);
- pendientes al círculo $0{,}4615$ y $-0{,}1624$;
- áreas $10{,}5$, $9$ y $7{,}5$;
- tetraedro $\frac{1}{6}$, integrales dobles $48$ y $2\pi$;
- Herón $31{,}3$, $34{,}98$ y $58{,}79$.

En la aplicación se comprobó en la práctica, en la ventana emergente y en `exam.html`.

**`aritmetica_2` y `aritmetica_3` (pendiente cerrado):** la construcción es un diagrama de Venn de tres conjuntos con regiones numeradas del 1 al 8, no un cálculo de áreas. Se comprobó con una captura de la construcción.
- A ∩ B son las regiones **3 y 4**: la clave anterior («14 u²») era errónea y ninguna opción era correcta.
- Ahora `aritmetica_2` pregunta por A ∩ B (regiones 3 y 4) y `aritmetica_3` por (C ∩ A) − B (región 2). El estado fija qué expresión muestra la construcción, así que ya no son duplicadas: el banco queda con **0 advertencias**.

**Validación:** `merge_questions.js` da error si una pregunta usa un `geogebraState` distinto de 0 que no está definido para su construcción.

---

### 3. Pendientes recomendados (por prioridad)

#### Prioridad alta — ✅ atendidos en la segunda sesión (ver sección 2.7)

1. ✅ **Pistas visibles durante la evaluación** → casilla en el generador; desmarcada por defecto.
2. ✅ **Respuestas correctas expuestas en el navegador** → paquete codificado que se borra al cargar y clave privada. *Limitación: una página sin servidor nunca es 100 % segura; esto frena al estudiante curioso, no a uno que sepa programar.*
3. ✅ **Histórico solo local** → envío automático a Google Sheets con cola si no hay internet. **Falta tu paso:** publicar el script (`google_apps_script/INSTRUCCIONES.md`) y pegar la URL en `js/config.js`.
4. ✅ **Construcciones GeoGebra revisadas una por una** → 7 materiales borrados de geogebra.org (79 preguntas) reasignados; respuestas verificadas; 1 pregunta desactivada.
5. ✅ **Preguntas que se responden solas** → 5 corregidas; el resto revisado y justificado.

**Queda para ti (no se puede resolver sin la construcción original):**
- ✅ *Resuelto en la sexta sesión (sección 2.11):* `aritmetica_2` y `aritmetica_3`: mismo enunciado y mismas opciones con materiales distintos; la intersección de conjuntos `A ∩ B` tiene respuestas en **u²** y la construcción no expone objetos legibles. Verifica el enunciado abriendo `gjapuhgm` y `p7rkufyv`.
- `calculointegral_6` (desactivada): completa el enunciado («cuyos lados son …»), cambia las unidades a **u** y elige un material que corresponda. Luego borra la línea `disabled:` en `js/modules/calculointegral.js` y ejecuta `node merge_questions.js`.

#### Prioridad media — ✅ atendidos en la tercera sesión (ver sección 2.8)

6. ✅ Número de preguntas en el modo práctica.
7. ✅ Temporizador con entrega automática.
8. ✅ Pregunta duplicada `superficies_3d_7` reemplazada.
9. ✅ Guardar y volver a cargar evaluaciones en el generador, con reconocimiento por huella.
10. ✅ Recuperar una evaluación tras recargar (segunda sesión).
11. ✅ **`geogebraState`** ajusta los deslizadores de cada pregunta (sexta sesión, sección 2.11).
12. ✅ GeoGebra genérico solo bajo demanda.
13. ✅ KaTeX y SheetJS locales (`lib/`). **GeoGebra sigue necesitando internet**; su paquete offline pesa decenas de MB y no se incluyó.
14. ✅ Banco paginado, búsqueda sin tildes y fórmulas renderizadas.
15. ✅ Carpetas renombradas a `RESULTADOS …`.
16. ✅ Repartir la evaluación a otros computadores: archivo `.examen` y enlace.

**Pendiente nuevo menor:** `aritmetica_2` y `aritmetica_3` siguen siendo casi idénticas (ver prioridad alta, revisión del docente).

#### Prioridad baja / calidad de código — ✅ atendidos en la cuarta sesión (ver sección 2.9)

17. ✅ `merge_questions.js` sin `eval`, en orden fijo y con validación que bloquea errores.
18. ✅ Cero `onclick` en línea y cero `<script>` en línea. CSP **no** se activó (ver 2.9).
19. ✅ `index.html` ya no carga los 24 módulos: todo sale de `questions.js`.
20. ✅ Accesibilidad: 0 problemas WCAG 2 A/AA según axe-core en 6 pantallas; teclado completo.
21. ✅ Estilos fijos movidos a CSS (quedan solo los calculados: alturas, anchos de progreso).
22. ✅ SRI: ya no hace falta. KaTeX y SheetJS son locales y no hay otros CDN. `deployggb.js` de GeoGebra **no admite SRI** porque geogebra.org lo actualiza sin cambiar la dirección: un hash fijo bloquearía GeoGebra el día que lo actualicen.

#### Ideas 💡 — ✅ las cinco atendidas en la quinta sesión (ver sección 2.10)

- ✅ Preguntas paramétricas (cada estudiante recibe sus números).
- ✅ Preguntas que se responden en GeoGebra (se comprueba una condición en la construcción).
- ✅ Estadísticas por pregunta: dificultad, discriminación, ítem-resto y distractores.
- ✅ Versiones A–F del examen impreso, cada una con su clave.
- ✅ Interfaz unificada con la Caja de Herramientas: barra lateral, Introducción, avisos en la página, «Aprendo con videos», GeoGebra y manual en PDF.

**Siguientes pasos posibles:** convertir más preguntas del banco en paramétricas (hoy son 9 de opción múltiple y 3 tareas) y grabar videos para las 10 categorías que no tienen.

---

### 4. Cómo volver a generar el banco tras editar un módulo

```bash
node merge_questions.js
```

Esto valida los módulos y reescribe `js/data/questions.js`. Si aparece algún `ERROR`, el archivo **no** se modifica: corrija la pregunta indicada (por su ID, p. ej. `geometria_plano_12`) y vuelva a ejecutarlo. **Tanto el modo práctica como el generador usan `questions.js`**, así que los cambios en un módulo no se ven hasta regenerarlo.

Para retirar una pregunta sin borrarla ni renumerar las demás, añada `disabled: 'motivo',` a la pregunta.

### 5. Archivos modificados

- `index.html`, `exam.html`
- `js/ExamSystem.js` (reescrito), `js/EvaluationGenerator.js`
- `css/styles.css` (estilos añadidos al final)
- `js/modules/aritmetica.js`, `calculointegral.js`, `ecuaciones_diferenciales.js`, `estadistica_descriptiva.js`, `estadistica_probabilistica.js`
- `js/data/questions.js` (regenerado)
- Nuevo: `Mejoras_AppGeogebra.md`, `respaldo_antes_mejoras_2026-11-06.tar.gz`
- Sexta sesión: `js/geogebraEstados.js` (nuevo), `js/ExamSystem.js`, `js/EvaluationGenerator.js`, `merge_questions.js`, `index.html`, `exam.html`, `js/modules/aritmetica.js`, `js/data/questions.js`, manual, README y CHANGELOG
- Quinta sesión: `js/parametric.js`, `js/analysis.js`, `js/analysis-page.js`, `js/avisos.js`, `js/app.js`, `js/videos.js` (nuevos; `js/main.js` retirado), `index.html` y `exam.html` (interfaz de la Caja de Herramientas), `analisis.html` (redirección), `css/caja_herramientas.css` y `css/app.css` (nuevos), `lib/bootstrap`, `lib/fontawesome`, `docs/` (manual), `README.md`, `CHANGELOG.md`, 8 módulos con preguntas nuevas
- Cuarta sesión: `merge_questions.js` (reescrito), `js/main.js` y `js/exam-page.js` (nuevos), `index.html` y `exam.html` (sin código en línea, sin módulos), `js/ExamSystem.js`, `js/EvaluationGenerator.js`, `css/styles.css`, `css/generator.css`, `js/data/questions.js` (regenerado con categorías)
- Tercera sesión: `lib/` (nuevo: KaTeX y SheetJS), `index.html`, `exam.html`, `js/ExamSystem.js`, `js/EvaluationGenerator.js`, `css/styles.css`, `css/generator.css`, `js/modules/superficies_3d.js`, `js/data/questions.js` (regenerado); carpetas `RESULTADOS …` renombradas
- Segunda sesión: `js/config.js` (nuevo), `google_apps_script/Codigo.gs` e `INSTRUCCIONES.md` (nuevos), `js/ExamSystem.js`, `js/EvaluationGenerator.js`, `index.html`, `exam.html`, `css/styles.css`, `css/generator.css`, `merge_questions.js`, módulos `calculodiferencial`, `calculointegral`, `calculomultivariado`, `geometria`, `cambio_unidades`, `geometria_vectorial`, y `js/data/questions.js` (regenerado)
