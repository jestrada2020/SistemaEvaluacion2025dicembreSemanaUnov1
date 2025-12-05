window.examCategories = window.examCategories || {};

window.examCategories.analisis_numerico = {
    name: 'Análisis Numérico',
    description: 'Métodos numéricos para resolución de ecuaciones, sistemas, integración y ecuaciones diferenciales',
    questions: [
        // 1. Análisis de Errores (5 preguntas)
        {
            question: 'Si el valor verdadero es 3.14159 y el valor aproximado es 3.14, ¿cuál es el error absoluto?',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'E_t = |V_{verdadero} - V_{aprox}|',
            options: [
                { latex: '0.00159' },
                { latex: '0.0015' },
                { latex: '0.002' },
                { latex: '0.0016' }
            ],
            correct: 0,
            hint: 'Resta los valores y toma el valor absoluto.'
        },
        {
            question: 'Calcule el error relativo porcentual si el valor verdadero es 50 y el aproximado es 49.',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\epsilon_t = \\left| \\frac{50 - 49}{50} \\right| \\times 100\\%',
            options: [
                { latex: '2\\%' },
                { latex: '1\\%' },
                { latex: '5\\%' },
                { latex: '0.5\\%' }
            ],
            correct: 0,
            hint: '(Error Absoluto / Valor Verdadero) * 100'
        },
        {
            question: '¿Qué tipo de error se produce al cortar una expansión decimal infinita (ej. usar 3.33 para 10/3)?',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Tipo de error?}',
            options: [
                { latex: '\\text{Error de truncamiento}' },
                { latex: '\\text{Error de redondeo}' },
                { latex: '\\text{Error absoluto}' },
                { latex: '\\text{Error relativo}' }
            ],
            correct: 1, // Round-off error is usually associated with finite precision representation, but truncation is specifically cutting off. Wait, 3.33 is rounding or chopping. Usually "cutting off" implies chopping -> truncation in series, but finite representation is round-off. Let's stick to standard definitions. 10/3 is 3.333... using 3.33 is rounding/chopping.
            // Let's clarify: Truncation error comes from approximating a math procedure (like Taylor series). Round-off comes from finite digit representation.
            // Using 3.33 for 10/3 is representing a number with finite digits -> Round-off error.
            hint: 'Relacionado con la representación finita de números.'
        },
        {
            question: 'En la serie de Taylor, el error cometido al usar solo los primeros n términos se llama:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Tipo de error?}',
            options: [
                { latex: '\\text{Error de truncamiento}' },
                { latex: '\\text{Error de redondeo}' },
                { latex: '\\text{Error inherente}' },
                { latex: '\\text{Error humano}' }
            ],
            correct: 0,
            hint: 'Cortar una suma infinita.'
        },
        {
            question: 'Si redondeamos 2.71828 a 3 cifras significativas, obtenemos:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '2.71828 \\to ?',
            options: [
                { latex: '2.72' },
                { latex: '2.71' },
                { latex: '2.718' },
                { latex: '2.7' }
            ],
            correct: 0,
            hint: 'La tercera cifra es 1, la siguiente es 8 (mayor que 5).'
        },

        // 2. Raíces de Ecuaciones (10 preguntas)
        {
            question: 'En el método de Bisección, si f(a) y f(b) tienen signos opuestos, entonces:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'f(a) \\cdot f(b) < 0',
            options: [
                { latex: '\\text{Existe al menos una raíz en [a, b]}' },
                { latex: '\\text{No existe raíz en [a, b]}' },
                { latex: '\\text{La función es constante}' },
                { latex: '\\text{La raíz es (a+b)/2}' }
            ],
            correct: 0,
            hint: 'Teorema de Bolzano.'
        },
        {
            question: 'La fórmula iterativa del método de Newton-Raphson es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x_{i+1} = ?',
            options: [
                { latex: 'x_i - \\frac{f(x_i)}{f\'(x_i)}' },
                { latex: 'x_i - \\frac{f\'(x_i)}{f(x_i)}' },
                { latex: 'x_i + \\frac{f(x_i)}{f\'(x_i)}' },
                { latex: '\\frac{f(x_i)}{f\'(x_i)}' }
            ],
            correct: 0,
            hint: 'Usa la tangente en el punto.'
        },
        {
            question: 'El método de la Secante requiere:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Requisitos?}',
            options: [
                { latex: '\\text{Dos puntos iniciales}' },
                { latex: '\\text{Un punto inicial y la derivada}' },
                { latex: '\\text{Un intervalo cerrado}' },
                { latex: '\\text{Que la función sea lineal}' }
            ],
            correct: 0,
            hint: 'Aproxima la derivada con una secante.'
        },
        {
            question: '¿Cuál método converge cuadráticamente (generalmente más rápido)?',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Método?}',
            options: [
                { latex: '\\text{Newton-Raphson}' },
                { latex: '\\text{Bisección}' },
                { latex: '\\text{Falsa Posición}' },
                { latex: '\\text{Punto Fijo}' }
            ],
            correct: 0,
            hint: 'Usa información de la derivada.'
        },
        {
            question: 'Para f(x) = x^2 - 4, usando Newton-Raphson con x0 = 3, calcule x1.',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x_1 = 3 - \\frac{3^2 - 4}{2(3)}',
            options: [
                { latex: '2.1667' }, // 3 - 5/6 = 3 - 0.833 = 2.166
                { latex: '2.5' },
                { latex: '2.0' },
                { latex: '2.3333' }
            ],
            correct: 0,
            hint: 'x1 = x0 - f(x0)/f\'(x0)'
        },
        {
            question: 'En el método de Punto Fijo x = g(x), la convergencia está garantizada si:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|g\'(x)| < ?',
            options: [
                { latex: '1' },
                { latex: '0' },
                { latex: 'x' },
                { latex: '2' }
            ],
            correct: 0,
            hint: 'La pendiente debe ser suave.'
        },
        {
            question: 'Calcule la primera aproximación de la raíz de f(x) = x^3 - x - 1 en [1, 2] por Bisección.',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x_r = \\frac{1 + 2}{2}',
            options: [
                { latex: '1.5' },
                { latex: '1.25' },
                { latex: '1.75' },
                { latex: '1.0' }
            ],
            correct: 0,
            hint: 'Punto medio del intervalo.'
        },
        {
            question: 'El método de la Falsa Posición (Regula Falsi) difiere de la Bisección en que:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Diferencia?}',
            options: [
                { latex: '\\text{Usa una interpolación lineal en lugar del punto medio}' },
                { latex: '\\text{No requiere cambio de signo}' },
                { latex: '\\text{Usa derivadas}' },
                { latex: '\\text{Siempre converge más lento}' }
            ],
            correct: 0,
            hint: 'Une f(a) y f(b) con una recta.'
        },
        {
            question: 'Si f(x) = e^x - 3x, f\'(x) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'f\'(x) = ?',
            options: [
                { latex: 'e^x - 3' },
                { latex: 'e^x - 3x' },
                { latex: 'xe^{x-1} - 3' },
                { latex: 'e^x' }
            ],
            correct: 0,
            hint: 'Derivada básica.'
        },
        {
            question: '¿Qué método es "abierto" (no requiere intervalo que encierre la raíz)?',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Método abierto?}',
            options: [
                { latex: '\\text{Newton-Raphson}' },
                { latex: '\\text{Bisección}' },
                { latex: '\\text{Falsa Posición}' },
                { latex: '\\text{Búsqueda Incremental}' }
            ],
            correct: 0,
            hint: 'Solo requiere un punto inicial.'
        },

        // 3. Sistemas de Ecuaciones Lineales (8 preguntas)
        {
            question: 'El método de Eliminación Gaussiana transforma la matriz en:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Forma?}',
            options: [
                { latex: '\\text{Triangular superior}' },
                { latex: '\\text{Diagonal}' },
                { latex: '\\text{Identidad}' },
                { latex: '\\text{Triangular inferior}' }
            ],
            correct: 0,
            hint: 'Ceros debajo de la diagonal.'
        },
        {
            question: 'En la descomposición LU, la matriz A se factoriza en:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = L \\cdot U',
            options: [
                { latex: '\\text{Lower (Inf) y Upper (Sup) triangulares}' },
                { latex: '\\text{Left y Up matrices}' },
                { latex: '\\text{Lineal y Unitaria}' },
                { latex: '\\text{Logarítmica y Uniforme}' }
            ],
            correct: 0,
            hint: 'L = Lower, U = Upper.'
        },
        {
            question: 'El método de Gauss-Seidel es un método:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Iterativo}' },
                { latex: '\\text{Directo}' },
                { latex: '\\text{Gráfico}' },
                { latex: '\\text{Analítico exacto}' }
            ],
            correct: 0,
            hint: 'Se aproxima paso a paso.'
        },
        {
            question: 'Una condición suficiente para la convergencia de Gauss-Seidel es que la matriz sea:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Condición?}',
            options: [
                { latex: '\\text{Diagonalmente dominante}' },
                { latex: '\\text{Simétrica}' },
                { latex: '\\text{Positiva definida}' },
                { latex: '\\text{Tridiagonal}' }
            ],
            correct: 0,
            hint: 'La diagonal pesa más que el resto de la fila.'
        },
        {
            question: 'El determinante de una matriz triangular es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|A| = ?',
            options: [
                { latex: '\\text{El producto de la diagonal principal}' },
                { latex: '\\text{La suma de la diagonal}' },
                { latex: '\\text{Cero}' },
                { latex: '\\text{Uno}' }
            ],
            correct: 0,
            hint: 'Propiedad de determinantes.'
        },
        {
            question: '¿Qué método es más eficiente para resolver múltiples sistemas Ax=b con la misma A pero diferente b?',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Método?}',
            options: [
                { latex: '\\text{Descomposición LU}' },
                { latex: '\\text{Eliminación Gaussiana simple}' },
                { latex: '\\text{Regla de Cramer}' },
                { latex: '\\text{Gauss-Jordan}' }
            ],
            correct: 0,
            hint: 'Factorizas una vez, resuelves rápido.'
        },
        {
            question: 'El pivoteo parcial se usa para:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Objetivo?}',
            options: [
                { latex: '\\text{Reducir errores de redondeo y evitar división por cero}' },
                { latex: '\\text{Hacer la matriz simétrica}' },
                { latex: '\\text{Acelerar el cálculo manualmente}' },
                { latex: '\\text{Calcular el determinante}' }
            ],
            correct: 0,
            hint: 'Intercambiar filas para poner el mayor elemento en la diagonal.'
        },
        {
            question: 'La matriz inversa A^-1 cumple que:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A \\cdot A^{-1} = ?',
            options: [
                { latex: 'I \\text{ (Identidad)}' },
                { latex: '0 \\text{ (Nula)}' },
                { latex: 'A' },
                { latex: 'A^T' }
            ],
            correct: 0,
            hint: 'Definición de inversa.'
        },

        // 4. Interpolación y Ajuste de Curvas (7 preguntas)
        {
            question: 'El polinomio de interpolación de Lagrange de grado n pasa por:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Puntos?}',
            options: [
                { latex: 'n+1 \\text{ puntos dados}' },
                { latex: 'n \\text{ puntos dados}' },
                { latex: '\\text{Ningún punto exacto}' },
                { latex: '\\text{El origen}' }
            ],
            correct: 0,
            hint: 'Grado n necesita n+1 puntos.'
        },
        {
            question: 'El método de Mínimos Cuadrados busca minimizar:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\sum (y_i - f(x_i))^2',
            options: [
                { latex: '\\text{La suma de los cuadrados de los residuos}' },
                { latex: '\\text{La suma de los errores absolutos}' },
                { latex: '\\text{La distancia máxima}' },
                { latex: '\\text{El grado del polinomio}' }
            ],
            correct: 0,
            hint: 'Nombre del método.'
        },
        {
            question: 'Para interpolar 3 puntos (x0, y0), (x1, y1), (x2, y2), ¿qué grado máximo tiene el polinomio único?',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Grado?}',
            options: [
                { latex: '2' },
                { latex: '3' },
                { latex: '1' },
                { latex: '4' }
            ],
            correct: 0,
            hint: 'n puntos definen grado n-1.'
        },
        {
            question: 'El coeficiente de correlación r^2 indica:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'r^2 \\approx 1',
            options: [
                { latex: '\\text{La bondad del ajuste}' },
                { latex: '\\text{El error promedio}' },
                { latex: '\\text{La pendiente de la recta}' },
                { latex: '\\text{El número de datos}' }
            ],
            correct: 0,
            hint: 'Cercano a 1 es buen ajuste.'
        },
        {
            question: 'La interpolación por Splines Cúbicos usa:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{¿Qué usa?}',
            options: [
                { latex: '\\text{Polinomios de grado 3 por tramos}' },
                { latex: '\\text{Un solo polinomio de grado 3}' },
                { latex: '\\text{Rectas unidas}' },
                { latex: '\\text{Parábolas}' }
            ],
            correct: 0,
            hint: 'Suavidad en los nodos.'
        },
        {
            question: 'Dados los puntos (1,1) y (3,5), la recta de interpolación es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'y = mx + b',
            options: [
                { latex: 'y = 2x - 1' },
                { latex: 'y = 2x + 1' },
                { latex: 'y = x + 2' },
                { latex: 'y = 3x - 2' }
            ],
            correct: 0,
            hint: 'm = (5-1)/(3-1) = 2.'
        },
        {
            question: 'El fenómeno de Runge (oscilación en los bordes) ocurre al interpolar con:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Causa?}',
            options: [
                { latex: '\\text{Polinomios de alto grado equiespaciados}' },
                { latex: '\\text{Splines cúbicos}' },
                { latex: '\\text{Rectas de regresión}' },
                { latex: '\\text{Mínimos cuadrados}' }
            ],
            correct: 0,
            hint: 'Polinomios de grado alto son inestables.'
        },

        // 5. Integración Numérica (8 preguntas)
        {
            question: 'La Regla del Trapecio aproxima el área bajo la curva usando:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Forma?}',
            options: [
                { latex: '\\text{Polinomios de primer grado (rectas)}' },
                { latex: '\\text{Polinomios de segundo grado (parábolas)}' },
                { latex: '\\text{Rectángulos}' },
                { latex: '\\text{Círculos}' }
            ],
            correct: 0,
            hint: 'Une puntos con líneas rectas.'
        },
        {
            question: 'La Regla de Simpson 1/3 requiere que el número de segmentos sea:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'n = ?',
            options: [
                { latex: '\\text{Par}' },
                { latex: '\\text{Impar}' },
                { latex: '\\text{Cualquiera}' },
                { latex: '\\text{Múltiplo de 3}' }
            ],
            correct: 0,
            hint: 'Usa pares de segmentos para ajustar parábolas.'
        },
        {
            question: 'La Regla de Simpson 3/8 ajusta:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Grado?}',
            options: [
                { latex: '\\text{Polinomios cúbicos (grado 3)}' },
                { latex: '\\text{Parábolas (grado 2)}' },
                { latex: '\\text{Rectas (grado 1)}' },
                { latex: '\\text{Constantes}' }
            ],
            correct: 0,
            hint: 'Usa 4 puntos (3 segmentos).'
        },
        {
            question: 'Calcule la integral de f(x)=x en [0, 2] usando Trapecio simple.',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'I \\approx (2-0)\\frac{f(0)+f(2)}{2}',
            options: [
                { latex: '2' },
                { latex: '1' },
                { latex: '4' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Area triángulo base 2 altura 2.'
        },
        {
            question: '¿Qué método de integración es generalmente más preciso para funciones suaves?',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Método?}',
            options: [
                { latex: '\\text{Cuadratura de Gauss}' },
                { latex: '\\text{Regla del Trapecio}' },
                { latex: '\\text{Sumas de Riemann}' },
                { latex: '\\text{Regla del Rectángulo}' }
            ],
            correct: 0,
            hint: 'Optimiza los puntos de evaluación.'
        },
        {
            question: 'El error en la Regla del Trapecio es proporcional a:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'E \\propto ?',
            options: [
                { latex: 'h^2' }, // Global error is O(h^2)
                { latex: 'h' },
                { latex: 'h^4' },
                { latex: 'h^3' }
            ],
            correct: 0,
            hint: 'Orden 2.'
        },
        {
            question: 'El error en la Regla de Simpson 1/3 es proporcional a:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'E \\propto ?',
            options: [
                { latex: 'h^4' }, // Global error is O(h^4)
                { latex: 'h^2' },
                { latex: 'h^3' },
                { latex: 'h^5' }
            ],
            correct: 0,
            hint: 'Orden 4.'
        },
        {
            question: 'Para integrar numéricamente datos con espaciamiento desigual, se usa:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Método?}',
            options: [
                { latex: '\\text{Regla del Trapecio aplicada a cada segmento}' },
                { latex: '\\text{Simpson 1/3}' },
                { latex: '\\text{Simpson 3/8}' },
                { latex: '\\text{Newton-Cotes cerrado}' }
            ],
            correct: 0,
            hint: 'Suma de áreas de trapecios individuales.'
        },

        // 6. Diferenciación Numérica (6 preguntas)
        {
            question: 'La aproximación por diferencias finitas hacia adelante de f\'(x) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'f\'(x) \\approx ?',
            options: [
                { latex: '\\frac{f(x+h) - f(x)}{h}' },
                { latex: '\\frac{f(x) - f(x-h)}{h}' },
                { latex: '\\frac{f(x+h) - f(x-h)}{2h}' },
                { latex: '\\frac{f(x+h) + f(x)}{h}' }
            ],
            correct: 0,
            hint: 'Definición de derivada (límite h->0).'
        },
        {
            question: 'La diferencia centrada tiene un error de orden:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'O(?)',
            options: [
                { latex: 'O(h^2)' },
                { latex: 'O(h)' },
                { latex: 'O(h^3)' },
                { latex: 'O(h^4)' }
            ],
            correct: 0,
            hint: 'Es más precisa que adelante/atrás.'
        },
        {
            question: 'Para aproximar la segunda derivada f\'\'(x) se usa:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'f\'\'(x) \\approx ?',
            options: [
                { latex: '\\frac{f(x+h) - 2f(x) + f(x-h)}{h^2}' },
                { latex: '\\frac{f(x+h) - f(x-h)}{2h}' },
                { latex: '\\frac{f(x+h) - f(x)}{h}' },
                { latex: '\\frac{f(x+2h) - 2f(x+h) + f(x)}{h^2}' }
            ],
            correct: 0,
            hint: 'Diferencia de diferencias.'
        },
        {
            question: 'La Extrapolación de Richardson se usa para:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Objetivo?}',
            options: [
                { latex: '\\text{Mejorar la precisión de la derivada/integral}' },
                { latex: '\\text{Encontrar raíces}' },
                { latex: '\\text{Resolver sistemas lineales}' },
                { latex: '\\text{Ajustar curvas}' }
            ],
            correct: 0,
            hint: 'Combina dos estimaciones para cancelar el error.'
        },
        {
            question: 'Si h se hace demasiado pequeño en diferenciación numérica, ¿qué error predomina?',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Error dominante?}',
            options: [
                { latex: '\\text{Error de redondeo}' },
                { latex: '\\text{Error de truncamiento}' },
                { latex: '\\text{Error de método}' },
                { latex: '\\text{Error relativo}' }
            ],
            correct: 0,
            hint: 'División por número muy pequeño y resta de números cercanos.'
        },
        {
            question: 'Dada f(x)=x^2, aproxime f\'(1) con h=0.1 (diferencia adelante).',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{(1.1)^2 - 1^2}{0.1}',
            options: [
                { latex: '2.1' }, // (1.21 - 1)/0.1 = 2.1
                { latex: '2.0' },
                { latex: '2.2' },
                { latex: '1.9' }
            ],
            correct: 0,
            hint: 'Valor real es 2.'
        },

        // 7. Ecuaciones Diferenciales Ordinarias (6 preguntas)
        {
            question: 'El método de Euler para y\' = f(x,y) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'y_{i+1} = ?',
            options: [
                { latex: 'y_i + f(x_i, y_i)h' },
                { latex: 'y_i + f(x_i, y_i) \\frac{h}{2}' },
                { latex: 'y_i + f(x_{i+1}, y_{i+1})h' },
                { latex: 'y_i + h' }
            ],
            correct: 0,
            hint: 'Usa la pendiente al inicio del intervalo.'
        },
        {
            question: 'El método de Runge-Kutta de 4to orden (RK4) usa:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{¿Qué usa?}',
            options: [
                { latex: '\\text{Un promedio ponderado de 4 pendientes}' },
                { latex: '\\text{4 pasos de Euler}' },
                { latex: '\\text{Derivadas cuartas}' },
                { latex: '\\text{4 puntos iniciales}' }
            ],
            correct: 0,
            hint: 'k1, k2, k3, k4.'
        },
        {
            question: 'El método de Euler es un método de orden:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'O(?)',
            options: [
                { latex: '1' }, // Global error O(h)
                { latex: '2' },
                { latex: '4' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Error global proporcional a h.'
        },
        {
            question: 'Un método "implícito" (como Euler hacia atrás) requiere:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Requisito?}',
            options: [
                { latex: '\\text{Resolver una ecuación en cada paso}' },
                { latex: '\\text{Solo evaluar la función}' },
                { latex: '\\text{Conocer la solución exacta}' },
                { latex: '\\text{Usar pasos negativos}' }
            ],
            correct: 0,
            hint: 'La incógnita aparece en ambos lados.'
        },
        {
            question: 'El método de Heun (Euler mejorado) es un método:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Predictor-Corrector}' },
                { latex: '\\text{Implícito puro}' },
                { latex: '\\text{De paso múltiple}' },
                { latex: '\\text{Analítico}' }
            ],
            correct: 0,
            hint: 'Predice con Euler, corrige con promedio.'
        },
        {
            question: 'Para resolver y\' = y, y(0)=1 con h=0.1 usando Euler, y(0.1) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'y_1 = 1 + (1)(0.1)',
            options: [
                { latex: '1.1' },
                { latex: '1.0' },
                { latex: '1.2' },
                { latex: '1.01' }
            ],
            correct: 0,
            hint: 'y_new = y_old + slope * h'
        }
    ]
};
