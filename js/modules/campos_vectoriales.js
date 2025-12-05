window.examCategories = window.examCategories || {};

window.examCategories.campos_vectoriales = {
    name: 'Campos Vectoriales',
    description: 'Conceptos matemáticos y aplicaciones en Física, Química, Biología e Ingeniería',
    questions: [
        // --- CONCEPTOS MATEMÁTICOS (20 Preguntas) ---
        {
            question: 'Un campo vectorial en R2 asigna a cada punto (x,y):',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\vec{F}(x,y) = ?',
            options: [
                { latex: '\\text{Un vector bidimensional}' },
                { latex: '\\text{Un número escalar}' },
                { latex: '\\text{Un vector tridimensional}' },
                { latex: '\\text{Una matriz}' }
            ],
            correct: 0,
            hint: 'Vector en el plano.'
        },
        {
            question: 'Un campo vectorial en R3 asigna a cada punto (x,y,z):',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\vec{F}(x,y,z) = ?',
            options: [
                { latex: '\\text{Un vector tridimensional}' },
                { latex: '\\text{Un escalar}' },
                { latex: '\\text{Un plano}' },
                { latex: '\\text{Una curva}' }
            ],
            correct: 0,
            hint: 'Vector en el espacio.'
        },
        {
            question: 'El campo gradiente de una función escalar f(x,y) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\nabla f = ?',
            options: [
                { latex: '(\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y})' },
                { latex: '\\frac{\\partial f}{\\partial x} + \\frac{\\partial f}{\\partial y}' },
                { latex: '\\frac{\\partial^2 f}{\\partial x^2}' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Vector de derivadas parciales.'
        },
        {
            question: 'La divergencia de un campo vectorial F = (P, Q, R) es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\nabla \\cdot \\vec{F} = ?',
            options: [
                { latex: '\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}' },
                { latex: '(\\frac{\\partial P}{\\partial x}, \\frac{\\partial Q}{\\partial y}, \\frac{\\partial R}{\\partial z})' },
                { latex: 'P+Q+R' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Suma de parciales (escalar).'
        },
        {
            question: 'El rotacional (curl) de un campo F mide:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\nabla \\times \\vec{F}',
            options: [
                { latex: '\\text{La tendencia a rotar alrededor de un punto}' },
                { latex: '\\text{La expansión o compresión}' },
                { latex: '\\text{La dirección de máximo crecimiento}' },
                { latex: '\\text{El flujo total}' }
            ],
            correct: 0,
            hint: 'Giro local.'
        },
        {
            question: 'Un campo vectorial es conservativo si:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\vec{F} = ?',
            options: [
                { latex: '\\nabla f \\text{ (Gradiente de un potencial)}' },
                { latex: '\\nabla \\cdot \\vec{G}' },
                { latex: '\\nabla \\times \\vec{G}' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Deriva de un potencial.'
        },
        {
            question: 'Si un campo es conservativo, su rotacional es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\nabla \\times (\\nabla f) = ?',
            options: [
                { latex: '\\vec{0}' },
                { latex: '1' },
                { latex: '\\infty' },
                { latex: '\\nabla^2 f' }
            ],
            correct: 0,
            hint: 'Irrotacional.'
        },
        {
            question: 'Si la divergencia es cero, el campo se dice:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\nabla \\cdot \\vec{F} = 0',
            options: [
                { latex: '\\text{Solenoidal (incompresible)}' },
                { latex: '\\text{Conservativo}' },
                { latex: '\\text{Irrotacional}' },
                { latex: '\\text{Constante}' }
            ],
            correct: 0,
            hint: 'No hay fuentes ni sumideros.'
        },
        {
            question: 'El Teorema de Green relaciona una integral de línea con:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\oint_C \\vec{F} \\cdot d\\vec{r} = ?',
            options: [
                { latex: '\\iint_D (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}) dA' },
                { latex: '\\iint_D \\nabla \\cdot \\vec{F} dV' },
                { latex: '\\int_a^b f(x) dx' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Integral doble del rotacional 2D.'
        },
        {
            question: 'El Teorema de la Divergencia (Gauss) relaciona flujo con:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\iint_S \\vec{F} \\cdot \\vec{n} dS = ?',
            options: [
                { latex: '\\iiint_V (\\nabla \\cdot \\vec{F}) dV' },
                { latex: '\\oint_C \\vec{F} \\cdot d\\vec{r}' },
                { latex: '\\iint_S (\\nabla \\times \\vec{F}) \\cdot \\vec{n} dS' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Integral de volumen de la divergencia.'
        },
        {
            question: 'El Teorema de Stokes relaciona circulación con:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\oint_C \\vec{F} \\cdot d\\vec{r} = ?',
            options: [
                { latex: '\\iint_S (\\nabla \\times \\vec{F}) \\cdot \\vec{n} dS' },
                { latex: '\\iiint_V (\\nabla \\cdot \\vec{F}) dV' },
                { latex: '\\iint_D \\nabla f dA' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Flujo del rotacional.'
        },
        {
            question: 'El Laplaciano de una función escalar es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\nabla^2 f = ?',
            options: [
                { latex: '\\nabla \\cdot (\\nabla f)' },
                { latex: '\\nabla \\times (\\nabla f)' },
                { latex: '\\nabla (\\nabla \\cdot f)' },
                { latex: '(\\nabla f)^2' }
            ],
            correct: 0,
            hint: 'Divergencia del gradiente.'
        },
        {
            question: 'Un campo radial F(r) = r tiene divergencia:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\nabla \\cdot (x,y,z) = ?',
            options: [
                { latex: '3' },
                { latex: '1' },
                { latex: '0' },
                { latex: 'r' }
            ],
            correct: 0,
            hint: '1+1+1.'
        },
        {
            question: 'Un campo constante F = (a,b,c) tiene rotacional:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\nabla \\times \\vec{C} = ?',
            options: [
                { latex: '\\vec{0}' },
                { latex: '\\vec{C}' },
                { latex: '1' },
                { latex: '\\infty' }
            ],
            correct: 0,
            hint: 'Derivadas de constantes son cero.'
        },
        {
            question: 'Las líneas de campo son tangentes a:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Vectores?}',
            options: [
                { latex: '\\text{Los vectores del campo en cada punto}' },
                { latex: '\\text{Las equipotenciales}' },
                { latex: '\\text{Los ejes}' },
                { latex: '\\text{El origen}' }
            ],
            correct: 0,
            hint: 'Siguen el flujo.'
        },
        {
            question: 'Las superficies equipotenciales son perpendiculares a:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Campo?}',
            options: [
                { latex: '\\text{Las líneas de campo (si es conservativo)}' },
                { latex: '\\text{Otras equipotenciales}' },
                { latex: '\\text{El eje Z}' },
                { latex: '\\text{Nada}' }
            ],
            correct: 0,
            hint: 'Gradiente es normal a nivel.'
        },
        {
            question: 'El trabajo realizado por un campo conservativo en una trayectoria cerrada es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\oint \\vec{F} \\cdot d\\vec{r} = ?',
            options: [
                { latex: '0' },
                { latex: '1' },
                { latex: '\\infty' },
                { latex: '\\text{Depende del camino}' }
            ],
            correct: 0,
            hint: 'Conservación de energía.'
        },
        {
            question: 'El operador Nabla se denota por:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Símbolo?}',
            options: [
                { latex: '\\nabla' },
                { latex: '\\Delta' },
                { latex: '\\Sigma' },
                { latex: '\\partial' }
            ],
            correct: 0,
            hint: 'Triángulo invertido.'
        },
        {
            question: 'Un campo de fuerzas central F(r) siempre es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Propiedad?}',
            options: [
                { latex: '\\text{Conservativo}' },
                { latex: '\\text{Solenoidal}' },
                { latex: '\\text{Constante}' },
                { latex: '\\text{Nulo}' }
            ],
            correct: 0,
            hint: 'Depende solo de r.'
        },
        {
            question: 'La integral de flujo mide:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Cantidad?}',
            options: [
                { latex: '\\text{Cuánto campo atraviesa una superficie}' },
                { latex: '\\text{Cuánto campo circula}' },
                { latex: '\\text{La longitud de una línea}' },
                { latex: '\\text{El volumen}' }
            ],
            correct: 0,
            hint: 'Como agua pasando una red.'
        },

        // --- APLICACIONES EN FÍSICA (15 Preguntas) ---
        {
            question: 'El campo gravitatorio de una masa puntual es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\vec{g}(\\vec{r}) \\propto ?',
            options: [
                { latex: '-\\frac{1}{r^2} \\hat{r}' },
                { latex: '\\frac{1}{r} \\hat{r}' },
                { latex: 'r \\hat{r}' },
                { latex: 'r^2 \\hat{r}' }
            ],
            correct: 0,
            hint: 'Ley inverso cuadrado, atractivo.'
        },
        {
            question: 'El campo eléctrico de una carga puntual es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\vec{E}(\\vec{r}) \\propto ?',
            options: [
                { latex: '\\frac{q}{r^2} \\hat{r}' },
                { latex: '\\frac{q}{r} \\hat{r}' },
                { latex: 'q r \\hat{r}' },
                { latex: 'q \\hat{r}' }
            ],
            correct: 0,
            hint: 'Coulomb.'
        },
        {
            question: 'El potencial eléctrico V se relaciona con el campo E mediante:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\vec{E} = ?',
            options: [
                { latex: '-\\nabla V' },
                { latex: '\\nabla V' },
                { latex: '\\nabla \\times V' },
                { latex: '\\nabla \\cdot V' }
            ],
            correct: 0,
            hint: 'Menos gradiente.'
        },
        {
            question: 'Las leyes de Maxwell se expresan usando:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Operadores?}',
            options: [
                { latex: '\\text{Divergencia y Rotacional}' },
                { latex: '\\text{Solo Gradiente}' },
                { latex: '\\text{Solo Laplaciano}' },
                { latex: '\\text{Integrales simples}' }
            ],
            correct: 0,
            hint: 'Div E, Curl E, etc.'
        },
        {
            question: 'La Ley de Gauss para el campo eléctrico dice:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\nabla \\cdot \\vec{E} = ?',
            options: [
                { latex: '\\frac{\\rho}{\\epsilon_0}' },
                { latex: '0' },
                { latex: '-\\frac{\\partial B}{\\partial t}' },
                { latex: '\\mu_0 J' }
            ],
            correct: 0,
            hint: 'Fuentes de carga.'
        },
        {
            question: 'La Ley de Gauss para el magnetismo dice:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\nabla \\cdot \\vec{B} = ?',
            options: [
                { latex: '0' },
                { latex: '\\rho' },
                { latex: 'J' },
                { latex: '\\infty' }
            ],
            correct: 0,
            hint: 'No existen monopolos magnéticos.'
        },
        {
            question: 'Un campo de velocidades en un fluido representa:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\vec{v}(x,y,z,t)',
            options: [
                { latex: '\\text{La velocidad de la partícula en ese punto}' },
                { latex: '\\text{La presión}' },
                { latex: '\\text{La densidad}' },
                { latex: '\\text{La temperatura}' }
            ],
            correct: 0,
            hint: 'Movimiento.'
        },
        {
            question: 'Si la divergencia de la velocidad es cero, el fluido es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\nabla \\cdot \\vec{v} = 0',
            options: [
                { latex: '\\text{Incompresible}' },
                { latex: '\\text{Irrotacional}' },
                { latex: '\\text{Viscoso}' },
                { latex: '\\text{Turbulento}' }
            ],
            correct: 0,
            hint: 'No cambia densidad.'
        },
        {
            question: 'Si el rotacional de la velocidad es cero, el flujo es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\nabla \\times \\vec{v} = 0',
            options: [
                { latex: '\\text{Irrotacional (laminar potencial)}' },
                { latex: '\\text{Turbulento}' },
                { latex: '\\text{Vorticial}' },
                { latex: '\\text{Compresible}' }
            ],
            correct: 0,
            hint: 'Sin remolinos.'
        },
        {
            question: 'La fuerza de Lorentz sobre una carga es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\vec{F} = ?',
            options: [
                { latex: 'q(\\vec{E} + \\vec{v} \\times \\vec{B})' },
                { latex: 'q\\vec{E}' },
                { latex: 'q\\vec{v} \\times \\vec{B}' },
                { latex: 'm\\vec{a}' }
            ],
            correct: 0,
            hint: 'Eléctrica + Magnética.'
        },
        {
            question: 'El campo magnético alrededor de un cable recto sigue la regla de:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Regla?}',
            options: [
                { latex: '\\text{La mano derecha}' },
                { latex: '\\text{La mano izquierda}' },
                { latex: '\\text{Coulomb}' },
                { latex: '\\text{Gauss}' }
            ],
            correct: 0,
            hint: 'Pulgar corriente, dedos campo.'
        },
        {
            question: 'Un campo de fuerzas conservativo conserva:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Cantidad?}',
            options: [
                { latex: '\\text{La energía mecánica total}' },
                { latex: '\\text{El momento}' },
                { latex: '\\text{La carga}' },
                { latex: '\\text{La masa}' }
            ],
            correct: 0,
            hint: 'Cinética + Potencial.'
        },
        {
            question: 'El flujo de calor sigue la Ley de Fourier:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\vec{q} = ?',
            options: [
                { latex: '-k \\nabla T' },
                { latex: 'k \\nabla T' },
                { latex: 'k \\Delta T' },
                { latex: 'kT' }
            ],
            correct: 0,
            hint: 'De caliente a frío (signo menos).'
        },
        {
            question: 'La ecuación de continuidad expresa conservación de:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\vec{v}) = 0',
            options: [
                { latex: '\\text{Masa}' },
                { latex: '\\text{Energía}' },
                { latex: '\\text{Momento}' },
                { latex: '\\text{Carga}' }
            ],
            correct: 0,
            hint: 'Lo que entra menos lo que sale.'
        },
        {
            question: 'La vorticidad se define como:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\vec{\\omega} = ?',
            options: [
                { latex: '\\nabla \\times \\vec{v}' },
                { latex: '\\nabla \\cdot \\vec{v}' },
                { latex: '\\nabla v' },
                { latex: 'v^2' }
            ],
            correct: 0,
            hint: 'Rotacional de la velocidad.'
        },

        // --- APLICACIONES EN QUÍMICA, BIOLOGÍA E INGENIERÍA (15 Preguntas) ---
        {
            question: 'La Ley de Fick para la difusión establece que el flujo es proporcional a:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\vec{J} \\propto ?',
            options: [
                { latex: '-\\nabla C \\text{ (Gradiente de concentración)}' },
                { latex: '\\nabla P' },
                { latex: '\\nabla T' },
                { latex: 'C' }
            ],
            correct: 0,
            hint: 'De mayor a menor concentración.'
        },
        {
            question: 'En medios porosos, la Ley de Darcy relaciona velocidad con:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\vec{q} \\propto ?',
            options: [
                { latex: '-\\nabla P \\text{ (Gradiente de presión)}' },
                { latex: '\\nabla T' },
                { latex: '\\nabla C' },
                { latex: '\\vec{g}' }
            ],
            correct: 0,
            hint: 'Flujo de agua subterránea.'
        },
        {
            question: 'El gradiente electroquímico en biología impulsa:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Movimiento?}',
            options: [
                { latex: '\\text{Iones a través de membranas}' },
                { latex: '\\text{Sangre}' },
                { latex: '\\text{Aire}' },
                { latex: '\\text{Calor}' }
            ],
            correct: 0,
            hint: 'Potencial + Concentración.'
        },
        {
            question: 'En ingeniería civil, el campo de esfuerzos (tensor) determina:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Efecto?}',
            options: [
                { latex: '\\text{Distribución de fuerzas internas}' },
                { latex: '\\text{Velocidad del viento}' },
                { latex: '\\text{Temperatura}' },
                { latex: '\\text{Campo magnético}' }
            ],
            correct: 0,
            hint: 'Stress.'
        },
        {
            question: 'El gradiente de temperatura en un intercambiador de calor determina:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Efecto?}',
            options: [
                { latex: '\\text{La tasa de transferencia de calor}' },
                { latex: '\\text{La presión}' },
                { latex: '\\text{El volumen}' },
                { latex: '\\text{La masa}' }
            ],
            correct: 0,
            hint: 'Ley de Fourier.'
        },
        {
            question: 'La quimiotaxis en bacterias es el movimiento siguiendo un:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Campo?}',
            options: [
                { latex: '\\text{Gradiente químico (alimento/toxina)}' },
                { latex: '\\text{Campo magnético}' },
                { latex: '\\text{Campo eléctrico}' },
                { latex: '\\text{Campo gravitatorio}' }
            ],
            correct: 0,
            hint: 'Buscan comida.'
        },
        {
            question: 'En aerodinámica, el campo de presión alrededor de un ala genera:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Fuerza?}',
            options: [
                { latex: '\\text{Sustentación}' },
                { latex: '\\text{Peso}' },
                { latex: '\\text{Gravedad}' },
                { latex: '\\text{Empuje}' }
            ],
            correct: 0,
            hint: 'Bernoulli.'
        },
        {
            question: 'El campo de desplazamientos en una estructura deformada es un campo:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Vectorial}' },
                { latex: '\\text{Escalar}' },
                { latex: '\\text{Constante}' },
                { latex: '\\text{Nulo}' }
            ],
            correct: 0,
            hint: 'Vector u(x,y,z) en cada punto.'
        },
        {
            question: 'En meteorología, el viento es un campo vectorial de:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Variable?}',
            options: [
                { latex: '\\text{Velocidad}' },
                { latex: '\\text{Presión}' },
                { latex: '\\text{Temperatura}' },
                { latex: '\\text{Humedad}' }
            ],
            correct: 0,
            hint: 'Aire en movimiento.'
        },
        {
            question: 'El gradiente de presión atmosférica genera:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Fenómeno?}',
            options: [
                { latex: '\\text{Viento}' },
                { latex: '\\text{Lluvia}' },
                { latex: '\\text{Calor}' },
                { latex: '\\text{Nubes}' }
            ],
            correct: 0,
            hint: 'El aire se mueve de alta a baja presión.'
        },
        {
            question: 'En resonancia magnética (MRI), se usan campos:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Magnéticos fuertes y gradientes}' },
                { latex: '\\text{Gravitatorios}' },
                { latex: '\\text{De velocidad}' },
                { latex: '\\text{De presión}' }
            ],
            correct: 0,
            hint: 'Espines nucleares.'
        },
        {
            question: 'El flujo sanguíneo en arterias se modela (Poiseuille) con perfil:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Perfil?}',
            options: [
                { latex: '\\text{Parabólico}' },
                { latex: '\\text{Plano}' },
                { latex: '\\text{Lineal}' },
                { latex: '\\text{Caótico}' }
            ],
            correct: 0,
            hint: 'Más rápido en el centro.'
        },
        {
            question: 'La difusión de un neurotransmisor en la sinapsis es un proceso de:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Proceso?}',
            options: [
                { latex: '\\text{Transporte por gradiente}' },
                { latex: '\\text{Transporte activo}' },
                { latex: '\\text{Convección}' },
                { latex: '\\text{Radiación}' }
            ],
            correct: 0,
            hint: 'Ley de Fick.'
        },
        {
            question: 'En ingeniería eléctrica, la densidad de corriente J es un campo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Vectorial}' },
                { latex: '\\text{Escalar}' },
                { latex: '\\text{Tensorial}' },
                { latex: '\\text{Imaginario}' }
            ],
            correct: 0,
            hint: 'Dirección del flujo de carga.'
        },
        {
            question: 'El campo de velocidades en un tornado tiene:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Característica?}',
            options: [
                { latex: '\\text{Alta vorticidad (rotacional)}' },
                { latex: '\\text{Divergencia cero}' },
                { latex: '\\text{Velocidad cero}' },
                { latex: '\\text{Flujo laminar}' }
            ],
            correct: 0,
            hint: 'Gira muy rápido.'
        },

        // --- VISUALIZACIÓN Y GEOGEBRA (10 Preguntas) ---
        {
            question: 'En GeoGebra, el comando para graficar un campo vectorial 2D es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Comando?}',
            options: [
                { latex: '\\text{CampoDirecciones(f(x,y)) o Vector(...)}' },
                { latex: '\\text{GraficaVector}' },
                { latex: '\\text{Campo(V)}' },
                { latex: '\\text{Flechas}' }
            ],
            correct: 0,
            hint: 'DirectionField o Vector.'
        },
        {
            question: 'Un campo con vectores de igual magnitud y dirección constante es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Uniforme}' },
                { latex: '\\text{Radial}' },
                { latex: '\\text{Rotacional}' },
                { latex: '\\text{Aleatorio}' }
            ],
            correct: 0,
            hint: 'Igual en todos lados.'
        },
        {
            question: 'Si los vectores apuntan hacia afuera de un punto, la divergencia es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Signo?}',
            options: [
                { latex: '\\text{Positiva (Fuente)}' },
                { latex: '\\text{Negativa (Sumidero)}' },
                { latex: '\\text{Cero}' },
                { latex: '\\text{Imaginaria}' }
            ],
            correct: 0,
            hint: 'Expansión.'
        },
        {
            question: 'Si los vectores apuntan hacia adentro de un punto, la divergencia es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Signo?}',
            options: [
                { latex: '\\text{Negativa (Sumidero)}' },
                { latex: '\\text{Positiva}' },
                { latex: '\\text{Cero}' },
                { latex: '\\text{Infinita}' }
            ],
            correct: 0,
            hint: 'Compresión.'
        },
        {
            question: 'Un campo F = (-y, x) representa:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Movimiento?}',
            options: [
                { latex: '\\text{Rotación pura}' },
                { latex: '\\text{Expansión}' },
                { latex: '\\text{Contracción}' },
                { latex: '\\text{Traslación}' }
            ],
            correct: 0,
            hint: 'Círculos concéntricos.'
        },
        {
            question: 'Un campo F = (x, y) representa:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Movimiento?}',
            options: [
                { latex: '\\text{Expansión radial (Fuente)}' },
                { latex: '\\text{Rotación}' },
                { latex: '\\text{Cizalladura}' },
                { latex: '\\text{Constante}' }
            ],
            correct: 0,
            hint: 'Explosión desde el origen.'
        },
        {
            question: 'Para visualizar un campo 3D en GeoGebra usamos la vista:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Vista?}',
            options: [
                { latex: '\\text{Vista Gráfica 3D}' },
                { latex: '\\text{Hoja de Cálculo}' },
                { latex: '\\text{CAS}' },
                { latex: '\\text{Protocolo}' }
            ],
            correct: 0,
            hint: 'Tres dimensiones.'
        },
        {
            question: 'La longitud de las flechas en un gráfico de campo suele representar:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Magnitud?}',
            options: [
                { latex: '\\text{La magnitud del vector (intensidad)}' },
                { latex: '\\text{La dirección}' },
                { latex: '\\text{La posición}' },
                { latex: '\\text{El tiempo}' }
            ],
            correct: 0,
            hint: 'Tamaño importa.'
        },
        {
            question: 'Un punto donde el campo es cero se llama:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Punto?}',
            options: [
                { latex: '\\text{Punto crítico o de equilibrio}' },
                { latex: '\\text{Punto de fuga}' },
                { latex: '\\text{Punto de inflexión}' },
                { latex: '\\text{Punto ciego}' }
            ],
            correct: 0,
            hint: 'No hay fuerza/velocidad.'
        },
        {
            question: 'El campo gradiente siempre es perpendicular a:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Curvas?}',
            options: [
                { latex: '\\text{Las curvas de nivel}' },
                { latex: '\\text{El eje X}' },
                { latex: '\\text{El eje Y}' },
                { latex: '\\text{Las líneas de corriente}' }
            ],
            correct: 0,
            hint: 'Máximo ascenso.'
        }
    ]
};
