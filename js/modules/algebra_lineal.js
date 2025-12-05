window.examCategories = window.examCategories || {};

window.examCategories.algebra_lineal = {
    name: 'Álgebra Lineal',
    description: 'Matrices, Determinantes, Inversas y Ecuaciones Matriciales',
    questions: [
        // 1. Suma y Resta de Matrices (10 preguntas)
        {
            question: 'Calcule A + B:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 5 & 12 \\\\ 21 & 32 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} -4 & -4 \\\\ -4 & -4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 6 & 8 \\\\ 10 & 10 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Suma elemento a elemento.'
        },
        {
            question: 'Calcule A - B:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}, B = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 1 & 3 \\\\ 1 & 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 & 7 \\\\ 1 & 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 3 \\\\ 1 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Resta elemento a elemento.'
        },
        {
            question: 'Calcule 2A:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & -1 \\\\ 2 & 0 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 2 & -2 \\\\ 4 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & -1 \\\\ 2 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 & 1 \\\\ 4 & 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & -1 \\\\ 4 & 0 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Multiplica cada elemento por 2.'
        },
        {
            question: 'Calcule A + 2B:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}, B = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 5 & 2 \\\\ 2 & 5 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 4 & 2 \\\\ 2 & 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 5 & 1 \\\\ 1 & 5 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Multiplica B por 2 y suma A.'
        },
        {
            question: 'Calcule 3A - B:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, B = \\begin{pmatrix} 0 & 1 \\\\ 2 & 3 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 3 & 5 \\\\ 7 & 9 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 & 5 \\\\ 7 & 12 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Multiplica A por 3 y resta B.'
        },
        {
            question: 'Calcule A + B:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 2 & 3 \\end{pmatrix}, B = \\begin{pmatrix} 4 & 5 & 6 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 5 & 7 & 9 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 4 & 10 & 18 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 & 3 & 3 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 5 & 7 & 8 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Suma vectores fila.'
        },
        {
            question: 'Calcule A - B:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 0 \\\\ 1 \\\\ 2 \\end{pmatrix}, B = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} -2 \\\\ 0 \\\\ 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 \\\\ 2 \\\\ 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} -2 \\\\ 1 \\\\ 2 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Resta vectores columna.'
        },
        {
            question: 'Calcule A + I:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix}, I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 3 & 3 \\\\ 4 & 6 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 & 4 \\\\ 5 & 6 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 3 \\\\ 4 & 4 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Suma la identidad.'
        },
        {
            question: 'Calcule A + A:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} x & y \\\\ z & w \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 2x & 2y \\\\ 2z & 2w \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} x^2 & y^2 \\\\ z^2 & w^2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} x & y \\\\ z & w \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Es igual a 2A.'
        },
        {
            question: 'Calcule 0 - A:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & -2 \\\\ -3 & 4 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} -1 & 2 \\\\ 3 & -4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & -2 \\\\ -3 & 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} -1 & -2 \\\\ -3 & -4 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Matriz opuesta.'
        },

        // 2. Multiplicación de Matrices (10 preguntas)
        {
            question: 'Calcule AB:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 2 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 4 & 4 \\\\ 10 & 8 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & 0 \\\\ 3 & 8 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 4 & 2 \\\\ 10 & 6 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 & 2 \\\\ 4 & 6 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Fila por columna.'
        },
        {
            question: 'Calcule AB:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}, B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 6 & 6 \\\\ 7 & 9 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 5 & 0 \\\\ 0 & 8 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Multiplicación por identidad.'
        },
        {
            question: 'Calcule AB:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 2 & 3 \\end{pmatrix}, B = \\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 23 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 8 & 15 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 8 \\\\ 15 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 14 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Producto escalar (1x2 * 2x1 = 1x1).'
        },
        {
            question: 'Calcule BA:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 2 & 3 \\end{pmatrix}, B = \\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 8 & 12 \\\\ 10 & 15 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 23 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 8 & 15 \\\\ 10 & 12 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 20 & 12 \\\\ 10 & 15 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Producto exterior (2x1 * 1x2 = 2x2).'
        },
        {
            question: 'Calcule A^2:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 2 & 2 \\\\ 2 & 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 4 & 4 \\\\ 4 & 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'A * A.'
        },
        {
            question: 'Calcule AB:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, B = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & 2 \\\\ 4 & 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 1 \\\\ 3 & 0 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Intercambia columnas.'
        },
        {
            question: 'Calcule AB:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}, B = \\begin{pmatrix} 4 & 5 \\\\ 6 & 7 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 8 & 10 \\\\ 18 & 21 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 8 & 15 \\\\ 12 & 21 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 6 & 5 \\\\ 6 & 10 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 8 & 10 \\\\ 12 & 14 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Escala filas.'
        },
        {
            question: 'Calcule AB:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}, B = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 4 \\\\ 10 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 \\\\ 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 4 \\\\ 5 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: '2x3 * 3x1 = 2x1.'
        },
        {
            question: 'Calcule AB:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}, B = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Rotación de 90 grados dos veces.'
        },
        {
            question: 'Calcule AB:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}, B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & 4 & 6 \\\\ 8 & 10 & 12 \\\\ 14 & 16 & 18 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Identidad 3x3.'
        },

        // 3. Determinantes (10 preguntas)
        {
            question: 'Calcule el determinante:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|A| = \\begin{vmatrix} 2 & 3 \\\\ 1 & 4 \\end{vmatrix}',
            options: [
                { latex: '5' },
                { latex: '11' },
                { latex: '-5' },
                { latex: '8' }
            ],
            correct: 0,
            hint: 'ad - bc.'
        },
        {
            question: 'Calcule el determinante:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|A| = \\begin{vmatrix} 5 & 0 \\\\ 2 & 3 \\end{vmatrix}',
            options: [
                { latex: '15' },
                { latex: '10' },
                { latex: '0' },
                { latex: '5' }
            ],
            correct: 0,
            hint: 'Producto diagonal.'
        },
        {
            question: 'Calcule el determinante:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|A| = \\begin{vmatrix} 1 & 2 \\\\ 2 & 4 \\end{vmatrix}',
            options: [
                { latex: '0' },
                { latex: '8' },
                { latex: '4' },
                { latex: '2' }
            ],
            correct: 0,
            hint: 'Filas proporcionales.'
        },
        {
            question: 'Calcule el determinante:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|A| = \\begin{vmatrix} -1 & 2 \\\\ 3 & -4 \\end{vmatrix}',
            options: [
                { latex: '-2' },
                { latex: '2' },
                { latex: '10' },
                { latex: '-10' }
            ],
            correct: 0,
            hint: '4 - 6.'
        },
        {
            question: 'Calcule el determinante:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|A| = \\begin{vmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{vmatrix}',
            options: [
                { latex: '6' },
                { latex: '1' },
                { latex: '5' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Matriz diagonal.'
        },
        {
            question: 'Calcule el determinante:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|A| = \\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{vmatrix}',
            options: [
                { latex: '24' },
                { latex: '10' },
                { latex: '12' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Triangular superior.'
        },
        {
            question: 'Calcule el determinante:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|A| = \\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 2 & 2 \\\\ 3 & 3 & 3 \\end{vmatrix}',
            options: [
                { latex: '0' },
                { latex: '6' },
                { latex: '1' },
                { latex: '3' }
            ],
            correct: 0,
            hint: 'Filas linealmente dependientes.'
        },
        {
            question: 'Calcule el determinante:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|A| = \\begin{vmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 0 \\\\ 4 & 0 & 5 \\end{vmatrix}',
            options: [
                { latex: '-9' },
                { latex: '9' },
                { latex: '15' },
                { latex: '-3' }
            ],
            correct: 0,
            hint: 'Expansión por cofactores.'
        },
        {
            question: 'Calcule el determinante:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|A| = \\begin{vmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 2 \\end{vmatrix}',
            options: [
                { latex: '4' },
                { latex: '6' },
                { latex: '2' },
                { latex: '8' }
            ],
            correct: 0,
            hint: 'Sarrus o cofactores.'
        },
        {
            question: 'Calcule el determinante:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|A| = \\begin{vmatrix} \\cos x & -\\sin x \\\\ \\sin x & \\cos x \\end{vmatrix}',
            options: [
                { latex: '1' },
                { latex: '0' },
                { latex: '-1' },
                { latex: '\\cos 2x' }
            ],
            correct: 0,
            hint: 'Identidad trigonométrica.'
        },

        // 4. Matrices Inversas (10 preguntas)
        {
            question: 'Calcule la inversa A^{-1}:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 1 & 0 \\\\ 0 & 0.5 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0.5 & 0 \\\\ 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 \\\\ 0 & -2 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Inversa de diagonal.'
        },
        {
            question: 'Calcule la inversa A^{-1}:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Es su propia inversa.'
        },
        {
            question: 'Calcule la inversa A^{-1}:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} -2 & 1 \\\\ 1.5 & 0.5 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & -2 \\\\ -3 & 4 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Fórmula 1/det * adj.'
        },
        {
            question: 'Calcule la inversa A^{-1}:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 1 & -1 \\\\ 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 \\\\ -1 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} -1 & -1 \\\\ 0 & -1 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Matriz elemental.'
        },
        {
            question: 'Calcule la inversa A^{-1}:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} -1 & 1 \\\\ 1 & -2 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Det = 1.'
        },
        {
            question: 'Calcule la inversa A^{-1}:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} -1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Inversa de la identidad.'
        },
        {
            question: 'Calcule la inversa A^{-1}:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 0.5 & 0 \\\\ 0 & 0 & 0.25 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & -2 & 0 \\\\ 0 & 0 & -4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 0.2 & 0 \\\\ 0 & 0 & 0.4 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Inversa de diagonal.'
        },
        {
            question: 'Calcule la inversa A^{-1}:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 0 & -1 \\\\ 0 & -1 & 0 \\\\ -1 & 0 & 0 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Matriz de permutación.'
        },
        {
            question: 'Calcule la inversa A^{-1}:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 1 & 0 & -1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & -1 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Eliminación.'
        },
        {
            question: 'Calcule la inversa A^{-1}:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 0 \\end{pmatrix}',
            options: [
                { latex: '\\text{No existe}' },
                { latex: '\\begin{pmatrix} 0.5 & 0 \\\\ 0 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Determinante cero.'
        },

        // 5. Ecuaciones Matriciales (10 preguntas)
        {
            question: 'Resuelva para X:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'X + \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 4 & 4 \\\\ 4 & 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Resta matrices.'
        },
        {
            question: 'Resuelva para X:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '2X = \\begin{pmatrix} 4 & 8 \\\\ 2 & 6 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 2 & 4 \\\\ 1 & 3 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 8 & 16 \\\\ 4 & 12 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & 4 \\\\ 2 & 3 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 4 & 8 \\\\ 2 & 6 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Divide por 2.'
        },
        {
            question: 'Resuelva para X:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix} X = \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 \\\\ 8 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1.5 \\\\ 2 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Multiplica por inversa.'
        },
        {
            question: 'Resuelva para X:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'X - \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} -1 & -1 \\\\ -1 & -1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & 2 \\\\ 2 & 2 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Suma matrices.'
        },
        {
            question: 'Resuelva para X:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} X = \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} -3 \\\\ -2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Intercambia filas.'
        },
        {
            question: 'Resuelva para X:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '3X + \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 4 & 5 \\\\ 6 & 7 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 3 & 3 \\\\ 3 & 3 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Resta y divide.'
        },
        {
            question: 'Resuelva para X:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'X \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 5 & 5 \\\\ 5 & 5 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 5 & 5 \\\\ 5 & 5 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 5 & 0 \\\\ 0 & 5 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Identidad.'
        },
        {
            question: 'Resuelva para X:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} X = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 0 \\\\ 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 4 \\\\ 2 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Sustitución hacia atrás.'
        },
        {
            question: 'Resuelva para X:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'X^T = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 1 & 4 \\\\ 2 & 3 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Transpuesta.'
        },
        {
            question: 'Resuelva para X:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'X^{-1} = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}',
            options: [
                { latex: '\\begin{pmatrix} 0.5 & 0 \\\\ 0 & 0.5 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} -2 & 0 \\\\ 0 & -2 \\end{pmatrix}' },
                { latex: '\\begin{pmatrix} 4 & 0 \\\\ 0 & 4 \\end{pmatrix}' }
            ],
            correct: 0,
            hint: 'Inversa de la inversa.'
        },

        // 6. Autovalores (10 preguntas)
        {
            question: 'Encuentre los autovalores:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}',
            options: [
                { latex: '\\lambda = 2, 3' },
                { latex: '\\lambda = 0, 0' },
                { latex: '\\lambda = 1, 1' },
                { latex: '\\lambda = 6, 1' }
            ],
            correct: 0,
            hint: 'Diagonal.'
        },
        {
            question: 'Encuentre los autovalores:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}',
            options: [
                { latex: '\\lambda = 1, 1' },
                { latex: '\\lambda = 1, 0' },
                { latex: '\\lambda = 0, 0' },
                { latex: '\\lambda = 1, -1' }
            ],
            correct: 0,
            hint: 'Triangular.'
        },
        {
            question: 'Encuentre los autovalores:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}',
            options: [
                { latex: '\\lambda = 1, -1' },
                { latex: '\\lambda = 1, 1' },
                { latex: '\\lambda = 0, 0' },
                { latex: '\\lambda = i, -i' }
            ],
            correct: 0,
            hint: 'r^2 - 1 = 0.'
        },
        {
            question: 'Encuentre los autovalores:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}',
            options: [
                { latex: '\\lambda = 3, 3' },
                { latex: '\\lambda = 9, 0' },
                { latex: '\\lambda = 3, 0' },
                { latex: '\\lambda = 1, 1' }
            ],
            correct: 0,
            hint: 'Escalar.'
        },
        {
            question: 'Encuentre los autovalores:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}',
            options: [
                { latex: '\\lambda = 3, -1' },
                { latex: '\\lambda = 1, 1' },
                { latex: '\\lambda = 2, 2' },
                { latex: '\\lambda = 0, 2' }
            ],
            correct: 0,
            hint: '(1-r)^2 - 4 = 0.'
        },
        {
            question: 'Encuentre los autovalores:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}',
            options: [
                { latex: '\\lambda = i, -i' },
                { latex: '\\lambda = 1, -1' },
                { latex: '\\lambda = 1, 1' },
                { latex: '\\lambda = 0, 0' }
            ],
            correct: 0,
            hint: 'r^2 + 1 = 0.'
        },
        {
            question: 'Encuentre los autovalores:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}',
            options: [
                { latex: '\\lambda = 2, 2' },
                { latex: '\\lambda = 2, 0' },
                { latex: '\\lambda = 1, 3' },
                { latex: '\\lambda = 4, 1' }
            ],
            correct: 0,
            hint: 'Triangular.'
        },
        {
            question: 'Encuentre los autovalores:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 4 & 2 \\\\ 3 & 3 \\end{pmatrix}',
            options: [
                { latex: '\\lambda = 6, 1' }, // Tr=7, Det=12-6=6. 6+1=7, 6*1=6. Correct.
                { latex: '\\lambda = 4, 3' },
                { latex: '\\lambda = 7, 0' },
                { latex: '\\lambda = 2, 3' }
            ],
            correct: 0,
            hint: 'Traza y determinante.'
        },
        {
            question: 'Encuentre los autovalores:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}',
            options: [
                { latex: '\\lambda = 1, 2, 3' },
                { latex: '\\lambda = 1, 1, 1' },
                { latex: '\\lambda = 6, 0, 0' },
                { latex: '\\lambda = 1, 4, 9' }
            ],
            correct: 0,
            hint: 'Diagonal 3x3.'
        },
        {
            question: 'Encuentre los autovalores:',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}',
            options: [
                { latex: '\\lambda = 0, 0, 0' },
                { latex: '\\lambda = 1, 1, 1' },
                { latex: '\\lambda = 0, 1, 2' },
                { latex: '\\text{No tiene}' }
            ],
            correct: 0,
            hint: 'Matriz nula.'
        }
    ]
};
