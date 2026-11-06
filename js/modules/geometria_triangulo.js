window.examCategories = window.examCategories || {};

window.examCategories.geometria_triangulo = {
    name: 'Geometría del Triángulo',
    description: 'Teoría, propiedades, trigonometría y cálculo analítico de triángulos',
    questions: [
        // 1. Geometría Euclidiana Básica (10 preguntas)
        {
            question: 'La suma de los ángulos internos de un triángulo es siempre:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\alpha + \\beta + \\gamma = ?',
            options: [
                { latex: '180^\\circ' },
                { latex: '360^\\circ' },
                { latex: '90^\\circ' },
                { latex: '270^\\circ' }
            ],
            correct: 0,
            hint: 'Propiedad fundamental.'
        },
        {
            question: 'Un triángulo con dos lados iguales se llama:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Isósceles}' },
                { latex: '\\text{Equilátero}' },
                { latex: '\\text{Escaleno}' },
                { latex: '\\text{Rectángulo}' }
            ],
            correct: 0,
            hint: 'Dos lados iguales.'
        },
        {
            question: 'En un triángulo rectángulo, el lado opuesto al ángulo recto se llama:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Hipotenusa}' },
                { latex: '\\text{Cateto}' },
                { latex: '\\text{Altura}' },
                { latex: '\\text{Mediana}' }
            ],
            correct: 0,
            hint: 'El lado más largo.'
        },
        {
            question: 'Si los lados de un triángulo miden 3, 4 y 5, el triángulo es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '3^2 + 4^2 = 5^2',
            options: [
                { latex: '\\text{Rectángulo}' },
                { latex: '\\text{Acutángulo}' },
                { latex: '\\text{Obtusángulo}' },
                { latex: '\\text{Isósceles}' }
            ],
            correct: 0,
            hint: 'Cumple Pitágoras.'
        },
        {
            question: 'La desigualdad triangular establece que la suma de dos lados es siempre:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'a + b > c',
            options: [
                { latex: '\\text{Mayor que el tercero}' },
                { latex: '\\text{Menor que el tercero}' },
                { latex: '\\text{Igual al tercero}' },
                { latex: '\\text{El doble del tercero}' }
            ],
            correct: 0,
            hint: 'Para cerrar el triángulo.'
        },
        {
            question: 'Un triángulo equilátero tiene sus ángulos internos iguales a:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\alpha = ?',
            options: [
                { latex: '60^\\circ' },
                { latex: '45^\\circ' },
                { latex: '90^\\circ' },
                { latex: '30^\\circ' }
            ],
            correct: 0,
            hint: '180 / 3.'
        },
        {
            question: 'El ángulo exterior de un triángulo es igual a:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{La suma de los dos internos no adyacentes}' },
                { latex: '\\text{El doble del ángulo interno adyacente}' },
                { latex: '\\text{180 grados}' },
                { latex: '\\text{La diferencia de los internos}' }
            ],
            correct: 0,
            hint: 'Teorema del ángulo exterior.'
        },
        {
            question: 'Si un triángulo tiene un ángulo obtuso, se llama:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\alpha > 90^\\circ',
            options: [
                { latex: '\\text{Obtusángulo}' },
                { latex: '\\text{Acutángulo}' },
                { latex: '\\text{Rectángulo}' },
                { latex: '\\text{Equiángulo}' }
            ],
            correct: 0,
            hint: 'Nombre por ángulo.'
        },
        {
            question: 'La suma de los ángulos exteriores de un triángulo es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\sum \\text{ext} = ?',
            options: [
                { latex: '360^\\circ' },
                { latex: '180^\\circ' },
                { latex: '90^\\circ' },
                { latex: '540^\\circ' }
            ],
            correct: 0,
            hint: 'Para cualquier polígono convexo.'
        },
        {
            question: 'En un triángulo isósceles, los ángulos opuestos a los lados iguales son:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Iguales}' },
                { latex: '\\text{Suplementarios}' },
                { latex: '\\text{Complementarios}' },
                { latex: '\\text{Diferentes}' }
            ],
            correct: 0,
            hint: 'Simetría.'
        },

        // 2. Congruencia y Semejanza (8 preguntas)
        {
            question: 'Criterio de congruencia LAL significa:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{LAL}',
            options: [
                { latex: '\\text{Lado-Ángulo-Lado}' },
                { latex: '\\text{Lado-Área-Lado}' },
                { latex: '\\text{Línea-Ángulo-Línea}' },
                { latex: '\\text{Lado-Altura-Lado}' }
            ],
            correct: 0,
            hint: 'Dos lados y el ángulo comprendido.'
        },
        {
            question: 'Dos triángulos son semejantes si tienen:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Sus ángulos correspondientes iguales}' },
                { latex: '\\text{Sus lados iguales}' },
                { latex: '\\text{La misma área}' },
                { latex: '\\text{El mismo perímetro}' }
            ],
            correct: 0,
            hint: 'Misma forma, diferente tamaño.'
        },
        {
            question: 'Si dos triángulos son semejantes con razón k, la razón de sus áreas es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\frac{A_1}{A_2} = ?',
            options: [
                { latex: 'k^2' },
                { latex: 'k' },
                { latex: '\\sqrt{k}' },
                { latex: '2k' }
            ],
            correct: 0,
            hint: 'Área es bidimensional.'
        },
        {
            question: 'El Teorema de Tales se aplica a:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Rectas paralelas cortadas por transversales}' },
                { latex: '\\text{Triángulos rectángulos}' },
                { latex: '\\text{Círculos}' },
                { latex: '\\text{Polígonos regulares}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad de segmentos.'
        },
        {
            question: '¿Cuál NO es un criterio de congruencia?',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{AAA (Ángulo-Ángulo-Ángulo)}' },
                { latex: '\\text{LLL (Lado-Lado-Lado)}' },
                { latex: '\\text{ALA (Ángulo-Lado-Ángulo)}' },
                { latex: '\\text{LAL (Lado-Ángulo-Lado)}' }
            ],
            correct: 0,
            hint: 'AAA solo garantiza semejanza.'
        },
        {
            question: 'En un triángulo rectángulo, la altura sobre la hipotenusa divide al triángulo en:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Dos triángulos semejantes al original}' },
                { latex: '\\text{Dos triángulos congruentes}' },
                { latex: '\\text{Dos triángulos equiláteros}' },
                { latex: '\\text{Dos triángulos isósceles}' }
            ],
            correct: 0,
            hint: 'Propiedad de semejanza.'
        },
        {
            question: 'Si un triángulo tiene lados 2, 3, 4 y otro 4, 6, 8, son:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Semejantes (LLL)}' },
                { latex: '\\text{Congruentes}' },
                { latex: '\\text{Iguales}' },
                { latex: '\\text{No relacionados}' }
            ],
            correct: 0,
            hint: 'Razón 2.'
        },
        {
            question: 'La bisectriz de un ángulo en un triángulo divide al lado opuesto en segmentos:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Teorema de la bisectriz}',
            options: [
                { latex: '\\text{Proporcionales a los lados adyacentes}' },
                { latex: '\\text{Iguales}' },
                { latex: '\\text{En razón 2:1}' },
                { latex: '\\text{Al cuadrado de los lados}' }
            ],
            correct: 0,
            hint: 'Teorema de la bisectriz.'
        },

        // 3. Puntos y Líneas Notables (10 preguntas)
        {
            question: 'El punto donde se cortan las medianas se llama:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Baricentro (Centroide)}' },
                { latex: '\\text{Ortocentro}' },
                { latex: '\\text{Incentro}' },
                { latex: '\\text{Circuncentro}' }
            ],
            correct: 0,
            hint: 'Centro de gravedad.'
        },
        {
            question: 'El Ortocentro es el punto de intersección de:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Las alturas}' },
                { latex: '\\text{Las medianas}' },
                { latex: '\\text{Las bisectrices}' },
                { latex: '\\text{Las mediatrices}' }
            ],
            correct: 0,
            hint: 'Perpendiculares desde los vértices.'
        },
        {
            question: 'El Incentro es el centro de:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{La circunferencia inscrita}' },
                { latex: '\\text{La circunferencia circunscrita}' },
                { latex: '\\text{Gravedad}' },
                { latex: '\\text{Simetría}' }
            ],
            correct: 0,
            hint: 'Equidista de los lados.'
        },
        {
            question: 'El Circuncentro es la intersección de:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Las mediatrices}' },
                { latex: '\\text{Las bisectrices}' },
                { latex: '\\text{Las alturas}' },
                { latex: '\\text{Las medianas}' }
            ],
            correct: 0,
            hint: 'Perpendiculares en el punto medio.'
        },
        {
            question: 'En un triángulo equilátero, el baricentro, ortocentro, incentro y circuncentro:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Coinciden en el mismo punto}' },
                { latex: '\\text{Son colineales}' },
                { latex: '\\text{Forman un cuadrado}' },
                { latex: '\\text{Están en los vértices}' }
            ],
            correct: 0,
            hint: 'Alta simetría.'
        },
        {
            question: 'El baricentro divide a cada mediana en razón:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '2:1' },
                { latex: '1:1' },
                { latex: '3:1' },
                { latex: '1:2' }
            ],
            correct: 0,
            hint: 'Dos tercios desde el vértice.'
        },
        {
            question: 'La Recta de Euler pasa por:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Ortocentro, Baricentro y Circuncentro}' },
                { latex: '\\text{Incentro, Baricentro y Ortocentro}' },
                { latex: '\\text{Los tres vértices}' },
                { latex: '\\text{Los puntos medios}' }
            ],
            correct: 0,
            hint: 'El Incentro generalmente no está.'
        },
        {
            question: 'El Teorema de Ceva relaciona:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Cevianas concurrentes}' },
                { latex: '\\text{Puntos colineales}' },
                { latex: '\\text{Áreas}' },
                { latex: '\\text{Ángulos}' }
            ],
            correct: 0,
            hint: 'Producto de razones igual a 1.'
        },
        {
            question: 'El Teorema de Menelao se usa para probar:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Colinealidad de puntos}' },
                { latex: '\\text{Concurrencia de líneas}' },
                { latex: '\\text{Semejanza}' },
                { latex: '\\text{Congruencia}' }
            ],
            correct: 0,
            hint: 'Una recta corta al triángulo.'
        },
        {
            question: 'El radio de la circunferencia inscrita se denota usualmente como:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: 'r' },
                { latex: 'R' },
                { latex: '\\rho' },
                { latex: 'd' }
            ],
            correct: 0,
            hint: 'r minúscula (inradio).'
        },

        // 4. Trigonometría en Triángulos (10 preguntas)
        {
            question: 'Ley de Senos:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\frac{a}{\\sin A} = ?',
            options: [
                { latex: '\\frac{b}{\\sin B} = \\frac{c}{\\sin C}' },
                { latex: 'b \\sin B' },
                { latex: '\\frac{\\sin B}{b}' },
                { latex: 'R' }
            ],
            correct: 0,
            hint: 'Proporcionalidad lado-seno.'
        },
        {
            question: 'Ley de Cosenos para el lado c:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'c^2 = ?',
            options: [
                { latex: 'a^2 + b^2 - 2ab \\cos C' },
                { latex: 'a^2 + b^2 + 2ab \\cos C' },
                { latex: 'a^2 - b^2 - 2ab \\cos C' },
                { latex: 'a^2 + b^2' }
            ],
            correct: 0,
            hint: 'Generalización de Pitágoras.'
        },
        {
            question: 'El área de un triángulo dados dos lados y el ángulo entre ellos:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'A = ?',
            options: [
                { latex: '\\frac{1}{2}ab \\sin C' },
                { latex: '\\frac{1}{2}ab \\cos C' },
                { latex: 'ab \\sin C' },
                { latex: '\\frac{1}{2}bh' }
            ],
            correct: 0,
            hint: 'Mitad del producto cruz.'
        },
        {
            question: 'En un triángulo rectángulo, sen(A) es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\sin A = ?',
            options: [
                { latex: '\\frac{\\text{Opuesto}}{\\text{Hipotenusa}}' },
                { latex: '\\frac{\\text{Adyacente}}{\\text{Hipotenusa}}' },
                { latex: '\\frac{\\text{Opuesto}}{\\text{Adyacente}}' },
                { latex: '\\frac{\\text{Hipotenusa}}{\\text{Opuesto}}' }
            ],
            correct: 0,
            hint: 'SOH.'
        },
        {
            question: 'Si a=3, b=4, C=90°, entonces c es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'c = \\sqrt{3^2+4^2}',
            options: [
                { latex: '5' },
                { latex: '7' },
                { latex: '6' },
                { latex: '25' }
            ],
            correct: 0,
            hint: 'Pitágoras.'
        },
        {
            question: 'La Ley de Tangentes relaciona:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\frac{a-b}{a+b} = ?',
            options: [
                { latex: '\\frac{\\tan(\\frac{A-B}{2})}{\\tan(\\frac{A+B}{2})}' },
                { latex: '\\frac{\\sin A}{\\sin B}' },
                { latex: '\\tan A - \\tan B' },
                { latex: '\\frac{A-B}{A+B}' }
            ],
            correct: 0,
            hint: 'Fórmula menos común.'
        },
        {
            question: 'El radio de la circunferencia circunscrita R cumple:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'R = ?',
            options: [
                { latex: '\\frac{abc}{4A}' },
                { latex: '\\frac{A}{s}' },
                { latex: '\\frac{a+b+c}{2}' },
                { latex: 'abc' }
            ],
            correct: 0,
            hint: 'Relación con el área.'
        },
        {
            question: 'El radio de la circunferencia inscrita r cumple:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'A = rs \\implies r = ?',
            options: [
                { latex: '\\frac{A}{s}' },
                { latex: '\\frac{abc}{4R}' },
                { latex: 's-a' },
                { latex: '\\frac{s}{A}' }
            ],
            correct: 0,
            hint: 'A = rs (s es semiperímetro).'
        },
        {
            question: 'Si los tres lados son iguales, el triángulo es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'a=b=c',
            options: [
                { latex: '\\text{Equilátero}' },
                { latex: '\\text{Isósceles}' },
                { latex: '\\text{Rectángulo}' },
                { latex: '\\text{Escaleno}' }
            ],
            correct: 0,
            hint: 'Definición.'
        },
        {
            question: 'En todo triángulo $A + B + C = 180^\\circ$. ¿Cuánto vale $\\sin(A + B + C)$?',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\sin(180^\\circ) = ?',
            options: [
                { latex: '0' },
                { latex: '1' },
                { latex: '-1' },
                { latex: '0{,}5' }
            ],
            correct: 0,
            hint: 'Seno de pi.'
        },

        // 5. Cálculo de Áreas (8 preguntas)
        {
            question: 'Fórmula de Herón para el área:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'A = \\sqrt{?}',
            options: [
                { latex: 's(s-a)(s-b)(s-c)' },
                { latex: 's(s+a)(s+b)(s+c)' },
                { latex: '(s-a)(s-b)(s-c)' },
                { latex: 'sabc' }
            ],
            correct: 0,
            hint: 's es el semiperímetro.'
        },
        {
            question: 'Área básica de un triángulo:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'A = ?',
            options: [
                { latex: '\\frac{1}{2}bh' },
                { latex: 'bh' },
                { latex: '2bh' },
                { latex: 'b+h' }
            ],
            correct: 0,
            hint: 'Base por altura sobre 2.'
        },
        {
            question: 'Área de un triángulo equilátero de lado L:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'A = ?',
            options: [
                { latex: '\\frac{\\sqrt{3}}{4}L^2' },
                { latex: '\\frac{1}{2}L^2' },
                { latex: 'L^2' },
                { latex: '\\sqrt{3}L^2' }
            ],
            correct: 0,
            hint: 'Usa Pitágoras para la altura.'
        },
        {
            question: 'Área usando determinante de vértices (x1,y1), (x2,y2), (x3,y3):',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'A = \\frac{1}{2} |\\det(\\dots)|',
            options: [
                { latex: '\\text{Determinante 3x3 con 1s en la última columna}' },
                { latex: '\\text{Producto de coordenadas}' },
                { latex: '\\text{Suma de coordenadas}' },
                { latex: '\\text{Determinante 2x2}' }
            ],
            correct: 0,
            hint: 'Fórmula de la lazada.'
        },
        {
            question: 'Si el área es 10 y la base es 5, la altura es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '10 = \\frac{1}{2}(5)h',
            options: [
                { latex: '4' },
                { latex: '2' },
                { latex: '5' },
                { latex: '10' }
            ],
            correct: 0,
            hint: 'h = 20/5.'
        },
        {
            question: 'Razón entre áreas de triángulos con misma altura:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\frac{A_1}{A_2} = ?',
            options: [
                { latex: '\\frac{b_1}{b_2}' },
                { latex: '(\\frac{b_1}{b_2})^2' },
                { latex: '1' },
                { latex: '\\frac{h_1}{h_2}' }
            ],
            correct: 0,
            hint: 'Proporcional a las bases.'
        },
        {
            question: 'Área máxima de un triángulo con dos lados fijos a y b:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Cuando el ángulo entre ellos es } 90^\\circ' },
                { latex: '\\text{Cuando el ángulo es } 60^\\circ' },
                { latex: '\\text{Cuando el ángulo es } 180^\\circ' },
                { latex: '\\text{Cuando el ángulo es } 45^\\circ' }
            ],
            correct: 0,
            hint: 'sin(90) = 1.'
        },
        {
            question: 'Si s=10, a=4, b=6, c=10 (degenerado), el área es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'A = \\sqrt{10(6)(4)(0)}',
            options: [
                { latex: '0' },
                { latex: '10' },
                { latex: '24' },
                { latex: '100' }
            ],
            correct: 0,
            hint: 'No forma triángulo.'
        },

        // 6. Geometría Analítica del Triángulo (14 preguntas)
        {
            question: 'Coordenadas del baricentro G dados A, B, C:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'G = ?',
            options: [
                { latex: '\\frac{A+B+C}{3}' },
                { latex: '\\frac{A+B+C}{2}' },
                { latex: 'A+B+C' },
                { latex: '\\frac{A+B}{2}' }
            ],
            correct: 0,
            hint: 'Promedio.'
        },
        {
            question: 'Distancia entre A(1,1) y B(4,5):',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'd = \\sqrt{(4-1)^2 + (5-1)^2}',
            options: [
                { latex: '5' },
                { latex: '4' },
                { latex: '3' },
                { latex: '25' }
            ],
            correct: 0,
            hint: '3-4-5.'
        },
        {
            question: 'Pendiente de la recta que pasa por (2,3) y (4,7):',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'm = \\frac{7-3}{4-2}',
            options: [
                { latex: '2' },
                { latex: '0{,}5' },
                { latex: '4' },
                { latex: '1' }
            ],
            correct: 0,
            hint: '4/2.'
        },
        {
            question: 'Ecuación de la recta que pasa por (0,0) y (1,1):',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'y = ?',
            options: [
                { latex: 'x' },
                { latex: '2x' },
                { latex: 'x+1' },
                { latex: '-x' }
            ],
            correct: 0,
            hint: 'Identidad.'
        },
        {
            question: 'Punto medio de (2,0) y (0,4):',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'M = ?',
            options: [
                { latex: '(1, 2)' },
                { latex: '(2, 4)' },
                { latex: '(1, 1)' },
                { latex: '(0, 2)' }
            ],
            correct: 0,
            hint: 'Promedio.'
        },
        {
            question: 'Si dos rectas tienen pendientes m1 y m2 y son perpendiculares:',
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
            hint: 'Recíproco negativo.'
        },
        {
            question: 'Si dos rectas tienen la misma pendiente ($m_1 = m_2$) y distinta ordenada al origen, son:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Paralelas}' },
                { latex: '\\text{Perpendiculares}' },
                { latex: '\\text{Secantes}' },
                { latex: '\\text{Coincidentes (si b1=b2)}' } // Paralelas covers coincidenes in slope context usually.
            ],
            correct: 0,
            hint: 'Misma inclinación.'
        },
        {
            question: 'La mediatriz de un segmento es el lugar geométrico de puntos que:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Equidistan de los extremos}' },
                { latex: '\\text{Suman una distancia constante}' },
                { latex: '\\text{Están a distancia fija}' },
                { latex: '\\text{Forman 90 grados}' }
            ],
            correct: 0,
            hint: 'Definición.'
        },
        {
            question: 'La ecuación $x^2 + y^2 = r^2$ representa:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Circunferencia centrada en el origen}' },
                { latex: '\\text{Parábola}' },
                { latex: '\\text{Elipse}' },
                { latex: '\\text{Hipérbola}' }
            ],
            correct: 0,
            hint: 'Distancia constante al origen.'
        },
        {
            question: 'Área del triángulo con vértices (0,0), (b,0), (0,h):',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'A = ?',
            options: [
                { latex: '\\frac{1}{2}bh' },
                { latex: 'bh' },
                { latex: '\\sqrt{b^2+h^2}' },
                { latex: 'b+h' }
            ],
            correct: 0,
            hint: 'Triángulo rectángulo.'
        },
        {
            question: 'Si el determinante de los vértices es cero, los puntos son:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\det = 0',
            options: [
                { latex: '\\text{Colineales}' },
                { latex: '\\text{Vértices de un triángulo equilátero}' },
                { latex: '\\text{Coincidentes}' },
                { latex: '\\text{Imaginarios}' }
            ],
            correct: 0,
            hint: 'No forman área.'
        },
        {
            question: 'La altura de un triángulo equilátero de lado L es:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'h = ?',
            options: [
                { latex: '\\frac{\\sqrt{3}}{2}L' },
                { latex: '\\frac{1}{2}L' },
                { latex: '\\sqrt{3}L' },
                { latex: 'L' }
            ],
            correct: 0,
            hint: 'L^2 - (L/2)^2.'
        },
        {
            question: 'El teorema de Apolonio se refiere a:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Teorema de la...}',
            options: [
                { latex: '\\text{Mediana}' },
                { latex: '\\text{Altura}' },
                { latex: '\\text{Bisectriz}' },
                { latex: '\\text{Cuerda}' }
            ],
            correct: 0,
            hint: 'Relaciona lados y mediana.'
        },
        {
            question: 'En un triángulo, el lado mayor se opone al:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '',
            options: [
                { latex: '\\text{Ángulo mayor}' },
                { latex: '\\text{Ángulo menor}' },
                { latex: '\\text{Lado menor}' },
                { latex: '\\text{Vértice}' }
            ],
            correct: 0,
            hint: 'Relación lado-ángulo.'
        },
        // ===== Paramétricas (2026-11-06) =====
        {
            question: 'Calcule el área del triángulo:',
            params: { b: { min: 3, max: 20 }, h: { min: 2, max: 15 } },
            geogebraAppName: 'geometry',
            latex: '\\text{base } b = {{b}}\\text{ cm}, \\quad \\text{altura } h = {{h}}\\text{ cm}',
            options: [
                { latex: '{{b*h/2}}\\text{ cm}^2' },
                { latex: '{{b*h}}\\text{ cm}^2' },       // olvidar dividir entre 2
                { latex: '{{b + h}}\\text{ cm}^2' },
                { latex: '{{2*(b + h)}}\\text{ cm}^2' }
            ],
            correct: 0,
            hint: 'A = (b × h) / 2.'
        },
        {
            question: 'Los catetos de un triángulo rectángulo miden {{3*k}} cm y {{4*k}} cm. ¿Cuánto mide la hipotenusa?',
            params: { k: { min: 1, max: 9 } },
            geogebraAppName: 'geometry',
            latex: 'c^2 = a^2 + b^2',
            options: [
                { latex: '{{5*k}}\\text{ cm}' },
                { latex: '{{7*k}}\\text{ cm}' },         // sumar los catetos
                { latex: '{{25*k*k}}\\text{ cm}' },      // olvidar la raíz
                { latex: '{{round(sqrt(7)*k, 2)}}\\text{ cm}' }
            ],
            correct: 0,
            hint: 'Teorema de Pitágoras.'
        },
        // ===== Tarea en GeoGebra (2026-11-06): se responde moviendo la construcción =====
        {
            question: 'Mueva el vértice C para que el triángulo ABC sea rectángulo en C.',
            answerType: 'geogebra',
            params: { d: { min: 4, max: 8 } },
            geogebraAppName: 'geometry',
            geogebraCommands: [
                'A = (0, 0)', 'B = ({{d}}, 0)', 'SetFixed(A, true)', 'SetFixed(B, true)',
                'C = (1, 3)', 'tri = Polygon(A, B, C)', 'ang = Angle(Line(C, A), Line(C, B))'
            ],
            geogebraCheck: {
                // coseno del ángulo ACB ≈ 0 (no depende de si C está arriba o abajo de AB)
                condition: 'abs(((x(A) - x(C)) * (x(B) - x(C)) + (y(A) - y(C)) * (y(B) - y(C))) / (Distance(A, C) * Distance(B, C))) < 0.03',
                report: 'C',
                expected: 'C sobre la circunferencia de diámetro AB (ángulo ACB = 90°)'
            },
            latex: 'A = (0, 0), \\quad B = ({{d}}, 0)',
            hint: 'Teorema de Tales: los puntos que ven AB en ángulo recto están en la circunferencia de diámetro AB.'
        }
    ]
};
