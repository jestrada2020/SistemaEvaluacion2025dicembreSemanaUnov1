window.examCategories = window.examCategories || {};

window.examCategories.estadistica_inferencial = {
    name: 'Estadística Inferencial',
    description: 'Distribuciones de probabilidad: Binomial y Normal',
    questions: [
        // --- DISTRIBUCIÓN BINOMIAL (35 Preguntas) ---
        {
            question: 'La distribución Binomial modela experimentos con:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Características?}',
            options: [
                { latex: '\\text{n ensayos independientes con dos resultados posibles}' },
                { latex: '\\text{Ensayos infinitos}' },
                { latex: '\\text{Resultados continuos}' },
                { latex: '\\text{Probabilidad variable en cada ensayo}' }
            ],
            correct: 0,
            hint: 'Éxito o Fracaso, n veces.'
        },
        {
            question: 'En una Binomial B(n, p), n representa:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'n = ?',
            options: [
                { latex: '\\text{El número de ensayos}' },
                { latex: '\\text{La probabilidad de éxito}' },
                { latex: '\\text{El número de éxitos}' },
                { latex: '\\text{La media}' }
            ],
            correct: 0,
            hint: 'Cantidad de intentos.'
        },
        {
            question: 'En una Binomial B(n, p), p representa:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'p = ?',
            options: [
                { latex: '\\text{La probabilidad de éxito en un ensayo}' },
                { latex: '\\text{El número total de éxitos}' },
                { latex: '\\text{La probabilidad de fracaso}' },
                { latex: '\\text{El tamaño de la muestra}' }
            ],
            correct: 0,
            hint: 'Probabilidad constante.'
        },
        {
            question: 'La probabilidad de fracaso q se calcula como:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'q = ?',
            options: [
                { latex: '1 - p' },
                { latex: '1 + p' },
                { latex: '1/p' },
                { latex: 'p - 1' }
            ],
            correct: 0,
            hint: 'Complemento.'
        },
        {
            question: 'La función de probabilidad de la Binomial es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'P(X=k) = ?',
            options: [
                { latex: '\\binom{n}{k} p^k (1-p)^{n-k}' },
                { latex: 'n p^k' },
                { latex: 'p^k (1-p)^{n-k}' },
                { latex: '\\frac{e^{-\\lambda} \\lambda^k}{k!}' }
            ],
            correct: 0,
            hint: 'Combinaciones por prob éxitos por prob fracasos.'
        },
        {
            question: 'La media (esperanza) de una distribución Binomial es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\mu = ?',
            options: [
                { latex: 'n \\cdot p' },
                { latex: 'n \\cdot p \\cdot q' },
                { latex: 'p' },
                { latex: '\\sqrt{npq}' }
            ],
            correct: 0,
            hint: 'Promedio de éxitos.'
        },
        {
            question: 'La varianza de una distribución Binomial es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\sigma^2 = ?',
            options: [
                { latex: 'n \\cdot p \\cdot (1-p)' },
                { latex: 'n \\cdot p' },
                { latex: 'np^2' },
                { latex: '\\sqrt{npq}' }
            ],
            correct: 0,
            hint: 'npq.'
        },
        {
            question: 'La desviación estándar de una Binomial es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\sigma = ?',
            options: [
                { latex: '\\sqrt{npq}' },
                { latex: 'npq' },
                { latex: 'np' },
                { latex: '(np)^2' }
            ],
            correct: 0,
            hint: 'Raíz de la varianza.'
        },
        {
            question: 'Si lanzamos una moneda 10 veces, n es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'n = ?',
            options: [
                { latex: '10' },
                { latex: '2' },
                { latex: '0.5' },
                { latex: '5' }
            ],
            correct: 0,
            hint: 'Número de lanzamientos.'
        },
        {
            question: 'Si la probabilidad de éxito es 0.2, la de fracaso es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'q = 1 - 0.2',
            options: [
                { latex: '0.8' },
                { latex: '0.2' },
                { latex: '0' },
                { latex: '1.2' }
            ],
            correct: 0,
            hint: 'Suma 1.'
        },
        {
            question: '¿Cuál NO es una condición para la Binomial?',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Condición falsa?}',
            options: [
                { latex: '\\text{La probabilidad p cambia en cada ensayo}' },
                { latex: '\\text{Ensayos independientes}' },
                { latex: '\\text{Número fijo de ensayos}' },
                { latex: '\\text{Dos resultados posibles}' }
            ],
            correct: 0,
            hint: 'p debe ser constante.'
        },
        {
            question: 'El coeficiente binomial "n sobre k" calcula:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\binom{n}{k}',
            options: [
                { latex: '\\text{El número de formas de elegir k éxitos en n ensayos}' },
                { latex: '\\text{La probabilidad de éxito}' },
                { latex: '\\text{El promedio}' },
                { latex: '\\text{La varianza}' }
            ],
            correct: 0,
            hint: 'Combinaciones.'
        },
        {
            question: 'Si X ~ B(10, 0.5), la media es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\mu = 10 \\times 0.5',
            options: [
                { latex: '5' },
                { latex: '10' },
                { latex: '2.5' },
                { latex: '0.5' }
            ],
            correct: 0,
            hint: 'Mitad de 10.'
        },
        {
            question: 'Si X ~ B(5, 0.2), P(X=0) es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '(0.8)^5',
            options: [
                { latex: '0.32768' },
                { latex: '0' },
                { latex: '0.2' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Todos fracasos.'
        },
        {
            question: 'La suma de P(X=k) para k de 0 a n es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\sum P(X=k) = ?',
            options: [
                { latex: '1' },
                { latex: 'n' },
                { latex: 'p' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Probabilidad total.'
        },
        {
            question: 'Una variable Bernoulli es una Binomial con:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'n = ?',
            options: [
                { latex: '1' },
                { latex: '0' },
                { latex: '\\infty' },
                { latex: '2' }
            ],
            correct: 0,
            hint: 'Un solo ensayo.'
        },
        {
            question: 'Si n es grande y p es pequeño, la Binomial se aproxima a:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Distribución?}',
            options: [
                { latex: '\\text{Poisson}' },
                { latex: '\\text{Normal}' }, // Normal is for large n and p not too extreme, Poisson for rare events.
                { latex: '\\text{Uniforme}' },
                { latex: '\\text{Exponencial}' }
            ],
            correct: 0,
            hint: 'Eventos raros.'
        },
        {
            question: 'Si n es grande y p no es extremo (np > 5, nq > 5), se aproxima a:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Distribución?}',
            options: [
                { latex: '\\text{Normal}' },
                { latex: '\\text{Poisson}' },
                { latex: '\\text{Geométrica}' },
                { latex: '\\text{Hipergeométrica}' }
            ],
            correct: 0,
            hint: 'Teorema del Límite Central.'
        },
        {
            question: 'En B(3, 0.5), la probabilidad de 3 éxitos es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '(0.5)^3',
            options: [
                { latex: '0.125' },
                { latex: '0.5' },
                { latex: '0.25' },
                { latex: '0.33' }
            ],
            correct: 0,
            hint: '1/8.'
        },
        {
            question: 'El rango de valores posibles para X en B(n, p) es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'X \\in ?',
            options: [
                { latex: '\\{0, 1, 2, ..., n\\}' },
                { latex: '\\{1, 2, ..., n\\}' },
                { latex: '\\{0, 1, 2, ...\\}' },
                { latex: '\\mathbb{R}' }
            ],
            correct: 0,
            hint: 'Desde ninguno hasta todos.'
        },
        {
            question: 'La forma de la distribución Binomial es simétrica si:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'p = ?',
            options: [
                { latex: '0.5' },
                { latex: '0' },
                { latex: '1' },
                { latex: '0.1' }
            ],
            correct: 0,
            hint: 'Igual probabilidad de éxito y fracaso.'
        },
        {
            question: 'Si p < 0.5, la distribución está sesgada a la:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Sesgo?}',
            options: [
                { latex: '\\text{Derecha (Positiva)}' },
                { latex: '\\text{Izquierda (Negativa)}' },
                { latex: '\\text{Simétrica}' },
                { latex: '\\text{No tiene sesgo}' }
            ],
            correct: 0,
            hint: 'Más probabilidad de valores bajos.'
        },
        {
            question: 'Para calcular P(X <= k) usamos:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Función?}',
            options: [
                { latex: '\\text{Función de Distribución Acumulada (CDF)}' },
                { latex: '\\text{Función de Masa de Probabilidad (PMF)}' },
                { latex: '\\text{Media}' },
                { latex: '\\text{Varianza}' }
            ],
            correct: 0,
            hint: 'Acumula.'
        },
        {
            question: 'P(X > k) es igual a:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '1 - ?',
            options: [
                { latex: 'P(X \\le k)' },
                { latex: 'P(X < k)' },
                { latex: 'P(X = k)' },
                { latex: 'P(X \\ge k)' }
            ],
            correct: 0,
            hint: 'Complemento de menor o igual.'
        },
        {
            question: 'En Geogebra, el comando para Binomial es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Comando?}',
            options: [
                { latex: '\\text{BinomialDist(n, p, ...)}' },
                { latex: '\\text{Normal(n, p)}' },
                { latex: '\\text{Prob(n, p)}' },
                { latex: '\\text{Bernoulli(p)}' }
            ],
            correct: 0,
            hint: 'Nombre de la distribución.'
        },
        {
            question: 'Si tiramos 5 dados, ¿cuál es la probabilidad de sacar exactamente dos 6?',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'B(5, 1/6), k=2',
            options: [
                { latex: '\\binom{5}{2}(1/6)^2(5/6)^3' },
                { latex: '(1/6)^2' },
                { latex: '2/5' },
                { latex: '5(1/6)^2' }
            ],
            correct: 0,
            hint: 'Fórmula completa.'
        },
        {
            question: 'La varianza máxima de una Binomial ocurre cuando p es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'p = ?',
            options: [
                { latex: '0.5' },
                { latex: '0' },
                { latex: '1' },
                { latex: '0.25' }
            ],
            correct: 0,
            hint: 'p(1-p) es máximo en 0.5.'
        },
        {
            question: 'Si n=100 y p=0.5, la desviación estándar es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\sqrt{100 \\times 0.5 \\times 0.5}',
            options: [
                { latex: '5' },
                { latex: '25' },
                { latex: '10' },
                { latex: '50' }
            ],
            correct: 0,
            hint: 'Raíz de 25.'
        },
        {
            question: 'Un examen tiene 10 preguntas V/F. Si respondes al azar, X ~ ?',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Modelo?}',
            options: [
                { latex: 'B(10, 0.5)' },
                { latex: 'B(10, 0.2)' },
                { latex: 'N(10, 0.5)' },
                { latex: 'B(1, 0.5)' }
            ],
            correct: 0,
            hint: 'Probabilidad 1/2.'
        },
        {
            question: 'P(X = x) en una Binomial es siempre:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Valor?}',
            options: [
                { latex: '\\ge 0 \\text{ y } \\le 1' },
                { latex: '> 1' },
                { latex: '< 0' },
                { latex: 'Entero' }
            ],
            correct: 0,
            hint: 'Es una probabilidad.'
        },
        {
            question: 'Si n aumenta, la gráfica de la Binomial se vuelve más:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Forma?}',
            options: [
                { latex: '\\text{Simétrica y acampanada (si p no es extremo)}' },
                { latex: '\\text{Sesgada}' },
                { latex: '\\text{Plana}' },
                { latex: '\\text{Dispersa}' }
            ],
            correct: 0,
            hint: 'Se parece a la Normal.'
        },
        {
            question: 'El valor esperado de éxitos en 20 ensayos con p=0.1 es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'E[X] = 20 \\times 0.1',
            options: [
                { latex: '2' },
                { latex: '1' },
                { latex: '0.2' },
                { latex: '20' }
            ],
            correct: 0,
            hint: '2 éxitos.'
        },
        {
            question: 'La probabilidad de obtener al menos un éxito es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '1 - P(X=0)',
            options: [
                { latex: '1 - (1-p)^n' },
                { latex: 'p^n' },
                { latex: '1 - p^n' },
                { latex: 'np' }
            ],
            correct: 0,
            hint: 'Complemento de cero éxitos.'
        },
        {
            question: '¿Qué significa que los ensayos sean independientes?',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Significado?}',
            options: [
                { latex: '\\text{El resultado de uno no afecta al otro}' },
                { latex: '\\text{No pueden ocurrir juntos}' },
                { latex: '\\text{Tienen la misma probabilidad}' },
                { latex: '\\text{Son simultáneos}' }
            ],
            correct: 0,
            hint: 'Sin memoria.'
        },
        {
            question: 'La distribución Binomial es una distribución de variable:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Discreta}' },
                { latex: '\\text{Continua}' },
                { latex: '\\text{Cualitativa}' },
                { latex: '\\text{Constante}' }
            ],
            correct: 0,
            hint: 'Cuenta éxitos (enteros).'
        },

        // --- DISTRIBUCIÓN NORMAL (35 Preguntas) ---
        {
            question: 'La distribución Normal es una distribución de variable:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Continua}' },
                { latex: '\\text{Discreta}' },
                { latex: '\\text{Nominal}' },
                { latex: '\\text{Finita}' }
            ],
            correct: 0,
            hint: 'Mediciones reales.'
        },
        {
            question: 'La forma de la distribución Normal es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Forma?}',
            options: [
                { latex: '\\text{Campana simétrica}' },
                { latex: '\\text{Uniforme rectangular}' },
                { latex: '\\text{Sesgada a la derecha}' },
                { latex: '\\text{Triangular}' }
            ],
            correct: 0,
            hint: 'Campana de Gauss.'
        },
        {
            question: 'Los parámetros que definen una Normal son:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Parámetros?}',
            options: [
                { latex: '\\mu \\text{ (media) y } \\sigma \\text{ (desviación)}' },
                { latex: 'n \\text{ y } p' },
                { latex: '\\lambda' },
                { latex: '\\text{Min y Max}' }
            ],
            correct: 0,
            hint: 'Centro y dispersión.'
        },
        {
            question: 'En una Normal, la media, mediana y moda son:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Relación?}',
            options: [
                { latex: '\\text{Iguales}' },
                { latex: '\\text{Diferentes}' },
                { latex: '\\text{Media > Moda}' },
                { latex: '\\text{Media < Moda}' }
            ],
            correct: 0,
            hint: 'Simetría perfecta.'
        },
        {
            question: 'El área total bajo la curva Normal es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\int_{-\\infty}^{\\infty} f(x) dx = ?',
            options: [
                { latex: '1' },
                { latex: '100' },
                { latex: '0' },
                { latex: '\\pi' }
            ],
            correct: 0,
            hint: 'Probabilidad total.'
        },
        {
            question: 'La distribución Normal Estándar (Z) tiene:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\mu = ?, \\sigma = ?',
            options: [
                { latex: '\\mu = 0, \\sigma = 1' },
                { latex: '\\mu = 1, \\sigma = 0' },
                { latex: '\\mu = 0, \\sigma = 0' },
                { latex: '\\mu = 1, \\sigma = 1' }
            ],
            correct: 0,
            hint: 'Centrada en cero, escala unitaria.'
        },
        {
            question: 'La fórmula de estandarización (Z-score) es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'Z = ?',
            options: [
                { latex: '\\frac{X - \\mu}{\\sigma}' },
                { latex: '\\frac{X - \\sigma}{\\mu}' },
                { latex: 'X - \\mu' },
                { latex: '\\frac{\\sigma}{X - \\mu}' }
            ],
            correct: 0,
            hint: 'Distancia en desviaciones estándar.'
        },
        {
            question: 'Según la Regla Empírica, a +/- 1 sigma se encuentra el:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\% \\text{ Datos?}',
            options: [
                { latex: '68\\%' },
                { latex: '95\\%' },
                { latex: '99.7\\%' },
                { latex: '50\\%' }
            ],
            correct: 0,
            hint: 'Aprox 2/3.'
        },
        {
            question: 'Según la Regla Empírica, a +/- 2 sigmas se encuentra el:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\% \\text{ Datos?}',
            options: [
                { latex: '95\\%' },
                { latex: '68\\%' },
                { latex: '99.7\\%' },
                { latex: '90\\%' }
            ],
            correct: 0,
            hint: 'Casi todo.'
        },
        {
            question: 'Según la Regla Empírica, a +/- 3 sigmas se encuentra el:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\% \\text{ Datos?}',
            options: [
                { latex: '99.7\\%' },
                { latex: '100\\%' },
                { latex: '95\\%' },
                { latex: '98\\%' }
            ],
            correct: 0,
            hint: 'Prácticamente todo.'
        },
        {
            question: 'La probabilidad de que Z sea mayor que 0 es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'P(Z > 0) = ?',
            options: [
                { latex: '0.5' },
                { latex: '0' },
                { latex: '1' },
                { latex: '0.25' }
            ],
            correct: 0,
            hint: 'Mitad derecha.'
        },
        {
            question: 'La probabilidad de un valor exacto en una continua P(X=a) es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'P(X=a) = ?',
            options: [
                { latex: '0' },
                { latex: '1' },
                { latex: 'f(a)' },
                { latex: '\\text{Indefinido}' }
            ],
            correct: 0,
            hint: 'Área de una línea es cero.'
        },
        {
            question: 'El Teorema del Límite Central establece que la media muestral se distribuye:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Distribución?}',
            options: [
                { latex: '\\text{Normalmente (para n grande)}' },
                { latex: '\\text{Uniformemente}' },
                { latex: '\\text{Como la población original}' },
                { latex: '\\text{Binomialmente}' }
            ],
            correct: 0,
            hint: 'Converge a la Normal.'
        },
        {
            question: 'Si Z = 1.96, el área a la izquierda es aproximadamente:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'P(Z < 1.96) \\approx ?',
            options: [
                { latex: '0.975' },
                { latex: '0.95' },
                { latex: '0.025' },
                { latex: '0.99' }
            ],
            correct: 0,
            hint: 'Deja 2.5% a la derecha.'
        },
        {
            question: 'El valor Z para un nivel de confianza del 95% (dos colas) es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'Z_{\\alpha/2} = ?',
            options: [
                { latex: '1.96' },
                { latex: '1.645' },
                { latex: '2.58' },
                { latex: '2' }
            ],
            correct: 0,
            hint: 'Valor crítico estándar.'
        },
        {
            question: 'La curva Normal es asintótica al eje X, lo que significa:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Significado?}',
            options: [
                { latex: '\\text{Nunca toca el eje X}' },
                { latex: '\\text{Cruza el eje X}' },
                { latex: '\\text{Termina en el eje X}' },
                { latex: '\\text{Es periódica}' }
            ],
            correct: 0,
            hint: 'Se acerca infinitamente.'
        },
        {
            question: 'Los puntos de inflexión de la curva Normal están en:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'x = ?',
            options: [
                { latex: '\\mu \\pm \\sigma' },
                { latex: '\\mu \\pm 2\\sigma' },
                { latex: '\\mu' },
                { latex: '\\pm \\sigma' }
            ],
            correct: 0,
            hint: 'Donde cambia la concavidad.'
        },
        {
            question: 'Si aumentamos sigma, la curva Normal se:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Cambio?}',
            options: [
                { latex: '\\text{Aplana y ensancha}' },
                { latex: '\\text{Vuelve más alta y estrecha}' },
                { latex: '\\text{Desplaza a la derecha}' },
                { latex: '\\text{Desplaza a la izquierda}' }
            ],
            correct: 0,
            hint: 'Más dispersión.'
        },
        {
            question: 'Si aumentamos mu, la curva Normal se:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Cambio?}',
            options: [
                { latex: '\\text{Desplaza a la derecha}' },
                { latex: '\\text{Desplaza a la izquierda}' },
                { latex: '\\text{Aplana}' },
                { latex: '\\text{Estrecha}' }
            ],
            correct: 0,
            hint: 'Traslación.'
        },
        {
            question: 'Para aproximar una Binomial con Normal, usamos corrección de:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Corrección?}',
            options: [
                { latex: '\\text{Continuidad (0.5)}' },
                { latex: '\\text{Bessel}' },
                { latex: '\\text{Sheppard}' },
                { latex: '\\text{Yates}' }
            ],
            correct: 0,
            hint: 'De discreto a continuo.'
        },
        {
            question: 'P(a < X < b) se calcula como:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'P(X < b) - P(X < a)',
            options: [
                { latex: '\\text{Verdadero}' },
                { latex: '\\text{Falso}' },
                { latex: '\\text{Solo si a=0}' },
                { latex: '\\text{Solo si b=0}' }
            ],
            correct: 0,
            hint: 'Resta de áreas acumuladas.'
        },
        {
            question: '¿Qué porcentaje de datos está por encima de la media?',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'P(X > \\mu) = ?',
            options: [
                { latex: '50\\%' },
                { latex: '100\\%' },
                { latex: '0\\%' },
                { latex: '25\\%' }
            ],
            correct: 0,
            hint: 'Simetría.'
        },
        {
            question: 'El valor Z indica:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Indica?}',
            options: [
                { latex: '\\text{Cuántas desviaciones estándar alejado de la media está un dato}' },
                { latex: '\\text{La probabilidad}' },
                { latex: '\\text{El error}' },
                { latex: '\\text{La varianza}' }
            ],
            correct: 0,
            hint: 'Unidad de medida estándar.'
        },
        {
            question: 'Si X ~ N(100, 15), el Z para X=130 es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'Z = \\frac{130-100}{15}',
            options: [
                { latex: '2' },
                { latex: '1.5' },
                { latex: '3' },
                { latex: '0.5' }
            ],
            correct: 0,
            hint: '30/15.'
        },
        {
            question: 'La función de densidad de la Normal es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'f(x) = ?',
            options: [
                { latex: '\\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2}' },
                { latex: 'e^{-x}' },
                { latex: '\\frac{1}{x}' },
                { latex: 'mx+b' }
            ],
            correct: 0,
            hint: 'La famosa campana.'
        },
        {
            question: 'La curtosis de una distribución Normal es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'K = ?',
            options: [
                { latex: '3 (o 0 exceso)' },
                { latex: '1' },
                { latex: '0' },
                { latex: '-1' }
            ],
            correct: 0,
            hint: 'Mesocúrtica.'
        },
        {
            question: 'La asimetría de una distribución Normal es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'As = ?',
            options: [
                { latex: '0' },
                { latex: '1' },
                { latex: '-1' },
                { latex: '0.5' }
            ],
            correct: 0,
            hint: 'Sin sesgo.'
        },
        {
            question: 'Si Z es negativo, el dato está:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Ubicación?}',
            options: [
                { latex: '\\text{Por debajo de la media}' },
                { latex: '\\text{Por encima de la media}' },
                { latex: '\\text{En la media}' },
                { latex: '\\text{Es un error}' }
            ],
            correct: 0,
            hint: 'Izquierda.'
        },
        {
            question: 'P(-1 < Z < 1) es aproximadamente:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\approx ?',
            options: [
                { latex: '0.68' },
                { latex: '0.95' },
                { latex: '0.99' },
                { latex: '0.5' }
            ],
            correct: 0,
            hint: 'Regla empírica 1 sigma.'
        },
        {
            question: 'La distribución Normal se usa para modelar:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Ejemplos?}',
            options: [
                { latex: '\\text{Alturas, pesos, errores de medición}' },
                { latex: '\\text{Lanzamiento de dados}' },
                { latex: '\\text{Tiempos de espera (Exponencial)}' },
                { latex: '\\text{Conteos raros (Poisson)}' }
            ],
            correct: 0,
            hint: 'Fenómenos naturales.'
        },
        {
            question: 'Para usar la tabla Z, necesitamos:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Requisito?}',
            options: [
                { latex: '\\text{Estandarizar el valor X a Z}' },
                { latex: '\\text{Conocer la varianza}' },
                { latex: '\\text{Tener n > 30}' },
                { latex: '\\text{Nada}' }
            ],
            correct: 0,
            hint: 'Convertir a N(0,1).'
        },
        {
            question: 'El cuantil 0.5 de la Normal Estándar es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'Q(0.5) = ?',
            options: [
                { latex: '0' },
                { latex: '1' },
                { latex: '0.5' },
                { latex: '-1' }
            ],
            correct: 0,
            hint: 'La mediana es 0.'
        },
        {
            question: 'Si X ~ N(0, 1), entonces X^2 sigue una distribución:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Distribución?}',
            options: [
                { latex: '\\text{Chi-cuadrado con 1 gl}' },
                { latex: '\\text{Normal}' },
                { latex: '\\text{F de Fisher}' },
                { latex: '\\text{t de Student}' }
            ],
            correct: 0,
            hint: 'Cuadrado de una normal estándar.'
        },
        {
            question: 'La suma de dos variables normales independientes es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: 'X+Y \\sim ?',
            options: [
                { latex: '\\text{Normal}' },
                { latex: '\\text{Binomial}' },
                { latex: '\\text{Uniforme}' },
                { latex: '\\text{Desconocida}' }
            ],
            correct: 0,
            hint: 'Propiedad reproductiva.'
        },
        {
            question: 'En Geogebra, el comando para Normal es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Comando?}',
            options: [
                { latex: '\\text{Normal(media, desviación, valor)}' },
                { latex: '\\text{Gauss(...)}' },
                { latex: '\\text{Bell(...)}' },
                { latex: '\\text{ZScore(...)}' }
            ],
            correct: 0,
            hint: 'Nombre directo.'
        }
    ]
};
