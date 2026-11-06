// --- APRENDO CON VIDEOS: videos del canal del profesor John Jairo Estrada asociados a las categorías del banco ---
// Solo videos del canal; comprobados en YouTube (canal UCe_8YXWBojXgfgaiQODPWTg, título y descripción)
// el 6 de noviembre de 2026. Los títulos se muestran corregidos.
// Cada tema tiene botones que abren la «Práctica por categorías» con esa categoría ya elegida.
const VideosCanal = (() => {
    const CANAL = 'https://www.youtube.com/channel/UCe_8YXWBojXgfgaiQODPWTg';
    const DATOS = {
        // [tema, categorías del banco (claves), qué se aprende, videos]
        temas: [
            ['Sistemas de ecuaciones lineales 2 × 2', ['sistemas_ecuaciones'],
                'Método de eliminación o reducción, y cómo reconocer un sistema sin solución o con infinitas soluciones.',
                ['DDACwvcwUbw', 'Q5L_XibOiSE', 'ijjFz3qFB9I']],
            ['Expresiones y ecuaciones cuadráticas', ['factorizacion', 'ecuaciones'],
                'Factorización de trinomios, completación del cuadrado, discriminante y la técnica de Po-Shen Loh.',
                ['L1gwHr7Gv3s', '_XxheAlRoI4', 'PrNywMf4as0', 'g7lYa31Hjx0']],
            ['Antiderivadas y técnicas de integración', ['calculointegral'],
                'Tabla de antiderivadas e integrales indefinidas, sustitución e integración por partes.',
                ['OcRUNuMpNMA', 'nLEdXPAQY4U', 'vPwoyn0rsRY', 'Ews4MBYBeBI', '-rxVCvNCF8w']],
            ['Raíces de ecuaciones: bisección y secante', ['analisis_numerico'],
                'Aproximar raíces irracionales con los métodos de bisección y de la secante, paso a paso con la calculadora.',
                ['St2kbl1BIjs', 'TKXL_WrIEV0']],
            ['Ecuaciones diferenciales (apoyo)', ['ecuaciones_diferenciales'],
                'Qué es una ecuación diferencial ordinaria y una parcial: la base para resolver los problemas de valor inicial del banco.',
                ['JrUiXg_ewM4']],
            ['La recta en el plano', ['geometria_plano'],
                'Clasificación de las rectas en el plano y sus ecuaciones según los datos del problema.',
                ['QDvAAkKkSRk']],
            ['El espacio tridimensional y las superficies', ['superficies_3d', 'geometria_vectorial'],
                'Ejes y planos coordenados para ubicar puntos (x, y, z), superficies y sus trazas con planos paralelos a los coordenados.',
                ['ldSFlbdCy3k', '7SFfhykkiVc']],
            ['Funciones de varias variables, derivadas parciales e integrales dobles', ['calculomultivariado'],
                'Función de dos variables, interpretación geométrica de las derivadas parciales y regiones x-simple e y-simple para integrar.',
                ['K1FwMyE1_1E', 'LvLwY4Yl7OY', '331rg5F3izI', 'iA2Dyw4BEj0']],
            ['Áreas y volúmenes de figuras geométricas (apoyo)', ['geometria', 'geometria_triangulo'],
                'Fórmulas de áreas de regiones planas y volúmenes de sólidos más usadas al plantear y resolver problemas.',
                ['XUDgJga7zSI']],
            ['Regla de tres directa', ['regla_de_tres_agro', 'regla_de_tres'],
                'Proporcionalidad directa paso a paso, con ejemplos del sector agropecuario.',
                ['QOO3NczV_dg']]
        ],
        // Categorías del banco que todavía no tienen videos en el canal
        sin: ['Álgebra lineal', 'Aritmética', 'Cálculo diferencial', 'Cambio de unidades', 'Campos vectoriales', 'Combinatoria',
              'Estadística descriptiva', 'Estadística inferencial', 'Estadística probabilística', 'Razonamiento lógico'],
        titulos: {
            'DDACwvcwUbw': 'Método de eliminación o reducción: sistema lineal 2 × 2',
            'Q5L_XibOiSE': 'Sistemas de ecuaciones lineales 2 × 2: caso sin solución',
            'ijjFz3qFB9I': 'Solución por eliminación de un sistema con infinitas soluciones',
            'L1gwHr7Gv3s': 'Explicación de la expresión cuadrática, la ecuación cuadrática y el discriminante',
            '_XxheAlRoI4': 'Completación del cuadrado: trinomio cuadrado perfecto',
            'PrNywMf4as0': 'Solución de la ecuación cuadrática completando el cuadrado',
            'g7lYa31Hjx0': 'Factorización de expresiones cuadráticas con Po-Shen Loh',
            'OcRUNuMpNMA': 'Antiderivadas: concepto y tabla de integrales indefinidas (parte 1)',
            'nLEdXPAQY4U': 'Antiderivadas trigonométricas: tabla e integrales indefinidas (parte 2)',
            'vPwoyn0rsRY': 'Tabla de antiderivadas completa (parte 3)',
            'Ews4MBYBeBI': 'Técnica de sustitución para integrales indefinidas',
            '-rxVCvNCF8w': 'Técnica de la tabla para integración por partes',
            'St2kbl1BIjs': 'CASIO fx-350MS: método de bisección',
            'TKXL_WrIEV0': 'CASIO fx-350MS: método de la secante para raíces irracionales',
            'JrUiXg_ewM4': 'Concepto de EDO y EDP (primera parte)',
            'QDvAAkKkSRk': 'Ecuaciones de la recta en el plano',
            'ldSFlbdCy3k': 'Espacio 3D: ubicación de puntos en el espacio',
            '7SFfhykkiVc': 'Superficies claves para los conceptos básicos de un curso de varias variables',
            'K1FwMyE1_1E': 'Concepto de función de dos variables reales y criterio de la recta vertical',
            'LvLwY4Yl7OY': 'Concepto e interpretación geométrica de la derivada parcial en x y en y',
            '331rg5F3izI': 'Tipos de regiones: región x-simple (área de un triángulo formado por tres segmentos)',
            'iA2Dyw4BEj0': 'Tipos de regiones: región y-simple (área entre una recta y una parábola)',
            'XUDgJga7zSI': 'Áreas y volúmenes de conceptos geométricos claves',
            'QOO3NczV_dg': 'Regla de tres directa para agropecuarios'
        }
    };

    // Nombre de la categoría tal como aparece en el banco
    const nombre = clave => {
        const cat = window.allQuestions && window.allQuestions.categories && window.allQuestions.categories[clave];
        return cat ? cat.name : clave;
    };

    function html() {
        const esc = s => ExamUtils.escapeHtml(s);
        const enlace = id => `<li><a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube text-youtube" aria-hidden="true"></i> ${esc(DATOS.titulos[id])}<span class="visually-hidden"> (abre YouTube en una pestaña nueva)</span></a></li>`;
        const boton = clave => `<button type="button" class="btn btn-outline-primary btn-sm mt-2 me-1" data-practicar="${clave}">Practicar: ${esc(nombre(clave))}</button>`;
        const filas = DATOS.temas.map(([tema, claves, que, videos], i) => `
            <tr><td class="videos-tema"><strong>${i + 1}. ${esc(tema)}</strong>
                    <div class="videos-que">${esc(que)}</div>${claves.map(boton).join('')}</td>
                <td><ul class="videos-lista">${videos.map(enlace).join('')}</ul></td></tr>`).join('');
        const total = new Set(DATOS.temas.flatMap(t => t[3])).size;
        return `
        <h2 class="mb-3"><i class="fab fa-youtube text-youtube" aria-hidden="true"></i> Aprendo con videos</h2>
        <p>Videos del canal del profesor <strong>John Jairo Estrada</strong>, del equipo de la Caja de Herramientas, asociados a las categorías del banco de preguntas (${total} videos). Cada tema tiene botones que abren la práctica con esa categoría ya elegida.</p>
        <p><a class="btn btn-outline-danger" href="${CANAL}" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube" aria-hidden="true"></i> Ver el canal completo</a></p>
        <div class="table-responsive"><table class="table table-bordered videos-tabla">
            <thead class="table-light"><tr><th scope="col">Tema</th><th scope="col">Videos del canal</th></tr></thead>
            <tbody>${filas}</tbody></table></div>
        ${DATOS.sin.length ? `<div class="alert alert-light"><strong>Categorías que todavía no tienen videos en el canal:</strong> ${DATOS.sin.join('; ')}.</div>` : ''}
        <div class="alert alert-warning mb-0"><i class="fas fa-exclamation-triangle" aria-hidden="true"></i> Los videos se abren en una pestaña nueva del navegador y necesitan conexión a internet.</div>`;
    }
    return { html, DATOS };
})();
