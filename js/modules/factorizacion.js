window.examCategories = window.examCategories || {};

window.examCategories.factorizacion = {
    name: 'Factorización y Simplificación',
    description: 'Factorización de polinomios y simplificación de expresiones racionales',
    questions: [
        // 1. Factor Común (10 preguntas)
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '2x^2 + 4x',
            options: [
                { latex: '2x(x + 2)' },
                { latex: '2(x^2 + 2x)' },
                { latex: 'x(2x + 4)' },
                { latex: '2x(x - 2)' }
            ],
            correct: 0,
            hint: 'El factor común es 2x.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '3y^3 - 9y^2',
            options: [
                { latex: '3y^2(y - 3)' },
                { latex: '3y(y^2 - 3y)' },
                { latex: '9y^2(y - 1)' },
                { latex: '3y^2(y + 3)' }
            ],
            correct: 0,
            hint: 'El factor común es 3y^2.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '5a^4 - 10a^3 + 15a^2',
            options: [
                { latex: '5a^2(a^2 - 2a + 3)' },
                { latex: '5a(a^3 - 2a^2 + 3a)' },
                { latex: 'a^2(5a^2 - 10a + 15)' },
                { latex: '5a^2(a^2 + 2a - 3)' }
            ],
            correct: 0,
            hint: 'El factor común es 5a^2.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x(a+b) + y(a+b)',
            options: [
                { latex: '(a+b)(x+y)' },
                { latex: '(a+b)(x-y)' },
                { latex: 'xy(a+b)' },
                { latex: 'a(x+y) + b(x+y)' }
            ],
            correct: 0,
            hint: 'El factor común es el binomio (a+b).'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '6x^2y - 12xy^2',
            options: [
                { latex: '6xy(x - 2y)' },
                { latex: '6x(xy - 2y^2)' },
                { latex: '6y(x^2 - 2xy)' },
                { latex: 'xy(6x - 12y)' }
            ],
            correct: 0,
            hint: 'El factor común es 6xy.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '4m^2 - 8m + 2',
            options: [
                { latex: '2(2m^2 - 4m + 1)' },
                { latex: '4(m^2 - 2m + 0.5)' },
                { latex: '2m(2m - 4) + 2' },
                { latex: '2(2m^2 + 4m - 1)' }
            ],
            correct: 0,
            hint: 'El factor común numérico es 2.'
        },
        {
            question: 'Factorice por agrupación:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'ax + ay + bx + by',
            options: [
                { latex: '(x+y)(a+b)' },
                { latex: '(x+a)(y+b)' },
                { latex: '(a+x)(b+y)' },
                { latex: 'ab(x+y)' }
            ],
            correct: 0,
            hint: 'Agrupa los dos primeros y los dos últimos.'
        },
        {
            question: 'Factorice por agrupación:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^2 + 3x + 2x + 6',
            options: [
                { latex: '(x+3)(x+2)' },
                { latex: '(x+2)(x+3)' },
                { latex: 'x(x+3) + 2(x+3)' },
                { latex: '(x-3)(x-2)' }
            ],
            correct: 0,
            hint: 'Factoriza x en los primeros dos y 2 en los últimos dos.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '12x^3y^2 - 18x^2y^3',
            options: [
                { latex: '6x^2y^2(2x - 3y)' },
                { latex: '6xy(2x^2y - 3xy^2)' },
                { latex: '12x^2y^2(x - 1.5y)' },
                { latex: '6x^2y^2(2x + 3y)' }
            ],
            correct: 0,
            hint: 'El factor común es 6x^2y^2.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '-5x - 10',
            options: [
                { latex: '-5(x + 2)' },
                { latex: '-5(x - 2)' },
                { latex: '5(-x - 2)' },
                { latex: '-5x(1 + 2/x)' }
            ],
            correct: 0,
            hint: 'Factoriza el negativo también.'
        },

        // 2. Diferencia de Cuadrados (10 preguntas)
        {
            question: 'Factorice la diferencia de cuadrados:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^2 - 9',
            options: [
                { latex: '(x-3)(x+3)' },
                { latex: '(x-3)^2' },
                { latex: '(x+3)^2' },
                { latex: '(x-9)(x+1)' }
            ],
            correct: 0,
            hint: 'a^2 - b^2 = (a-b)(a+b).'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '4x^2 - 25',
            options: [
                { latex: '(2x-5)(2x+5)' },
                { latex: '(2x-5)^2' },
                { latex: '(4x-5)(x+5)' },
                { latex: '(2x+5)(2x+5)' }
            ],
            correct: 0,
            hint: 'Raíces cuadradas de 4x^2 y 25.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '16y^2 - 81',
            options: [
                { latex: '(4y-9)(4y+9)' },
                { latex: '(4y-9)^2' },
                { latex: '(8y-9)(2y+9)' },
                { latex: '(4y+9)(4y+9)' }
            ],
            correct: 0,
            hint: 'Raíces cuadradas de 16y^2 y 81.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^4 - 1',
            options: [
                { latex: '(x^2-1)(x^2+1)' },
                { latex: '(x-1)(x+1)(x^2+1)' },
                { latex: '(x^2-1)^2' },
                { latex: '(x-1)^2(x+1)^2' }
            ],
            correct: 1,
            hint: 'Aplica diferencia de cuadrados dos veces.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '100 - x^2',
            options: [
                { latex: '(10-x)(10+x)' },
                { latex: '(x-10)(x+10)' },
                { latex: '(10-x)^2' },
                { latex: '-(x-10)(x+10)' }
            ],
            correct: 0,
            hint: 'El orden importa.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '3x^2 - 12',
            options: [
                { latex: '3(x-2)(x+2)' },
                { latex: '3(x^2-4)' },
                { latex: '(3x-6)(x+2)' },
                { latex: '3(x-2)^2' }
            ],
            correct: 0,
            hint: 'Saca factor común primero.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'a^2b^2 - c^2',
            options: [
                { latex: '(ab-c)(ab+c)' },
                { latex: '(ab-c)^2' },
                { latex: '(a-c)(b+c)' },
                { latex: 'ab(a-c)' }
            ],
            correct: 0,
            hint: 'La raíz del primer término es ab.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{1}{4}x^2 - \\frac{1}{9}',
            options: [
                { latex: '(\\frac{1}{2}x - \\frac{1}{3})(\\frac{1}{2}x + \\frac{1}{3})' },
                { latex: '(\\frac{1}{2}x - \\frac{1}{3})^2' },
                { latex: '(\\frac{1}{4}x - \\frac{1}{9})(\\frac{1}{4}x + \\frac{1}{9})' },
                { latex: '\\frac{1}{36}(9x^2 - 4)' }
            ],
            correct: 0,
            hint: 'Raíces de fracciones.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '(x+1)^2 - 4',
            options: [
                { latex: '(x-1)(x+3)' },
                { latex: '(x+1-2)(x+1+2)' },
                { latex: '(x-3)(x+1)' },
                { latex: 'x^2+2x-3' }
            ],
            correct: 0,
            hint: 'Considera (x+1) como un solo término.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^2 - y^2',
            options: [
                { latex: '(x-y)(x+y)' },
                { latex: '(x-y)^2' },
                { latex: 'x^2+y^2' },
                { latex: '(x+y)^2' }
            ],
            correct: 0,
            hint: 'Fórmula básica.'
        },

        // 3. Trinomios (10 preguntas)
        {
            question: 'Factorice el trinomio cuadrado perfecto:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^2 + 6x + 9',
            options: [
                { latex: '(x+3)^2' },
                { latex: '(x-3)^2' },
                { latex: '(x+3)(x-3)' },
                { latex: '(x+9)(x+1)' }
            ],
            correct: 0,
            hint: 'Raíz del primero y del último.'
        },
        {
            question: 'Factorice el trinomio:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^2 - 8x + 16',
            options: [
                { latex: '(x-4)^2' },
                { latex: '(x+4)^2' },
                { latex: '(x-4)(x+4)' },
                { latex: '(x-8)(x-2)' }
            ],
            correct: 0,
            hint: 'Verifica el doble producto.'
        },
        {
            question: 'Factorice el trinomio de la forma x^2+bx+c:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^2 + 5x + 6',
            options: [
                { latex: '(x+2)(x+3)' },
                { latex: '(x+1)(x+6)' },
                { latex: '(x-2)(x-3)' },
                { latex: '(x+5)(x+1)' }
            ],
            correct: 0,
            hint: 'Dos números que sumados den 5 y multiplicados 6.'
        },
        {
            question: 'Factorice el trinomio:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^2 - 5x + 6',
            options: [
                { latex: '(x-2)(x-3)' },
                { latex: '(x+2)(x+3)' },
                { latex: '(x-1)(x-6)' },
                { latex: '(x-6)(x+1)' }
            ],
            correct: 0,
            hint: 'Dos números que sumados den -5 y multiplicados 6.'
        },
        {
            question: 'Factorice el trinomio:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^2 + x - 12',
            options: [
                { latex: '(x+4)(x-3)' },
                { latex: '(x-4)(x+3)' },
                { latex: '(x+6)(x-2)' },
                { latex: '(x+12)(x-1)' }
            ],
            correct: 0,
            hint: 'Dos números que sumados den 1 y multiplicados -12.'
        },
        {
            question: 'Factorice el trinomio ax^2+bx+c:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '2x^2 + 5x + 3',
            options: [
                { latex: '(2x+3)(x+1)' },
                { latex: '(2x+1)(x+3)' },
                { latex: '(x+1)(2x+2)' },
                { latex: '(2x-3)(x-1)' }
            ],
            correct: 0,
            hint: 'Usa el método de aspa o fórmula general.'
        },
        {
            question: 'Factorice el trinomio:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '3x^2 - 5x - 2',
            options: [
                { latex: '(3x+1)(x-2)' },
                { latex: '(3x-2)(x+1)' },
                { latex: '(3x-1)(x+2)' },
                { latex: '(x-1)(3x+2)' }
            ],
            correct: 0,
            hint: 'Multiplicados dan -6 y sumados -5.'
        },
        {
            question: 'Factorice el trinomio:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '4x^2 + 12x + 9',
            options: [
                { latex: '(2x+3)^2' },
                { latex: '(2x-3)^2' },
                { latex: '(4x+3)(x+3)' },
                { latex: '(2x+9)(2x+1)' }
            ],
            correct: 0,
            hint: 'Es un trinomio cuadrado perfecto.'
        },
        {
            question: 'Factorice el trinomio:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^2 - 10x + 25',
            options: [
                { latex: '(x-5)^2' },
                { latex: '(x+5)^2' },
                { latex: '(x-25)(x-1)' },
                { latex: '(x-5)(x+5)' }
            ],
            correct: 0,
            hint: 'Trinomio cuadrado perfecto.'
        },
        {
            question: 'Factorice el trinomio:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '6x^2 + 7x - 3',
            options: [
                { latex: '(3x-1)(2x+3)' },
                { latex: '(3x+1)(2x-3)' },
                { latex: '(6x-1)(x+3)' },
                { latex: '(2x-1)(3x+3)' }
            ],
            correct: 0,
            hint: 'Método de tijeras.'
        },

        // 4. Cubos (10 preguntas)
        {
            question: 'Factorice la suma de cubos:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^3 + 8',
            options: [
                { latex: '(x+2)(x^2-2x+4)' },
                { latex: '(x+2)(x^2+2x+4)' },
                { latex: '(x-2)(x^2+2x+4)' },
                { latex: '(x+2)^3' }
            ],
            correct: 0,
            hint: 'a^3 + b^3 = (a+b)(a^2-ab+b^2).'
        },
        {
            question: 'Factorice la diferencia de cubos:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^3 - 27',
            options: [
                { latex: '(x-3)(x^2+3x+9)' },
                { latex: '(x-3)(x^2-3x+9)' },
                { latex: '(x+3)(x^2-3x+9)' },
                { latex: '(x-3)^3' }
            ],
            correct: 0,
            hint: 'a^3 - b^3 = (a-b)(a^2+ab+b^2).'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '8x^3 + 1',
            options: [
                { latex: '(2x+1)(4x^2-2x+1)' },
                { latex: '(2x+1)(4x^2+2x+1)' },
                { latex: '(2x-1)(4x^2+2x+1)' },
                { latex: '(2x+1)^3' }
            ],
            correct: 0,
            hint: 'a=2x, b=1.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '64y^3 - 125',
            options: [
                { latex: '(4y-5)(16y^2+20y+25)' },
                { latex: '(4y-5)(16y^2-20y+25)' },
                { latex: '(4y+5)(16y^2-20y+25)' },
                { latex: '(4y-5)^3' }
            ],
            correct: 0,
            hint: 'a=4y, b=5.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^3 + y^3',
            options: [
                { latex: '(x+y)(x^2-xy+y^2)' },
                { latex: '(x+y)(x^2+xy+y^2)' },
                { latex: '(x-y)(x^2+xy+y^2)' },
                { latex: '(x+y)^3' }
            ],
            correct: 0,
            hint: 'Fórmula básica.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '27a^3 - 8b^3',
            options: [
                { latex: '(3a-2b)(9a^2+6ab+4b^2)' },
                { latex: '(3a-2b)(9a^2-6ab+4b^2)' },
                { latex: '(3a+2b)(9a^2-6ab+4b^2)' },
                { latex: '(3a-2b)^3' }
            ],
            correct: 0,
            hint: 'a=3a, b=2b.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^3 - 1',
            options: [
                { latex: '(x-1)(x^2+x+1)' },
                { latex: '(x-1)(x^2-x+1)' },
                { latex: '(x+1)(x^2-x+1)' },
                { latex: '(x-1)^3' }
            ],
            correct: 0,
            hint: 'Diferencia de cubos con 1.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^3 + 1',
            options: [
                { latex: '(x+1)(x^2-x+1)' },
                { latex: '(x+1)(x^2+x+1)' },
                { latex: '(x-1)(x^2+x+1)' },
                { latex: '(x+1)^3' }
            ],
            correct: 0,
            hint: 'Suma de cubos con 1.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '2x^3 + 16',
            options: [
                { latex: '2(x+2)(x^2-2x+4)' },
                { latex: '2(x^3+8)' },
                { latex: '(2x+4)(x^2-2x+4)' },
                { latex: '2(x+2)^3' }
            ],
            correct: 0,
            hint: 'Saca factor común 2 primero.'
        },
        {
            question: 'Factorice completamente:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '3x^3 - 81',
            options: [
                { latex: '3(x-3)(x^2+3x+9)' },
                { latex: '3(x^3-27)' },
                { latex: '(3x-9)(x^2+3x+9)' },
                { latex: '3(x-3)^3' }
            ],
            correct: 0,
            hint: 'Saca factor común 3 primero.'
        },

        // 5. Expresiones Racionales (10 preguntas)
        {
            question: 'Simplifique la expresión:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{x^2-9}{x-3}',
            options: [
                { latex: 'x+3' },
                { latex: 'x-3' },
                { latex: 'x+9' },
                { latex: 'x-9' }
            ],
            correct: 0,
            hint: 'Factoriza el numerador.'
        },
        {
            question: 'Simplifique la expresión:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{x^2+2x+1}{x+1}',
            options: [
                { latex: 'x+1' },
                { latex: 'x-1' },
                { latex: '(x+1)^2' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'El numerador es un trinomio cuadrado perfecto.'
        },
        {
            question: 'Simplifique la expresión:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{x^2-4}{x^2+4x+4}',
            options: [
                { latex: '\\frac{x-2}{x+2}' },
                { latex: '\\frac{x+2}{x-2}' },
                { latex: '\\frac{x-2}{x+4}' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Factoriza numerador y denominador.'
        },
        {
            question: 'Simplifique la expresión:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{2x^2+4x}{2x}',
            options: [
                { latex: 'x+2' },
                { latex: 'x+4' },
                { latex: '2x(x+2)' },
                { latex: 'x' }
            ],
            correct: 0,
            hint: 'Factoriza 2x en el numerador.'
        },
        {
            question: 'Simplifique la expresión:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{x^2-x-6}{x-3}',
            options: [
                { latex: 'x+2' },
                { latex: 'x-2' },
                { latex: 'x+3' },
                { latex: 'x-3' }
            ],
            correct: 0,
            hint: 'Factoriza el trinomio.'
        },
        {
            question: 'Simplifique la expresión:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{x^3-8}{x-2}',
            options: [
                { latex: 'x^2+2x+4' },
                { latex: 'x^2-2x+4' },
                { latex: 'x^2+4' },
                { latex: '(x-2)^2' }
            ],
            correct: 0,
            hint: 'Factoriza la diferencia de cubos.'
        },
        {
            question: 'Simplifique la expresión:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{x^2-1}{x^2-2x+1}',
            options: [
                { latex: '\\frac{x+1}{x-1}' },
                { latex: '\\frac{x-1}{x+1}' },
                { latex: '1' },
                { latex: '-1' }
            ],
            correct: 0,
            hint: 'Diferencia de cuadrados y trinomio cuadrado perfecto.'
        },
        {
            question: 'Simplifique la expresión:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{3x+9}{x^2-9}',
            options: [
                { latex: '\\frac{3}{x-3}' },
                { latex: '\\frac{3}{x+3}' },
                { latex: '\\frac{x+3}{3}' },
                { latex: '3(x-3)' }
            ],
            correct: 0,
            hint: 'Factor común y diferencia de cuadrados.'
        },
        {
            question: 'Simplifique la expresión:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{x^2+5x+6}{x^2+6x+9}',
            options: [
                { latex: '\\frac{x+2}{x+3}' },
                { latex: '\\frac{x+3}{x+2}' },
                { latex: '\\frac{x+2}{x+6}' },
                { latex: '1' }
            ],
            correct: 0,
            hint: 'Factoriza ambos trinomios.'
        },
        {
            question: 'Simplifique la expresión:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{x}{x^2+x}',
            options: [
                { latex: '\\frac{1}{x+1}' },
                { latex: '\\frac{1}{x}' },
                { latex: 'x+1' },
                { latex: 'x' }
            ],
            correct: 0,
            hint: 'Factoriza x en el denominador.'
        }
    ]
};
