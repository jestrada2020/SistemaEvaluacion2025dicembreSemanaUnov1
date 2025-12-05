window.examCategories = window.examCategories || {};

window.examCategories.estadistica_descriptiva = {
    name: 'Estadística Descriptiva',
    description: 'Conceptos básicos, tablas de frecuencia, medidas de tendencia central, dispersión y posición',
    questions: [
        // 1. Conceptos Básicos (10 preguntas)
        {
            question: 'El conjunto total de elementos que se quiere estudiar se llama:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Definición?}',
            options: [
                { latex: '\\text{Población}' },
                { latex: '\\text{Muestra}' },
                { latex: '\\text{Variable}' },
                { latex: '\\text{Dato}' }
            ],
            correct: 0,
            hint: 'El todo.'
        },
        {
            question: 'Un subconjunto representativo de la población se llama:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Definición?}',
            options: [
                { latex: '\\text{Muestra}' },
                { latex: '\\text{Individuo}' },
                { latex: '\\text{Censo}' },
                { latex: '\\text{Parámetro}' }
            ],
            correct: 0,
            hint: 'Una parte del todo.'
        },
        {
            question: 'Una variable que toma valores numéricos se llama:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Tipo de variable?}',
            options: [
                { latex: '\\text{Cuantitativa}' },
                { latex: '\\text{Cualitativa}' },
                { latex: '\\text{Nominal}' },
                { latex: '\\text{Ordinal}' }
            ],
            correct: 0,
            hint: 'Cantidad.'
        },
        {
            question: 'El número de hijos de una familia es una variable:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Cuantitativa discreta}' },
                { latex: '\\text{Cuantitativa continua}' },
                { latex: '\\text{Cualitativa nominal}' },
                { latex: '\\text{Cualitativa ordinal}' }
            ],
            correct: 0,
            hint: 'Se cuenta, no se mide.'
        },
        {
            question: 'El peso de una persona es una variable:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Cuantitativa continua}' },
                { latex: '\\text{Cuantitativa discreta}' },
                { latex: '\\text{Cualitativa}' },
                { latex: '\\text{Ordinal}' }
            ],
            correct: 0,
            hint: 'Puede tomar cualquier valor en un intervalo.'
        },
        {
            question: 'El color de ojos es una variable:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Cualitativa nominal}' },
                { latex: '\\text{Cualitativa ordinal}' },
                { latex: '\\text{Cuantitativa}' },
                { latex: '\\text{Discreta}' }
            ],
            correct: 0,
            hint: 'No tiene orden natural.'
        },
        {
            question: 'El nivel de satisfacción (Bajo, Medio, Alto) es una variable:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Cualitativa ordinal}' },
                { latex: '\\text{Cualitativa nominal}' },
                { latex: '\\text{Cuantitativa}' },
                { latex: '\\text{Continua}' }
            ],
            correct: 0,
            hint: 'Tiene un orden.'
        },
        {
            question: 'Un valor numérico que describe una característica de la población se llama:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Definición?}',
            options: [
                { latex: '\\text{Parámetro}' },
                { latex: '\\text{Estadístico}' },
                { latex: '\\text{Variable}' },
                { latex: '\\text{Dato}' }
            ],
            correct: 0,
            hint: 'P de Población, P de Parámetro.'
        },
        {
            question: 'Un valor numérico calculado a partir de una muestra se llama:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Definición?}',
            options: [
                { latex: '\\text{Estadístico}' },
                { latex: '\\text{Parámetro}' },
                { latex: '\\text{Censo}' },
                { latex: '\\text{Variable}' }
            ],
            correct: 0,
            hint: 'E de Estadístico.'
        },
        {
            question: 'La estadística que se encarga de recolectar, organizar y presentar datos es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Rama?}',
            options: [
                { latex: '\\text{Estadística Descriptiva}' },
                { latex: '\\text{Estadística Inferencial}' },
                { latex: '\\text{Probabilidad}' },
                { latex: '\\text{Muestreo}' }
            ],
            correct: 0,
            hint: 'Describe los datos.'
        },

        // 2. Tablas de Frecuencia (10 preguntas)
        {
            question: 'La frecuencia absoluta (fi) representa:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'f_i = ?',
            options: [
                { latex: '\\text{El número de veces que se repite un dato}' },
                { latex: '\\text{La proporción de datos}' },
                { latex: '\\text{La suma acumulada}' },
                { latex: '\\text{El porcentaje}' }
            ],
            correct: 0,
            hint: 'Conteo simple.'
        },
        {
            question: 'La suma de las frecuencias absolutas es igual a:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\sum f_i = ?',
            options: [
                { latex: 'N \\text{ (Tamaño de la muestra)}' },
                { latex: '1' },
                { latex: '100' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Total de datos.'
        },
        {
            question: 'La frecuencia relativa (hi) se calcula como:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'h_i = ?',
            options: [
                { latex: '\\frac{f_i}{N}' },
                { latex: 'f_i \\times N' },
                { latex: '\\frac{N}{f_i}' },
                { latex: 'f_i \\times 100' }
            ],
            correct: 0,
            hint: 'Parte sobre el todo.'
        },
        {
            question: 'La suma de las frecuencias relativas es siempre:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\sum h_i = ?',
            options: [
                { latex: '1' },
                { latex: '100' },
                { latex: 'N' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'La unidad.'
        },
        {
            question: 'La frecuencia absoluta acumulada (Fi) del último intervalo es igual a:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'F_k = ?',
            options: [
                { latex: 'N' },
                { latex: '1' },
                { latex: 'f_k' },
                { latex: '0' }
            ],
            correct: 0,
            hint: 'Acumula todo.'
        },
        {
            question: 'Para calcular la Marca de Clase (xi) de un intervalo [a, b):',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'x_i = ?',
            options: [
                { latex: '\\frac{a+b}{2}' },
                { latex: 'b-a' },
                { latex: 'a+b' },
                { latex: '\\frac{b-a}{2}' }
            ],
            correct: 0,
            hint: 'Punto medio.'
        },
        {
            question: 'La Regla de Sturges para determinar el número de intervalos (k) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'k \\approx ?',
            options: [
                { latex: '1 + 3.322 \\log_{10}(N)' },
                { latex: '\\sqrt{N}' },
                { latex: '2N' },
                { latex: '\\log(N)' }
            ],
            correct: 0,
            hint: 'Fórmula logarítmica.'
        },
        {
            question: 'La amplitud (A) de los intervalos se calcula como:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'A = ?',
            options: [
                { latex: '\\frac{Rango}{k}' },
                { latex: 'Rango \\times k' },
                { latex: '\\frac{k}{Rango}' },
                { latex: 'Rango + k' }
            ],
            correct: 0,
            hint: 'Rango dividido por número de clases.'
        },
        {
            question: 'El Rango (R) de un conjunto de datos es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'R = ?',
            options: [
                { latex: 'x_{max} - x_{min}' },
                { latex: 'x_{max} + x_{min}' },
                { latex: '\\frac{x_{max} + x_{min}}{2}' },
                { latex: 'N' }
            ],
            correct: 0,
            hint: 'Diferencia extremos.'
        },
        {
            question: 'Si f_i = 5 y N = 20, la frecuencia relativa porcentual es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'h_i\\% = ?',
            options: [
                { latex: '25\\%' },
                { latex: '20\\%' },
                { latex: '5\\%' },
                { latex: '50\\%' }
            ],
            correct: 0,
            hint: '(5/20)*100.'
        },

        // 3. Medidas de Tendencia Central (10 preguntas)
        {
            question: 'La media aritmética de los datos 2, 4, 6 es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\bar{x} = ?',
            options: [
                { latex: '4' },
                { latex: '6' },
                { latex: '2' },
                { latex: '12' }
            ],
            correct: 0,
            hint: 'Suma dividido 3.'
        },
        {
            question: 'La mediana es el valor que:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Definición?}',
            options: [
                { latex: '\\text{Divide a los datos ordenados en dos partes iguales}' },
                { latex: '\\text{Más se repite}' },
                { latex: '\\text{Es el promedio}' },
                { latex: '\\text{Es el máximo}' }
            ],
            correct: 0,
            hint: 'Posición central.'
        },
        {
            question: 'La moda es el valor que:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Definición?}',
            options: [
                { latex: '\\text{Tiene mayor frecuencia absoluta}' },
                { latex: '\\text{Está en el centro}' },
                { latex: '\\text{Es el promedio}' },
                { latex: '\\text{Es único siempre}' }
            ],
            correct: 0,
            hint: 'Lo que está de moda (más popular).'
        },
        {
            question: 'Para los datos 1, 2, 2, 3, 4, la moda es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'Mo = ?',
            options: [
                { latex: '2' },
                { latex: '1' },
                { latex: '3' },
                { latex: '2.4' }
            ],
            correct: 0,
            hint: 'El que más se repite.'
        },
        {
            question: 'La mediana de 1, 3, 5, 7 es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'Me = ?',
            options: [
                { latex: '4' },
                { latex: '3' },
                { latex: '5' },
                { latex: '3.5' }
            ],
            correct: 0,
            hint: 'Promedio de 3 y 5.'
        },
        {
            question: '¿Qué medida es más sensible a valores extremos (atípicos)?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Medida?}',
            options: [
                { latex: '\\text{Media aritmética}' },
                { latex: '\\text{Mediana}' },
                { latex: '\\text{Moda}' },
                { latex: '\\text{Cuartil}' }
            ],
            correct: 0,
            hint: 'El promedio cambia mucho con un valor gigante.'
        },
        {
            question: 'En una distribución simétrica, la media, mediana y moda:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Relación?}',
            options: [
                { latex: '\\text{Coinciden aproximadamente}' },
                { latex: '\\text{Media > Mediana}' },
                { latex: '\\text{Media < Mediana}' },
                { latex: '\\text{Son muy diferentes}' }
            ],
            correct: 0,
            hint: 'Simetría perfecta.'
        },
        {
            question: 'La media ponderada se usa cuando:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Uso?}',
            options: [
                { latex: '\\text{Los datos tienen diferente peso o importancia}' },
                { latex: '\\text{Los datos son iguales}' },
                { latex: '\\text{Hay valores negativos}' },
                { latex: '\\text{La muestra es pequeña}' }
            ],
            correct: 0,
            hint: 'Notas con créditos.'
        },
        {
            question: 'La media geométrica de 2 y 8 es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\sqrt{2 \\times 8}',
            options: [
                { latex: '4' },
                { latex: '5' },
                { latex: '16' },
                { latex: '6' }
            ],
            correct: 0,
            hint: 'Raíz cuadrada del producto.'
        },
        {
            question: 'Para datos agrupados, la media se calcula usando:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\bar{x} = ?',
            options: [
                { latex: '\\frac{\\sum f_i x_i}{N}' },
                { latex: '\\frac{\\sum x_i}{N}' },
                { latex: '\\sum f_i' },
                { latex: '\\frac{\\sum f_i}{x_i}' }
            ],
            correct: 0,
            hint: 'Marca de clase por frecuencia.'
        },

        // 4. Medidas de Dispersión (10 preguntas)
        {
            question: 'La varianza mide:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Mide?}',
            options: [
                { latex: '\\text{La dispersión promedio al cuadrado respecto a la media}' },
                { latex: '\\text{La dispersión lineal}' },
                { latex: '\\text{El centro de los datos}' },
                { latex: '\\text{El rango total}' }
            ],
            correct: 0,
            hint: 'Unidades al cuadrado.'
        },
        {
            question: 'La desviación estándar es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\sigma = ?',
            options: [
                { latex: '\\sqrt{\\text{Varianza}}' },
                { latex: '\\text{Varianza}^2' },
                { latex: '\\frac{\\text{Varianza}}{2}' },
                { latex: '|\\text{Media}|' }
            ],
            correct: 0,
            hint: 'Raíz cuadrada.'
        },
        {
            question: 'El Coeficiente de Variación (CV) permite:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'CV = \\frac{\\sigma}{\\bar{x}}',
            options: [
                { latex: '\\text{Comparar la dispersión de dos conjuntos con unidades diferentes}' },
                { latex: '\\text{Calcular el promedio}' },
                { latex: '\\text{Saber si es simétrica}' },
                { latex: '\\text{Hallar la moda}' }
            ],
            correct: 0,
            hint: 'Es adimensional (porcentaje).'
        },
        {
            question: 'Si la varianza es 25, la desviación estándar es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\sigma = \\sqrt{25}',
            options: [
                { latex: '5' },
                { latex: '25' },
                { latex: '625' },
                { latex: '12.5' }
            ],
            correct: 0,
            hint: 'Raíz de 25.'
        },
        {
            question: 'Para una muestra, la varianza se divide por:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'S^2 = \\frac{\\sum (x_i - \\bar{x})^2}{?}',
            options: [
                { latex: 'n - 1' },
                { latex: 'n' },
                { latex: 'n + 1' },
                { latex: '2' }
            ],
            correct: 0,
            hint: 'Corrección de Bessel (insesgado).'
        },
        {
            question: 'Si todos los datos son iguales, la desviación estándar es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\sigma = ?',
            options: [
                { latex: '0' },
                { latex: '1' },
                { latex: '\\text{La media}' },
                { latex: '\\text{Infinita}' }
            ],
            correct: 0,
            hint: 'No hay dispersión.'
        },
        {
            question: 'El rango intercuartílico (RIC) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'RIC = ?',
            options: [
                { latex: 'Q_3 - Q_1' },
                { latex: 'Q_3 + Q_1' },
                { latex: 'Q_2 - Q_1' },
                { latex: 'Max - Min' }
            ],
            correct: 0,
            hint: 'Rango del 50% central.'
        },
        {
            question: 'Una desviación estándar grande indica:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Indica?}',
            options: [
                { latex: '\\text{Datos muy dispersos (heterogéneos)}' },
                { latex: '\\text{Datos muy concentrados (homogéneos)}' },
                { latex: '\\text{Media alta}' },
                { latex: '\\text{Error de cálculo}' }
            ],
            correct: 0,
            hint: 'Mucha variabilidad.'
        },
        {
            question: 'La desviación media mide:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'DM = ?',
            options: [
                { latex: '\\text{El promedio de los valores absolutos de las desviaciones}' },
                { latex: '\\text{El promedio de las desviaciones al cuadrado}' },
                { latex: '\\text{La diferencia entre max y min}' },
                { latex: '\\text{La moda}' }
            ],
            correct: 0,
            hint: 'Usa valor absoluto.'
        },
        {
            question: 'Si CV > 30%, la muestra se considera:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Consideración?}',
            options: [
                { latex: '\\text{Heterogénea}' },
                { latex: '\\text{Homogénea}' },
                { latex: '\\text{Representativa}' },
                { latex: '\\text{Simétrica}' }
            ],
            correct: 0,
            hint: 'Mucha variación relativa.'
        },

        // 5. Medidas de Posición (10 preguntas)
        {
            question: 'Los cuartiles dividen a los datos en:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Partes?}',
            options: [
                { latex: '\\text{4 partes iguales (25% cada una)}' },
                { latex: '\\text{3 partes iguales}' },
                { latex: '\\text{10 partes iguales}' },
                { latex: '\\text{100 partes iguales}' }
            ],
            correct: 0,
            hint: 'Cuarto.'
        },
        {
            question: 'El segundo cuartil (Q2) coincide con:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'Q_2 = ?',
            options: [
                { latex: '\\text{La Mediana}' },
                { latex: '\\text{La Media}' },
                { latex: '\\text{La Moda}' },
                { latex: '\\text{El Rango}' }
            ],
            correct: 0,
            hint: '50%.'
        },
        {
            question: 'Los deciles dividen a los datos en:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Partes?}',
            options: [
                { latex: '\\text{10 partes iguales}' },
                { latex: '\\text{4 partes iguales}' },
                { latex: '\\text{100 partes iguales}' },
                { latex: '\\text{5 partes iguales}' }
            ],
            correct: 0,
            hint: 'Deci = 10.'
        },
        {
            question: 'El percentil 75 (P75) coincide con:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P_{75} = ?',
            options: [
                { latex: 'Q_3' },
                { latex: 'Q_1' },
                { latex: 'Q_2' },
                { latex: 'D_7' }
            ],
            correct: 0,
            hint: '75%.'
        },
        {
            question: 'Para calcular cuartiles, los datos deben estar:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Condición?}',
            options: [
                { latex: '\\text{Ordenados}' },
                { latex: '\\text{Desordenados}' },
                { latex: '\\text{Agrupados siempre}' },
                { latex: '\\text{Aleatorios}' }
            ],
            correct: 0,
            hint: 'Posición requiere orden.'
        },
        {
            question: 'El percentil 50 es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'P_{50} = ?',
            options: [
                { latex: '\\text{La Mediana}' },
                { latex: '\\text{La Moda}' },
                { latex: '\\text{El promedio}' },
                { latex: '\\text{El mínimo}' }
            ],
            correct: 0,
            hint: 'Mitad.'
        },
        {
            question: '¿Cuántos percentiles hay?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Cantidad?}',
            options: [
                { latex: '99' },
                { latex: '100' },
                { latex: '10' },
                { latex: '4' }
            ],
            correct: 0,
            hint: 'Dividen en 100 partes (cortes).'
        },
        {
            question: 'El diagrama de caja y bigotes (Boxplot) usa:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Valores?}',
            options: [
                { latex: '\\text{Min, Q1, Q2, Q3, Max}' },
                { latex: '\\text{Media y Desviación}' },
                { latex: '\\text{Frecuencias}' },
                { latex: '\\text{Moda y Rango}' }
            ],
            correct: 0,
            hint: 'Resumen de 5 números.'
        },
        {
            question: 'En un Boxplot, la caja representa:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Representa?}',
            options: [
                { latex: '\\text{El 50% central de los datos (RIC)}' },
                { latex: '\\text{Todos los datos}' },
                { latex: '\\text{Los valores atípicos}' },
                { latex: '\\text{El rango total}' }
            ],
            correct: 0,
            hint: 'De Q1 a Q3.'
        },
        {
            question: 'Un valor se considera atípico (outlier) si está:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Condición?}',
            options: [
                { latex: '\\text{Más allá de 1.5 RIC de los cuartiles}' },
                { latex: '\\text{Fuera del rango}' },
                { latex: '\\text{Lejos de la media}' },
                { latex: '\\text{Es negativo}' }
            ],
            correct: 0,
            hint: 'Regla del 1.5 RIC.'
        },

        // 6. Forma de la Distribución (10 preguntas)
        {
            question: 'El coeficiente de asimetría (Skewness) mide:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Mide?}',
            options: [
                { latex: '\\text{La falta de simetría de la distribución}' },
                { latex: '\\text{El apuntamiento}' },
                { latex: '\\text{La dispersión}' },
                { latex: '\\text{El centro}' }
            ],
            correct: 0,
            hint: 'Hacia dónde se estira la cola.'
        },
        {
            question: 'Si la asimetría es positiva (derecha):',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Relación?}',
            options: [
                { latex: '\\text{Media > Mediana}' },
                { latex: '\\text{Media < Mediana}' },
                { latex: '\\text{Media = Mediana}' },
                { latex: '\\text{No hay relación}' }
            ],
            correct: 0,
            hint: 'La cola derecha jala la media.'
        },
        {
            question: 'La curtosis mide:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Mide?}',
            options: [
                { latex: '\\text{El grado de apuntamiento o picudez}' },
                { latex: '\\text{La asimetría}' },
                { latex: '\\text{La posición}' },
                { latex: '\\text{La variabilidad}' }
            ],
            correct: 0,
            hint: 'Qué tan picuda es.'
        },
        {
            question: 'Una distribución Leptocúrtica es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Forma?}',
            options: [
                { latex: '\\text{Más picuda que la normal}' },
                { latex: '\\text{Más plana que la normal}' },
                { latex: '\\text{Igual a la normal}' },
                { latex: '\\text{Asimétrica}' }
            ],
            correct: 0,
            hint: 'Lepto = Delgado/Alto.'
        },
        {
            question: 'Una distribución Platicúrtica es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Forma?}',
            options: [
                { latex: '\\text{Más plana que la normal}' },
                { latex: '\\text{Más picuda}' },
                { latex: '\\text{Normal}' },
                { latex: '\\text{Sesgada}' }
            ],
            correct: 0,
            hint: 'Plati = Plano (como plato).'
        },
        {
            question: 'La distribución Normal tiene asimetría:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'As = ?',
            options: [
                { latex: '0' },
                { latex: '1' },
                { latex: '-1' },
                { latex: '3' }
            ],
            correct: 0,
            hint: 'Es simétrica.'
        },
        {
            question: 'Si Media = Mediana = Moda, la distribución es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Tipo?}',
            options: [
                { latex: '\\text{Simétrica}' },
                { latex: '\\text{Asimétrica positiva}' },
                { latex: '\\text{Asimétrica negativa}' },
                { latex: '\\text{Bimodal}' }
            ],
            correct: 0,
            hint: 'Perfectamente equilibrada.'
        },
        {
            question: 'El coeficiente de curtosis de la Normal (estándar) es:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: 'K = ?',
            options: [
                { latex: '3 \\text{ (o 0 en exceso)}' },
                { latex: '1' },
                { latex: '0' },
                { latex: '-3' }
            ],
            correct: 0,
            hint: 'Referencia mesocúrtica.'
        },
        {
            question: 'Una cola larga a la izquierda indica:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Asimetría?}',
            options: [
                { latex: '\\text{Negativa}' },
                { latex: '\\text{Positiva}' },
                { latex: '\\text{Nula}' },
                { latex: '\\text{Curtosis alta}' }
            ],
            correct: 0,
            hint: 'Hacia los negativos.'
        },
        {
            question: 'La forma de campana es característica de:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Distribución?}',
            options: [
                { latex: '\\text{Normal (Gaussiana)}' },
                { latex: '\\text{Uniforme}' },
                { latex: '\\text{Exponencial}' },
                { latex: '\\text{Binomial}' }
            ],
            correct: 0,
            hint: 'Campana de Gauss.'
        },

        // 7. Interpretación Gráfica (10 preguntas)
        {
            question: 'El histograma se usa para representar:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Variables?}',
            options: [
                { latex: '\\text{Cuantitativas continuas}' },
                { latex: '\\text{Cualitativas}' },
                { latex: '\\text{Series de tiempo}' },
                { latex: '\\text{Porcentajes}' }
            ],
            correct: 0,
            hint: 'Barras juntas.'
        },
        {
            question: 'El diagrama de barras se usa para:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Variables?}',
            options: [
                { latex: '\\text{Cualitativas o discretas}' },
                { latex: '\\text{Continuas}' },
                { latex: '\\text{Intervalos}' },
                { latex: '\\text{Funciones}' }
            ],
            correct: 0,
            hint: 'Barras separadas.'
        },
        {
            question: 'El diagrama de sectores (pastel) es útil para:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Mostrar?}',
            options: [
                { latex: '\\text{Proporciones o porcentajes}' },
                { latex: '\\text{Tendencias temporales}' },
                { latex: '\\text{Relación entre dos variables}' },
                { latex: '\\text{Dispersión}' }
            ],
            correct: 0,
            hint: 'Partes de un todo.'
        },
        {
            question: 'El polígono de frecuencias une:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Puntos?}',
            options: [
                { latex: '\\text{Las marcas de clase}' },
                { latex: '\\text{Los límites inferiores}' },
                { latex: '\\text{Los límites superiores}' },
                { latex: '\\text{Las frecuencias acumuladas}' }
            ],
            correct: 0,
            hint: 'Puntos medios de los techos del histograma.'
        },
        {
            question: 'La ojiva representa:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Frecuencias?}',
            options: [
                { latex: '\\text{Acumuladas}' },
                { latex: '\\text{Absolutas}' },
                { latex: '\\text{Relativas simples}' },
                { latex: '\\text{Densidad}' }
            ],
            correct: 0,
            hint: 'Siempre crece.'
        },
        {
            question: 'El diagrama de dispersión (Scatterplot) muestra:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Relación?}',
            options: [
                { latex: '\\text{Entre dos variables cuantitativas}' },
                { latex: '\\text{Frecuencias}' },
                { latex: '\\text{Evolución temporal}' },
                { latex: '\\text{Partes de un todo}' }
            ],
            correct: 0,
            hint: 'Puntos X, Y.'
        },
        {
            question: 'En un histograma, el área de las barras representa:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Representa?}',
            options: [
                { latex: '\\text{La frecuencia (proporcional)}' },
                { latex: '\\text{La variable}' },
                { latex: '\\text{El tiempo}' },
                { latex: '\\text{La media}' }
            ],
            correct: 0,
            hint: 'Base x Altura.'
        },
        {
            question: 'Un gráfico de líneas es ideal para:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Datos?}',
            options: [
                { latex: '\\text{Series de tiempo (evolución)}' },
                { latex: '\\text{Categorías nominales}' },
                { latex: '\\text{Distribución de frecuencias}' },
                { latex: '\\text{Correlación}' }
            ],
            correct: 0,
            hint: 'Tendencias.'
        },
        {
            question: 'El diagrama de Pareto ordena las barras:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Orden?}',
            options: [
                { latex: '\\text{De mayor a menor frecuencia}' },
                { latex: '\\text{Alfabéticamente}' },
                { latex: '\\text{Cronológicamente}' },
                { latex: '\\text{Aleatoriamente}' }
            ],
            correct: 0,
            hint: '80/20, priorizar lo importante.'
        },
        {
            question: 'En un diagrama de tallo y hojas, las hojas son:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Son?}',
            options: [
                { latex: '\\text{El último dígito del dato}' },
                { latex: '\\text{El primer dígito}' },
                { latex: '\\text{La frecuencia}' },
                { latex: '\\text{El promedio}' }
            ],
            correct: 0,
            hint: 'Parte final del número.'
        }
    ]
};
