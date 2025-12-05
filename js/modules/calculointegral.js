window.examCategories = window.examCategories || {};

window.examCategories.calculointegral = {
    name: 'Cálculo Integral',
    description: 'Integral indefinida y Aplicaciones',
    questions: [
        {
            question: 'Con base en la construcción, ¿cuál es el área entre las curvas?',
            geogebraId: 'adwb7g2h',
            geogebraState: '1',
            latex: '\\text{Obtener el área entre curvas, por debajo de la curva } \\\\ f(x)= 0.5x^{2} + 3 \\ \\text{ y } \\ \\text{ arriba del eje X } \\ \\text{ en el intervalo } [-1,2] \\ \\text{ es:}',
            options: [
                { latex: '12.5\\text{ u}^2' },
                { latex: '10.5\\text{ u}^2' },
                { latex: '18.5\\text{ u}^2' },
                { latex: '20.5\\text{ u}^2' }
            ],
            correct: 1,
            hint: 'Recuerda que el área entre las curvas es una integral definida para una función continua en un intervalo [a,b]'
        },
        {
            question: 'Con base en la construcción, ¿cuál es el área entre las curvas?',
            geogebraId: 'vagpcz87',
            geogebraState: '2',
            latex: '\\text{Obtener el área entre curvas, por debajo de la curva } \\\\ f(x)= 0.5x^{2} + 3 \\ \\text{ y  arriba de} \\ g(x)= -x^{2} - 1 \\ \\text{ en el intervalo } \\ [-2,1] \\ \\text{es:}',
            options: [
                { latex: '12.5\\text{ u}^2' },
                { latex: '15.5\\text{ u}^2' },
                { latex: '16.5\\text{ u}^2' },
                { latex: '20.5\\text{ u}^2' },
            ],
            correct: 2,
            hint: 'Recuerda que el área entre las curvas es una integral definida para una función continua en un intervalo [a,b]'
        },
        {
            question: 'Con base en la construcción, ¿cuál es el área entre las curvas?',
            geogebraId: 'adwb7g2h',
            geogebraState: '2',
            latex: '\\text{Obtener el área entre curvas, por debajo de la curva } \\\\ f(x)= 0.5x^{2} + 3 \\ \\text{ y } \\ g(x)= x \\ \\text{ en el intervalo } \\ [-1,2] \\ \\text{es:}',
            options: [
                { latex: '2\\text{ u}^2' },
                { latex: '5\\text{ u}^2' },
                { latex: '9\\text{ u}^2' },
                { latex: '8\\text{ u}^2' },
            ],
            correct: 2,
            hint: 'Recuerda que el área entre las curvas es una integral definida para una función continua en un intervalo [a,b]'
        },

        {
            question: 'Con base en la construcción, ¿cuál es el volumen para el sólido de revolución?',
            geogebraId: 'a3nft28z',
            geogebraState: '3',
            latex: '\\text{Obtener el volumen del sólido de revolucón al rotar el area limitada entre las curvas} \\\\ f(y)= \\sqrt{4-y^{2}} \\ \\text{ y } \\ x= 1 \\ \\text{ al rededor del eje X, en el intervalo } \\ [0,1] \\ \\text{es:}',
            options: [
                { latex: '12\\ u^3' },
                { latex: '15\\ u^3' },
                { latex: '18\\ u^3' },
                { latex: '\\text{ ninguna de las anteriores}' }
            ],
            correct: 3,
            hint: 'Recuerda que el área entre las curvas es una integral definida para una función continua en un intervalo [a,b]'
        },
        {
            question: 'Observa la construcción y determina el área bajo la curva indicada:',
            geogebraId: 'qz3n4vfw',
            geogebraState: '2',
            latex: '\\text{Obtener el área entre curvas, por debajo de la curva } \\\\ f(x)= -0.5x^{2} + 3 \\ \\text{ y arriba del eje X,} \\ g(x)= 0 \\text{ entre } \\ [-2,1]',
            options: [
                { latex: '1.5\\text{ u}^2' },
                { latex: '1.5\\text{ u}^2' },
                { latex: '7.5\\text{ u}^2' },
                { latex: '2.5\\text{ u}^2' }
            ],
            correct: 2,
            hint: 'Recuerda que el área entre las curvas es una integral definida para una función continua en un intervalo [a,b]'
        },
        {
            question: 'Con base en la construcción, ¿cuál es el perímetro del triángulo ABC?',
            geogebraId: 'DRmEWBTJ',
            geogebraState: '2',
            latex: '\\text{Seleccionar el perímetro del triángulo ABC cuyos lados son }',
            options: [
                { latex: '2.1622\\text{ u}^2' },
                { latex: '5.1622\\text{ u}^2' },
                { latex: '3.1622\\text{ u}^2' },
                { latex: '8.1622\\text{ u}^2' },
            ],
            correct: 2,
            hint: 'El perímetro es la suma de todos los lados del triángulo'
        },
        {
            question: 'Aproxime el área bajo la curva usando sumas de Riemann:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\text{Aproxime } \\int_0^4 (x^2 + 1) dx \\text{ usando 4 rectángulos y el punto medio.}',
            options: [
                { latex: '21' },
                { latex: '22' },
                { latex: '20' },
                { latex: '25.33' }
            ],
            correct: 0,
            hint: 'Calcula el área de cada rectángulo.'
        },
        {
            question: 'Calcule la integral definida:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\int_0^3 (2x - 1) dx',
            options: [
                { latex: '6' },
                { latex: '5' },
                { latex: '7' },
                { latex: '8' }
            ],
            correct: 0,
            hint: 'Encuentra la antiderivada y evalúa.'
        },
        {
            question: 'Calcule el área entre curvas:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'y = x^2 \\text{ y } y = x',
            options: [
                { latex: '1/6' },
                { latex: '1/3' },
                { latex: '1/2' },
                { latex: '1' }
            ],
            correct: 0,
            hint: '\\int_0^1 (x - x^2) dx.'
        },
        {
            question: 'Volumen de revolución (Discos):',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'y = \\sqrt{x}, x=0, x=1 \\text{ girado eje x}',
            options: [
                { latex: '\\pi/2' },
                { latex: '\\pi' },
                { latex: '2\\pi' },
                { latex: '\\pi/3' }
            ],
            correct: 0,
            hint: '\\int_0^1 \\pi (\\sqrt{x})^2 dx.'
        },
        {
            question: 'Volumen de revolución (Arandelas):',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'y = x, y = x^2 \\text{ girado eje x}',
            options: [
                { latex: '2\\pi/15' },
                { latex: '\\pi/6' },
                { latex: '\\pi/3' },
                { latex: '\\pi/15' }
            ],
            correct: 0,
            hint: '\\int_0^1 \\pi (x^2 - (x^2)^2) dx.'
        },
        {
            question: 'Longitud de arco:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'y = \\frac{2}{3}x^{3/2} \\text{ de } x=0 \\text{ a } x=1',
            options: [
                { latex: '2/3(\\sqrt{8}-1)' },
                { latex: '1' },
                { latex: '2' },
                { latex: '1.5' }
            ],
            correct: 0,
            hint: '\\int \\sqrt{1+(y\')^2} dx.'
        },
        {
            question: 'Área de superficie de revolución:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'y = x^3 \\text{ de } x=0 \\text{ a } x=1 \\text{ eje x}',
            options: [
                { latex: '\\frac{\\pi}{27}(10\\sqrt{10}-1)' },
                { latex: '\\pi' },
                { latex: '2\\pi' },
                { latex: '3\\pi' }
            ],
            correct: 0,
            hint: '\\int 2\\pi y \\sqrt{1+(y\')^2} dx.'
        },
        {
            question: 'Trabajo (Resorte):',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\text{Una fuerza de 40N estira un resorte 10cm. ¿Trabajo para estirarlo de 10cm a 15cm?}',
            options: [
                { latex: '1.5 J' },
                { latex: '2.0 J' },
                { latex: '1.0 J' },
                { latex: '2.5 J' }
            ],
            correct: 0,
            hint: 'Usa la Ley de Hooke F=kx y W=\\int F dx.'
        },
        {
            question: 'Calcule la fuerza del fluido contra la placa vertical:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\text{Placa rectangular de 2m x 3m sumergida verticalmente, lado superior a 1m de profundidad.}',
            options: [
                { latex: '147,000 N' },
                { latex: '150,000 N' },
                { latex: '140,000 N' },
                { latex: '160,000 N' }
            ],
            correct: 0,
            hint: 'La fuerza es \\int \\rho g h(y) w(y) dy.'
        },
        {
            question: 'Identifique el campo de pendientes:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'y\' = x - y',
            options: [
                { latex: '\\text{Pendientes cero en } y=x' },
                { latex: '\\text{Pendientes cero en } y=-x' },
                { latex: '\\text{Pendientes constantes en } x' },
                { latex: '\\text{Pendientes constantes en } y' }
            ],
            correct: 0,
            hint: 'Analiza dónde la derivada es cero o constante.'
        },
        {
            question: 'Use el Método de Euler para aproximar y(1):',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'y\' = x + y, y(0)=1, h=0.5',
            options: [
                { latex: '2.5' },
                { latex: '2.0' },
                { latex: '3.0' },
                { latex: '2.25' }
            ],
            correct: 0,
            hint: 'y_{n+1} = y_n + h f(x_n, y_n).'
        },
        {
            question: 'Encuentre la Serie de Taylor centrada en a=0:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = e^{-x}',
            options: [
                { latex: '\\sum_{n=0}^\\infty \\frac{(-1)^n x^n}{n!}' },
                { latex: '\\sum_{n=0}^\\infty \\frac{x^n}{n!}' },
                { latex: '\\sum_{n=0}^\\infty \\frac{(-1)^n x^n}{n}' },
                { latex: '\\sum_{n=1}^\\infty \\frac{(-1)^n x^n}{n!}' }
            ],
            correct: 0,
            hint: 'Usa la fórmula de la serie de Maclaurin.'
        },
        {
            question: 'Determine si la serie geométrica converge:',
            geogebraId: '25287',
            geogebraState: '0',
            latex: '\\sum_{n=1}^\\infty 3 \\left(\\frac{2}{3}\\right)^{n-1}',
            options: [
                { latex: '\\text{Converge a } 9' },
                { latex: '\\text{Converge a } 6' },
                { latex: '\\text{Diverge}' },
                { latex: '\\text{Converge a } 3' }
            ],
            correct: 0,
            hint: 'Converge si |r| < 1. Suma = a/(1-r).'
        },
        {
            question: 'Use la Prueba de la Integral para determinar convergencia:',
            geogebraId: 'W9aP5g4e',
            geogebraState: '0',
            latex: '\\sum_{n=1}^\\infty \\frac{1}{n^2+1}',
            options: [
                { latex: '\\text{Converge}' },
                { latex: '\\text{Diverge}' },
                { latex: '\\text{No concluyente}' },
                { latex: '\\text{Condicionalmente convergente}' }
            ],
            correct: 0,
            hint: 'Compara con la integral impropia de f(x) correspondiente.'
        },
        {
            question: 'Determine la convergencia de la serie alternada:',
            geogebraId: 'sPcNq45n',
            geogebraState: '0',
            latex: '\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}',
            options: [
                { latex: '\\text{Converge condicionalmente}' },
                { latex: '\\text{Converge absolutamente}' },
                { latex: '\\text{Diverge}' },
                { latex: '\\text{Oscila}' }
            ],
            correct: 0,
            hint: 'Usa la prueba de series alternadas y la de valor absoluto.'
        },
        {
            question: 'Calcule el área de la región polar:',
            geogebraId: 'vzm4mvnj',
            geogebraState: '0',
            latex: 'r = 2 \\cos \\theta',
            options: [
                { latex: '\\pi' },
                { latex: '2\\pi' },
                { latex: '\\pi/2' },
                { latex: '4\\pi' }
            ],
            correct: 0,
            hint: 'El área es \\int_a^b \\frac{1}{2} r^2 d\\theta.'
        },
        {
            question: 'Calcule la longitud de la curva paramétrica:',
            geogebraId: 'dbska9aq',
            geogebraState: '0',
            latex: 'x = \\cos t, y = \\sin t, 0 \\le t \\le \\pi',
            options: [
                { latex: '\\pi' },
                { latex: '2\\pi' },
                { latex: '\\pi/2' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'La longitud es \\int_a^b \\sqrt{(dx/dt)^2 + (dy/dt)^2} dt.'
        },
        {
            question: 'Modelo de crecimiento logístico:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{dP}{dt} = 0.05P(1 - \\frac{P}{1000})',
            options: [
                { latex: '\\text{Capacidad de carga } K=1000' },
                { latex: '\\text{Capacidad de carga } K=0.05' },
                { latex: '\\text{Crecimiento exponencial}' },
                { latex: '\\text{Población decrece}' }
            ],
            correct: 0,
            hint: 'La ecuación logística es dP/dt = kP(1 - P/K).'
        },
        {
            question: 'Integre usando fracciones parciales:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\int \\frac{1}{x^2 - 1} dx',
            options: [
                { latex: '\\frac{1}{2} \\ln|\\frac{x-1}{x+1}| + C' },
                { latex: '\\ln|x^2 - 1| + C' },
                { latex: '\\arctan x + C' },
                { latex: '\\frac{1}{2} \\ln|\\frac{x+1}{x-1}| + C' }
            ],
            correct: 0,
            hint: 'Descompón el integrando en A/(x-1) + B/(x+1).'
        },
        {
            question: 'Evalúe la integral usando funciones hiperbólicas:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\int \\frac{1}{\\sqrt{x^2+1}} dx',
            options: [
                { latex: '\\text{arsinh}(x) + C' },
                { latex: '\\text{arcosh}(x) + C' },
                { latex: '\\text{artanh}(x) + C' },
                { latex: '\\ln(x) + C' }
            ],
            correct: 0,
            hint: 'Recuerda que d/dx(arsinh(x)) = 1/sqrt(x^2+1).'
        },
        {
            question: 'Use sustitución trigonométrica para integrar:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\int \\sqrt{1-x^2} dx',
            options: [
                { latex: '\\frac{1}{2}x\\sqrt{1-x^2} + \\frac{1}{2}\\arcsin(x) + C' },
                { latex: '\\frac{1}{2}x\\sqrt{1-x^2} - \\frac{1}{2}\\arcsin(x) + C' },
                { latex: '\\arcsin(x) + C' },
                { latex: 'x\\sqrt{1-x^2} + C' }
            ],
            correct: 0,
            hint: 'Usa x = sin(theta).'
        },
        {
            question: 'Evalúe el límite usando la Regla de L\'Hôpital:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\lim_{x \\to 0} \\frac{\\sin x}{x}',
            options: [
                { latex: '1' },
                { latex: '0' },
                { latex: '\\infty' },
                { latex: '-1' }
            ],
            correct: 0,
            hint: 'Deriva numerador y denominador por separado.'
        },
        {
            question: 'Determine si la sucesión converge:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'a_n = \\frac{n}{n+1}',
            options: [
                { latex: '\\text{Converge a } 1' },
                { latex: '\\text{Converge a } 0' },
                { latex: '\\text{Diverge}' },
                { latex: '\\text{Converge a } -1' }
            ],
            correct: 0,
            hint: 'Calcula el límite cuando n tiende a infinito.'
        },
        {
            question: 'Encuentre el radio de convergencia de la serie de potencias:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\sum_{n=0}^\\infty x^n',
            options: [
                { latex: 'R = 1' },
                { latex: 'R = \\infty' },
                { latex: 'R = 0' },
                { latex: 'R = 2' }
            ],
            correct: 0,
            hint: 'Usa la prueba de la razón.'
        },
        {
            question: 'Encuentre la Serie de Maclaurin para sin(x):',
            geogebraId: 'u2784331',
            geogebraState: '0',
            latex: 'f(x) = \\sin(x)',
            options: [
                { latex: '\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}' },
                { latex: '\\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}' },
                { latex: '\\sum_{n=0}^\\infty \\frac{x^n}{n!}' },
                { latex: '\\sum_{n=1}^\\infty \\frac{(-1)^n x^n}{n}' }
            ],
            correct: 0,
            hint: 'Derivadas de sin(x) en 0 son 0, 1, 0, -1...'
        },
        {
            question: 'Expanda usando la Serie Binomial:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '(1+x)^{-1}',
            options: [
                { latex: '1 - x + x^2 - x^3 + ...' },
                { latex: '1 + x + x^2 + x^3 + ...' },
                { latex: '1 - x + \\frac{x^2}{2} - ...' },
                { latex: '1 + 2x + 3x^2 + ...' }
            ],
            correct: 0,
            hint: 'Serie geométrica con r = -x.'
        },
        {
            question: 'Resuelva la ecuación diferencial separable:',
            geogebraId: 'u2784331',
            geogebraState: '0',
            latex: '\\frac{dy}{dx} = \\frac{x}{y}',
            options: [
                { latex: 'y^2 - x^2 = C' },
                { latex: 'y = x + C' },
                { latex: 'y = Cx' },
                { latex: 'y^2 + x^2 = C' }
            ],
            correct: 0,
            hint: 'Separa variables: y dy = x dx.'
        },
        {
            question: 'Resuelva la ecuación lineal usando factor integrante:',
            geogebraId: 'u2784331',
            geogebraState: '0',
            latex: 'y\' + y = e^x',
            options: [
                { latex: 'y = \\frac{1}{2}e^x + Ce^{-x}' },
                { latex: 'y = e^x + Ce^{-x}' },
                { latex: 'y = e^x + C' },
                { latex: 'y = Ce^x' }
            ],
            correct: 0,
            hint: 'Factor integrante es e^{\\int 1 dx} = e^x.'
        },
        {
            question: 'Calcule el área de la superficie paramétrica:',
            geogebraId: 'BZWTCPfd',
            geogebraState: '0',
            latex: 'x=r\\cos\\theta, y=r\\sin\\theta, z=z',
            options: [
                { latex: '\\text{Depende de los límites}' },
                { latex: '2\\pi r h' },
                { latex: '\\pi r^2' },
                { latex: '4\\pi r^2' }
            ],
            correct: 0,
            hint: 'Usa la fórmula de área superficial para paramétricas.'
        },
        {
            question: 'Use el Teorema de Pappus para el volumen:',
            geogebraId: 's7mqyzee',
            geogebraState: '0',
            latex: '\\text{Círculo } x^2+(y-b)^2=a^2 \\text{ girado eje x (b>a)}',
            options: [
                { latex: '2\\pi^2 a^2 b' },
                { latex: '\\frac{4}{3}\\pi a^3' },
                { latex: '2\\pi b (\\pi a^2)' },
                { latex: '\\pi a^2 b' }
            ],
            correct: 0,
            hint: 'V = 2\\pi \\rho A.'
        },
        {
            question: 'Encuentre el centro de masa de la varilla:',
            geogebraId: 'jJj72N8A',
            geogebraState: '0',
            latex: '\\rho(x) = x, 0 \\le x \\le L',
            options: [
                { latex: '2L/3' },
                { latex: 'L/2' },
                { latex: 'L/3' },
                { latex: '3L/4' }
            ],
            correct: 0,
            hint: 'x_cm = \\int x\\rho dx / \\int \\rho dx.'
        },
        {
            question: 'Verifique si es una función de densidad de probabilidad:',
            geogebraId: 'ewb6r64w',
            geogebraState: '0',
            latex: 'f(x) = 2x, 0 \\le x \\le 1',
            options: [
                { latex: '\\text{Sí, integral es 1}' },
                { latex: '\\text{No, integral no es 1}' },
                { latex: '\\text{No, f(x) < 0}' },
                { latex: '\\text{Sí, es constante}' }
            ],
            correct: 0,
            hint: 'La integral de f(x) sobre el dominio debe ser 1.'
        },
        {
            question: 'Función de error (no elemental):',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\text{erf}(x) = \\frac{2}{\\sqrt{\\pi}} \\int_0^x e^{-t^2} dt',
            options: [
                { latex: '\\text{Importante en probabilidad}' },
                { latex: '\\text{Es una función elemental}' },
                { latex: '\\text{No converge}' },
                { latex: '\\text{Es periódica}' }
            ],
            correct: 0,
            hint: 'Aparece en la distribución normal.'
        }
    ]
};
