window.examCategories = window.examCategories || {};

window.examCategories.calculomultivariado = {
    name: 'Cálculo multivariado',
    description: 'Operaciones con funciones de dos y tres variables, concepto de derivadas parciales e integrales dobles y triples',
    questions: [
        {
            question: 'Con base en la construcción, ¿cuál es la integral doble?',
            geogebraId: 'skyzrtkm',
            geogebraState: '0',
            latex: '\\text{Si } \\ R = \\{(x, y) \\mid 0 \\le x \\le 1,\\, 0 \\le y \\le 0.5\\}, \\ \\text{evalúe la integral}  \\iint_R \\left(2 - x - 2y\\right) \\ dA ',
            options: [
                { latex: '1/3\\text{ U.V.}' },
                { latex: '1/4\\text{ U.V.}' },
                { latex: '1/8\\text{ U.V.}' },
                { latex: '1/2\\text{ U.V.}' }
            ],
            correct: 3,
            hint: 'Recuerda que la integral doble representa el volumen bajo la superficie z = f(x,y) sobre la región R.'
        },
        {
            question: 'Con base en la construcción, ¿cuál es la integral triple?',
            geogebraId: 'hyscdj6e',
            geogebraState: '3',
            latex: '\\text{Si } \\ B = \\{(x, y, z) \\mid 0 \\le x \\le 1,\\, 0 \\le y \\le 1 - x,\\, 0 \\le z \\le 1 - x - y\\}, \\ \\text{evalúe la integral}  \\iiint_B 1 \\ dV ',
            options: [
                { latex: '1/2\\text{ U.V.}' },
                { latex: '1/4\\text{ U.V.}' },
                { latex: '1/8\\text{ U.V.}' },
                { latex: '1/6\\text{ U.V.}' }
            ],
            correct: 3,
            hint: 'Recuerda que la pendiente de la recta tangente a una curva es la derivada de la curva evaluada en el punto de tangencia.'
        },
        {
            question: 'Con base en la construcción, ¿cuál es el valor de la integral doble?',
            geogebraId: 'gjff68wa',
            geogebraState: '1',
            latex: '\\text{Si } \\ R = \\{(x, y) \\mid 0 \\le x \\le 2,\\, 0 \\le y \\le 2\\}, \\ \\text{evalúe la integral}  \\iint_R \\left(16 - x^2 - 2y^2\\right) \\ dA ',
            options: [
                { latex: '11\\text{ U.V.}' },
                { latex: '48\\text{ U.V.}' },
                { latex: '18\\text{ U.V.}' },
                { latex: '20\\text{ U.V.}' }
            ],
            correct: 1,
            hint: 'Recuerda que la pendiente de la recta tangente a una curva es la derivada de la curva evaluada en el punto de tangencia.'
        },
        {
            question: 'Con base en la construcción, ¿cuál es el valor de la integral doble?',
            geogebraId: 'xb8mqyxf',
            geogebraState: '0',
            latex: '\\text{Si } \\ R = \\{(x, y) \\mid 0 \\le x \\le 2,\\, 1 \\le y \\le 2\\}, \\ \\text{evalúe la integral}  \\iint_R \\left|x - 3y^2\\right| \\ dA ',
            options: [
                { latex: '12\\text{ U.V.}' },
                { latex: '14\\text{ U.V.}' },
                { latex: '18\\text{ U.V.}' },
                { latex: '20\\text{ U.V.}' }
            ],
            correct: 0,
            hint: 'Recuerda que la pendiente de la recta tangente a una curva es la derivada de la curva evaluada en el punto de tangencia.'
        },
        {
            question: 'Con base en la construcción, ¿cuál es el valor de la integral doble?',
            geogebraId: 'gjff68wa',
            geogebraState: '2',
            latex: '\\text{Si } \\ R = \\{(x, y) \\mid -1 \\le x \\le 1,\\, -2 \\le y \\le 2\\}, \\ \\text{evalúe la integral}  \\iint_R \\sqrt{1 - x^2} \\ dA ',
            options: [
                { latex: '11\\pi \\text{ U.V.}' },
                { latex: '12\\pi \\text{ U.V.}' },
                { latex: '2\\pi \\text{ U.V.}' },
                { latex: '5\\pi \\text{ U.V.}' }
            ],
            correct: 2,
            hint: 'Recuerda que la integral doble representa el volumen bajo la superficie z = f(x,y) sobre la región R.'
        },
        {
            question: 'Evalúe la integral doble sobre la región rectangular dada:',
            geogebraId: 'skyzrtkm',
            geogebraState: '0',
            latex: '\\text{Si } R = [0,1] \\times [0,1], \\text{ evalúe } \\iint_R (x + y) \\ dA',
            options: [
                { latex: '1' },
                { latex: '0.5' },
                { latex: '2' },
                { latex: '1.5' }
            ],
            correct: 0,
            hint: 'Integra primero respecto a x y luego respecto a y (o viceversa).'
        },
        {
            question: 'Calcule el área de la región triangular:',
            geogebraId: 'gjff68wa',
            geogebraState: '0',
            latex: '\\text{Área del triángulo con vértices } (0,0), (1,0), (0,1)',
            options: [
                { latex: '1\\text{ u}^2' },
                { latex: '0.5\\text{ u}^2' },
                { latex: '0.25\\text{ u}^2' },
                { latex: '2\\text{ u}^2' }
            ],
            correct: 1,
            hint: 'El área se puede calcular como \\iint_D 1 dA.'
        },
        {
            question: 'Calcule el volumen del cubo:',
            geogebraId: 'hyscdj6e',
            geogebraState: '0',
            latex: '\\text{Volumen de la región } B = [0,2] \\times [0,2] \\times [0,2]',
            options: [
                { latex: '4\\text{ u}^3' },
                { latex: '6\\text{ u}^3' },
                { latex: '8\\text{ u}^3' },
                { latex: '12\\text{ u}^3' }
            ],
            correct: 2,
            hint: 'El volumen es el producto de las longitudes de los lados.'
        },
        {
            question: 'Evalúe la integral doble usando coordenadas polares:',
            geogebraId: 'xb8mqyxf',
            geogebraState: '0',
            latex: '\\iint_D (x^2 + y^2) \\ dA \\text{ donde } D \\text{ es el círculo unitario } x^2 + y^2 \\le 1',
            options: [
                { latex: '\\pi' },
                { latex: '\\pi/2' },
                { latex: '2\\pi' },
                { latex: '\\pi/4' }
            ],
            correct: 1,
            hint: 'Recuerda que x^2 + y^2 = r^2 y dA = r dr d\\theta.'
        },
        {
            question: 'Evalúe la integral triple:',
            geogebraId: 'hyscdj6e',
            geogebraState: '0',
            latex: '\\text{Si } B = [0,1]^3, \\text{ evalúe } \\iiint_B (x + y + z) \\ dV',
            options: [
                { latex: '1' },
                { latex: '1.5' },
                { latex: '2' },
                { latex: '3' }
            ],
            correct: 1,
            hint: 'La integral se separa en suma de tres integrales triples sencillas.'
        },
        {
            question: 'Evalúe la integral doble sobre la región rectangular dada:',
            geogebraId: 'skyzrtkm',
            geogebraState: '0',
            latex: '\\text{Si } R = [0,2] \\times [0,2], \\text{ evalúe } \\iint_R xy \\ dA',
            options: [
                { latex: '4' },
                { latex: '2' },
                { latex: '8' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'La integral se puede separar como producto de dos integrales simples.'
        },
        {
            question: 'Evalúe la integral doble:',
            geogebraId: 'gjff68wa',
            geogebraState: '0',
            latex: '\\text{Si } R = [0,1] \\times [0,1], \\text{ evalúe } \\iint_R (2x + 3y) \\ dA',
            options: [
                { latex: '2.5' },
                { latex: '5' },
                { latex: '1.5' },
                { latex: '3' }
            ],
            correct: 0,
            hint: 'Integra término a término.'
        },
        {
            question: 'Evalúe la integral triple:',
            geogebraId: 'hyscdj6e',
            geogebraState: '0',
            latex: '\\text{Si } B = [0,1] \\times [0,1] \\times [0,2], \\text{ evalúe } \\iiint_B z \\ dV',
            options: [
                { latex: '2' },
                { latex: '1' },
                { latex: '4' },
                { latex: '0.5' }
            ],
            correct: 0,
            hint: 'Los límites para z son de 0 a 2.'
        },
        {
            question: 'Calcule el área usando coordenadas polares:',
            geogebraId: 'xb8mqyxf',
            geogebraState: '0',
            latex: '\\text{Área del círculo } r = 2',
            options: [
                { latex: '4\\pi' },
                { latex: '2\\pi' },
                { latex: '\\pi' },
                { latex: '8\\pi' }
            ],
            correct: 0,
            hint: 'El área es \\int_0^{2\\pi} \\int_0^2 r dr d\\theta.'
        },
        {
            question: 'Calcule el volumen de la caja:',
            geogebraId: 'hyscdj6e',
            geogebraState: '0',
            latex: '\\text{Volumen de } B = [0,3] \\times [0,2] \\times [0,1]',
            options: [
                { latex: '6\\text{ u}^3' },
                { latex: '5\\text{ u}^3' },
                { latex: '12\\text{ u}^3' },
                { latex: '3\\text{ u}^3' }
            ],
            correct: 0,
            hint: 'Volumen = largo * ancho * alto.'
        },
        {
            question: 'Evalúe la integral doble:',
            geogebraId: 'skyzrtkm',
            geogebraState: '0',
            latex: '\\text{Si } R = [0, \\ln 2] \\times [0, \\ln 2], \\text{ evalúe } \\iint_R e^{x+y} \\ dA',
            options: [
                { latex: '1' },
                { latex: '2' },
                { latex: 'e' },
                { latex: '4' }
            ],
            correct: 0,
            hint: 'e^{x+y} = e^x * e^y.'
        },
        {
            question: 'Evalúe la integral triple:',
            geogebraId: 'hyscdj6e',
            geogebraState: '0',
            latex: '\\text{Si } B = [0,1]^3, \\text{ evalúe } \\iiint_B xyz \\ dV',
            options: [
                { latex: '1/8' },
                { latex: '1/4' },
                { latex: '1/2' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Separa la integral en producto de tres integrales.'
        },
        {
            question: 'Calcule el área del rectángulo:',
            geogebraId: 'gjff68wa',
            geogebraState: '0',
            latex: '\\text{Área de } R = [0,3] \\times [0,4]',
            options: [
                { latex: '12\\text{ u}^2' },
                { latex: '7\\text{ u}^2' },
                { latex: '14\\text{ u}^2' },
                { latex: '6\\text{ u}^2' }
            ],
            correct: 0,
            hint: 'Área = base * altura.'
        },
        {
            question: 'Evalúe la integral doble en polares:',
            geogebraId: 'xb8mqyxf',
            geogebraState: '0',
            latex: '\\iint_D 1 \\ dA \\text{ donde } D \\text{ es el círculo } r \\le 3',
            options: [
                { latex: '9\\pi' },
                { latex: '3\\pi' },
                { latex: '6\\pi' },
                { latex: '18\\pi' }
            ],
            correct: 0,
            hint: 'Esto es equivalente al área del círculo de radio 3.'
        },
        {
            question: 'Evalúe la integral triple:',
            geogebraId: 'hyscdj6e',
            geogebraState: '0',
            latex: '\\text{Si } B = [0,2]^3, \\text{ evalúe } \\iiint_B 2 \\ dV',
            options: [
                { latex: '16' },
                { latex: '8' },
                { latex: '4' },
                { latex: '32' }
            ],
            correct: 0,
            hint: 'La integral de una constante es la constante por el volumen de la región.'
        },
        {
            question: 'Calcule la derivada parcial respecto a x:',
            geogebraId: 'fgzyyx8x',
            geogebraState: '0',
            latex: '\\text{Si } f(x,y) = x^2y, \\text{ calcule } f_x(1,2)',
            options: [
                { latex: '4' },
                { latex: '2' },
                { latex: '1' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Deriva respecto a x tratando a y como constante.'
        },
        {
            question: 'Calcule la derivada parcial respecto a y:',
            geogebraId: 'fgzyyx8x',
            geogebraState: '0',
            latex: '\\text{Si } f(x,y) = x^2 + y^2, \\text{ calcule } f_y(2,1)',
            options: [
                { latex: '2' },
                { latex: '4' },
                { latex: '1' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Deriva respecto a y tratando a x como constante.'
        },
        {
            question: 'Calcule el vector gradiente:',
            geogebraId: 'k6w7u2j9',
            geogebraState: '0',
            latex: '\\text{Si } f(x,y) = 3x - 4y, \\text{ calcule } \\nabla f',
            options: [
                { latex: '\\langle 3, -4 \\rangle' },
                { latex: '\\langle 3, 4 \\rangle' },
                { latex: '\\langle -4, 3 \\rangle' },
                { latex: '\\langle -3, 4 \\rangle' }
            ],
            correct: 0,
            hint: 'El gradiente es el vector de derivadas parciales.'
        },
        {
            question: 'Calcule la derivada direccional:',
            geogebraId: 'k6w7u2j9',
            geogebraState: '0',
            latex: '\\text{Si } f(x,y) = xy, \\text{ calcule } D_u f(1,1) \\text{ en dirección } \\langle 1/\\sqrt{2}, 1/\\sqrt{2} \\rangle',
            options: [
                { latex: '\\sqrt{2}' },
                { latex: '1' },
                { latex: '0' },
                { latex: '2' }
            ],
            correct: 0,
            hint: 'D_u f = \\nabla f \\cdot u.'
        },
        {
            question: 'Encuentre la ecuación del plano tangente:',
            geogebraId: 'fgzyyx8x',
            geogebraState: '0',
            latex: '\\text{A la superficie } z = x^2 + y^2 \\text{ en el punto } (1,1,2)',
            options: [
                { latex: '2x + 2y - z = 2' },
                { latex: 'x + y - z = 0' },
                { latex: '2x + 2y + z = 6' },
                { latex: 'x - y + z = 2' }
            ],
            correct: 0,
            hint: 'El vector normal es \\langle f_x, f_y, -1 \\rangle.'
        },
        {
            question: 'Determine la dirección de máximo ascenso:',
            geogebraId: 'k6w7u2j9',
            geogebraState: '0',
            latex: '\\text{Para } f(x,y) = x^2 + y^2 \\text{ en el punto } (1,1)',
            options: [
                { latex: '\\langle 2, 2 \\rangle' },
                { latex: '\\langle 1, 1 \\rangle' },
                { latex: '\\langle -2, -2 \\rangle' },
                { latex: '\\langle 1, -1 \\rangle' }
            ],
            correct: 0,
            hint: 'La dirección de máximo ascenso es la del gradiente.'
        },
        {
            question: 'Calcule la derivada parcial:',
            geogebraId: 'fgzyyx8x',
            geogebraState: '0',
            latex: '\\text{Si } f(x,y) = e^{xy}, \\text{ calcule } f_x',
            options: [
                { latex: 'ye^{xy}' },
                { latex: 'xe^{xy}' },
                { latex: 'e^{xy}' },
                { latex: 'xye^{xy}' }
            ],
            correct: 0,
            hint: 'Usa la regla de la cadena.'
        },
        {
            question: 'Encuentre un vector normal al plano:',
            geogebraId: 'fgzyyx8x',
            geogebraState: '0',
            latex: '\\text{Al plano } z = x + y \\text{ en el origen}',
            options: [
                { latex: '\\langle 1, 1, -1 \\rangle' },
                { latex: '\\langle 1, 1, 1 \\rangle' },
                { latex: '\\langle 0, 0, 1 \\rangle' },
                { latex: '\\langle 1, -1, 0 \\rangle' }
            ],
            correct: 0,
            hint: 'Escribe la superficie como F(x,y,z) = x + y - z = 0.'
        },
        {
            question: 'Calcule el gradiente de la restricción:',
            geogebraId: 'hyscdj6e',
            geogebraState: '0',
            latex: '\\text{Si } g(x,y) = x^2 + y^2 = 1, \\text{ calcule } \\nabla g(1,0)',
            options: [
                { latex: '\\langle 2, 0 \\rangle' },
                { latex: '\\langle 0, 2 \\rangle' },
                { latex: '\\langle 1, 0 \\rangle' },
                { latex: '\\langle 1, 1 \\rangle' }
            ],
            correct: 0,
            hint: 'Calcula las derivadas parciales de g.'
        },
        {
            question: 'Calcule el valor máximo de la derivada direccional:',
            geogebraId: 'k6w7u2j9',
            geogebraState: '0',
            latex: '\\text{Si } \\nabla f = \\langle 3, 4 \\rangle',
            options: [
                { latex: '5' },
                { latex: '7' },
                { latex: '1' },
                { latex: '25' }
            ],
            correct: 0,
            hint: 'El valor máximo es la magnitud del gradiente.'
        }
    ]
};
