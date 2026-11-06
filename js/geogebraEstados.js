/*
 * Estados de las construcciones de GeoGebra (campo geogebraState de cada pregunta).
 *
 * Varias preguntas comparten una misma construcción propia (geogebraId); el estado
 * indica con qué datos se muestra en cada una. Al cargar la construcción, la aplicación
 * ejecuta en GeoGebra los comandos del estado: ajusta los deslizadores y, cuando la
 * pregunta lo necesita, también las funciones o puntos libres.
 *
 *   ESTADOS[geogebraId][geogebraState] = [comandos de GeoGebra]
 *
 * - geogebraState '0' (o sin estado): la construcción se muestra tal como está guardada.
 * - Los ángulos se escriben en grados con «°» (p. ej. 'α = 244°').
 * - Comprobado el 6 de noviembre de 2026 aplicando cada estado a la construcción real:
 *   el valor que calcula GeoGebra coincide con la respuesta correcta de la pregunta.
 * Funciona en el navegador (window.GeoGebraEstados) y en Node (merge_questions.js lo valida).
 */
(function (root) {
    'use strict';

    const ESTADOS = {
        // aritmetica_1: 1/3 + 1/4 con barras de fracción
        q5hzctte: { 1: ['num_1 = 1', 'den_1 = 3', 'num_2 = 1', 'den_2 = 4'] },
        // aritmetica_2: diagrama de Venn mostrando la expresión A ∩ B (Num = posición en la lista de expresiones)
        gjapuhgm: { 1: ['Num = 12'] },
        // aritmetica_3: misma clase de diagrama con la expresión (C ∩ A) − B
        p7rkufyv: { 1: ['Num = 21'] },
        // calculodiferencial_1: tangente a y = (x − 2)² en x = 3
        ca6sywc7: { 1: ['f(x) = (x - 2)^2', 'x_0 = 3'] },
        // calculodiferencial_2 y _3: tangente al círculo según el ángulo α
        kwrmu79x: { 1: ['α = 244°'], 2: ['α = 30°'] },
        // calculointegral_1 (sobre el eje X en [−1, 2]) y _3 (entre f y g(x) = x en [−1, 2])
        adwb7g2h: {
            1: ['f(x) = 0.5x^2 + 3', 'g(x) = 0', 'a = -1', 'b = 2'],
            2: ['f(x) = 0.5x^2 + 3', 'g(x) = x', 'a = -1', 'b = 2']
        },
        // calculointegral_2: entre f(x) = 0.5x² + 3 y g(x) = −x² − 1 en [−2, 1]
        vagpcz87: { 2: ['f(x) = 0.5x^2 + 3', 'g(x) = -x^2 - 1', 'a = -2', 'b = 1'] },
        // calculointegral_4: región entre x = √(4 − y²) y x = 1, y en [0, 1], girada alrededor del eje X
        a3nft28z: { 3: ['q(y) = sqrt(4 - y^2)', 'r(y) = 1', 'a = 0', 'b = 1'] },
        // calculointegral_5: área bajo f(x) = −0.5x² + 3 en [−2, 1]
        qz3n4vfw: { 2: ['f(x) = -0.5x^2 + 3', 'estinf = -2', 'estsup = 1'] },
        // calculomultivariado_2: tetraedro 0 ≤ x ≤ 1, 0 ≤ y ≤ 1 − x, 0 ≤ z ≤ 1 − x − y, integrando 1
        hyscdj6e: { 3: ['a = 0', 'b = 1', 'f(x) = 0', 'g(x) = 1 - x', 'w1(x, y) = 0', 'w2(x, y) = 1 - x - y', 'F(x, y, z) = 1'] },
        // calculomultivariado_3 ([0,2]×[0,2], 16 − x² − 2y²) y _5 ([−1,1]×[−2,2], √(1 − x²))
        gjff68wa: {
            1: ['a = 0', 'b = 2', 'c = 0', 'd = 2', 'f(x, y) = 16 - x^2 - 2y^2'],
            2: ['a = -1', 'b = 1', 'c = -2', 'd = 2', 'f(x, y) = sqrt(1 - x^2)']
        },
        // geometria_1, _2 y _3: triángulo por sus tres lados (fórmula de Herón)
        q8rwxsmh: {
            1: ['a = 7', 'b = 9', 'c = 12'],
            2: ['a = 10', 'b = 7', 'c = 12'],
            3: ['a = 10', 'b = 14', 'c = 12']
        }
    };

    // Comandos del estado de una pregunta, o [] si no tiene estado o es '0'
    function comandos(question) {
        if (!question || !question.geogebraId) return [];
        const estado = String(question.geogebraState ?? '0');
        if (estado === '0') return [];
        return (ESTADOS[question.geogebraId] && ESTADOS[question.geogebraId][estado]) || null; // null = estado sin definir
    }

    // Ejecuta los comandos en la construcción; devuelve los que fallaron
    function aplicar(api, question) {
        const lista = comandos(question) || [];
        return lista.filter(cmd => !api.evalCommand(cmd));
    }

    const GeoGebraEstados = { ESTADOS, comandos, aplicar };
    root.GeoGebraEstados = GeoGebraEstados;
    if (typeof module !== 'undefined' && module.exports) module.exports = GeoGebraEstados;
})(typeof window !== 'undefined' ? window : globalThis);
