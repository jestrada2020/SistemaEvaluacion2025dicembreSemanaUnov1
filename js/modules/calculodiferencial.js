window.examCategories = window.examCategories || {};

window.examCategories.calculodiferencial = {
    name: 'Cálculo Diferencial',
    description: 'Operaciones con límites de funciones y conceptos de derivadas',
    questions: [
        {
            question: 'Con base en la construcción, ¿cuál es la pendiente de la recta tangente?',
            geogebraId: 'ca6sywc7',
            geogebraState: '1',
            latex: '\\text{Obtener la pendiente de la recta tangente a la parábola} \\\\ y=(x-2)^2 \\ \\text{ en el punto de tangencia cuando } \\ x = 3 ',
            options: [
                { latex: '3' },
                { latex: '2' },
                { latex: '4' },
                { latex: '-2' }
            ],
            correct: 1,
            hint: 'Recuerda que la pendiente de la rectagente a una curva es la derivada de la curva evaluada en el punto de tangencia.'
        },
        {
            question: 'Con base en la construcción, ¿cuál es la pendiente de la recta tangente?',
            geogebraId: 'kwrmu79x',
            geogebraState: '1',
            latex: '\\text{Obtener la pendiente de la recta tangente al circulo  en el punto de tangencia cuando } \\ \\alpha = 244 \\ \\text{grados}',
            options: [
                { latex: '1.4615' },
                { latex: '0.4615' },
                { latex: '2.4615' },
                { latex: '3.4615' }
            ],
            correct: 1,
            hint: 'Recuerda que la pendiente de la rectagente a una curva es la derivada de la curva evaluada en el punto de tangencia.'
        },
        {
            question: 'Con base en la construcción, ¿cuál es la pendiente de la recta tangente?',
            geogebraId: 'kwrmu79x',
            geogebraState: '2',
            latex: '\\text{Obtener la pendiente de la recta tangente al circulo  en el punto de tangencia cuando } \\ \\alpha = 30 \\ \\text{grados}',
            options: [
                { latex: '2.1624' },
                { latex: '-2.1624' },
                { latex: '-0.1624' },
                { latex: '0.1624' }
            ],
            correct: 2,
            hint: 'Recuerda que la pendiente de la rectagente a una curva es la derivada de la curva evaluada en el punto de tangencia.'
        },
        {
            question: 'Calcule el límite:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\lim_{x \\to 2} x^2',
            options: [
                { latex: '4' },
                { latex: '2' },
                { latex: '0' },
                { latex: '\\infty' }
            ],
            correct: 0,
            hint: 'Sustitución directa.'
        },
        {
            question: 'Calcule el límite al infinito:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\lim_{x \\to \\infty} \\frac{1}{x}',
            options: [
                { latex: '0' },
                { latex: '\\infty' },
                { latex: '1' },
                { latex: '-1' }
            ],
            correct: 0,
            hint: 'El denominador crece indefinidamente.'
        },
        {
            question: 'Límite trigonométrico especial:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\lim_{x \\to 0} \\frac{\\sin x}{x}',
            options: [
                { latex: '1' },
                { latex: '0' },
                { latex: '\\infty' },
                { latex: '\\pi' }
            ],
            correct: 0,
            hint: 'Usa la regla de L\'Hôpital o geometría.'
        },
        {
            question: 'Calcule el límite factorizando:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\lim_{x \\to 3} \\frac{x^2-9}{x-3}',
            options: [
                { latex: '6' },
                { latex: '0' },
                { latex: '3' },
                { latex: '9' }
            ],
            correct: 0,
            hint: 'Factoriza el numerador como diferencia de cuadrados.'
        },
        {
            question: 'Analice el límite lateral:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\lim_{x \\to 0^+} \\frac{|x|}{x}',
            options: [
                { latex: '1' },
                { latex: '-1' },
                { latex: '0' },
                { latex: '\\text{No existe}' }
            ],
            correct: 0,
            hint: 'Para x>0, |x|=x.'
        },
        {
            question: 'Límite infinito:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\lim_{x \\to 0} \\frac{1}{x^2}',
            options: [
                { latex: '\\infty' },
                { latex: '0' },
                { latex: '-\\infty' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'El denominador es positivo y tiende a 0.'
        },
        {
            question: 'Continuidad en un punto:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = \\begin{cases} x+1 & x<1 \\\\ 2 & x=1 \\\\ 3-x & x>1 \\end{cases} \\text{ ¿Es continua en } x=1?',
            options: [
                { latex: '\\text{Sí}' },
                { latex: '\\text{No, límite no existe}' },
                { latex: '\\text{No, f(1) no definida}' },
                { latex: '\\text{No, límite != f(1)}' }
            ],
            correct: 0,
            hint: 'Verifica si lim izq = lim der = f(1).'
        },
        {
            question: 'Discontinuidad removible:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = \\frac{x^2-1}{x-1} \\text{ en } x=1',
            options: [
                { latex: '\\text{Removible definiendo } f(1)=2' },
                { latex: '\\text{Salto infinito}' },
                { latex: '\\text{Salto finito}' },
                { latex: '\\text{Es continua}' }
            ],
            correct: 0,
            hint: 'El límite existe pero la función no está definida.'
        },
        {
            question: 'Derivada de potencia:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(x^2)',
            options: [
                { latex: '2x' },
                { latex: 'x' },
                { latex: '2' },
                { latex: 'x^2' }
            ],
            correct: 0,
            hint: 'Regla de la potencia: nx^{n-1}.'
        },
        {
            question: 'Derivada trigonométrica:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(\\sin x)',
            options: [
                { latex: '\\cos x' },
                { latex: '-\\cos x' },
                { latex: '\\sin x' },
                { latex: '-\\sin x' }
            ],
            correct: 0,
            hint: 'Derivada básica.'
        },
        {
            question: 'Derivada exponencial:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(e^x)',
            options: [
                { latex: 'e^x' },
                { latex: 'xe^{x-1}' },
                { latex: 'e' },
                { latex: '\\ln x' }
            ],
            correct: 0,
            hint: 'Es la única función que es su propia derivada.'
        },
        {
            question: 'Derivada logarítmica:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(\\ln x)',
            options: [
                { latex: '\\frac{1}{x}' },
                { latex: 'e^x' },
                { latex: '\\frac{1}{\\ln x}' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Derivada básica para x>0.'
        },
        {
            question: 'Regla del producto:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(x \\sin x)',
            options: [
                { latex: '\\sin x + x \\cos x' },
                { latex: '\\cos x' },
                { latex: 'x \\cos x' },
                { latex: '\\sin x - x \\cos x' }
            ],
            correct: 0,
            hint: 'u\'v + uv\'.'
        },
        {
            question: 'Regla del cociente:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(\\frac{x}{x+1})',
            options: [
                { latex: '\\frac{1}{(x+1)^2}' },
                { latex: '\\frac{2x+1}{(x+1)^2}' },
                { latex: '1' },
                { latex: '\\frac{-1}{(x+1)^2}' }
            ],
            correct: 0,
            hint: '(u\'v - uv\')/v^2.'
        },
        {
            question: 'Regla de la cadena:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(\\sin(x^2))',
            options: [
                { latex: '2x \\cos(x^2)' },
                { latex: '\\cos(x^2)' },
                { latex: '2x \\sin(x^2)' },
                { latex: '\\cos(2x)' }
            ],
            correct: 0,
            hint: 'Derivada de externa por derivada de interna.'
        },
        {
            question: 'Regla de la cadena exp:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(e^{2x})',
            options: [
                { latex: '2e^{2x}' },
                { latex: 'e^{2x}' },
                { latex: '2xe^{2x}' },
                { latex: 'e^{2x}/2' }
            ],
            correct: 0,
            hint: 'Derivada de e^u es e^u * u\'.'
        },
        {
            question: 'Derivación implícita:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'x^2 + y^2 = 1, \\text{ hallar } y\'',
            options: [
                { latex: '-x/y' },
                { latex: 'x/y' },
                { latex: '-y/x' },
                { latex: 'y/x' }
            ],
            correct: 0,
            hint: 'Deriva ambos lados respecto a x.'
        },
        {
            question: 'Derivación logarítmica:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(x^x)',
            options: [
                { latex: 'x^x(1+\\ln x)' },
                { latex: 'x \\cdot x^{x-1}' },
                { latex: 'x^x \\ln x' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Toma ln a ambos lados antes de derivar.'
        },
        {
            question: 'Pendiente de la tangente:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x)=x^2 \\text{ en } x=1',
            options: [
                { latex: '2' },
                { latex: '1' },
                { latex: '0' },
                { latex: '4' }
            ],
            correct: 0,
            hint: 'Evalúa la derivada en x=1.'
        },
        {
            question: 'Pendiente de la normal:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x)=x^2 \\text{ en } x=1',
            options: [
                { latex: '-1/2' },
                { latex: '2' },
                { latex: '-2' },
                { latex: '1/2' }
            ],
            correct: 0,
            hint: 'La pendiente normal es -1/m_tangente.'
        },
        {
            question: 'Segunda derivada:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d^2}{dx^2}(x^3)',
            options: [
                { latex: '6x' },
                { latex: '3x^2' },
                { latex: '6' },
                { latex: '3' }
            ],
            correct: 0,
            hint: 'Deriva dos veces.'
        },
        {
            question: 'Posición a velocidad:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 's(t) = t^2 + t, \\text{ hallar } v(1)',
            options: [
                { latex: '3' },
                { latex: '2' },
                { latex: '1' },
                { latex: '4' }
            ],
            correct: 0,
            hint: 'v(t) = s\'(t).'
        },
        {
            question: 'Velocidad a aceleración:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'v(t) = 3t^2, \\text{ hallar } a(1)',
            options: [
                { latex: '6' },
                { latex: '3' },
                { latex: '1' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'a(t) = v\'(t).'
        },
        {
            question: 'Razones de cambio relacionadas:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'A=\\pi r^2. \\text{ Si } dr/dt=1, r=2, \\text{ hallar } dA/dt',
            options: [
                { latex: '4\\pi' },
                { latex: '2\\pi' },
                { latex: '\\pi' },
                { latex: '8\\pi' }
            ],
            correct: 0,
            hint: 'dA/dt = 2\\pi r (dr/dt).'
        },
        {
            question: 'Razones relacionadas (Escalera):',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'x^2+y^2=25. x=3, dx/dt=2. \\text{ Hallar } dy/dt',
            options: [
                { latex: '-1.5' },
                { latex: '1.5' },
                { latex: '-2' },
                { latex: '2' }
            ],
            correct: 0,
            hint: '2x x\' + 2y y\' = 0. Encuentra y primero.'
        },
        {
            question: 'Puntos críticos:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = x^3 - 3x',
            options: [
                { latex: 'x = 1, -1' },
                { latex: 'x = 0' },
                { latex: 'x = 3' },
                { latex: 'x = \\sqrt{3}' }
            ],
            correct: 0,
            hint: 'Donde f\'(x) = 0.'
        },
        {
            question: 'Intervalo creciente:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = x^2',
            options: [
                { latex: '(0, \\infty)' },
                { latex: '(-\\infty, 0)' },
                { latex: '(-\\infty, \\infty)' },
                { latex: '(-1, 1)' }
            ],
            correct: 0,
            hint: 'Donde f\'(x) > 0.'
        },
        {
            question: 'Intervalo decreciente:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = x^2',
            options: [
                { latex: '(-\\infty, 0)' },
                { latex: '(0, \\infty)' },
                { latex: '(-\\infty, \\infty)' },
                { latex: '(-1, 1)' }
            ],
            correct: 0,
            hint: 'Donde f\'(x) < 0.'
        },
        {
            question: 'Máximo local:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = -x^2',
            options: [
                { latex: 'x = 0' },
                { latex: 'x = 1' },
                { latex: 'x = -1' },
                { latex: '\\text{No tiene}' }
            ],
            correct: 0,
            hint: 'Cambio de + a - en la derivada.'
        },
        {
            question: 'Mínimo local:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = x^2',
            options: [
                { latex: 'x = 0' },
                { latex: 'x = 1' },
                { latex: 'x = -1' },
                { latex: '\\text{No tiene}' }
            ],
            correct: 0,
            hint: 'Cambio de - a + en la derivada.'
        },
        {
            question: 'Concavidad hacia arriba:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = x^2',
            options: [
                { latex: '(-\\infty, \\infty)' },
                { latex: '(0, \\infty)' },
                { latex: '(-\\infty, 0)' },
                { latex: '\\text{Nunca}' }
            ],
            correct: 0,
            hint: 'Donde f\'\'(x) > 0.'
        },
        {
            question: 'Concavidad hacia abajo:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = -x^2',
            options: [
                { latex: '(-\\infty, \\infty)' },
                { latex: '(0, \\infty)' },
                { latex: '(-\\infty, 0)' },
                { latex: '\\text{Nunca}' }
            ],
            correct: 0,
            hint: 'Donde f\'\'(x) < 0.'
        },
        {
            question: 'Punto de inflexión:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = x^3',
            options: [
                { latex: 'x = 0' },
                { latex: 'x = 1' },
                { latex: 'x = -1' },
                { latex: '\\text{No tiene}' }
            ],
            correct: 0,
            hint: 'Donde cambia la concavidad.'
        },
        {
            question: 'Máximo absoluto en intervalo:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = x^2 \\text{ en } [-1, 2]',
            options: [
                { latex: '4' },
                { latex: '1' },
                { latex: '0' },
                { latex: '2' }
            ],
            correct: 0,
            hint: 'Evalúa en extremos y puntos críticos.'
        },
        {
            question: 'Teorema de Rolle:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = x^2 - 1 \\text{ en } [-1, 1]. \\text{ ¿Existe c tal que } f\'(c)=0?',
            options: [
                { latex: '\\text{Sí, } c=0' },
                { latex: '\\text{No}' },
                { latex: '\\text{Sí, } c=1' },
                { latex: '\\text{Sí, } c=-1' }
            ],
            correct: 0,
            hint: 'f(-1) = f(1) = 0.'
        },
        {
            question: 'Teorema del Valor Medio:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'f(x) = x^2 \\text{ en } [0, 2]. \\text{ Hallar c tal que } f\'(c) = \\frac{f(2)-f(0)}{2-0}',
            options: [
                { latex: '1' },
                { latex: '0.5' },
                { latex: '1.5' },
                { latex: '0' }
            ],
            correct: 0,
            hint: '2c = 4/2.'
        },
        {
            question: 'Regla de L\'Hôpital (0/0):',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\lim_{x \\to 1} \\frac{x^2-1}{x-1}',
            options: [
                { latex: '2' },
                { latex: '0' },
                { latex: '1' },
                { latex: '\\infty' }
            ],
            correct: 0,
            hint: 'Deriva num y den.'
        },
        {
            question: 'Regla de L\'Hôpital (inf/inf):',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\lim_{x \\to \\infty} \\frac{2x}{x+1}',
            options: [
                { latex: '2' },
                { latex: '0' },
                { latex: '1' },
                { latex: '\\infty' }
            ],
            correct: 0,
            hint: 'Deriva num y den.'
        },
        {
            question: 'Optimización (Área):',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\text{Max área de rectángulo con perímetro 20}',
            options: [
                { latex: '25' },
                { latex: '20' },
                { latex: '100' },
                { latex: '50' }
            ],
            correct: 0,
            hint: 'Cuadrado de lado 5.'
        },
        {
            question: 'Optimización (Distancia):',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\text{Punto en } y=x \\text{ más cercano a } (1,0)',
            options: [
                { latex: '(0.5, 0.5)' },
                { latex: '(0, 0)' },
                { latex: '(1, 1)' },
                { latex: '(2, 2)' }
            ],
            correct: 0,
            hint: 'Minimiza la distancia al cuadrado.'
        },
        {
            question: 'Aproximación lineal:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\text{Aproximar } \\sqrt{4.1} \\text{ usando } f(x)=\\sqrt{x} \\text{ en } a=4',
            options: [
                { latex: '2.025' },
                { latex: '2.1' },
                { latex: '2.05' },
                { latex: '2.0' }
            ],
            correct: 0,
            hint: 'L(x) = f(a) + f\'(a)(x-a).'
        },
        {
            question: 'Diferencial dy:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'y=x^2, x=2, dx=0.1. \\text{ Hallar } dy',
            options: [
                { latex: '0.4' },
                { latex: '0.2' },
                { latex: '0.1' },
                { latex: '0.04' }
            ],
            correct: 0,
            hint: 'dy = f\'(x)dx.'
        },
        {
            question: 'Derivada inversa trig:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(\\arcsin x)',
            options: [
                { latex: '\\frac{1}{\\sqrt{1-x^2}}' },
                { latex: '\\frac{-1}{\\sqrt{1-x^2}}' },
                { latex: '\\frac{1}{1+x^2}' },
                { latex: '\\cos x' }
            ],
            correct: 0,
            hint: 'Fórmula estándar.'
        },
        {
            question: 'Derivada inversa trig:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(\\arctan x)',
            options: [
                { latex: '\\frac{1}{1+x^2}' },
                { latex: '\\frac{1}{\\sqrt{1-x^2}}' },
                { latex: '\\frac{-1}{1+x^2}' },
                { latex: '\\sec^2 x' }
            ],
            correct: 0,
            hint: 'Fórmula estándar.'
        },
        {
            question: 'Derivada hiperbólica:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: '\\frac{d}{dx}(\\cosh x)',
            options: [
                { latex: '\\sinh x' },
                { latex: '-\\sinh x' },
                { latex: '\\cosh x' },
                { latex: '-\\cosh x' }
            ],
            correct: 0,
            hint: 'Similar a trigonométricas pero sin signo negativo.'
        },
        {
            question: 'Pendiente paramétrica:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'x=t^2, y=t^3. \\text{ Hallar } dy/dx \\text{ en } t=1',
            options: [
                { latex: '1.5' },
                { latex: '1' },
                { latex: '2/3' },
                { latex: '3' }
            ],
            correct: 0,
            hint: '(dy/dt) / (dx/dt).'
        },
        {
            question: 'Pendiente polar:',
            geogebraId: 'kGf9gP7v',
            geogebraState: '0',
            latex: 'r=\\theta. \\text{ Hallar } dy/dx \\text{ en } \\theta=\\pi/2',
            options: [
                { latex: '-2/\\pi' },
                { latex: '2/\\pi' },
                { latex: '\\pi/2' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Usa la fórmula de pendiente polar.'
        }
    ]
};
