window.examCategories = window.examCategories || {};

window.examCategories.ecuaciones = {
    name: 'Ecuaciones y Despejes',
    description: 'Solución y despeje de variables en ecuaciones de diversas ciencias',
    questions: [
        // 1. Física (10 preguntas)
        {
            question: 'Física - Cinemática: Despeje la aceleración (a)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'v_f = v_i + at',
            options: [
                { latex: 'a = \\frac{v_f - v_i}{t}' },
                { latex: 'a = \\frac{v_f + v_i}{t}' },
                { latex: 'a = v_f - v_i - t' },
                { latex: 'a = \\frac{t}{v_f - v_i}' }
            ],
            correct: 0,
            hint: 'Resta vi y divide por t.'
        },
        {
            question: 'Física - Cinemática: Despeje la velocidad inicial (vi)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'd = v_i t + \\frac{1}{2}at^2',
            options: [
                { latex: 'v_i = \\frac{d - 0.5at^2}{t}' },
                { latex: 'v_i = \\frac{d}{t} - 0.5at' },
                { latex: 'v_i = \\frac{d + 0.5at^2}{t}' },
                { latex: 'v_i = d - 0.5at^2' }
            ],
            correct: 1,
            hint: 'Resta el término de aceleración y divide por t.'
        },
        {
            question: 'Física - Dinámica: Despeje la masa (m)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'F = ma',
            options: [
                { latex: 'm = \\frac{F}{a}' },
                { latex: 'm = F - a' },
                { latex: 'm = Fa' },
                { latex: 'm = \\frac{a}{F}' }
            ],
            correct: 0,
            hint: 'Divide por a.'
        },
        {
            question: 'Física - Energía: Despeje la velocidad (v)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'K = \\frac{1}{2}mv^2',
            options: [
                { latex: 'v = \\sqrt{\\frac{2K}{m}}' },
                { latex: 'v = \\frac{2K}{m}' },
                { latex: 'v = \\sqrt{\\frac{K}{2m}}' },
                { latex: 'v = \\frac{K}{2m}' }
            ],
            correct: 0,
            hint: 'Multiplica por 2, divide por m y saca raíz.'
        },
        {
            question: 'Física - Gravitación: Despeje la distancia (r)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'F = G\\frac{m_1 m_2}{r^2}',
            options: [
                { latex: 'r = \\sqrt{\\frac{Gm_1 m_2}{F}}' },
                { latex: 'r = \\frac{Gm_1 m_2}{F}' },
                { latex: 'r = \\sqrt{FGm_1 m_2}' },
                { latex: 'r = \\frac{F}{Gm_1 m_2}' }
            ],
            correct: 0,
            hint: 'Pasa r^2 a multiplicar y F a dividir.'
        },
        {
            question: 'Física - Ondas: Despeje la frecuencia (f)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'v = \\lambda f',
            options: [
                { latex: 'f = \\frac{v}{\\lambda}' },
                { latex: 'f = v\\lambda' },
                { latex: 'f = \\frac{\\lambda}{v}' },
                { latex: 'f = v - \\lambda' }
            ],
            correct: 0,
            hint: 'Divide por lambda.'
        },
        {
            question: 'Física - Electricidad: Despeje la resistencia (R)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'V = IR',
            options: [
                { latex: 'R = \\frac{V}{I}' },
                { latex: 'R = VI' },
                { latex: 'R = \\frac{I}{V}' },
                { latex: 'R = V - I' }
            ],
            correct: 0,
            hint: 'Ley de Ohm.'
        },
        {
            question: 'Física - Termodinámica: Despeje la temperatura final (Tf)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'Q = mc(T_f - T_i)',
            options: [
                { latex: 'T_f = \\frac{Q}{mc} + T_i' },
                { latex: 'T_f = \\frac{Q}{mc} - T_i' },
                { latex: 'T_f = \\frac{Q + T_i}{mc}' },
                { latex: 'T_f = Qmc + T_i' }
            ],
            correct: 0,
            hint: 'Divide por mc y suma Ti.'
        },
        {
            question: 'Física - Péndulo: Despeje la longitud (L)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'T = 2\\pi\\sqrt{\\frac{L}{g}}',
            options: [
                { latex: 'L = g\\left(\\frac{T}{2\\pi}\\right)^2' },
                { latex: 'L = \\frac{gT^2}{2\\pi}' },
                { latex: 'L = \\sqrt{\\frac{Tg}{2\\pi}}' },
                { latex: 'L = \\frac{T^2}{4\\pi^2 g}' }
            ],
            correct: 0,
            hint: 'Eleva al cuadrado y despeja L.'
        },
        {
            question: 'Física - Presión: Despeje la fuerza (F)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'P = \\frac{F}{A}',
            options: [
                { latex: 'F = PA' },
                { latex: 'F = \\frac{P}{A}' },
                { latex: 'F = \\frac{A}{P}' },
                { latex: 'F = P + A' }
            ],
            correct: 0,
            hint: 'Multiplica por A.'
        },

        // 2. Química (10 preguntas)
        {
            question: 'Química - Gases Ideales: Despeje la temperatura (T)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'PV = nRT',
            options: [
                { latex: 'T = \\frac{PV}{nR}' },
                { latex: 'T = \\frac{nR}{PV}' },
                { latex: 'T = PVnR' },
                { latex: 'T = \\frac{P}{VnR}' }
            ],
            correct: 0,
            hint: 'Divide por nR.'
        },
        {
            question: 'Química - Densidad: Despeje el volumen (V)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\rho = \\frac{m}{V}',
            options: [
                { latex: 'V = \\frac{m}{\\rho}' },
                { latex: 'V = m\\rho' },
                { latex: 'V = \\frac{\\rho}{m}' },
                { latex: 'V = m - \\rho' }
            ],
            correct: 0,
            hint: 'Intercambia V y rho.'
        },
        {
            question: 'Química - Molaridad: Despeje los moles (n)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'M = \\frac{n}{V}',
            options: [
                { latex: 'n = MV' },
                { latex: 'n = \\frac{M}{V}' },
                { latex: 'n = \\frac{V}{M}' },
                { latex: 'n = M + V' }
            ],
            correct: 0,
            hint: 'Multiplica por V.'
        },
        {
            question: 'Química - Ley de Charles: Despeje T2',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2}',
            options: [
                { latex: 'T_2 = \\frac{V_2 T_1}{V_1}' },
                { latex: 'T_2 = \\frac{V_1 T_1}{V_2}' },
                { latex: 'T_2 = \\frac{V_1 V_2}{T_1}' },
                { latex: 'T_2 = V_2 T_1 V_1' }
            ],
            correct: 0,
            hint: 'Regla de tres.'
        },
        {
            question: 'Química - Ley de Boyle: Despeje P2',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'P_1 V_1 = P_2 V_2',
            options: [
                { latex: 'P_2 = \\frac{P_1 V_1}{V_2}' },
                { latex: 'P_2 = \\frac{P_1 V_2}{V_1}' },
                { latex: 'P_2 = P_1 V_1 V_2' },
                { latex: 'P_2 = \\frac{V_2}{P_1 V_1}' }
            ],
            correct: 0,
            hint: 'Divide por V2.'
        },
        {
            question: 'Química - Dilución: Despeje V1',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'C_1 V_1 = C_2 V_2',
            options: [
                { latex: 'V_1 = \\frac{C_2 V_2}{C_1}' },
                { latex: 'V_1 = \\frac{C_1 V_2}{C_2}' },
                { latex: 'V_1 = C_1 C_2 V_2' },
                { latex: 'V_1 = \\frac{C_2}{C_1 V_2}' }
            ],
            correct: 0,
            hint: 'Divide por C1.'
        },
        {
            question: 'Química - Energía Libre: Despeje la Entalpía (H)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'G = H - TS',
            options: [
                { latex: 'H = G + TS' },
                { latex: 'H = G - TS' },
                { latex: 'H = \\frac{G}{TS}' },
                { latex: 'H = GTS' }
            ],
            correct: 0,
            hint: 'Suma TS.'
        },
        {
            question: 'Química - pH: Despeje la concentración de H+',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'pH = -\\log[H^+]',
            options: [
                { latex: '[H^+] = 10^{-pH}' },
                { latex: '[H^+] = 10^{pH}' },
                { latex: '[H^+] = -10^{pH}' },
                { latex: '[H^+] = \\log(pH)' }
            ],
            correct: 0,
            hint: 'Usa la definición de logaritmo.'
        },
        {
            question: 'Química - Ecuación de Nernst: Despeje E0',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'E = E^0 - \\frac{RT}{nF}\\ln Q',
            options: [
                { latex: 'E^0 = E + \\frac{RT}{nF}\\ln Q' },
                { latex: 'E^0 = E - \\frac{RT}{nF}\\ln Q' },
                { latex: 'E^0 = E \\cdot \\frac{RT}{nF}\\ln Q' },
                { latex: 'E^0 = \\frac{E}{\\ln Q}' }
            ],
            correct: 0,
            hint: 'Suma el término logarítmico.'
        },
        {
            question: 'Química - Fracción Molar: Despeje n_A',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'X_A = \\frac{n_A}{n_A + n_B}',
            options: [
                { latex: 'n_A = \\frac{X_A n_B}{1 - X_A}' },
                { latex: 'n_A = X_A n_B' },
                { latex: 'n_A = \\frac{n_B}{X_A - 1}' },
                { latex: 'n_A = n_B(1 - X_A)' }
            ],
            correct: 0,
            hint: 'Multiplica, distribuye y agrupa nA.'
        },

        // 3. Geometría (10 preguntas)
        {
            question: 'Geometría - Rectángulo: Despeje la base (b)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'P = 2b + 2h',
            options: [
                { latex: 'b = \\frac{P - 2h}{2}' },
                { latex: 'b = \\frac{P}{2} - h' },
                { latex: 'b = P - 2h' },
                { latex: 'b = \\frac{P + 2h}{2}' }
            ],
            correct: 1,
            hint: 'Resta 2h y divide por 2.'
        },
        {
            question: 'Geometría - Círculo: Despeje el radio (r)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\pi r^2',
            options: [
                { latex: 'r = \\sqrt{\\frac{A}{\\pi}}' },
                { latex: 'r = \\frac{A}{\\pi}' },
                { latex: 'r = \\frac{\\sqrt{A}}{\\pi}' },
                { latex: 'r = A\\pi' }
            ],
            correct: 0,
            hint: 'Divide por pi y saca raíz.'
        },
        {
            question: 'Geometría - Trapecio: Despeje la altura (h)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\frac{(B+b)h}{2}',
            options: [
                { latex: 'h = \\frac{2A}{B+b}' },
                { latex: 'h = \\frac{A}{2(B+b)}' },
                { latex: 'h = 2A(B+b)' },
                { latex: 'h = \\frac{B+b}{2A}' }
            ],
            correct: 0,
            hint: 'Multiplica por 2 y divide por la suma de bases.'
        },
        {
            question: 'Geometría - Esfera: Despeje el radio (r)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'V = \\frac{4}{3}\\pi r^3',
            options: [
                { latex: 'r = \\sqrt[3]{\\frac{3V}{4\\pi}}' },
                { latex: 'r = \\frac{3V}{4\\pi}' },
                { latex: 'r = \\sqrt{\\frac{3V}{4\\pi}}' },
                { latex: 'r = \\sqrt[3]{3V4\\pi}' }
            ],
            correct: 0,
            hint: 'Multiplica por 3/4pi y saca raíz cúbica.'
        },
        {
            question: 'Geometría - Cilindro: Despeje la altura (h)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'V = \\pi r^2 h',
            options: [
                { latex: 'h = \\frac{V}{\\pi r^2}' },
                { latex: 'h = V\\pi r^2' },
                { latex: 'h = \\frac{\\pi r^2}{V}' },
                { latex: 'h = V - \\pi r^2' }
            ],
            correct: 0,
            hint: 'Divide por el área de la base.'
        },
        {
            question: 'Geometría - Cono: Despeje el radio (r)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'V = \\frac{1}{3}\\pi r^2 h',
            options: [
                { latex: 'r = \\sqrt{\\frac{3V}{\\pi h}}' },
                { latex: 'r = \\frac{3V}{\\pi h}' },
                { latex: 'r = \\sqrt{\\frac{V}{3\\pi h}}' },
                { latex: 'r = \\frac{3Vh}{\\pi}' }
            ],
            correct: 0,
            hint: 'Despeja r^2 primero.'
        },
        {
            question: 'Geometría - Pitágoras: Despeje un cateto (a)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'c^2 = a^2 + b^2',
            options: [
                { latex: 'a = \\sqrt{c^2 - b^2}' },
                { latex: 'a = c - b' },
                { latex: 'a = \\sqrt{c^2 + b^2}' },
                { latex: 'a = c^2 - b^2' }
            ],
            correct: 0,
            hint: 'Resta b^2 y saca raíz.'
        },
        {
            question: 'Geometría - Polígono Regular: Despeje el apotema (a)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\frac{Pa}{2}',
            options: [
                { latex: 'a = \\frac{2A}{P}' },
                { latex: 'a = \\frac{A}{2P}' },
                { latex: 'a = 2AP' },
                { latex: 'a = \\frac{P}{2A}' }
            ],
            correct: 0,
            hint: 'Multiplica por 2 y divide por P.'
        },
        {
            question: 'Geometría - Sector Circular: Despeje el ángulo (theta)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'L = \\theta r',
            options: [
                { latex: '\\theta = \\frac{L}{r}' },
                { latex: '\\theta = Lr' },
                { latex: '\\theta = \\frac{r}{L}' },
                { latex: '\\theta = L - r' }
            ],
            correct: 0,
            hint: 'Divide por r.'
        },
        {
            question: 'Geometría - Corona Circular: Despeje R',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = \\pi(R^2 - r^2)',
            options: [
                { latex: 'R = \\sqrt{\\frac{A}{\\pi} + r^2}' },
                { latex: 'R = \\frac{A}{\\pi} + r' },
                { latex: 'R = \\sqrt{\\frac{A}{\\pi} - r^2}' },
                { latex: 'R = \\sqrt{A\\pi + r^2}' }
            ],
            correct: 0,
            hint: 'Divide por pi, suma r^2 y saca raíz.'
        },

        // 4. Economía (5 preguntas)
        {
            question: 'Economía - Interés Simple: Despeje el tiempo (t)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'I = Prt',
            options: [
                { latex: 't = \\frac{I}{Pr}' },
                { latex: 't = IPr' },
                { latex: 't = \\frac{Pr}{I}' },
                { latex: 't = I - Pr' }
            ],
            correct: 0,
            hint: 'Divide por Pr.'
        },
        {
            question: 'Economía - Monto Total: Despeje el Principal (P)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = P(1 + rt)',
            options: [
                { latex: 'P = \\frac{A}{1 + rt}' },
                { latex: 'P = A(1 - rt)' },
                { latex: 'P = A - rt' },
                { latex: 'P = \\frac{1 + rt}{A}' }
            ],
            correct: 0,
            hint: 'Divide por el paréntesis.'
        },
        {
            question: 'Economía - Ingreso: Despeje el precio (p)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'I = pq',
            options: [
                { latex: 'p = \\frac{I}{q}' },
                { latex: 'p = Iq' },
                { latex: 'p = I - q' },
                { latex: 'p = \\frac{q}{I}' }
            ],
            correct: 0,
            hint: 'Divide por la cantidad q.'
        },
        {
            question: 'Economía - Utilidad: Despeje el Costo (C)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'U = I - C',
            options: [
                { latex: 'C = I - U' },
                { latex: 'C = U - I' },
                { latex: 'C = I + U' },
                { latex: 'C = \\frac{I}{U}' }
            ],
            correct: 0,
            hint: 'Suma C y resta U.'
        },
        {
            question: 'Economía - Interés Compuesto: Despeje el Principal (P)',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'A = P(1 + r)^t',
            options: [
                { latex: 'P = \\frac{A}{(1 + r)^t}' },
                { latex: 'P = A(1 + r)^{-t}' },
                { latex: 'P = A - (1 + r)^t' },
                { latex: 'P = \\frac{(1 + r)^t}{A}' }
            ],
            correct: 0,
            hint: 'Divide por el factor de potencia.'
        },

        // 5. Matemáticas Puras (15 preguntas)
        {
            question: 'Ecuación Lineal: Despeje x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '3x + 5 = 14',
            options: [
                { latex: 'x = 3' },
                { latex: 'x = 9' },
                { latex: 'x = 19/3' },
                { latex: 'x = -3' }
            ],
            correct: 0,
            hint: 'Resta 5 y divide por 3.'
        },
        {
            question: 'Ecuación Lineal: Despeje x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '2(x - 3) = 4',
            options: [
                { latex: 'x = 5' },
                { latex: 'x = 2' },
                { latex: 'x = 1' },
                { latex: 'x = 7' }
            ],
            correct: 0,
            hint: 'Divide por 2 y suma 3.'
        },
        {
            question: 'Ecuación con Fracciones: Despeje x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{x}{2} + \\frac{x}{3} = 5',
            options: [
                { latex: 'x = 6' },
                { latex: 'x = 5' },
                { latex: 'x = 1' },
                { latex: 'x = 10' }
            ],
            correct: 0,
            hint: 'Multiplica por 6.'
        },
        {
            question: 'Ecuación Cuadrática: Resuelva para x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'x^2 - 9 = 0',
            options: [
                { latex: 'x = \\pm 3' },
                { latex: 'x = 3' },
                { latex: 'x = 9' },
                { latex: 'x = \\pm 9' }
            ],
            correct: 0,
            hint: 'Despeja x^2.'
        },
        {
            question: 'Ecuación Cuadrática: Resuelva para x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '(x-2)^2 = 16',
            options: [
                { latex: 'x = 6, -2' },
                { latex: 'x = 6' },
                { latex: 'x = 18' },
                { latex: 'x = 4, -4' }
            ],
            correct: 0,
            hint: 'Saca raíz cuadrada.'
        },
        {
            question: 'Ecuación con Radicales: Despeje x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\sqrt{x+1} = 3',
            options: [
                { latex: 'x = 8' },
                { latex: 'x = 2' },
                { latex: 'x = 10' },
                { latex: 'x = 9' }
            ],
            correct: 0,
            hint: 'Eleva al cuadrado.'
        },
        {
            question: 'Ecuación Exponencial: Despeje x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '2^x = 8',
            options: [
                { latex: 'x = 3' },
                { latex: 'x = 4' },
                { latex: 'x = 2' },
                { latex: 'x = 1' }
            ],
            correct: 0,
            hint: '8 es 2 al cubo.'
        },
        {
            question: 'Ecuación Exponencial: Despeje x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: 'e^{2x} = 5',
            options: [
                { latex: 'x = \\frac{\\ln 5}{2}' },
                { latex: 'x = \\ln 2.5' },
                { latex: 'x = \\frac{5}{2}' },
                { latex: 'x = \\ln 5' }
            ],
            correct: 0,
            hint: 'Aplica logaritmo natural.'
        },
        {
            question: 'Ecuación Logarítmica: Despeje x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\ln x = 2',
            options: [
                { latex: 'x = e^2' },
                { latex: 'x = 2e' },
                { latex: 'x = 100' },
                { latex: 'x = 2' }
            ],
            correct: 0,
            hint: 'Convierte a forma exponencial.'
        },
        {
            question: 'Ecuación Logarítmica: Despeje x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\log_2(x+1) = 3',
            options: [
                { latex: 'x = 7' },
                { latex: 'x = 8' },
                { latex: 'x = 9' },
                { latex: 'x = 5' }
            ],
            correct: 0,
            hint: '2^3 = x+1.'
        },
        {
            question: 'Sistema 2x2: Halle x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\begin{cases} x+y=5 \\\\ x-y=1 \\end{cases}',
            options: [
                { latex: 'x = 3' },
                { latex: 'x = 2' },
                { latex: 'x = 4' },
                { latex: 'x = 1' }
            ],
            correct: 0,
            hint: 'Suma las ecuaciones.'
        },
        {
            question: 'Valor Absoluto: Despeje x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '|x - 3| = 5',
            options: [
                { latex: 'x = 8, -2' },
                { latex: 'x = 8' },
                { latex: 'x = 2, -8' },
                { latex: 'x = 5, -5' }
            ],
            correct: 0,
            hint: 'x-3=5 o x-3=-5.'
        },
        {
            question: 'Despeje de Fórmula: Despeje y',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '3x - 2y = 6',
            options: [
                { latex: 'y = \\frac{3x - 6}{2}' },
                { latex: 'y = \\frac{6 - 3x}{2}' },
                { latex: 'y = 3x - 3' },
                { latex: 'y = 1.5x + 3' }
            ],
            correct: 0,
            hint: 'Resta 3x y divide por -2.'
        },
        {
            question: 'Ecuación Racional: Despeje x',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '\\frac{1}{x} + \\frac{1}{a} = \\frac{1}{b}',
            options: [
                { latex: 'x = \\frac{ab}{a-b}' },
                { latex: 'x = a - b' },
                { latex: 'x = \\frac{a-b}{ab}' },
                { latex: 'x = b - a' }
            ],
            correct: 0,
            hint: '1/x = 1/b - 1/a.'
        },
        {
            question: 'Ecuación Trigonométrica: Despeje x en [0, 2pi]',
            geogebraAppName: 'cas',
            geogebraState: '0',
            latex: '2\\sin x = 1',
            options: [
                { latex: 'x = \\pi/6, 5\\pi/6' },
                { latex: 'x = \\pi/3, 2\\pi/3' },
                { latex: 'x = \\pi/4, 3\\pi/4' },
                { latex: 'x = \\pi/2' }
            ],
            correct: 0,
            hint: 'sin x = 1/2.'
        }
    ]
};
