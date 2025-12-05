window.examCategories = window.examCategories || {};

window.examCategories.geometria = {
    name: 'Geometría',
    description: 'Formas, áreas y perímetros',
    questions: [
        {
            question: 'Con base en la construcción, ¿cuál es el área del triángulo?',
            geogebraId: 'q8rwxsmh',
            geogebraState: '1',
            latex: '\\text{Obtener el área del triángulo cuyos lados miden } \\ a=7; b=9; c= 12',
            options: [
                { latex: '31.3 U.A' },
                { latex: '35.3 U.A' },
                { latex: '28.3 U.A' },
                { latex: '33.3 U.A' }
            ],
            correct: 0,
            hint: 'Recuerda que la pendiente de la recta tangente a una curva es la derivada de la curva evaluada en el punto de tangencia.'
        },
        {
            question: 'Con base en la construcción, ¿cuál es el área del triángulo?',
            geogebraId: 'q8rwxsmh',
            geogebraState: '2',
            latex: '\\text{Obtener el área del triángulo cuyos lados miden } \\ a=10; b=7; c= 12',
            options: [
                { latex: '31.3 U.A' },
                { latex: '34.9 U.A' },
                { latex: '28.3 U.A' },
                { latex: '33.3 U.A' }
            ],
            correct: 1,
            hint: 'Recuerda que la pendiente de la recta tangente a una curva es la derivada de la curva evaluada en el punto de tangencia.'
        },
        {
            question: 'Con base en la construcción, ¿cuál es el área del triángulo?',
            geogebraId: 'q8rwxsmh',
            geogebraState: '3',
            latex: '\\text{Obtener el área del triángulo cuyos lados miden } \\ a=10; b=14; c= 12',
            options: [
                { latex: '51.3 U.A' },
                { latex: '34.9 U.A' },
                { latex: '58.7 U.A' },
                { latex: '33.3 U.A' }
            ],
            correct: 2,
            hint: 'Recuerda que la pendiente de la recta tangente a una curva es la derivada de la curva evaluada en el punto de tangencia.'
        },
        {
            question: 'Área del círculo:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Radio } r=3',
            options: [
                { latex: '9\\pi' },
                { latex: '6\\pi' },
                { latex: '3\\pi' },
                { latex: '12\\pi' }
            ],
            correct: 0,
            hint: 'r = \\sqrt{A/\\pi}.'
        },
        {
            question: 'Longitud de arco:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Radio } r=4, \\text{ ángulo } \\theta=90^\\circ',
            options: [
                { latex: '2\\pi' },
                { latex: '4\\pi' },
                { latex: '\\pi' },
                { latex: '8\\pi' }
            ],
            correct: 0,
            hint: 'L = 2\\pi r (\\theta/360).'
        },
        {
            question: 'Área del sector circular:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Radio } r=2, \\text{ ángulo } \\theta=180^\\circ',
            options: [
                { latex: '2\\pi' },
                { latex: '4\\pi' },
                { latex: '\\pi' },
                { latex: '8\\pi' }
            ],
            correct: 0,
            hint: 'A = \\pi r^2 (\\theta/360).'
        },
        {
            question: 'Ángulo inscrito:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Si el ángulo central mide } 60^\\circ, \\text{ el inscrito mide:}',
            options: [
                { latex: '30^\\circ' },
                { latex: '60^\\circ' },
                { latex: '120^\\circ' },
                { latex: '90^\\circ' }
            ],
            correct: 0,
            hint: 'El ángulo inscrito es la mitad del central.'
        },
        {
            question: 'Recta tangente:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{El ángulo entre el radio y la tangente es:}',
            options: [
                { latex: '90^\\circ' },
                { latex: '180^\\circ' },
                { latex: '45^\\circ' },
                { latex: '60^\\circ' }
            ],
            correct: 0,
            hint: 'Son perpendiculares en el punto de tangencia.'
        },
        {
            question: 'Ecuación del círculo:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Centro } (0,0), \\text{ radio } 5',
            options: [
                { latex: 'x^2 + y^2 = 25' },
                { latex: 'x^2 + y^2 = 5' },
                { latex: 'x^2 - y^2 = 25' },
                { latex: 'x + y = 5' }
            ],
            correct: 0,
            hint: 'x^2 + y^2 = r^2.'
        },
        {
            question: 'Cuerda máxima:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{La cuerda más larga de un círculo es:}',
            options: [
                { latex: '\\text{El diámetro}' },
                { latex: '\\text{El radio}' },
                { latex: '\\text{La tangente}' },
                { latex: '\\text{El arco}' }
            ],
            correct: 0,
            hint: 'Pasa por el centro.'
        },
        {
            question: 'Posiciones relativas:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Dos círculos con el mismo centro son:}',
            options: [
                { latex: '\\text{Concéntricos}' },
                { latex: '\\text{Tangentes}' },
                { latex: '\\text{Secantes}' },
                { latex: '\\text{Excéntricos}' }
            ],
            correct: 0,
            hint: 'Comparten el centro.'
        },
        {
            question: 'Área del cuadrado:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Lado } l=5',
            options: [
                { latex: '25' },
                { latex: '20' },
                { latex: '10' },
                { latex: '50' }
            ],
            correct: 0,
            hint: 'Área = l^2.'
        },
        {
            question: 'Perímetro del rectángulo:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Base } 4, \\text{ altura } 3',
            options: [
                { latex: '14' },
                { latex: '12' },
                { latex: '7' },
                { latex: '24' }
            ],
            correct: 0,
            hint: 'P = 2(b+h).'
        },
        {
            question: 'Área del trapecio:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'B=10, b=6, h=4',
            options: [
                { latex: '32' },
                { latex: '64' },
                { latex: '16' },
                { latex: '24' }
            ],
            correct: 0,
            hint: 'Área = h(B+b)/2.'
        },
        {
            question: 'Área del rombo:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'D=8, d=6',
            options: [
                { latex: '24' },
                { latex: '48' },
                { latex: '14' },
                { latex: '12' }
            ],
            correct: 0,
            hint: 'Área = (D*d)/2.'
        },
        {
            question: 'Suma de ángulos en cuadrilátero:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{La suma de los ángulos internos es:}',
            options: [
                { latex: '360^\\circ' },
                { latex: '180^\\circ' },
                { latex: '90^\\circ' },
                { latex: '720^\\circ' }
            ],
            correct: 0,
            hint: '2 * 180.'
        },
        {
            question: 'Propiedades del paralelogramo:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Los lados opuestos son:}',
            options: [
                { latex: '\\text{Iguales y paralelos}' },
                { latex: '\\text{Perpendiculares}' },
                { latex: '\\text{Diferentes}' },
                { latex: '\\text{Secantes}' }
            ],
            correct: 0,
            hint: 'Definición de paralelogramo.'
        },
        {
            question: 'Diagonales del rectángulo:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Las diagonales de un rectángulo son:}',
            options: [
                { latex: '\\text{Iguales}' },
                { latex: '\\text{Perpendiculares}' },
                { latex: '\\text{Bisectrices}' },
                { latex: '\\text{Diferentes}' }
            ],
            correct: 0,
            hint: 'Miden lo mismo.'
        },
        {
            question: 'Diagonales del cuadrado:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Las diagonales de un cuadrado son:}',
            options: [
                { latex: '\\text{Iguales y perpendiculares}' },
                { latex: '\\text{Solo iguales}' },
                { latex: '\\text{Solo perpendiculares}' },
                { latex: '\\text{Paralelas}' }
            ],
            correct: 0,
            hint: 'Cumple propiedades de rombo y rectángulo.'
        },
        {
            question: 'Área del cometa (deltoide):',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'D=10, d=4',
            options: [
                { latex: '20' },
                { latex: '40' },
                { latex: '14' },
                { latex: '10' }
            ],
            correct: 0,
            hint: 'Área = (D*d)/2.'
        },
        {
            question: 'Mediana del trapecio:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: 'B=12, b=8',
            options: [
                { latex: '10' },
                { latex: '20' },
                { latex: '4' },
                { latex: '6' }
            ],
            correct: 0,
            hint: 'M = (B+b)/2.'
        },
        {
            question: 'Distancia entre dos puntos:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'A(0,0), B(3,4)',
            options: [
                { latex: '5' },
                { latex: '7' },
                { latex: '25' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}.'
        },
        {
            question: 'Punto medio:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'A(2,4), B(6,8)',
            options: [
                { latex: '(4, 6)' },
                { latex: '(3, 5)' },
                { latex: '(8, 12)' },
                { latex: '(2, 2)' }
            ],
            correct: 0,
            hint: 'Promedio de coordenadas.'
        },
        {
            question: 'Pendiente de una recta:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'A(1,1), B(3,5)',
            options: [
                { latex: '2' },
                { latex: '0.5' },
                { latex: '4' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'm = (y_2-y_1)/(x_2-x_1).'
        },
        {
            question: 'Ecuación punto-pendiente:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'm=2, P(1,3)',
            options: [
                { latex: 'y - 3 = 2(x - 1)' },
                { latex: 'y - 1 = 2(x - 3)' },
                { latex: 'y = 2x + 3' },
                { latex: 'y = 2x' }
            ],
            correct: 0,
            hint: 'y - y_1 = m(x - x_1).'
        },
        {
            question: 'Pendiente rectas paralelas:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si } L_1 || L_2 \\text{ y } m_1 = 3, \\text{ entonces } m_2 = ?',
            options: [
                { latex: '3' },
                { latex: '-3' },
                { latex: '-1/3' },
                { latex: '1/3' }
            ],
            correct: 0,
            hint: 'Tienen la misma pendiente.'
        },
        {
            question: 'Pendiente rectas perpendiculares:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si } L_1 \\perp L_2 \\text{ y } m_1 = 2, \\text{ entonces } m_2 = ?',
            options: [
                { latex: '-1/2' },
                { latex: '2' },
                { latex: '-2' },
                { latex: '1/2' }
            ],
            correct: 0,
            hint: 'Producto de pendientes es -1.'
        },
        {
            question: 'Distancia vertical:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'A(2,3), B(2, -1)',
            options: [
                { latex: '4' },
                { latex: '2' },
                { latex: '3' },
                { latex: '0' }
            ],
            correct: 0,
            hint: '|y_2 - y_1|.'
        },
        {
            question: 'Identificación de cuadrante:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P(-2, 3)',
            options: [
                { latex: 'II' },
                { latex: 'I' },
                { latex: 'III' },
                { latex: 'IV' }
            ],
            correct: 0,
            hint: 'x negativo, y positivo.'
        },
        {
            question: 'Intersección eje X:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'y = 2x - 4',
            options: [
                { latex: '2' },
                { latex: '-4' },
                { latex: '0' },
                { latex: '4' }
            ],
            correct: 0,
            hint: 'Haz y = 0.'
        },
        {
            question: 'Intersección eje Y:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'y = 3x + 5',
            options: [
                { latex: '5' },
                { latex: '3' },
                { latex: '0' },
                { latex: '-5' }
            ],
            correct: 0,
            hint: 'Haz x = 0.'
        },
        {
            question: 'Ángulos complementarios:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Suman:}',
            options: [
                { latex: '90^\\circ' },
                { latex: '180^\\circ' },
                { latex: '360^\\circ' },
                { latex: '45^\\circ' }
            ],
            correct: 0,
            hint: 'Forman un ángulo recto.'
        },
        {
            question: 'Ángulos suplementarios:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Suman:}',
            options: [
                { latex: '180^\\circ' },
                { latex: '90^\\circ' },
                { latex: '360^\\circ' },
                { latex: '270^\\circ' }
            ],
            correct: 0,
            hint: 'Forman un ángulo llano.'
        },
        {
            question: 'Ángulos opuestos por el vértice:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Son:}',
            options: [
                { latex: '\\text{Iguales}' },
                { latex: '\\text{Suplementarios}' },
                { latex: '\\text{Complementarios}' },
                { latex: '\\text{Diferentes}' }
            ],
            correct: 0,
            hint: 'Comparten el vértice y lados opuestos.'
        },
        {
            question: 'Ángulos correspondientes:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Entre paralelas son:}',
            options: [
                { latex: '\\text{Iguales}' },
                { latex: '\\text{Suplementarios}' },
                { latex: '\\text{Complementarios}' },
                { latex: '\\text{Diferentes}' }
            ],
            correct: 0,
            hint: 'Misma posición relativa.'
        },
        {
            question: 'Ángulos alternos internos:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Entre paralelas son:}',
            options: [
                { latex: '\\text{Iguales}' },
                { latex: '\\text{Suplementarios}' },
                { latex: '\\text{Complementarios}' },
                { latex: '\\text{Diferentes}' }
            ],
            correct: 0,
            hint: 'Z de zorro.'
        },
        {
            question: 'Tipo de ángulo:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '135^\\circ',
            options: [
                { latex: '\\text{Obtuso}' },
                { latex: '\\text{Agudo}' },
                { latex: '\\text{Recto}' },
                { latex: '\\text{Llano}' }
            ],
            correct: 0,
            hint: 'Mayor de 90 y menor de 180.'
        },
        {
            question: 'Bisectriz:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Divide al ángulo en:}',
            options: [
                { latex: '\\text{Dos partes iguales}' },
                { latex: '\\text{Dos partes desiguales}' },
                { latex: '\\text{Tres partes}' },
                { latex: '\\text{No lo divide}' }
            ],
            correct: 0,
            hint: 'Bi significa dos.'
        },
        {
            question: 'Mediatriz:',
            geogebraAppName: 'geometry',
            geogebraState: '0',
            latex: '\\text{Recta perpendicular en el:}',
            options: [
                { latex: '\\text{Punto medio}' },
                { latex: '\\text{Extremo}' },
                { latex: '\\text{Cualquier punto}' },
                { latex: '\\text{Vértice}' }
            ],
            correct: 0,
            hint: 'Pasa por la mitad del segmento.'
        }
    ]
};
