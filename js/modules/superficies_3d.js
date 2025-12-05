window.examCategories = window.examCategories || {};

window.examCategories.superficies_3d = {
    name: 'Superficies en el Espacio 3D',
    description: 'Planos, Esferas, Cilindros y Cuádricas (Elipsoides, Hiperboloides, Paraboloides, Conos)',
    questions: [
        // --- EL PLANO (10 Preguntas) ---
        {
            question: 'La ecuación general de un plano en el espacio es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'Ax + By + Cz + D = 0',
            options: [
                { latex: '\\text{Verdadero}' },
                { latex: '\\text{Falso}' },
                { latex: '\\text{Solo si D=0}' },
                { latex: '\\text{Solo si A=B=C}' }
            ],
            correct: 0,
            hint: 'Lineal en x, y, z.'
        },
        {
            question: 'El vector normal al plano 2x - 3y + z - 5 = 0 es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\vec{n} = ?',
            options: [
                { latex: '(2, -3, 1)' },
                { latex: '(2, 3, 1)' },
                { latex: '(-2, 3, -1)' },
                { latex: '(2, -3, -5)' }
            ],
            correct: 0,
            hint: 'Coeficientes de x, y, z.'
        },
        {
            question: 'Un plano que pasa por el origen tiene D = ?',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'D = ?',
            options: [
                { latex: '0' },
                { latex: '1' },
                { latex: '-1' },
                { latex: '\\infty' }
            ],
            correct: 0,
            hint: 'Satisface (0,0,0).'
        },
        {
            question: 'La ecuación z = 0 representa:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Plano?}',
            options: [
                { latex: '\\text{El plano XY}' },
                { latex: '\\text{El plano XZ}' },
                { latex: '\\text{El plano YZ}' },
                { latex: '\\text{El eje Z}' }
            ],
            correct: 0,
            hint: 'Altura cero.'
        },
        {
            question: 'Dos planos son paralelos si sus vectores normales son:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\vec{n}_1 \\text{ y } \\vec{n}_2',
            options: [
                { latex: '\\text{Proporcionales (paralelos)}' },
                { latex: '\\text{Perpendiculares}' },
                { latex: '\\text{Iguales a cero}' },
                { latex: '\\text{Unitarios}' }
            ],
            correct: 0,
            hint: 'Misma dirección.'
        },
        {
            question: 'La distancia de un punto P(x0, y0, z0) al plano Ax+By+Cz+D=0 es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'd = ?',
            options: [
                { latex: '\\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}' },
                { latex: 'Ax_0+By_0+Cz_0+D' },
                { latex: '\\sqrt{(x-x_0)^2+(y-y_0)^2+(z-z_0)^2}' },
                { latex: '\\frac{Ax_0+By_0+Cz_0+D}{A+B+C}' }
            ],
            correct: 0,
            hint: 'Proyección sobre la normal.'
        },
        {
            question: 'La intersección de dos planos no paralelos es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Objeto?}',
            options: [
                { latex: '\\text{Una recta}' },
                { latex: '\\text{Un punto}' },
                { latex: '\\text{Un plano}' },
                { latex: '\\text{Un segmento}' }
            ],
            correct: 0,
            hint: 'Como las páginas de un libro.'
        },
        {
            question: 'El plano x = 5 es paralelo al plano:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Plano?}',
            options: [
                { latex: '\\text{YZ (x=0)}' },
                { latex: '\\text{XY (z=0)}' },
                { latex: '\\text{XZ (y=0)}' },
                { latex: '\\text{y=5}' }
            ],
            correct: 0,
            hint: 'Normal (1,0,0).'
        },
        {
            question: 'Tres puntos no colineales determinan:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Objeto?}',
            options: [
                { latex: '\\text{Un único plano}' },
                { latex: '\\text{Una recta}' },
                { latex: '\\text{Infinitos planos}' },
                { latex: '\\text{Una esfera}' }
            ],
            correct: 0,
            hint: 'Base de un trípode.'
        },
        {
            question: 'El ángulo entre dos planos es el ángulo entre sus:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Elementos?}',
            options: [
                { latex: '\\text{Vectores normales}' },
                { latex: '\\text{Trazas}' },
                { latex: '\\text{Puntos de corte}' },
                { latex: '\\text{Ejes}' }
            ],
            correct: 0,
            hint: 'Producto punto de normales.'
        },

        // --- LA ESFERA (10 Preguntas) ---
        {
            question: 'La ecuación de la esfera con centro (h, k, l) y radio r es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '(x-h)^2 + (y-k)^2 + (z-l)^2 = ?',
            options: [
                { latex: 'r^2' },
                { latex: 'r' },
                { latex: '1' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Distancia 3D al cuadrado.'
        },
        {
            question: 'Si x^2 + y^2 + z^2 = 9, el radio es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'r = ?',
            options: [
                { latex: '3' },
                { latex: '9' },
                { latex: '81' },
                { latex: '4.5' }
            ],
            correct: 0,
            hint: 'Raíz de 9.'
        },
        {
            question: 'El centro de la esfera x^2 + y^2 + z^2 - 2x = 0 es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'C = ?',
            options: [
                { latex: '(1, 0, 0)' },
                { latex: '(0, 0, 0)' },
                { latex: '(-1, 0, 0)' },
                { latex: '(2, 0, 0)' }
            ],
            correct: 0,
            hint: 'Completar cuadrados: (x-1)^2...'
        },
        {
            question: 'Una esfera es el lugar geométrico de puntos que equidistan de:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Elemento?}',
            options: [
                { latex: '\\text{Un punto fijo (centro)}' },
                { latex: '\\text{Una recta (eje)}' },
                { latex: '\\text{Un plano}' },
                { latex: '\\text{Dos puntos}' }
            ],
            correct: 0,
            hint: 'Definición.'
        },
        {
            question: 'La intersección de una esfera con un plano es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Figura?}',
            options: [
                { latex: '\\text{Una circunferencia (o un punto)}' },
                { latex: '\\text{Una elipse}' },
                { latex: '\\text{Una parábola}' },
                { latex: '\\text{Un cuadrado}' }
            ],
            correct: 0,
            hint: 'Corte circular.'
        },
        {
            question: 'El volumen de una esfera es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'V = ?',
            options: [
                { latex: '\\frac{4}{3}\\pi r^3' },
                { latex: '4\\pi r^2' },
                { latex: '\\pi r^2 h' },
                { latex: '\\frac{1}{3}\\pi r^2 h' }
            ],
            correct: 0,
            hint: 'Cuatro tercios.'
        },
        {
            question: 'El área superficial de una esfera es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'A = ?',
            options: [
                { latex: '4\\pi r^2' },
                { latex: '\\frac{4}{3}\\pi r^3' },
                { latex: '2\\pi r' },
                { latex: '\\pi r^2' }
            ],
            correct: 0,
            hint: 'Derivada del volumen respecto a r.'
        },
        {
            question: 'Si x^2 + y^2 + z^2 + 1 = 0, la esfera es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Imaginaria (no existe)}' },
                { latex: '\\text{Real}' },
                { latex: '\\text{Un punto}' },
                { latex: '\\text{Un plano}' }
            ],
            correct: 0,
            hint: 'Suma de cuadrados no puede ser -1.'
        },
        {
            question: 'La distancia del origen al punto (1, 2, 2) es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'd = ?',
            options: [
                { latex: '3' },
                { latex: '\\sqrt{5}' },
                { latex: '9' },
                { latex: '5' }
            ],
            correct: 0,
            hint: 'Raíz de 1+4+4.'
        },
        {
            question: 'Las coordenadas esféricas usan:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '(\\rho, \\theta, \\phi)',
            options: [
                { latex: '\\text{Radio, ángulo polar, ángulo azimutal}' },
                { latex: '\\text{x, y, z}' },
                { latex: '\\text{Radio, ángulo, altura}' },
                { latex: '\\text{Dos radios, un ángulo}' }
            ],
            correct: 0,
            hint: 'Rho, theta, phi.'
        },

        // --- CILINDROS (10 Preguntas) ---
        {
            question: 'La ecuación x^2 + y^2 = r^2 en el espacio 3D representa:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Un cilindro circular recto}' },
                { latex: '\\text{Una circunferencia}' },
                { latex: '\\text{Una esfera}' },
                { latex: '\\text{Un cono}' }
            ],
            correct: 0,
            hint: 'z es libre.'
        },
        {
            question: 'Un cilindro se genera por una recta que se mueve paralela a sí misma a lo largo de una:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Curva?}',
            options: [
                { latex: '\\text{Directriz}' },
                { latex: '\\text{Generatriz}' },
                { latex: '\\text{Asíntota}' },
                { latex: '\\text{Tangente}' }
            ],
            correct: 0,
            hint: 'Curva base.'
        },
        {
            question: 'La ecuación y = x^2 en el espacio 3D es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Cilindro parabólico}' },
                { latex: '\\text{Parábola}' },
                { latex: '\\text{Plano}' },
                { latex: '\\text{Paraboloide}' }
            ],
            correct: 0,
            hint: 'Pared curvada infinita.'
        },
        {
            question: 'Si falta una variable en la ecuación (ej: f(x,z)=0), la superficie es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Un cilindro paralelo al eje de la variable faltante}' },
                { latex: '\\text{Un plano}' },
                { latex: '\\text{Una esfera}' },
                { latex: '\\text{Un cono}' }
            ],
            correct: 0,
            hint: 'Se extiende infinitamente en esa dirección.'
        },
        {
            question: 'El eje del cilindro x^2 + z^2 = 1 es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Eje?}',
            options: [
                { latex: '\\text{Eje Y}' },
                { latex: '\\text{Eje Z}' },
                { latex: '\\text{Eje X}' },
                { latex: '\\text{Ninguno}' }
            ],
            correct: 0,
            hint: 'Variable que falta.'
        },
        {
            question: 'La ecuación x^2/a^2 + y^2/b^2 = 1 en 3D es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Cilindro elíptico}' },
                { latex: '\\text{Elipse}' },
                { latex: '\\text{Elipsoide}' },
                { latex: '\\text{Cilindro circular}' }
            ],
            correct: 0,
            hint: 'Tubo aplastado.'
        },
        {
            question: 'La ecuación x^2 - y^2 = 1 en 3D es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Cilindro hiperbólico}' },
                { latex: '\\text{Hipérbola}' },
                { latex: '\\text{Hiperboloide}' },
                { latex: '\\text{Cono}' }
            ],
            correct: 0,
            hint: 'Dos hojas curvadas.'
        },
        {
            question: 'Las trazas de un cilindro circular x^2+y^2=1 en planos z=k son:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Figuras?}',
            options: [
                { latex: '\\text{Circunferencias idénticas}' },
                { latex: '\\text{Rectas}' },
                { latex: '\\text{Elipses}' },
                { latex: '\\text{Puntos}' }
            ],
            correct: 0,
            hint: 'Cortes transversales.'
        },
        {
            question: 'El cilindro z = sin(y) se llama:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Nombre?}',
            options: [
                { latex: '\\text{Cilindro sinusoidal}' },
                { latex: '\\text{Onda}' },
                { latex: '\\text{Plano ondulado}' },
                { latex: '\\text{Esfera}' }
            ],
            correct: 0,
            hint: 'Lámina ondulada.'
        },
        {
            question: 'Un tubo de cañería se modela mejor como:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Modelo?}',
            options: [
                { latex: '\\text{Cilindro}' },
                { latex: '\\text{Toro}' },
                { latex: '\\text{Cono}' },
                { latex: '\\text{Esfera}' }
            ],
            correct: 0,
            hint: 'Recto y circular.'
        },

        // --- CUÁDRICAS (30 Preguntas) ---
        {
            question: 'La ecuación x^2/a^2 + y^2/b^2 + z^2/c^2 = 1 representa:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Elipsoide}' },
                { latex: '\\text{Esfera}' },
                { latex: '\\text{Hiperboloide}' },
                { latex: '\\text{Cono}' }
            ],
            correct: 0,
            hint: 'Huevo 3D.'
        },
        {
            question: 'Si a = b = c en el elipsoide, se obtiene:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Esfera}' },
                { latex: '\\text{Cubo}' },
                { latex: '\\text{Cilindro}' },
                { latex: '\\text{Punto}' }
            ],
            correct: 0,
            hint: 'Simetría total.'
        },
        {
            question: 'La ecuación z = x^2/a^2 + y^2/b^2 representa:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Paraboloide Elíptico}' },
                { latex: '\\text{Paraboloide Hiperbólico}' },
                { latex: '\\text{Cono}' },
                { latex: '\\text{Elipsoide}' }
            ],
            correct: 0,
            hint: 'Copa hacia arriba.'
        },
        {
            question: 'El paraboloide elíptico tiene trazas horizontales que son:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'z = k > 0',
            options: [
                { latex: '\\text{Elipses}' },
                { latex: '\\text{Parábolas}' },
                { latex: '\\text{Hipérbolas}' },
                { latex: '\\text{Rectas}' }
            ],
            correct: 0,
            hint: 'Cortes circulares/elípticos.'
        },
        {
            question: 'La ecuación z = x^2/a^2 - y^2/b^2 representa:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Paraboloide Hiperbólico (Silla de montar)}' },
                { latex: '\\text{Paraboloide Elíptico}' },
                { latex: '\\text{Hiperboloide}' },
                { latex: '\\text{Cono}' }
            ],
            correct: 0,
            hint: 'Pringles.'
        },
        {
            question: 'El punto (0,0,0) en z = x^2 - y^2 es un:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Punto?}',
            options: [
                { latex: '\\text{Punto de silla}' },
                { latex: '\\text{Máximo local}' },
                { latex: '\\text{Mínimo local}' },
                { latex: '\\text{Vértice}' }
            ],
            correct: 0,
            hint: 'Sube por un lado, baja por el otro.'
        },
        {
            question: 'La ecuación x^2/a^2 + y^2/b^2 - z^2/c^2 = 1 representa:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Hiperboloide de una hoja}' },
                { latex: '\\text{Hiperboloide de dos hojas}' },
                { latex: '\\text{Cono}' },
                { latex: '\\text{Elipsoide}' }
            ],
            correct: 0,
            hint: 'Un signo menos, una hoja (cintura).'
        },
        {
            question: 'La ecuación -x^2/a^2 - y^2/b^2 + z^2/c^2 = 1 representa:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Hiperboloide de dos hojas}' },
                { latex: '\\text{Hiperboloide de una hoja}' },
                { latex: '\\text{Cono}' },
                { latex: '\\text{Esfera}' }
            ],
            correct: 0,
            hint: 'Dos signos menos, dos hojas (separadas).'
        },
        {
            question: 'La ecuación z^2 = x^2/a^2 + y^2/b^2 representa:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Cono Elíptico}' },
                { latex: '\\text{Paraboloide}' },
                { latex: '\\text{Hiperboloide}' },
                { latex: '\\text{Cilindro}' }
            ],
            correct: 0,
            hint: 'Lineas rectas que pasan por el origen.'
        },
        {
            question: 'Las trazas verticales del cono z^2 = x^2 + y^2 son:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'x=k \\text{ o } y=k',
            options: [
                { latex: '\\text{Hipérbolas (o rectas si k=0)}' },
                { latex: '\\text{Parábolas}' },
                { latex: '\\text{Elipses}' },
                { latex: '\\text{Círculos}' }
            ],
            correct: 0,
            hint: 'Secciones cónicas.'
        },
        {
            question: 'El hiperboloide de una hoja es una superficie:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Propiedad?}',
            options: [
                { latex: '\\text{Reglada (se puede construir con rectas)}' },
                { latex: '\\text{Cerrada}' },
                { latex: '\\text{Acotada}' },
                { latex: '\\text{Plana}' }
            ],
            correct: 0,
            hint: 'Torre de enfriamiento nuclear.'
        },
        {
            question: 'El paraboloide hiperbólico es una superficie:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Propiedad?}',
            options: [
                { latex: '\\text{Reglada}' },
                { latex: '\\text{Cerrada}' },
                { latex: '\\text{Convexa}' },
                { latex: '\\text{Esférica}' }
            ],
            correct: 0,
            hint: 'Se forma con rectas.'
        },
        {
            question: 'La ecuación x^2 + y^2 - z^2 = 0 representa:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Cono circular}' },
                { latex: '\\text{Hiperboloide}' },
                { latex: '\\text{Punto}' },
                { latex: '\\text{Plano}' }
            ],
            correct: 0,
            hint: 'Degeneración del hiperboloide.'
        },
        {
            question: 'Si z = x^2 + y^2, el vértice está en:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'V = ?',
            options: [
                { latex: '(0, 0, 0)' },
                { latex: '(0, 0, 1)' },
                { latex: '(1, 1, 1)' },
                { latex: '\\text{No tiene}' }
            ],
            correct: 0,
            hint: 'Mínimo global.'
        },
        {
            question: '¿Qué superficie se parece a una pelota de rugby?',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Nombre?}',
            options: [
                { latex: '\\text{Elipsoide prolato}' },
                { latex: '\\text{Esfera}' },
                { latex: '\\text{Paraboloide}' },
                { latex: '\\text{Hiperboloide}' }
            ],
            correct: 0,
            hint: 'Elipsoide alargado.'
        },
        {
            question: '¿Qué superficie se parece a una antena parabólica?',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Nombre?}',
            options: [
                { latex: '\\text{Paraboloide circular}' },
                { latex: '\\text{Cono}' },
                { latex: '\\text{Hiperboloide}' },
                { latex: '\\text{Cilindro}' }
            ],
            correct: 0,
            hint: 'Concentra señales en el foco.'
        },
        {
            question: 'La ecuación x^2 + 2y^2 + 3z^2 = 1 es un:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Elipsoide}' },
                { latex: '\\text{Esfera}' },
                { latex: '\\text{Hiperboloide}' },
                { latex: '\\text{Paraboloide}' }
            ],
            correct: 0,
            hint: 'Todos positivos, coeficientes distintos.'
        },
        {
            question: 'La ecuación z = x^2 es un:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Cilindro parabólico}' },
                { latex: '\\text{Paraboloide}' },
                { latex: '\\text{Parábola}' },
                { latex: '\\text{Plano}' }
            ],
            correct: 0,
            hint: 'Falta y.'
        },
        {
            question: 'La ecuación x^2 + y^2 - z^2 = -1 es un:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Hiperboloide de dos hojas}' },
                { latex: '\\text{Hiperboloide de una hoja}' },
                { latex: '\\text{Cono}' },
                { latex: '\\text{Esfera}' }
            ],
            correct: 0,
            hint: 'Multiplica por -1: -x^2 -y^2 + z^2 = 1. Dos negativos.'
        },
        {
            question: 'La ecuación x^2 + y^2 - z^2 = 1 es un:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Hiperboloide de una hoja}' },
                { latex: '\\text{Hiperboloide de dos hojas}' },
                { latex: '\\text{Cono}' },
                { latex: '\\text{Cilindro}' }
            ],
            correct: 0,
            hint: 'Un negativo.'
        },
        {
            question: 'Las trazas de un elipsoide son siempre:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Curvas?}',
            options: [
                { latex: '\\text{Elipses (o puntos/vacío)}' },
                { latex: '\\text{Parábolas}' },
                { latex: '\\text{Hipérbolas}' },
                { latex: '\\text{Rectas}' }
            ],
            correct: 0,
            hint: 'Cerrado por todos lados.'
        },
        {
            question: 'Las trazas de un paraboloide elíptico z = x^2 + y^2 en planos verticales x=0 son:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'z = y^2',
            options: [
                { latex: '\\text{Parábolas}' },
                { latex: '\\text{Elipses}' },
                { latex: '\\text{Hipérbolas}' },
                { latex: '\\text{Rectas}' }
            ],
            correct: 0,
            hint: 'Corte vertical.'
        },
        {
            question: 'Las trazas de un paraboloide hiperbólico z = x^2 - y^2 en planos horizontales z=k (k!=0) son:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Curvas?}',
            options: [
                { latex: '\\text{Hipérbolas}' },
                { latex: '\\text{Parábolas}' },
                { latex: '\\text{Elipses}' },
                { latex: '\\text{Rectas}' }
            ],
            correct: 0,
            hint: 'Corte horizontal de la silla.'
        },
        {
            question: 'El eje de simetría del cono z^2 = x^2 + y^2 es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Eje?}',
            options: [
                { latex: '\\text{Eje Z}' },
                { latex: '\\text{Eje X}' },
                { latex: '\\text{Eje Y}' },
                { latex: '\\text{Ninguno}' }
            ],
            correct: 0,
            hint: 'Variable despejada.'
        },
        {
            question: '¿Qué superficie se usa en torres de enfriamiento?',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Hiperboloide de una hoja}' },
                { latex: '\\text{Cilindro}' },
                { latex: '\\text{Cono}' },
                { latex: '\\text{Esfera}' }
            ],
            correct: 0,
            hint: 'Estructuralmente fuerte y reglada.'
        },
        {
            question: '¿Qué superficie se usa en faros de coches?',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Paraboloide}' },
                { latex: '\\text{Esfera}' },
                { latex: '\\text{Hiperboloide}' },
                { latex: '\\text{Elipsoide}' }
            ],
            correct: 0,
            hint: 'Refleja rayos paralelos.'
        },
        {
            question: 'La intersección de x^2+y^2=1 y z=x es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Curva?}',
            options: [
                { latex: '\\text{Una elipse en el espacio}' },
                { latex: '\\text{Una circunferencia}' },
                { latex: '\\text{Una recta}' },
                { latex: '\\text{Una parábola}' }
            ],
            correct: 0,
            hint: 'Corte inclinado de un cilindro.'
        },
        {
            question: 'El dominio de z = sqrt(1 - x^2 - y^2) es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: 'D = ?',
            options: [
                { latex: 'x^2 + y^2 \\le 1' },
                { latex: 'x^2 + y^2 \\ge 1' },
                { latex: '\\mathbb{R}^2' },
                { latex: 'x^2 + y^2 = 1' }
            ],
            correct: 0,
            hint: 'Interior del círculo unitario.'
        },
        {
            question: 'La gráfica de z = sqrt(x^2 + y^2) es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Semicono superior}' },
                { latex: '\\text{Cono completo}' },
                { latex: '\\text{Paraboloide}' },
                { latex: '\\text{Semiesfera}' }
            ],
            correct: 0,
            hint: 'Solo z positivo, recto.'
        },
        {
            question: 'La gráfica de z = sqrt(1 - x^2 - y^2) es:',
            geogebraAppName: '3d',
            geogebraState: '0',
            latex: '\\text{Superficie?}',
            options: [
                { latex: '\\text{Semiesfera superior}' },
                { latex: '\\text{Esfera completa}' },
                { latex: '\\text{Paraboloide}' },
                { latex: '\\text{Círculo}' }
            ],
            correct: 0,
            hint: 'Casquete.'
        }
    ]
};
