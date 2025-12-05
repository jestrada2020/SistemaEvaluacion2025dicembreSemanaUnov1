window.examCategories = window.examCategories || {};

window.examCategories.estadistica_probabilistica = {
    name: 'Estadística Probabilística',
    description: 'Probabilidad básica, tablas de contingencia, axiomas, probabilidad condicional y Teorema de Bayes',
    questions: [
        // 1. Conceptos Básicos y Espacio Muestral (10 preguntas)
        {
            question: 'Un experimento aleatorio es aquel que:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Definición?}',
            options: [
                { latex: '\\text{No se puede predecir el resultado con certeza}' },
                { latex: '\\text{Siempre da el mismo resultado}' },
                { latex: '\\text{Depende solo de la habilidad}' },
                { latex: '\\text{No tiene reglas}' }
            ],
            correct: 0,
            hint: 'Lanzar un dado.'
        },
        {
            question: 'El conjunto de todos los resultados posibles de un experimento se llama:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\Omega = ?',
            options: [
                { latex: '\\text{Espacio Muestral}' },
                { latex: '\\text{Evento}' },
                { latex: '\\text{Población}' },
                { latex: '\\text{Muestra}' }
            ],
            correct: 0,
            hint: 'Omega.'
        },
        {
            question: 'Un evento imposible tiene probabilidad:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(\\emptyset) = ?',
            options: [
                { latex: '0' },
                { latex: '1' },
                { latex: '0.5' },
                { latex: '-1' }
            ],
            correct: 0,
            hint: 'Nunca ocurre.'
        },
        {
            question: 'Un evento seguro tiene probabilidad:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(\\Omega) = ?',
            options: [
                { latex: '1' },
                { latex: '0' },
                { latex: '100' },
                { latex: '0.99' }
            ],
            correct: 0,
            hint: 'Siempre ocurre.'
        },
        {
            question: 'Al lanzar una moneda, el espacio muestral es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\Omega = ?',
            options: [
                { latex: '\\{Cara, Cruz\\}' },
                { latex: '\\{Cara\\}' },
                { latex: '\\{Cruz\\}' },
                { latex: '\\{1, 2\\}' }
            ],
            correct: 0,
            hint: 'Dos opciones.'
        },
        {
            question: 'Al lanzar un dado de 6 caras, la probabilidad de obtener un número par es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(\\text{Par}) = ?',
            options: [
                { latex: '0.5' },
                { latex: '1/6' },
                { latex: '1/3' },
                { latex: '2/3' }
            ],
            correct: 0,
            hint: '{2, 4, 6} de 6.'
        },
        {
            question: 'Dos eventos son mutuamente excluyentes si:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'A \\cap B = ?',
            options: [
                { latex: '\\emptyset' },
                { latex: '\\Omega' },
                { latex: 'A' },
                { latex: 'B' }
            ],
            correct: 0,
            hint: 'No pueden ocurrir al mismo tiempo.'
        },
        {
            question: 'La probabilidad clásica (Laplace) se calcula como:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A) = ?',
            options: [
                { latex: '\\frac{\\text{Casos Favorables}}{\\text{Casos Totales}}' },
                { latex: '\\frac{\\text{Casos Totales}}{\\text{Casos Favorables}}' },
                { latex: '\\text{Casos Favorables} \\times \\text{Casos Totales}' },
                { latex: '\\text{Casos Favorables} - \\text{Casos Totales}' }
            ],
            correct: 0,
            hint: 'Favorables sobre posibles.'
        },
        {
            question: 'Si P(A) = 0.3, la probabilidad del complemento A\' es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A\') = 1 - P(A)',
            options: [
                { latex: '0.7' },
                { latex: '0.3' },
                { latex: '0' },
                { latex: '1.3' }
            ],
            correct: 0,
            hint: 'Lo que falta para 1.'
        },
        {
            question: 'La unión de dos eventos A y B representa:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'A \\cup B',
            options: [
                { latex: '\\text{Ocurre A o ocurre B o ambos}' },
                { latex: '\\text{Ocurre A y B al mismo tiempo}' },
                { latex: '\\text{No ocurre ni A ni B}' },
                { latex: '\\text{Ocurre solo A}' }
            ],
            correct: 0,
            hint: 'Suma lógica.'
        },

        // 2. Tablas de Contingencia y Probabilidad Conjunta (10 preguntas)
        {
            question: 'En una tabla de contingencia, la probabilidad conjunta es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A \\cap B)',
            options: [
                { latex: '\\text{La probabilidad de la intersección (celda interna)}' },
                { latex: '\\text{La probabilidad marginal (total de fila/columna)}' },
                { latex: '\\text{La suma de todas las celdas}' },
                { latex: '\\text{La probabilidad condicional}' }
            ],
            correct: 0,
            hint: 'Intersección de fila y columna.'
        },
        {
            question: 'La probabilidad marginal se encuentra en:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Ubicación?}',
            options: [
                { latex: '\\text{Los márgenes (totales de fila o columna)}' },
                { latex: '\\text{El centro de la tabla}' },
                { latex: '\\text{La esquina superior izquierda}' },
                { latex: '\\text{Fuera de la tabla}' }
            ],
            correct: 0,
            hint: 'Márgenes.'
        },
        {
            question: 'Si en una muestra de 100, 20 son hombres fumadores, P(Hombre y Fumador) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(H \\cap F) = ?',
            options: [
                { latex: '0.2' },
                { latex: '0.02' },
                { latex: '0.5' },
                { latex: '20' }
            ],
            correct: 0,
            hint: '20/100.'
        },
        {
            question: 'La suma de todas las probabilidades conjuntas en una tabla debe ser:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\sum P(A_i \\cap B_j) = ?',
            options: [
                { latex: '1' },
                { latex: '100' },
                { latex: '0' },
                { latex: 'N' }
            ],
            correct: 0,
            hint: 'Totalidad.'
        },
        {
            question: 'Dada una tabla, P(A|B) se calcula como:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A|B) = ?',
            options: [
                { latex: '\\frac{P(A \\cap B)}{P(B)}' },
                { latex: '\\frac{P(A \\cap B)}{P(A)}' },
                { latex: 'P(A) \\times P(B)' },
                { latex: 'P(A) + P(B)' }
            ],
            correct: 0,
            hint: 'Restringir el espacio muestral a B.'
        },
        {
            question: 'Si A y B son independientes, en la tabla se cumple:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A \\cap B) = ?',
            options: [
                { latex: 'P(A) \\times P(B)' },
                { latex: 'P(A) + P(B)' },
                { latex: '0' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Producto de marginales.'
        },
        {
            question: 'En una tabla 2x2, los grados de libertad para Chi-cuadrado son:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'gl = (r-1)(c-1)',
            options: [
                { latex: '1' },
                { latex: '2' },
                { latex: '4' },
                { latex: '0' }
            ],
            correct: 0,
            hint: '(2-1)(2-1).'
        },
        {
            question: 'La frecuencia esperada en una celda (independencia) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'E_{ij} = ?',
            options: [
                { latex: '\\frac{(\\text{Total Fila}) \\times (\\text{Total Columna})}{\\text{Total Gran}}' },
                { latex: '\\text{Total Fila} + \\text{Total Columna}' },
                { latex: '\\text{Frecuencia Observada}' },
                { latex: '\\text{Promedio}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad.'
        },
        {
            question: 'Si P(A)=0.5, P(B)=0.4 y P(A y B)=0.2, ¿son independientes?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '0.5 \\times 0.4 = 0.2',
            options: [
                { latex: '\\text{Sí}' },
                { latex: '\\text{No}' },
                { latex: '\\text{Faltan datos}' },
                { latex: '\\text{Son excluyentes}' }
            ],
            correct: 0,
            hint: 'Se cumple la multiplicación.'
        },
        {
            question: 'La probabilidad condicional P(A|B) es mayor que P(A) si:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A|B) > P(A)',
            options: [
                { latex: '\\text{B favorece la ocurrencia de A}' },
                { latex: '\\text{B inhibe A}' },
                { latex: '\\text{Son independientes}' },
                { latex: '\\text{Son excluyentes}' }
            ],
            correct: 0,
            hint: 'Correlación positiva.'
        },

        // 3. Axiomas y Reglas de Probabilidad (10 preguntas)
        {
            question: 'Axioma 1: La probabilidad de cualquier evento es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(E) \\ge ?',
            options: [
                { latex: '0' },
                { latex: '1' },
                { latex: '-1' },
                { latex: '0.5' }
            ],
            correct: 0,
            hint: 'No negativa.'
        },
        {
            question: 'Axioma 2: La probabilidad del espacio muestral es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(\\Omega) = ?',
            options: [
                { latex: '1' },
                { latex: '0' },
                { latex: '\\infty' },
                { latex: '100' }
            ],
            correct: 0,
            hint: 'Certeza.'
        },
        {
            question: 'Regla de la Adición General:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A \\cup B) = ?',
            options: [
                { latex: 'P(A) + P(B) - P(A \\cap B)' },
                { latex: 'P(A) + P(B)' },
                { latex: 'P(A) \\times P(B)' },
                { latex: 'P(A) - P(B)' }
            ],
            correct: 0,
            hint: 'Restar la intersección para no contar doble.'
        },
        {
            question: 'Si A y B son mutuamente excluyentes, P(A U B) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A \\cup B) = ?',
            options: [
                { latex: 'P(A) + P(B)' },
                { latex: 'P(A) \\times P(B)' },
                { latex: '0' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Intersección es cero.'
        },
        {
            question: 'Regla de la Multiplicación General:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A \\cap B) = ?',
            options: [
                { latex: 'P(A) P(B|A)' },
                { latex: 'P(A) P(B)' },
                { latex: 'P(A) + P(B)' },
                { latex: 'P(B|A)' }
            ],
            correct: 0,
            hint: 'Definición de condicional despejada.'
        },
        {
            question: 'Si A está contenido en B (A subconjunto de B), entonces:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'A \\subset B \\implies ?',
            options: [
                { latex: 'P(A) \\le P(B)' },
                { latex: 'P(A) \\ge P(B)' },
                { latex: 'P(A) = P(B)' },
                { latex: 'P(A) = 0' }
            ],
            correct: 0,
            hint: 'Monotonicidad.'
        },
        {
            question: 'La probabilidad de la diferencia P(A - B) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A \\cap B\') = ?',
            options: [
                { latex: 'P(A) - P(A \\cap B)' },
                { latex: 'P(A) - P(B)' },
                { latex: 'P(B) - P(A)' },
                { latex: 'P(A) + P(B)' }
            ],
            correct: 0,
            hint: 'A pero no B.'
        },
        {
            question: 'Probabilidad de que ocurra al menos uno de tres eventos independientes:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A \\cup B \\cup C) = ?',
            options: [
                { latex: '1 - P(A\')P(B\')P(C\')' },
                { latex: 'P(A)+P(B)+P(C)' },
                { latex: 'P(A)P(B)P(C)' },
                { latex: '0' }
            ],
            correct: 0,
            hint: '1 - Probabilidad de ninguno.'
        },
        {
            question: 'Si P(A)=0.6 y P(B)=0.5, ¿pueden ser mutuamente excluyentes?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '0.6 + 0.5 = 1.1',
            options: [
                { latex: '\\text{No, la suma supera 1}' },
                { latex: '\\text{Sí}' },
                { latex: '\\text{Depende de la intersección}' },
                { latex: '\\text{Siempre}' }
            ],
            correct: 0,
            hint: 'Suma > 1 imposible si son disjuntos.'
        },
        {
            question: 'La desigualdad de Boole establece:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(\\cup A_i) \\le ?',
            options: [
                { latex: '\\sum P(A_i)' },
                { latex: '1' },
                { latex: '\\prod P(A_i)' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'La unión es menor o igual a la suma.'
        },

        // 4. Probabilidad Condicional e Independencia (10 preguntas)
        {
            question: 'P(A|B) se lee como:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Lectura?}',
            options: [
                { latex: '\\text{Probabilidad de A dado B}' },
                { latex: '\\text{Probabilidad de A y B}' },
                { latex: '\\text{Probabilidad de A o B}' },
                { latex: '\\text{Probabilidad de B dado A}' }
            ],
            correct: 0,
            hint: 'Condición.'
        },
        {
            question: 'Si P(A|B) = P(A), entonces A y B son:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Relación?}',
            options: [
                { latex: '\\text{Independientes}' },
                { latex: '\\text{Mutuamente excluyentes}' },
                { latex: '\\text{Dependientes}' },
                { latex: '\\text{Iguales}' }
            ],
            correct: 0,
            hint: 'B no afecta a A.'
        },
        {
            question: 'Si A y B son independientes, P(A|B) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A|B) = ?',
            options: [
                { latex: 'P(A)' },
                { latex: 'P(B)' },
                { latex: 'P(A \\cap B)' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'No cambia.'
        },
        {
            question: 'Si P(A y B) = 0.1 y P(B) = 0.5, entonces P(A|B) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '0.1 / 0.5',
            options: [
                { latex: '0.2' },
                { latex: '0.05' },
                { latex: '0.6' },
                { latex: '0.4' }
            ],
            correct: 0,
            hint: 'División.'
        },
        {
            question: 'Dos eventos independientes pueden ser mutuamente excluyentes (si prob > 0)?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Posible?}',
            options: [
                { latex: '\\text{No, nunca}' },
                { latex: '\\text{Sí, siempre}' },
                { latex: '\\text{A veces}' },
                { latex: '\\text{Solo si suman 1}' }
            ],
            correct: 0,
            hint: 'Si son independientes P(A y B) > 0. Si excluyentes P(A y B) = 0.'
        },
        {
            question: 'La probabilidad de sacar un As dado que es una carta de corazones (Baraja 52):',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(\\text{As}|\\text{Corazón})',
            options: [
                { latex: '1/13' },
                { latex: '1/52' },
                { latex: '1/4' },
                { latex: '4/13' }
            ],
            correct: 0,
            hint: 'Hay 13 corazones, 1 es As.'
        },
        {
            question: 'Si P(A|B) = 0.8 y P(B) = 0.5, P(A y B) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '0.8 \\times 0.5',
            options: [
                { latex: '0.4' },
                { latex: '1.3' },
                { latex: '0.3' },
                { latex: '0.8' }
            ],
            correct: 0,
            hint: 'Multiplicación.'
        },
        {
            question: 'El espacio muestral reducido en P(A|B) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Nuevo espacio?}',
            options: [
                { latex: 'B' },
                { latex: 'A' },
                { latex: '\\Omega' },
                { latex: 'A \\cap B' }
            ],
            correct: 0,
            hint: 'Dado B.'
        },
        {
            question: 'Si P(A) > 0 y P(B) > 0 son excluyentes, entonces P(A|B) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A|B) = ?',
            options: [
                { latex: '0' },
                { latex: '1' },
                { latex: 'P(A)' },
                { latex: 'P(B)' }
            ],
            correct: 0,
            hint: 'No pueden ocurrir juntos.'
        },
        {
            question: 'La independencia de tres eventos A, B, C requiere:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Condición?}',
            options: [
                { latex: '\\text{Independencia por pares y conjunta}' },
                { latex: '\\text{Solo por pares}' },
                { latex: '\\text{Solo conjunta}' },
                { latex: '\\text{Que sean excluyentes}' }
            ],
            correct: 0,
            hint: 'Todas las combinaciones.'
        },

        // 5. Teorema de la Probabilidad Total y Bayes (16 preguntas)
        {
            question: 'Una partición del espacio muestral es un conjunto de eventos B_i que son:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Condición?}',
            options: [
                { latex: '\\text{Mutuamente excluyentes y su unión es } \\Omega' },
                { latex: '\\text{Independientes}' },
                { latex: '\\text{Iguales}' },
                { latex: '\\text{Vacíos}' }
            ],
            correct: 0,
            hint: 'Dividen el pastel completo.'
        },
        {
            question: 'Teorema de la Probabilidad Total:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A) = ?',
            options: [
                { latex: '\\sum P(A|B_i)P(B_i)' },
                { latex: '\\sum P(A \\cap B_i)' }, // Also true, but the formula usually expands the intersection. Let's keep the first one as the standard formula form.
                { latex: '\\sum P(B_i|A)P(A)' },
                { latex: '\\sum P(B_i)' }
            ],
            correct: 0,
            hint: 'Suma de caminos.'
        },
        {
            question: 'El Teorema de Bayes permite calcular:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(B_i|A) = ?',
            options: [
                { latex: '\\text{La probabilidad a posteriori}' },
                { latex: '\\text{La probabilidad a priori}' },
                { latex: '\\text{La probabilidad total}' },
                { latex: '\\text{La independencia}' }
            ],
            correct: 0,
            hint: 'Invertir la condición.'
        },
        {
            question: 'Fórmula de Bayes:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(B_k|A) = ?',
            options: [
                { latex: '\\frac{P(A|B_k)P(B_k)}{\\sum P(A|B_i)P(B_i)}' },
                { latex: '\\frac{P(A|B_k)}{P(A)}' },
                { latex: 'P(A|B_k)P(B_k)' },
                { latex: '\\frac{P(B_k|A)P(A)}{P(B_k)}' }
            ],
            correct: 0,
            hint: 'Favorables sobre totales.'
        },
        {
            question: 'En Bayes, P(B_i) se llama:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Nombre?}',
            options: [
                { latex: '\\text{Probabilidad a priori}' },
                { latex: '\\text{Probabilidad a posteriori}' },
                { latex: '\\text{Verosimilitud}' },
                { latex: '\\text{Evidencia}' }
            ],
            correct: 0,
            hint: 'Antes de la evidencia.'
        },
        {
            question: 'En Bayes, P(A|B_i) se llama:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Nombre?}',
            options: [
                { latex: '\\text{Verosimilitud (Likelihood)}' },
                { latex: '\\text{A priori}' },
                { latex: '\\text{A posteriori}' },
                { latex: '\\text{Marginal}' }
            ],
            correct: 0,
            hint: 'Probabilidad de la evidencia dada la hipótesis.'
        },
        {
            question: 'Si una prueba médica tiene 99% de sensibilidad, P(Positivo|Enfermo) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(+|E) = ?',
            options: [
                { latex: '0.99' },
                { latex: '0.01' },
                { latex: '0.9' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Definición de sensibilidad.'
        },
        {
            question: 'Si la prevalencia de una enfermedad es baja, un positivo en una prueba fiable:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(E|+) \\text{ es...}',
            options: [
                { latex: '\\text{A menudo sorprendentemente baja (Falsos Positivos)}' },
                { latex: '\\text{Siempre 100%}' },
                { latex: '\\text{Igual a la sensibilidad}' },
                { latex: '\\text{Cero}' }
            ],
            correct: 0,
            hint: 'Paradoja del falso positivo.'
        },
        {
            question: 'La probabilidad total P(A) actúa como:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Función?}',
            options: [
                { latex: '\\text{Constante de normalización}' },
                { latex: '\\text{Hipótesis}' },
                { latex: '\\text{Error}' },
                { latex: '\\text{Variable}' }
            ],
            correct: 0,
            hint: 'El denominador.'
        },
        {
            question: 'Si tenemos 3 máquinas A, B, C produciendo 20%, 30%, 50%, P(A) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A) = ?',
            options: [
                { latex: '0.2' },
                { latex: '0.3' },
                { latex: '0.5' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'A priori.'
        },
        {
            question: 'Si P(D|A)=0.01 (Defectuosos de A), P(D|A) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Verosimilitud}',
            options: [
                { latex: '0.01' },
                { latex: '0.99' },
                { latex: '0.2' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Dato directo.'
        },
        {
            question: 'Bayes se usa fundamentalmente para:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Uso?}',
            options: [
                { latex: '\\text{Actualizar creencias con nueva evidencia}' },
                { latex: '\\text{Calcular promedios}' },
                { latex: '\\text{Hacer gráficas}' },
                { latex: '\\text{Contar casos}' }
            ],
            correct: 0,
            hint: 'Aprendizaje.'
        },
        {
            question: 'Si P(A)=1 (Certeza), entonces P(A|B) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A|B) = ?',
            options: [
                { latex: '1' },
                { latex: '0' },
                { latex: 'P(B)' },
                { latex: '0.5' }
            ],
            correct: 0,
            hint: 'Siempre ocurre.'
        },
        {
            question: 'Dos eventos A y B son dependientes si:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(A|B) \\ne ?',
            options: [
                { latex: 'P(A)' },
                { latex: 'P(B)' },
                { latex: '1' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'La condición cambia la probabilidad.'
        },
        {
            question: 'En un árbol de probabilidad, las ramas que salen de un nodo suman:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\sum = ?',
            options: [
                { latex: '1' },
                { latex: '100' },
                { latex: '0' },
                { latex: '0.5' }
            ],
            correct: 0,
            hint: 'Probabilidad total del nodo.'
        },
        {
            question: 'La probabilidad de B dado A más la probabilidad de B\' dado A suma:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(B|A) + P(B\'|A) = ?',
            options: [
                { latex: '1' },
                { latex: 'P(A)' },
                { latex: '0' },
                { latex: 'P(B)' }
            ],
            correct: 0,
            hint: 'Complemento condicional.'
        },

        // 6. Combinatoria Básica para Probabilidad (10 preguntas)
        {
            question: 'El número de formas de ordenar n objetos distintos es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P_n = ?',
            options: [
                { latex: 'n!' },
                { latex: 'n^2' },
                { latex: '2^n' },
                { latex: 'n' }
            ],
            correct: 0,
            hint: 'Factorial.'
        },
        {
            question: 'Las combinaciones de n elementos tomados de k en k (sin orden) son:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'C(n,k) = ?',
            options: [
                { latex: '\\frac{n!}{k!(n-k)!}' },
                { latex: '\\frac{n!}{(n-k)!}' },
                { latex: 'n^k' },
                { latex: 'n!' }
            ],
            correct: 0,
            hint: 'Binomial.'
        },
        {
            question: 'Las variaciones (permutaciones) de n en k (con orden) son:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'V(n,k) = ?',
            options: [
                { latex: '\\frac{n!}{(n-k)!}' },
                { latex: '\\frac{n!}{k!(n-k)!}' },
                { latex: 'n^k' },
                { latex: 'k^n' }
            ],
            correct: 0,
            hint: 'Importa el orden.'
        },
        {
            question: 'Probabilidad de adivinar un PIN de 4 dígitos (0-9) en un intento:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P = ?',
            options: [
                { latex: '1/10000' },
                { latex: '1/1000' },
                { latex: '1/4' },
                { latex: '1/9999' }
            ],
            correct: 0,
            hint: '10^4 opciones.'
        },
        {
            question: 'Número de subconjuntos de un conjunto de n elementos:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '|P(A)| = ?',
            options: [
                { latex: '2^n' },
                { latex: 'n^2' },
                { latex: 'n!' },
                { latex: '2n' }
            ],
            correct: 0,
            hint: 'Potencia.'
        },
        {
            question: 'Probabilidad de sacar 2 caras en 2 lanzamientos de moneda:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(CC) = ?',
            options: [
                { latex: '0.25' },
                { latex: '0.5' },
                { latex: '0.75' },
                { latex: '0.1' }
            ],
            correct: 0,
            hint: '0.5 * 0.5.'
        },
        {
            question: 'Si importa el orden y hay repetición, usamos:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Fórmula?}',
            options: [
                { latex: 'n^k' },
                { latex: 'n!' },
                { latex: 'C(n,k)' },
                { latex: 'V(n,k)' }
            ],
            correct: 0,
            hint: 'Variaciones con repetición.'
        },
        {
            question: 'Anagramas de la palabra "ANA":',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'N = ?',
            options: [
                { latex: '3' }, // ANA, AAN, NAA
                { latex: '6' },
                { latex: '2' },
                { latex: '1' }
            ],
            correct: 0,
            hint: '3! / 2!.'
        },
        {
            question: 'Probabilidad de sacar una bola roja de una urna con 3 rojas y 2 azules:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(R) = ?',
            options: [
                { latex: '3/5' },
                { latex: '2/5' },
                { latex: '1/5' },
                { latex: '3/2' }
            ],
            correct: 0,
            hint: '3 de 5.'
        },
        {
            question: 'Principio multiplicativo: Si una tarea tiene m formas y otra n, juntas tienen:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'N = ?',
            options: [
                { latex: 'm \\times n' },
                { latex: 'm + n' },
                { latex: 'm^n' },
                { latex: 'm!' }
            ],
            correct: 0,
            hint: 'Producto.'
        }
    ]
};
