window.examCategories = window.examCategories || {};

window.examCategories.combinatoria = {
    name: 'Combinatoria',
    description: 'Permutaciones, Variaciones, Combinaciones y aplicaciones en Estadística, Física, Química y Biología',
    questions: [
        // --- PRINCIPIOS FUNDAMENTALES (10 Preguntas) ---
        {
            question: 'El Principio de Adición se usa cuando:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{A o B}',
            options: [
                { latex: '\\text{Los eventos son mutuamente excluyentes (no ocurren a la vez)}' },
                { latex: '\\text{Los eventos ocurren simultáneamente}' },
                { latex: '\\text{Se elige uno tras otro}' },
                { latex: '\\text{Siempre}' }
            ],
            correct: 0,
            hint: 'O una cosa O la otra.'
        },
        {
            question: 'El Principio de Multiplicación se usa cuando:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{A y B}',
            options: [
                { latex: '\\text{Los eventos ocurren secuencialmente o simultáneamente}' },
                { latex: '\\text{Los eventos son excluyentes}' },
                { latex: '\\text{Solo para sumas}' },
                { latex: '\\text{Nunca}' }
            ],
            correct: 0,
            hint: 'Una cosa Y la otra.'
        },
        {
            question: 'El factorial de n (n!) se define como:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'n! = ?',
            options: [
                { latex: 'n \\times (n-1) \\times ... \\times 1' },
                { latex: 'n + (n-1) + ... + 1' },
                { latex: 'n^2' },
                { latex: '2^n' }
            ],
            correct: 0,
            hint: 'Producto descendente.'
        },
        {
            question: 'El valor de 0! es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '0! = ?',
            options: [
                { latex: '1' },
                { latex: '0' },
                { latex: '\\text{Indefinido}' },
                { latex: '\\infty' }
            ],
            correct: 0,
            hint: 'Convención matemática.'
        },
        {
            question: 'Si tengo 3 camisas y 2 pantalones, ¿cuántos atuendos puedo formar?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '3 \\times 2 = ?',
            options: [
                { latex: '6' },
                { latex: '5' },
                { latex: '3' },
                { latex: '2' }
            ],
            correct: 0,
            hint: 'Principio de multiplicación.'
        },
        {
            question: '¿De cuántas formas puedo ir de A a C pasando por B, si hay 2 caminos A-B y 4 caminos B-C?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '2 \\times 4 = ?',
            options: [
                { latex: '8' },
                { latex: '6' },
                { latex: '2' },
                { latex: '4' }
            ],
            correct: 0,
            hint: 'Multiplicación.'
        },
        {
            question: 'Si lanzo un dado y una moneda, ¿cuántos resultados posibles hay?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '6 \\times 2 = ?',
            options: [
                { latex: '12' },
                { latex: '8' },
                { latex: '6' },
                { latex: '2' }
            ],
            correct: 0,
            hint: 'Caras x Lados.'
        },
        {
            question: '¿Cuántos números de 2 cifras puedo formar con {1, 2, 3} si se pueden repetir?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '3 \\times 3 = ?',
            options: [
                { latex: '9' },
                { latex: '6' },
                { latex: '3' },
                { latex: '27' }
            ],
            correct: 0,
            hint: '3 opciones para cada posición.'
        },
        {
            question: '¿Cuántos números de 2 cifras puedo formar con {1, 2, 3} si NO se pueden repetir?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '3 \\times 2 = ?',
            options: [
                { latex: '6' },
                { latex: '9' },
                { latex: '3' },
                { latex: '5' }
            ],
            correct: 0,
            hint: '3 para la primera, 2 para la segunda.'
        },
        {
            question: 'El número de subconjuntos de un conjunto con n elementos es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '|P(A)| = ?',
            options: [
                { latex: '2^n' },
                { latex: 'n^2' },
                { latex: 'n!' },
                { latex: 'n' }
            ],
            correct: 0,
            hint: 'Potencia de 2.'
        },

        // --- PERMUTACIONES (10 Preguntas) ---
        {
            question: 'Las permutaciones importan el:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Orden?}',
            options: [
                { latex: '\\text{Sí, el orden importa}' },
                { latex: '\\text{No, el orden no importa}' },
                { latex: '\\text{Solo si se repiten}' },
                { latex: '\\text{Depende del día}' }
            ],
            correct: 0,
            hint: 'ABC es distinto de CBA.'
        },
        {
            question: 'La fórmula de permutaciones de n elementos es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P_n = ?',
            options: [
                { latex: 'n!' },
                { latex: 'n^n' },
                { latex: '(n-1)!' },
                { latex: '2^n' }
            ],
            correct: 0,
            hint: 'Ordenar todos.'
        },
        {
            question: '¿De cuántas formas pueden sentarse 5 personas en una fila?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P_5 = 5!',
            options: [
                { latex: '120' },
                { latex: '25' },
                { latex: '20' },
                { latex: '5' }
            ],
            correct: 0,
            hint: '5x4x3x2x1.'
        },
        {
            question: 'Las permutaciones circulares de n elementos se calculan como:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P_c = ?',
            options: [
                { latex: '(n-1)!' },
                { latex: 'n!' },
                { latex: 'n^2' },
                { latex: 'n' }
            ],
            correct: 0,
            hint: 'Fijar uno para romper la simetría.'
        },
        {
            question: '¿De cuántas formas pueden sentarse 5 personas en una mesa redonda?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '(5-1)! = 4!',
            options: [
                { latex: '24' },
                { latex: '120' },
                { latex: '5' },
                { latex: '25' }
            ],
            correct: 0,
            hint: '4x3x2x1.'
        },
        {
            question: 'Permutaciones con repetición de n elementos donde uno se repite a veces, otro b veces...:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'PR_n^{a,b...} = ?',
            options: [
                { latex: '\\frac{n!}{a!b!...}' },
                { latex: 'n! \\times a! \\times b!' },
                { latex: '\\frac{n!}{(n-a)!}' },
                { latex: 'n^a' }
            ],
            correct: 0,
            hint: 'Dividir por las repeticiones.'
        },
        {
            question: '¿Cuántas palabras (con o sin sentido) se pueden formar con la palabra "AMA"?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\frac{3!}{2!1!}',
            options: [
                { latex: '3' },
                { latex: '6' },
                { latex: '2' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'AMA, AAM, MAA.'
        },
        {
            question: 'El número de anagramas de "ROMA" es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '4!',
            options: [
                { latex: '24' },
                { latex: '12' },
                { latex: '4' },
                { latex: '16' }
            ],
            correct: 0,
            hint: 'Letras distintas.'
        },
        {
            question: 'Si importa el orden y participan TODOS los elementos, es una:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Permutación}' },
                { latex: '\\text{Variación}' },
                { latex: '\\text{Combinación}' },
                { latex: '\\text{Potencia}' }
            ],
            correct: 0,
            hint: 'Reordenar todo.'
        },
        {
            question: '¿De cuántas formas se pueden ordenar 3 libros en un estante?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '3!',
            options: [
                { latex: '6' },
                { latex: '3' },
                { latex: '9' },
                { latex: '1' }
            ],
            correct: 0,
            hint: '3x2x1.'
        },

        // --- VARIACIONES (10 Preguntas) ---
        {
            question: 'Las variaciones importan el orden y:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Elementos?}',
            options: [
                { latex: '\\text{Se toma una parte (k) de los n elementos}' },
                { latex: '\\text{Se toman todos los n elementos}' },
                { latex: '\\text{No importa el orden}' },
                { latex: '\\text{Siempre se repiten}' }
            ],
            correct: 0,
            hint: 'Subconjunto ordenado.'
        },
        {
            question: 'La fórmula de variaciones ordinarias de n en k es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'V_{n,k} = ?',
            options: [
                { latex: '\\frac{n!}{(n-k)!}' },
                { latex: '\\frac{n!}{k!(n-k)!}' },
                { latex: 'n^k' },
                { latex: 'k^n' }
            ],
            correct: 0,
            hint: 'Factorial truncado.'
        },
        {
            question: 'La fórmula de variaciones con repetición de n en k es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'VR_{n,k} = ?',
            options: [
                { latex: 'n^k' },
                { latex: 'k^n' },
                { latex: 'n!' },
                { latex: 'n \\times k' }
            ],
            correct: 0,
            hint: 'n opciones k veces.'
        },
        {
            question: '¿Cuántos números de 3 cifras distintas se pueden formar con {1, 2, 3, 4, 5}?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'V_{5,3} = 5 \\times 4 \\times 3',
            options: [
                { latex: '60' },
                { latex: '125' },
                { latex: '10' },
                { latex: '20' }
            ],
            correct: 0,
            hint: 'Sin repetición.'
        },
        {
            question: '¿Cuántos números de 3 cifras (pueden repetirse) se pueden formar con {1, 2, 3, 4, 5}?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'VR_{5,3} = 5^3',
            options: [
                { latex: '125' },
                { latex: '60' },
                { latex: '15' },
                { latex: '243' }
            ],
            correct: 0,
            hint: 'Con repetición.'
        },
        {
            question: '¿De cuántas formas se pueden dar oro, plata y bronce en una carrera de 10?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'V_{10,3}',
            options: [
                { latex: '720' },
                { latex: '120' },
                { latex: '1000' },
                { latex: '30' }
            ],
            correct: 0,
            hint: '10x9x8.'
        },
        {
            question: 'El código binario de 8 bits permite cuántas combinaciones:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'VR_{2,8} = 2^8',
            options: [
                { latex: '256' },
                { latex: '128' },
                { latex: '512' },
                { latex: '64' }
            ],
            correct: 0,
            hint: 'Potencia de 2.'
        },
        {
            question: '¿Cuántas quinielas de fútbol (1, X, 2) de 14 partidos hay?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'VR_{3,14} = 3^{14}',
            options: [
                { latex: '4,782,969' },
                { latex: '14^3' },
                { latex: '42' },
                { latex: '1,000,000' }
            ],
            correct: 0,
            hint: '3 opciones, 14 veces.'
        },
        {
            question: 'Si V_{n,2} = 20, ¿cuánto vale n?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'n(n-1) = 20',
            options: [
                { latex: '5' },
                { latex: '4' },
                { latex: '6' },
                { latex: '10' }
            ],
            correct: 0,
            hint: '5x4=20.'
        },
        {
            question: 'En las variaciones, k puede ser mayor que n:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Posible?}',
            options: [
                { latex: '\\text{Solo en variaciones con repetición}' },
                { latex: '\\text{Nunca}' },
                { latex: '\\text{Siempre}' },
                { latex: '\\text{Solo en ordinarias}' }
            ],
            correct: 0,
            hint: 'Puedo elegir 5 veces de un conjunto de 2 si repito.'
        },

        // --- COMBINACIONES (15 Preguntas) ---
        {
            question: 'Las combinaciones se diferencian de las variaciones en que:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Orden?}',
            options: [
                { latex: '\\text{El orden NO importa}' },
                { latex: '\\text{El orden SÍ importa}' },
                { latex: '\\text{Siempre se repiten}' },
                { latex: '\\text{Usan todos los elementos}' }
            ],
            correct: 0,
            hint: 'Un equipo de personas es el mismo sin importar el orden.'
        },
        {
            question: 'La fórmula de combinaciones ordinarias de n en k es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'C_{n,k} = \\binom{n}{k} = ?',
            options: [
                { latex: '\\frac{n!}{k!(n-k)!}' },
                { latex: '\\frac{n!}{(n-k)!}' },
                { latex: 'n^k' },
                { latex: '\\frac{n!}{k!}' }
            ],
            correct: 0,
            hint: 'Dividir variaciones por k!.'
        },
        {
            question: '¿Cuántos equipos de 3 personas se pueden formar con 5 candidatos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'C_{5,3}',
            options: [
                { latex: '10' },
                { latex: '60' },
                { latex: '20' },
                { latex: '15' }
            ],
            correct: 0,
            hint: '(5x4x3)/(3x2x1).'
        },
        {
            question: 'El número combinatorio (n k) es igual a:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\binom{n}{k} = \\binom{n}{?}',
            options: [
                { latex: 'n-k' },
                { latex: 'k-1' },
                { latex: 'n+k' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Simetría.'
        },
        {
            question: '¿Cuántas manos de 5 cartas se pueden dar de una baraja de 52?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'C_{52,5}',
            options: [
                { latex: '2,598,960' },
                { latex: '52^5' },
                { latex: '52!' },
                { latex: '1,000' }
            ],
            correct: 0,
            hint: 'Millones.'
        },
        {
            question: 'La lotería primitiva (6 de 49) es un problema de:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Combinaciones}' },
                { latex: '\\text{Variaciones}' },
                { latex: '\\text{Permutaciones}' },
                { latex: '\\text{Potencias}' }
            ],
            correct: 0,
            hint: 'No importa el orden de las bolas.'
        },
        {
            question: 'El Triángulo de Pascal sirve para calcular:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Valores?}',
            options: [
                { latex: '\\text{Números combinatorios}' },
                { latex: '\\text{Raíces cuadradas}' },
                { latex: '\\text{Logaritmos}' },
                { latex: '\\text{Primos}' }
            ],
            correct: 0,
            hint: 'Coeficientes binomiales.'
        },
        {
            question: 'El desarrollo de (a+b)^n usa:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Coeficientes?}',
            options: [
                { latex: '\\binom{n}{k}' },
                { latex: 'n!' },
                { latex: 'n^k' },
                { latex: 'k^n' }
            ],
            correct: 0,
            hint: 'Binomio de Newton.'
        },
        {
            question: 'Combinaciones con repetición de n en k se calcula como:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'CR_{n,k} = \\binom{?}{k}',
            options: [
                { latex: 'n+k-1' },
                { latex: 'n+k' },
                { latex: 'n-k' },
                { latex: 'n' }
            ],
            correct: 0,
            hint: 'Barras y estrellas.'
        },
        {
            question: '¿De cuántas formas puedo elegir 2 sabores de helado de 5 disponibles (puedo repetir)?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'CR_{5,2} = \\binom{6}{2}',
            options: [
                { latex: '15' },
                { latex: '10' },
                { latex: '25' },
                { latex: '20' }
            ],
            correct: 0,
            hint: '(6x5)/2.'
        },
        {
            question: 'La suma de todos los números combinatorios de n es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\sum_{k=0}^n \\binom{n}{k} = ?',
            options: [
                { latex: '2^n' },
                { latex: 'n^2' },
                { latex: 'n!' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Total de subconjuntos.'
        },
        {
            question: '¿Cuántas diagonales tiene un pentágono?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'C_{5,2} - 5',
            options: [
                { latex: '5' },
                { latex: '10' },
                { latex: '2' },
                { latex: '20' }
            ],
            correct: 0,
            hint: 'Uniones de 2 vértices menos los lados.'
        },
        {
            question: 'Si C_{n,1} = 10, entonces n es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\binom{n}{1} = n',
            options: [
                { latex: '10' },
                { latex: '1' },
                { latex: '9' },
                { latex: '11' }
            ],
            correct: 0,
            hint: 'Elegir 1 de n.'
        },
        {
            question: 'En una reunión todos se dan la mano. Si hay 10 personas, ¿cuántos apretones hay?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'C_{10,2}',
            options: [
                { latex: '45' },
                { latex: '90' },
                { latex: '10' },
                { latex: '20' }
            ],
            correct: 0,
            hint: '(10x9)/2.'
        },
        {
            question: '¿Cuántos rectángulos se pueden formar en una cuadrícula de 3x3?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'C_{4,2} \\times C_{4,2}',
            options: [
                { latex: '36' },
                { latex: '9' },
                { latex: '18' },
                { latex: '81' }
            ],
            correct: 0,
            hint: 'Elegir 2 líneas verticales y 2 horizontales.'
        },

        // --- APLICACIONES (15 Preguntas) ---
        {
            question: 'En Estadística, el número de muestras posibles sin orden ni reposición es:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Muestreo?}',
            options: [
                { latex: '\\text{Combinaciones}' },
                { latex: '\\text{Variaciones}' },
                { latex: '\\text{Permutaciones}' },
                { latex: '\\text{Aleatorio}' }
            ],
            correct: 0,
            hint: 'Subconjuntos.'
        },
        {
            question: 'En Física Estadística, la entropía de Boltzmann S es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'S = k \\ln(\\Omega)',
            options: [
                { latex: '\\Omega \\text{ es el número de microestados}' },
                { latex: '\\Omega \\text{ es la temperatura}' },
                { latex: '\\Omega \\text{ es la energía}' },
                { latex: '\\Omega \\text{ es el volumen}' }
            ],
            correct: 0,
            hint: 'Combinatoria de estados.'
        },
        {
            question: 'La estadística de Fermi-Dirac se aplica a partículas que:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Fermiones}',
            options: [
                { latex: '\\text{No pueden ocupar el mismo estado (Exclusión)}' },
                { latex: '\\text{Pueden apilarse infinitamente}' },
                { latex: '\\text{Son distinguibles}' },
                { latex: '\\text{No tienen masa}' }
            ],
            correct: 0,
            hint: 'Combinaciones sin repetición.'
        },
        {
            question: 'La estadística de Bose-Einstein se aplica a partículas que:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Bosones}',
            options: [
                { latex: '\\text{Pueden compartir el mismo estado (Indistinguibles)}' },
                { latex: '\\text{Se repelen}' },
                { latex: '\\text{Son distinguibles}' },
                { latex: '\\text{Tienen carga negativa}' }
            ],
            correct: 0,
            hint: 'Combinaciones con repetición.'
        },
        {
            question: 'En Genética, un codón está formado por 3 bases de 4 posibles (A, C, G, T). ¿Cuántos codones hay?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'VR_{4,3} = 4^3',
            options: [
                { latex: '64' },
                { latex: '12' },
                { latex: '24' },
                { latex: '256' }
            ],
            correct: 0,
            hint: 'Variaciones con repetición.'
        },
        {
            question: 'El número de isómeros estructurales de alcanos crece:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Crecimiento?}',
            options: [
                { latex: '\\text{Combinatoriamente con los carbonos}' },
                { latex: '\\text{Linealmente}' },
                { latex: '\\text{No crece}' },
                { latex: '\\text{Cuadráticamente}' }
            ],
            correct: 0,
            hint: 'Muchas formas de ordenar.'
        },
        {
            question: 'En una red cristalina, el número de formas de colocar defectos puntuales es un problema de:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Problema?}',
            options: [
                { latex: '\\text{Combinaciones (posiciones elegidas)}' },
                { latex: '\\text{Permutaciones}' },
                { latex: '\\text{Variaciones}' },
                { latex: '\\text{Integrales}' }
            ],
            correct: 0,
            hint: 'Sitios ocupados vs vacíos.'
        },
        {
            question: 'La probabilidad de sacar una escalera real en póker es baja porque:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\text{Razón?}',
            options: [
                { latex: '\\text{El número de casos favorables es muy pequeño (4) frente a los posibles}' },
                { latex: '\\text{El póker está trucado}' },
                { latex: '\\text{Hay muchas cartas}' },
                { latex: '\\text{Es imposible}' }
            ],
            correct: 0,
            hint: '4 entre 2.6 millones.'
        },
        {
            question: 'En informática, la complejidad de probar todas las claves posibles (fuerza bruta) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Complejidad?}',
            options: [
                { latex: '\\text{Exponencial (Variaciones con repetición)}' },
                { latex: '\\text{Lineal}' },
                { latex: '\\text{Logarítmica}' },
                { latex: '\\text{Constante}' }
            ],
            correct: 0,
            hint: 'N^L.'
        },
        {
            question: 'El número de caminos en una red tipo Manhattan de (0,0) a (n,m) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\binom{n+m}{n}',
            options: [
                { latex: '\\text{Combinaciones con repetición de pasos}' },
                { latex: '\\text{Infinito}' },
                { latex: 'n \\times m' },
                { latex: 'n^m' }
            ],
            correct: 0,
            hint: 'Pasos Derecha y Arriba.'
        },
        {
            question: 'En Química, la quiralidad implica que dos moléculas son:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Relación?}',
            options: [
                { latex: '\\text{Imágenes especulares no superponibles (Permutación espacial)}' },
                { latex: '\\text{Idénticas}' },
                { latex: '\\text{De diferente masa}' },
                { latex: '\\text{De diferente color}' }
            ],
            correct: 0,
            hint: 'Mano izquierda y derecha.'
        },
        {
            question: 'El número de grafos posibles con n vértices es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '2^{\\binom{n}{2}}',
            options: [
                { latex: '\\text{Muy grande (super-exponencial)}' },
                { latex: 'n^2' },
                { latex: 'n!' },
                { latex: '2n' }
            ],
            correct: 0,
            hint: 'Cada arista existe o no.'
        },
        {
            question: 'En Biología, el número de posibles secuencias de ADN de longitud L es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '4^L',
            options: [
                { latex: '\\text{Variaciones con repetición}' },
                { latex: '\\text{Permutaciones}' },
                { latex: '\\text{Combinaciones}' },
                { latex: '\\text{Factorial}' }
            ],
            correct: 0,
            hint: '4 bases.'
        },
        {
            question: 'La distribución Binomial B(n,p) usa combinaciones para contar:',
            geogebraAppName: 'probability',
            geogebraState: '0',
            latex: '\\binom{n}{k}',
            options: [
                { latex: '\\text{El número de formas de obtener k éxitos en n ensayos}' },
                { latex: '\\text{La media}' },
                { latex: '\\text{La varianza}' },
                { latex: '\\text{El tiempo}' }
            ],
            correct: 0,
            hint: 'Caminos en el árbol.'
        },
        {
            question: 'El problema del viajante de comercio (TSP) busca la ruta más corta visitando n ciudades. Las rutas posibles son:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '(n-1)! / 2',
            options: [
                { latex: '\\text{Permutaciones circulares (Factorial)}' },
                { latex: '\\text{Polinomiales}' },
                { latex: '\\text{Combinaciones}' },
                { latex: '\\text{Lineales}' }
            ],
            correct: 0,
            hint: 'Explosión combinatoria.'
        }
    ]
};
