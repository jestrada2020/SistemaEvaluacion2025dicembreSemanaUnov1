window.examCategories = window.examCategories || {};

window.examCategories.geometria_plano = {
    name: 'Geometría del Plano Cartesiano',
    description: 'Rectas, Circunferencias, Parábolas, Elipses e Hipérbolas',
    questions: [
        // --- LA RECTA (15 Preguntas) ---
        {
            question: 'La pendiente (m) de una recta que pasa por (x1, y1) y (x2, y2) es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'm = ?',
            options: [
                { latex: '\\frac{y_2 - y_1}{x_2 - x_1}' },
                { latex: '\\frac{x_2 - x_1}{y_2 - y_1}' },
                { latex: '\\frac{y_2 + y_1}{x_2 + x_1}' },
                { latex: 'y_2 - y_1' }
            ],
            correct: 0,
            hint: 'Variación en y sobre variación en x.'
        },
        {
            question: 'La ecuación punto-pendiente de la recta es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'y - y_1 = ?',
            options: [
                { latex: 'm(x - x_1)' },
                { latex: 'm(x + x_1)' },
                { latex: '\\frac{x - x_1}{m}' },
                { latex: 'mx + b' }
            ],
            correct: 0,
            hint: 'Despeje de la pendiente.'
        },
        {
            question: 'La ecuación general de la recta es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'Ax + By + C = 0',
            options: [
                { latex: '\\text{Verdadero}' },
                { latex: '\\text{Falso}' },
                { latex: '\\text{Solo si C=0}' },
                { latex: '\\text{Solo si A=1}' }
            ],
            correct: 0,
            hint: 'Forma lineal completa.'
        },
        {
            question: 'Dos rectas son paralelas si sus pendientes son:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'm_1 \\text{ ? } m_2',
            options: [
                { latex: 'm_1 = m_2' },
                { latex: 'm_1 \\cdot m_2 = -1' },
                { latex: 'm_1 = -m_2' },
                { latex: 'm_1 \\cdot m_2 = 1' }
            ],
            correct: 0,
            hint: 'Misma inclinación.'
        },
        {
            question: 'Dos rectas son perpendiculares si el producto de sus pendientes es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'm_1 \\cdot m_2 = ?',
            options: [
                { latex: '-1' },
                { latex: '1' },
                { latex: '0' },
                { latex: '\\infty' }
            ],
            correct: 0,
            hint: 'Inversas y opuestas.'
        },
        {
            question: 'La distancia entre dos puntos P1(x1, y1) y P2(x2, y2) es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'd = ?',
            options: [
                { latex: '\\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}' },
                { latex: '(x_2-x_1) + (y_2-y_1)' },
                { latex: '\\sqrt{x_2^2 + y_2^2}' },
                { latex: '|x_2-x_1| + |y_2-y_1|' }
            ],
            correct: 0,
            hint: 'Pitágoras.'
        },
        {
            question: 'La pendiente de una recta horizontal es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'm = ?',
            options: [
                { latex: '0' },
                { latex: '\\text{Indefinida}' },
                { latex: '1' },
                { latex: '-1' }
            ],
            correct: 0,
            hint: 'No sube ni baja.'
        },
        {
            question: 'La pendiente de una recta vertical es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'm = ?',
            options: [
                { latex: '\\text{Indefinida (Infinita)}' },
                { latex: '0' },
                { latex: '1' },
                { latex: '100' }
            ],
            correct: 0,
            hint: 'División por cero.'
        },
        {
            question: 'El punto medio entre (2, 4) y (6, 8) es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'M = ?',
            options: [
                { latex: '(4, 6)' },
                { latex: '(8, 12)' },
                { latex: '(3, 5)' },
                { latex: '(2, 2)' }
            ],
            correct: 0,
            hint: 'Promedio de coordenadas.'
        },
        {
            question: 'La distancia del punto (x0, y0) a la recta Ax + By + C = 0 es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'd = ?',
            options: [
                { latex: '\\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}}' },
                { latex: 'Ax_0 + By_0 + C' },
                { latex: '\\frac{Ax_0 + By_0 + C}{A+B}' },
                { latex: '\\sqrt{(x-x_0)^2}' }
            ],
            correct: 0,
            hint: 'Valor absoluto sobre módulo del vector normal.'
        },
        {
            question: 'La ecuación y = mx + b se llama:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Forma?}',
            options: [
                { latex: '\\text{Pendiente-Ordenada al origen}' },
                { latex: '\\text{General}' },
                { latex: '\\text{Simétrica}' },
                { latex: '\\text{Normal}' }
            ],
            correct: 0,
            hint: 'b es el intercepto.'
        },
        {
            question: 'Si m = 2 y b = -1, la ecuación es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'y = ?',
            options: [
                { latex: '2x - 1' },
                { latex: '-x + 2' },
                { latex: '2x + 1' },
                { latex: 'x - 2' }
            ],
            correct: 0,
            hint: 'Sustitución directa.'
        },
        {
            question: 'El ángulo de inclinación theta se relaciona con la pendiente m por:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'm = ?',
            options: [
                { latex: '\\tan(\\theta)' },
                { latex: '\\sin(\\theta)' },
                { latex: '\\cos(\\theta)' },
                { latex: '\\cot(\\theta)' }
            ],
            correct: 0,
            hint: 'Tangente del ángulo.'
        },
        {
            question: 'La ecuación simétrica de la recta es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\frac{x}{a} + \\frac{y}{b} = 1',
            options: [
                { latex: '\\text{Verdadero}' },
                { latex: '\\text{Falso}' },
                { latex: '\\text{Solo si a=b}' },
                { latex: '\\text{Es la de la elipse}' }
            ],
            correct: 0,
            hint: 'Interceptos a y b.'
        },
        {
            question: 'Si dos rectas tienen la misma pendiente y diferente ordenada al origen, son:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Posición?}',
            options: [
                { latex: '\\text{Paralelas distintas}' },
                { latex: '\\text{Coincidentes}' },
                { latex: '\\text{Perpendiculares}' },
                { latex: '\\text{Secantes}' }
            ],
            correct: 0,
            hint: 'Nunca se tocan.'
        },

        // --- LA CIRCUNFERENCIA (10 Preguntas) ---
        {
            question: 'La ecuación canónica de la circunferencia con centro (h, k) y radio r es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '(x-h)^2 + (y-k)^2 = ?',
            options: [
                { latex: 'r^2' },
                { latex: 'r' },
                { latex: '1' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Distancia al cuadrado.'
        },
        {
            question: 'Si el centro es el origen (0, 0), la ecuación es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'x^2 + y^2 = ?',
            options: [
                { latex: 'r^2' },
                { latex: 'r' },
                { latex: '1' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Pitágoras simple.'
        },
        {
            question: 'En la ecuación general x^2 + y^2 + Dx + Ey + F = 0, los coeficientes de x^2 y y^2 deben ser:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Condición?}',
            options: [
                { latex: '\\text{Iguales y del mismo signo}' },
                { latex: '\\text{Diferentes}' },
                { latex: '\\text{Opuestos}' },
                { latex: '\\text{Cero}' }
            ],
            correct: 0,
            hint: 'Para ser un círculo perfecto.'
        },
        {
            question: 'El radio de la circunferencia (x-2)^2 + (y+1)^2 = 16 es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'r = ?',
            options: [
                { latex: '4' },
                { latex: '16' },
                { latex: '2' },
                { latex: '8' }
            ],
            correct: 0,
            hint: 'Raíz de 16.'
        },
        {
            question: 'El centro de la circunferencia (x-2)^2 + (y+1)^2 = 16 es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'C = ?',
            options: [
                { latex: '(2, -1)' },
                { latex: '(-2, 1)' },
                { latex: '(2, 1)' },
                { latex: '(-2, -1)' }
            ],
            correct: 0,
            hint: 'Signos cambiados.'
        },
        {
            question: 'Una recta que toca a la circunferencia en un solo punto se llama:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Nombre?}',
            options: [
                { latex: '\\text{Tangente}' },
                { latex: '\\text{Secante}' },
                { latex: '\\text{Cuerda}' },
                { latex: '\\text{Diámetro}' }
            ],
            correct: 0,
            hint: 'Tocar suavemente.'
        },
        {
            question: 'La distancia del centro a cualquier punto de la circunferencia es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Valor?}',
            options: [
                { latex: '\\text{Constante e igual al radio}' },
                { latex: '\\text{Variable}' },
                { latex: '\\text{Igual al diámetro}' },
                { latex: '\\text{Cero}' }
            ],
            correct: 0,
            hint: 'Definición de radio.'
        },
        {
            question: 'Si D^2 + E^2 - 4F < 0 en la general, la circunferencia es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Imaginaria (no existe en reales)}' },
                { latex: '\\text{Un punto}' },
                { latex: '\\text{Real}' },
                { latex: '\\text{Una recta}' }
            ],
            correct: 0,
            hint: 'Radio negativo al cuadrado imposible.'
        },
        {
            question: 'La recta tangente es perpendicular al radio en el punto de tangencia:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Verdad?}',
            options: [
                { latex: '\\text{Siempre verdadero}' },
                { latex: '\\text{Falso}' },
                { latex: '\\text{Solo en el origen}' },
                { latex: '\\text{Depende del radio}' }
            ],
            correct: 0,
            hint: 'Propiedad fundamental.'
        },
        {
            question: 'El diámetro es una cuerda que:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Condición?}',
            options: [
                { latex: '\\text{Pasa por el centro}' },
                { latex: '\\text{Es la más corta}' },
                { latex: '\\text{Es tangente}' },
                { latex: '\\text{Es perpendicular al eje X}' }
            ],
            correct: 0,
            hint: 'Cuerda máxima.'
        },

        // --- LA PARÁBOLA (15 Preguntas) ---
        {
            question: 'La parábola es el lugar geométrico de puntos que equidistan de:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Elementos?}',
            options: [
                { latex: '\\text{Un punto fijo (foco) y una recta fija (directriz)}' },
                { latex: '\\text{Dos puntos fijos (focos)}' },
                { latex: '\\text{Un centro}' },
                { latex: '\\text{Dos rectas}' }
            ],
            correct: 0,
            hint: 'Definición clásica.'
        },
        {
            question: 'El vértice de la parábola y = x^2 es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'V = ?',
            options: [
                { latex: '(0, 0)' },
                { latex: '(1, 1)' },
                { latex: '(0, 1)' },
                { latex: '(1, 0)' }
            ],
            correct: 0,
            hint: 'El origen.'
        },
        {
            question: 'La ecuación canónica de una parábola vertical con vértice (h, k) es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '(x-h)^2 = ?',
            options: [
                { latex: '4p(y-k)' },
                { latex: '4p(x-h)' },
                { latex: 'y-k' },
                { latex: 'p(y-k)' }
            ],
            correct: 0,
            hint: 'x cuadrado implica vertical.'
        },
        {
            question: 'El parámetro p representa la distancia entre:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'p = d(?, ?)',
            options: [
                { latex: '\\text{Vértice y Foco}' },
                { latex: '\\text{Foco y Directriz}' },
                { latex: '\\text{Vértice y Origen}' },
                { latex: '\\text{Foco y Eje}' }
            ],
            correct: 0,
            hint: 'Del vértice al foco.'
        },
        {
            question: 'Si p > 0 en (x-h)^2 = 4p(y-k), la parábola abre hacia:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Dirección?}',
            options: [
                { latex: '\\text{Arriba}' },
                { latex: '\\text{Abajo}' },
                { latex: '\\text{Derecha}' },
                { latex: '\\text{Izquierda}' }
            ],
            correct: 0,
            hint: 'Positivo vertical.'
        },
        {
            question: 'La longitud del Lado Recto es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'LR = ?',
            options: [
                { latex: '|4p|' },
                { latex: '|2p|' },
                { latex: '|p|' },
                { latex: 'p^2' }
            ],
            correct: 0,
            hint: 'Cuatro veces p.'
        },
        {
            question: 'El eje de simetría de y = x^2 es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Eje?}',
            options: [
                { latex: '\\text{El eje Y (x=0)}' },
                { latex: '\\text{El eje X (y=0)}' },
                { latex: 'y=x' },
                { latex: 'x=1' }
            ],
            correct: 0,
            hint: 'La parte por la mitad.'
        },
        {
            question: 'Si la ecuación es y^2 = 4px, la parábola es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Orientación?}',
            options: [
                { latex: '\\text{Horizontal}' },
                { latex: '\\text{Vertical}' },
                { latex: '\\text{Inclinada}' },
                { latex: '\\text{Una hipérbola}' }
            ],
            correct: 0,
            hint: 'y cuadrado implica horizontal.'
        },
        {
            question: 'La directriz es siempre perpendicular al:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Elemento?}',
            options: [
                { latex: '\\text{Eje de simetría}' },
                { latex: '\\text{Lado recto}' },
                { latex: '\\text{Radio}' },
                { latex: '\\text{Tangente}' }
            ],
            correct: 0,
            hint: 'Cruza el eje.'
        },
        {
            question: 'La excentricidad de una parábola es siempre:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'e = ?',
            options: [
                { latex: '1' },
                { latex: '0' },
                { latex: '< 1' },
                { latex: '> 1' }
            ],
            correct: 0,
            hint: 'Unidad.'
        },
        {
            question: 'En x^2 = -8y, el valor de p es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '4p = -8 \\implies p = ?',
            options: [
                { latex: '-2' },
                { latex: '2' },
                { latex: '-8' },
                { latex: '-4' }
            ],
            correct: 0,
            hint: 'Dividir por 4.'
        },
        {
            question: 'Si el vértice está en el origen y el foco en (3, 0), la ecuación es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'p=3, Horizontal',
            options: [
                { latex: 'y^2 = 12x' },
                { latex: 'x^2 = 12y' },
                { latex: 'y^2 = 3x' },
                { latex: 'y^2 = -12x' }
            ],
            correct: 0,
            hint: '4p = 12.'
        },
        {
            question: 'La parábola tiene asíntotas:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Tiene?}',
            options: [
                { latex: '\\text{No}' },
                { latex: '\\text{Sí, dos}' },
                { latex: '\\text{Sí, una}' },
                { latex: '\\text{Infinitas}' }
            ],
            correct: 0,
            hint: 'Se abre indefinidamente.'
        },
        {
            question: 'El punto medio del Lado Recto es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Punto?}',
            options: [
                { latex: '\\text{El Foco}' },
                { latex: '\\text{El Vértice}' },
                { latex: '\\text{El Centro}' },
                { latex: '\\text{La Directriz}' }
            ],
            correct: 0,
            hint: 'Pasa por el foco.'
        },
        {
            question: 'En aplicaciones físicas, la parábola modela:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Fenómeno?}',
            options: [
                { latex: '\\text{Tiro parabólico (proyectiles)}' },
                { latex: '\\text{Órbitas planetarias}' },
                { latex: '\\text{Resortes}' },
                { latex: '\\text{Olas}' }
            ],
            correct: 0,
            hint: 'Caída libre con avance.'
        },

        // --- LA ELIPSE (15 Preguntas) ---
        {
            question: 'La elipse es el lugar geométrico donde la suma de distancias a dos focos es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'd_1 + d_2 = ?',
            options: [
                { latex: '\\text{Constante (2a)}' },
                { latex: '\\text{Cero}' },
                { latex: '\\text{Infinita}' },
                { latex: '\\text{Variable}' }
            ],
            correct: 0,
            hint: 'La cuerda floja.'
        },
        {
            question: 'La ecuación canónica de la elipse horizontal centrada en el origen es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'a > b',
            options: [
                { latex: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1' },
                { latex: '\\frac{x^2}{b^2} + \\frac{y^2}{a^2} = 1' },
                { latex: 'x^2 + y^2 = r^2' },
                { latex: '\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1' }
            ],
            correct: 0,
            hint: 'a va con x.'
        },
        {
            question: 'En la elipse, la relación entre a, b y c es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'a^2 = ?',
            options: [
                { latex: 'b^2 + c^2' },
                { latex: 'b^2 - c^2' },
                { latex: 'c^2 - b^2' },
                { latex: 'b + c' }
            ],
            correct: 0,
            hint: 'Pitágoras, a es la hipotenusa (mayor).'
        },
        {
            question: 'La longitud del eje mayor es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'L = ?',
            options: [
                { latex: '2a' },
                { latex: '2b' },
                { latex: '2c' },
                { latex: 'a+b' }
            ],
            correct: 0,
            hint: 'Doble de a.'
        },
        {
            question: 'La excentricidad de la elipse es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'e = \\frac{c}{a}',
            options: [
                { latex: '0 < e < 1' },
                { latex: 'e = 1' },
                { latex: 'e > 1' },
                { latex: 'e = 0' }
            ],
            correct: 0,
            hint: 'Entre círculo y parábola.'
        },
        {
            question: 'Si a = b, la elipse se convierte en:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Figura?}',
            options: [
                { latex: '\\text{Circunferencia}' },
                { latex: '\\text{Parábola}' },
                { latex: '\\text{Hipérbola}' },
                { latex: '\\text{Punto}' }
            ],
            correct: 0,
            hint: 'Radio constante.'
        },
        {
            question: 'Los focos siempre están ubicados en:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Eje?}',
            options: [
                { latex: '\\text{El eje mayor}' },
                { latex: '\\text{El eje menor}' },
                { latex: '\\text{Fuera de la elipse}' },
                { latex: '\\text{En el borde}' }
            ],
            correct: 0,
            hint: 'El eje largo.'
        },
        {
            question: 'La longitud del eje menor es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'L = ?',
            options: [
                { latex: '2b' },
                { latex: '2a' },
                { latex: 'b' },
                { latex: 'a' }
            ],
            correct: 0,
            hint: 'Doble de b.'
        },
        {
            question: 'El Lado Recto de la elipse mide:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'LR = ?',
            options: [
                { latex: '\\frac{2b^2}{a}' },
                { latex: '\\frac{2a^2}{b}' },
                { latex: '4p' },
                { latex: '2b' }
            ],
            correct: 0,
            hint: 'Fórmula específica.'
        },
        {
            question: 'Si x^2/25 + y^2/9 = 1, el eje mayor mide:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'a^2=25 \\implies a=5',
            options: [
                { latex: '10' },
                { latex: '5' },
                { latex: '25' },
                { latex: '50' }
            ],
            correct: 0,
            hint: '2a = 10.'
        },
        {
            question: 'Si x^2/25 + y^2/9 = 1, los focos están en el eje:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '25 > 9',
            options: [
                { latex: 'X' },
                { latex: 'Y' },
                { latex: '\\text{Ninguno}' },
                { latex: 'Z' }
            ],
            correct: 0,
            hint: 'Debajo del mayor denominador.'
        },
        {
            question: 'La suma de distancias a los focos es igual a:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Valor?}',
            options: [
                { latex: '\\text{La longitud del eje mayor (2a)}' },
                { latex: '\\text{La distancia focal (2c)}' },
                { latex: '\\text{El eje menor (2b)}' },
                { latex: '\\text{Cero}' }
            ],
            correct: 0,
            hint: 'Definición.'
        },
        {
            question: 'Las órbitas planetarias son:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Forma?}',
            options: [
                { latex: '\\text{Elipses con el Sol en un foco}' },
                { latex: '\\text{Círculos perfectos}' },
                { latex: '\\text{Parábolas}' },
                { latex: '\\text{Hipérbolas}' }
            ],
            correct: 0,
            hint: 'Kepler.'
        },
        {
            question: 'Si e se acerca a 0, la elipse se parece más a:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Forma?}',
            options: [
                { latex: '\\text{Un círculo}' },
                { latex: '\\text{Una línea}' },
                { latex: '\\text{Una parábola}' },
                { latex: '\\text{Un punto}' }
            ],
            correct: 0,
            hint: 'Menos excéntrica.'
        },
        {
            question: 'Si e se acerca a 1, la elipse se parece más a:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Forma?}',
            options: [
                { latex: '\\text{Una línea (muy alargada)}' },
                { latex: '\\text{Un círculo}' },
                { latex: '\\text{Un cuadrado}' },
                { latex: '\\text{Un punto}' }
            ],
            correct: 0,
            hint: 'Muy achatada.'
        },

        // --- LA HIPÉRBOLA (15 Preguntas) ---
        {
            question: 'La hipérbola es el lugar geométrico donde la diferencia de distancias a dos focos es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '|d_1 - d_2| = ?',
            options: [
                { latex: '\\text{Constante (2a)}' },
                { latex: '\\text{Cero}' },
                { latex: '\\text{Infinita}' },
                { latex: '\\text{Variable}' }
            ],
            correct: 0,
            hint: 'Diferencia constante.'
        },
        {
            question: 'La ecuación canónica de la hipérbola horizontal centrada en el origen es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Signo menos?}',
            options: [
                { latex: '\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1' },
                { latex: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1' },
                { latex: '\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1' },
                { latex: 'x^2 - y^2 = 0' }
            ],
            correct: 0,
            hint: 'x positivo.'
        },
        {
            question: 'En la hipérbola, la relación entre a, b y c es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'c^2 = ?',
            options: [
                { latex: 'a^2 + b^2' },
                { latex: 'a^2 - b^2' },
                { latex: 'b^2 - a^2' },
                { latex: 'a+b' }
            ],
            correct: 0,
            hint: 'c es la mayor distancia (focos lejos).'
        },
        {
            question: 'La hipérbola tiene:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Ramas?}',
            options: [
                { latex: '\\text{Dos ramas separadas}' },
                { latex: '\\text{Una rama cerrada}' },
                { latex: '\\text{Una rama abierta}' },
                { latex: '\\text{Cuatro ramas}' }
            ],
            correct: 0,
            hint: 'Dos curvas.'
        },
        {
            question: 'Las asíntotas de la hipérbola x^2/a^2 - y^2/b^2 = 1 son:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'y = ?',
            options: [
                { latex: '\\pm \\frac{b}{a}x' },
                { latex: '\\pm \\frac{a}{b}x' },
                { latex: '\\pm ab x' },
                { latex: '\\pm x' }
            ],
            correct: 0,
            hint: 'Pendiente b/a.'
        },
        {
            question: 'La excentricidad de la hipérbola es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'e = \\frac{c}{a}',
            options: [
                { latex: 'e > 1' },
                { latex: 'e < 1' },
                { latex: 'e = 1' },
                { latex: 'e = 0' }
            ],
            correct: 0,
            hint: 'Mayor que la unidad.'
        },
        {
            question: 'El eje transverso une:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Puntos?}',
            options: [
                { latex: '\\text{Los vértices}' },
                { latex: '\\text{Los focos}' }, // Technically true as segment, but vertices define its length 2a.
                { latex: '\\text{Las asíntotas}' },
                { latex: '\\text{Los co-vértices}' }
            ],
            correct: 0,
            hint: 'Longitud 2a.'
        },
        {
            question: 'El eje conjugado tiene longitud:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'L = ?',
            options: [
                { latex: '2b' },
                { latex: '2a' },
                { latex: '2c' },
                { latex: 'b' }
            ],
            correct: 0,
            hint: 'Imaginario.'
        },
        {
            question: 'Si a = b, la hipérbola se llama:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Nombre?}',
            options: [
                { latex: '\\text{Equilátera}' },
                { latex: '\\text{Isósceles}' },
                { latex: '\\text{Circular}' },
                { latex: '\\text{Recta}' }
            ],
            correct: 0,
            hint: 'Asíntotas perpendiculares.'
        },
        {
            question: 'En la hipérbola equilátera x^2 - y^2 = a^2, las asíntotas son:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Rectas?}',
            options: [
                { latex: 'y = x, y = -x' },
                { latex: 'x = 0, y = 0' },
                { latex: 'y = 2x' },
                { latex: 'y = 0.5x' }
            ],
            correct: 0,
            hint: 'A 45 grados.'
        },
        {
            question: 'Si el término positivo es y^2, la hipérbola es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Orientación?}',
            options: [
                { latex: '\\text{Vertical}' },
                { latex: '\\text{Horizontal}' },
                { latex: '\\text{Inclinada}' },
                { latex: '\\text{Una elipse}' }
            ],
            correct: 0,
            hint: 'Abre en Y.'
        },
        {
            question: 'La distancia entre los focos es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'd = ?',
            options: [
                { latex: '2c' },
                { latex: '2a' },
                { latex: '2b' },
                { latex: 'c' }
            ],
            correct: 0,
            hint: 'Doble de c.'
        },
        {
            question: 'En la ecuación general Ax^2 + Cy^2 + ... = 0, para ser hipérbola:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Signos?}',
            options: [
                { latex: '\\text{A y C tienen signos opuestos}' },
                { latex: '\\text{A y C tienen el mismo signo}' },
                { latex: '\\text{A o C es cero}' },
                { latex: '\\text{A = C}' }
            ],
            correct: 0,
            hint: 'Uno positivo, uno negativo.'
        },
        {
            question: 'El centro de la hipérbola es el punto medio de:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Segmento?}',
            options: [
                { latex: '\\text{El eje transverso (entre vértices)}' },
                { latex: '\\text{Una asíntota}' },
                { latex: '\\text{Una rama}' },
                { latex: '\\text{La directriz}' }
            ],
            correct: 0,
            hint: 'Simetría central.'
        },
        {
            question: 'Las hipérbolas conjugadas tienen:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Comparten?}',
            options: [
                { latex: '\\text{Las mismas asíntotas}' },
                { latex: '\\text{Los mismos focos}' },
                { latex: '\\text{Los mismos vértices}' },
                { latex: '\\text{Nada}' }
            ],
            correct: 0,
            hint: 'Intercambian ejes.'
        }
    ]
};
