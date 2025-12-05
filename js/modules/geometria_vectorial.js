window.examCategories = window.examCategories || {};

window.examCategories.geometria_vectorial = {
    name: 'Geometría Vectorial',
    description: 'Vectores, operaciones, rectas, planos y aplicaciones en ciencias e ingeniería',
    questions: [
        // 1. Operaciones Básicas con Vectores (10 preguntas)
        {
            question: 'Dados u = (2, -1) y v = (3, 5), calcule u + v.',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'u + v = (2+3, -1+5)',
            options: [
                { latex: '(5, 4)' },
                { latex: '(5, -4)' },
                { latex: '(1, 6)' },
                { latex: '(6, 4)' }
            ],
            correct: 0,
            hint: 'Suma componente a componente.'
        },
        {
            question: 'Dados u = (1, 2, 3) y v = (4, 0, -1), calcule 2u - v.',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '2(1, 2, 3) - (4, 0, -1)',
            options: [
                { latex: '(-2, 4, 7)' },
                { latex: '(2, 4, 5)' },
                { latex: '(-2, 4, 5)' },
                { latex: '(6, 4, 5)' }
            ],
            correct: 0,
            hint: 'Multiplica por escalar y resta.'
        },
        {
            question: 'Si A = (2, 3) y B = (5, 7), encuentre el vector AB.',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\vec{AB} = B - A',
            options: [
                { latex: '(3, 4)' },
                { latex: '(7, 10)' },
                { latex: '(-3, -4)' },
                { latex: '(3, 10)' }
            ],
            correct: 0,
            hint: 'Punto final menos punto inicial.'
        },
        {
            question: 'Calcule el vector unitario en la dirección de v = (3, 4).',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'u = \\frac{v}{|v|}',
            options: [
                { latex: '(\\frac{3}{5}, \\frac{4}{5})' },
                { latex: '(3, 4)' },
                { latex: '(\\frac{3}{7}, \\frac{4}{7})' },
                { latex: '(\\frac{1}{3}, \\frac{1}{4})' }
            ],
            correct: 0,
            hint: 'Divide por la magnitud (5).'
        },
        {
            question: 'Dados u = i - 2j + k y v = 3i + j - 2k, calcule u + 2v.',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '(1, -2, 1) + 2(3, 1, -2)',
            options: [
                { latex: '7i - 3k' },
                { latex: '7i + j - 3k' },
                { latex: '7i - 3j' },
                { latex: '4i - j - k' }
            ],
            correct: 0,
            hint: 'Suma de componentes i, j, k.'
        },
        {
            question: '¿Cuál es el vector opuesto a w = (-2, 5, -1)?',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '-w = ?',
            options: [
                { latex: '(2, -5, 1)' },
                { latex: '(-2, -5, -1)' },
                { latex: '(2, 5, 1)' },
                { latex: '(-2, 5, 1)' }
            ],
            correct: 0,
            hint: 'Cambia el signo de cada componente.'
        },
        {
            question: 'Si 3u = (6, -9, 12), ¿cuál es el vector u?',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'u = \\frac{1}{3}(6, -9, 12)',
            options: [
                { latex: '(2, -3, 4)' },
                { latex: '(18, -27, 36)' },
                { latex: '(3, -6, 9)' },
                { latex: '(2, 3, 4)' }
            ],
            correct: 0,
            hint: 'Divide cada componente por 3.'
        },
        {
            question: 'Dados P(1,1) y Q(4,5), la distancia entre P y Q es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'd(P,Q) = |\\vec{PQ}|',
            options: [
                { latex: '5' },
                { latex: '4' },
                { latex: '3' },
                { latex: '25' }
            ],
            correct: 0,
            hint: 'Raíz de (3^2 + 4^2).'
        },
        {
            question: 'El punto medio del segmento AB con A(2, 4) y B(6, 8) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'M = \\frac{A+B}{2}',
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
            question: 'Si u = (1, 2) y v = (2, 4), ¿son linealmente dependientes?',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'v = ku?',
            options: [
                { latex: '\\text{Sí, } v = 2u' },
                { latex: '\\text{No}' },
                { latex: '\\text{Sí, } v = -u' },
                { latex: '\\text{Solo si k=0}' }
            ],
            correct: 0,
            hint: 'Uno es múltiplo del otro.'
        },

        // 2. Magnitud y Dirección (5 preguntas)
        {
            question: 'La magnitud del vector v = (3, -4) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|v| = \\sqrt{3^2 + (-4)^2}',
            options: [
                { latex: '5' },
                { latex: '7' },
                { latex: '25' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Teorema de Pitágoras.'
        },
        {
            question: 'La magnitud del vector u = (1, 2, 2) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|u| = \\sqrt{1^2 + 2^2 + 2^2}',
            options: [
                { latex: '3' },
                { latex: '9' },
                { latex: '\\sqrt{5}' },
                { latex: '5' }
            ],
            correct: 0,
            hint: 'Raíz de 1+4+4.'
        },
        {
            question: 'Los cosenos directores de v = (1, 1, 1) son:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\cos \\alpha, \\cos \\beta, \\cos \\gamma',
            options: [
                { latex: '(\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}})' },
                { latex: '(1, 1, 1)' },
                { latex: '(\\frac{1}{3}, \\frac{1}{3}, \\frac{1}{3})' },
                { latex: '(45^\\circ, 45^\\circ, 45^\\circ)' }
            ],
            correct: 0,
            hint: 'Componente dividido por magnitud.'
        },
        {
            question: 'El ángulo que forma v = (1, 0) con el eje x positivo es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\theta = ?',
            options: [
                { latex: '0^\\circ' },
                { latex: '90^\\circ' },
                { latex: '45^\\circ' },
                { latex: '180^\\circ' }
            ],
            correct: 0,
            hint: 'Está sobre el eje x.'
        },
        {
            question: 'Si |v| = 4 y su dirección es 60° con el eje x, sus componentes son:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '(4 \\cos 60^\\circ, 4 \\sin 60^\\circ)',
            options: [
                { latex: '(2, 2\\sqrt{3})' },
                { latex: '(2\\sqrt{3}, 2)' },
                { latex: '(2, 2)' },
                { latex: '(4, 4)' }
            ],
            correct: 0,
            hint: 'cos(60)=0.5, sin(60)=sqrt(3)/2.'
        },

        // 3. Producto Punto y Ángulo (10 preguntas)
        {
            question: 'Calcule el producto punto de u = (2, 3) y v = (4, -1).',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'u \\cdot v = 2(4) + 3(-1)',
            options: [
                { latex: '5' },
                { latex: '11' },
                { latex: '8' },
                { latex: '6' }
            ],
            correct: 0,
            hint: 'Suma de productos de componentes.'
        },
        {
            question: 'Si u · v = 0, entonces los vectores son:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'u \\perp v',
            options: [
                { latex: '\\text{Perpendiculares (Ortogonales)}' },
                { latex: '\\text{Paralelos}' },
                { latex: '\\text{Iguales}' },
                { latex: '\\text{Opuestos}' }
            ],
            correct: 0,
            hint: 'Cos(90) = 0.'
        },
        {
            question: 'El ángulo entre u = (1, 0) y v = (1, 1) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\cos \\theta = \\frac{u \\cdot v}{|u||v|}',
            options: [
                { latex: '45^\\circ' },
                { latex: '30^\\circ' },
                { latex: '60^\\circ' },
                { latex: '90^\\circ' }
            ],
            correct: 0,
            hint: '1/sqrt(2).'
        },
        {
            question: 'La proyección escalar de u = (2, 4) sobre v = (1, 0) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{comp}_v u = \\frac{u \\cdot v}{|v|}',
            options: [
                { latex: '2' },
                { latex: '4' },
                { latex: '1' },
                { latex: '2.5' }
            ],
            correct: 0,
            hint: '(2*1 + 4*0) / 1.'
        },
        {
            question: 'Calcule u · v si |u|=3, |v|=4 y el ángulo entre ellos es 60°.',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'u \\cdot v = |u||v| \\cos \\theta',
            options: [
                { latex: '6' },
                { latex: '12' },
                { latex: '3.5' },
                { latex: '0' }
            ],
            correct: 0,
            hint: '3 * 4 * 0.5.'
        },
        {
            question: 'Determine k para que u = (1, k) y v = (2, -4) sean ortogonales.',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '1(2) + k(-4) = 0',
            options: [
                { latex: 'k = 0.5' },
                { latex: 'k = 2' },
                { latex: 'k = -2' },
                { latex: 'k = -0.5' }
            ],
            correct: 0,
            hint: '2 - 4k = 0.'
        },
        {
            question: 'El trabajo realizado por una fuerza F=(3, 4) al mover un objeto d=(2, 0) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'W = F \\cdot d',
            options: [
                { latex: '6 \\text{ J}' },
                { latex: '8 \\text{ J}' },
                { latex: '10 \\text{ J}' },
                { latex: '14 \\text{ J}' }
            ],
            correct: 0,
            hint: 'Producto punto.'
        },
        {
            question: 'Si u = (1, 2, 3) y v = (-1, -2, -3), el ángulo entre ellos es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'v = -u',
            options: [
                { latex: '180^\\circ' },
                { latex: '0^\\circ' },
                { latex: '90^\\circ' },
                { latex: '45^\\circ' }
            ],
            correct: 0,
            hint: 'Son opuestos.'
        },
        {
            question: 'La desigualdad de Cauchy-Schwarz establece que:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|u \\cdot v| \\le ?',
            options: [
                { latex: '|u||v|' },
                { latex: '|u| + |v|' },
                { latex: '0' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Relación con el coseno.'
        },
        {
            question: 'El vector proyección de u sobre v es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{proj}_v u = ?',
            options: [
                { latex: '(\\frac{u \\cdot v}{|v|^2})v' },
                { latex: '(\\frac{u \\cdot v}{|v|})v' },
                { latex: '(u \\cdot v)v' },
                { latex: 'u' }
            ],
            correct: 0,
            hint: 'Escalar por vector unitario.'
        },

        // 4. Producto Cruz y Producto Mixto (5 preguntas)
        {
            question: 'El producto cruz u x v da como resultado:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Resultado?}',
            options: [
                { latex: '\\text{Un vector perpendicular a u y v}' },
                { latex: '\\text{Un escalar}' },
                { latex: '\\text{Un vector paralelo a u}' },
                { latex: '\\text{Cero siempre}' }
            ],
            correct: 0,
            hint: 'Propiedad fundamental.'
        },
        {
            question: 'Calcule i x j.',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'i \\times j = ?',
            options: [
                { latex: 'k' },
                { latex: '-k' },
                { latex: '0' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Regla de la mano derecha.'
        },
        {
            question: 'La magnitud |u x v| representa geométricamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Área de?}',
            options: [
                { latex: '\\text{El paralelogramo formado por u y v}' },
                { latex: '\\text{El triángulo formado por u y v}' },
                { latex: '\\text{El volumen del paralelepípedo}' },
                { latex: '\\text{La longitud de la suma}' }
            ],
            correct: 0,
            hint: 'Base por altura.'
        },
        {
            question: 'Si u x v = 0, entonces u y v son:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\sin \\theta = 0',
            options: [
                { latex: '\\text{Paralelos}' },
                { latex: '\\text{Perpendiculares}' },
                { latex: '\\text{Unitarios}' },
                { latex: '\\text{Nulos}' }
            ],
            correct: 0,
            hint: 'Ángulo 0 o 180.'
        },
        {
            question: 'El producto mixto u · (v x w) calcula:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Volumen de?}',
            options: [
                { latex: '\\text{El paralelepípedo formado por u, v, w}' },
                { latex: '\\text{El área del triángulo}' },
                { latex: '\\text{Un vector 4D}' },
                { latex: '\\text{La proyección}' }
            ],
            correct: 0,
            hint: 'Interpretación geométrica.'
        },

        // 5. Rectas y Planos (10 preguntas)
        {
            question: 'La ecuación vectorial de una recta que pasa por P y tiene dirección v es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'r(t) = ?',
            options: [
                { latex: 'P + tv' },
                { latex: 'P \\cdot v' },
                { latex: 'v + tP' },
                { latex: 'P + v' }
            ],
            correct: 0,
            hint: 'Punto más parámetro por dirección.'
        },
        {
            question: 'La ecuación del plano que pasa por P(1,1,1) con normal n=(1,2,3) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '1(x-1) + 2(y-1) + 3(z-1) = 0',
            options: [
                { latex: 'x + 2y + 3z = 6' },
                { latex: 'x + 2y + 3z = 0' },
                { latex: 'x + y + z = 6' },
                { latex: '3x + 2y + z = 6' }
            ],
            correct: 0,
            hint: 'x + 2y + 3z = 1+2+3.'
        },
        {
            question: 'Dos planos son paralelos si sus vectores normales son:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'n_1 \\parallel n_2',
            options: [
                { latex: '\\text{Paralelos}' },
                { latex: '\\text{Perpendiculares}' },
                { latex: '\\text{Iguales a cero}' },
                { latex: '\\text{Opuestos}' }
            ],
            correct: 0,
            hint: 'Misma dirección.'
        },
        {
            question: 'La distancia de un punto P a un plano ax+by+cz+d=0 es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'D = ?',
            options: [
                { latex: '\\frac{|ax_0 + by_0 + cz_0 + d|}{\\sqrt{a^2+b^2+c^2}}' },
                { latex: '\\frac{ax_0 + by_0 + cz_0 + d}{a+b+c}' },
                { latex: '|ax_0 + by_0 + cz_0 + d|' },
                { latex: '\\sqrt{(x-x_0)^2}' }
            ],
            correct: 0,
            hint: 'Fórmula estándar.'
        },
        {
            question: 'El ángulo entre dos planos es el ángulo entre:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Ángulo entre?}',
            options: [
                { latex: '\\text{Sus vectores normales}' },
                { latex: '\\text{Sus puntos de corte}' },
                { latex: '\\text{El eje x y el plano}' },
                { latex: '\\text{Sus trazas}' }
            ],
            correct: 0,
            hint: 'Definición.'
        },
        {
            question: 'Si dos rectas en el espacio no se cortan y no son paralelas, se llaman:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Nombre?}',
            options: [
                { latex: '\\text{Rectas que se cruzan (alabeadas)}' },
                { latex: '\\text{Rectas coincidentes}' },
                { latex: '\\text{Rectas secantes}' },
                { latex: '\\text{Rectas imaginarias}' }
            ],
            correct: 0,
            hint: 'Skew lines.'
        },
        {
            question: 'La ecuación simétrica de la recta que pasa por (1,2,3) con dirección (2, -1, 1) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{x-1}{2} = \\frac{y-2}{-1} = \\frac{z-3}{1}',
            options: [
                { latex: '\\frac{x-1}{2} = \\frac{y-2}{-1} = z-3' },
                { latex: '\\frac{x-2}{1} = \\frac{y+1}{2} = z-1' },
                { latex: '2(x-1) = -(y-2) = z-3' },
                { latex: 'x-1 = y-2 = z-3' }
            ],
            correct: 0,
            hint: 'Despeja t.'
        },
        {
            question: 'Un vector normal al plano z = 0 (plano XY) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'n = ?',
            options: [
                { latex: 'k = (0, 0, 1)' },
                { latex: 'i = (1, 0, 0)' },
                { latex: 'j = (0, 1, 0)' },
                { latex: '(1, 1, 1)' }
            ],
            correct: 0,
            hint: 'Eje Z.'
        },
        {
            question: 'La intersección de dos planos no paralelos es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Objeto?}',
            options: [
                { latex: '\\text{Una recta}' },
                { latex: '\\text{Un punto}' },
                { latex: '\\text{Un plano}' },
                { latex: '\\text{El vacío}' }
            ],
            correct: 0,
            hint: 'Como las hojas de un libro.'
        },
        {
            question: 'Para hallar la distancia entre dos rectas paralelas, se toma:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Procedimiento?}',
            options: [
                { latex: '\\text{Un punto de una y la distancia a la otra}' },
                { latex: '\\text{La distancia entre sus vectores directores}' },
                { latex: '\\text{El punto medio}' },
                { latex: '\\text{Cero}' }
            ],
            correct: 0,
            hint: 'Reducir a distancia punto-recta.'
        },

        // 6. Distancias y Aplicaciones (10 preguntas)
        {
            question: 'La distancia del punto (1, 2) a la recta 3x + 4y - 1 = 0 es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'd = \\frac{|3(1) + 4(2) - 1|}{\\sqrt{3^2+4^2}}',
            options: [
                { latex: '2' }, // |3+8-1|/5 = 10/5 = 2
                { latex: '1' },
                { latex: '3' },
                { latex: '2.5' }
            ],
            correct: 0,
            hint: '10/5.'
        },
        {
            question: 'El momento de una fuerza F aplicada en r respecto al origen es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\tau = r \\times F',
            options: [
                { latex: '\\text{Torque (Momento)}' },
                { latex: '\\text{Trabajo}' },
                { latex: '\\text{Potencia}' },
                { latex: '\\text{Energía}' }
            ],
            correct: 0,
            hint: 'Producto cruz.'
        },
        {
            question: 'En Biofísica, las fuerzas musculares se modelan como:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Modelado?}',
            options: [
                { latex: '\\text{Vectores con magnitud y dirección}' },
                { latex: '\\text{Escalares}' },
                { latex: '\\text{Matrices}' },
                { latex: '\\text{Puntos}' }
            ],
            correct: 0,
            hint: 'Tienen dirección de tracción.'
        },
        {
            question: 'La distancia entre los planos paralelos x+y+z=1 y x+y+z=4 es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'd = \\frac{|D_2 - D_1|}{\\sqrt{a^2+b^2+c^2}}',
            options: [
                { latex: '\\sqrt{3}' }, // |4-1|/sqrt(3) = 3/sqrt(3) = sqrt(3)
                { latex: '3' },
                { latex: '1' },
                { latex: '\\frac{3}{\\sqrt{3}}' } // Same as sqrt(3), let's keep sqrt(3) as simplify
            ],
            correct: 0,
            hint: '3 sobre raíz de 3.'
        },
        {
            question: 'El área del triángulo con vértices A(0,0), B(1,0), C(0,1) es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\frac{1}{2}|AB \\times AC|',
            options: [
                { latex: '0.5' },
                { latex: '1' },
                { latex: '2' },
                { latex: '0.25' }
            ],
            correct: 0,
            hint: 'Base 1, altura 1.'
        },
        {
            question: 'En Química, el momento dipolar de una molécula es una magnitud:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Vectorial}' },
                { latex: '\\text{Escalar}' },
                { latex: '\\text{Adimensional}' },
                { latex: '\\text{Imaginaria}' }
            ],
            correct: 0,
            hint: 'Tiene dirección de carga - a +.'
        },
        {
            question: 'La suma de fuerzas en equilibrio estático es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\sum F = ?',
            options: [
                { latex: '0' },
                { latex: 'ma' },
                { latex: 'mg' },
                { latex: 'Infinito' }
            ],
            correct: 0,
            hint: 'Primera ley de Newton.'
        },
        {
            question: 'La distancia entre dos rectas que se cruzan se calcula usando:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'd = \\frac{|(P_2-P_1) \\cdot (u \\times v)|}{|u \\times v|}',
            options: [
                { latex: '\\text{Producto mixto y producto cruz}' },
                { latex: '\\text{Solo producto punto}' },
                { latex: '\\text{Teorema de Pitágoras}' },
                { latex: '\\text{Promedio de distancias}' }
            ],
            correct: 0,
            hint: 'Volumen del paralelepípedo dividido área base.'
        },
        {
            question: 'Si un avión vuela con velocidad v_a y hay viento v_v, la velocidad respecto a tierra es:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'v_t = ?',
            options: [
                { latex: 'v_a + v_v' },
                { latex: 'v_a - v_v' },
                { latex: 'v_a \\cdot v_v' },
                { latex: '|v_a| + |v_v|' }
            ],
            correct: 0,
            hint: 'Suma vectorial.'
        },
        {
            question: 'El gradiente de una función escalar f(x,y,z) es un campo:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\nabla f',
            options: [
                { latex: '\\text{Vectorial}' },
                { latex: '\\text{Escalar}' },
                { latex: '\\text{Matricial}' },
                { latex: '\\text{Constante}' }
            ],
            correct: 0,
            hint: 'Apunta al máximo crecimiento.'
        }
    ]
};
