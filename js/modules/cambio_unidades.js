window.examCategories = window.examCategories || {};

window.examCategories.cambio_unidades = {
    name: 'Cambio de Unidades',
    description: 'Conversión de unidades en Matemáticas, Física, Química, Biología e Ingeniería',
    questions: [
        // 1. Longitud (10 preguntas)
        {
            question: 'Convertir 5 kilómetros a metros.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '5 \\text{ km} = ? \\text{ m}',
            options: [
                { latex: '5000 \\text{ m}' },
                { latex: '500 \\text{ m}' },
                { latex: '50 \\text{ m}' },
                { latex: '0.005 \\text{ m}' }
            ],
            correct: 0,
            hint: '1 km = 1000 m'
        },
        {
            question: 'Convertir 120 centímetros a metros.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '120 \\text{ cm} = ? \\text{ m}',
            options: [
                { latex: '1.2 \\text{ m}' },
                { latex: '12 \\text{ m}' },
                { latex: '0.12 \\text{ m}' },
                { latex: '1200 \\text{ m}' }
            ],
            correct: 0,
            hint: '1 m = 100 cm'
        },
        {
            question: 'Convertir 3 pulgadas a centímetros (1 in = 2.54 cm).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '3 \\text{ in} = ? \\text{ cm}',
            options: [
                { latex: '7.62 \\text{ cm}' },
                { latex: '6.54 \\text{ cm}' },
                { latex: '8.12 \\text{ cm}' },
                { latex: '3.54 \\text{ cm}' }
            ],
            correct: 0,
            hint: 'Multiplica por 2.54'
        },
        {
            question: 'Convertir 10 pies a metros (1 ft = 0.3048 m).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '10 \\text{ ft} = ? \\text{ m}',
            options: [
                { latex: '3.048 \\text{ m}' },
                { latex: '30.48 \\text{ m}' },
                { latex: '0.3048 \\text{ m}' },
                { latex: '304.8 \\text{ m}' }
            ],
            correct: 0,
            hint: 'Multiplica por 0.3048'
        },
        {
            question: 'Convertir 5000 milímetros a metros.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '5000 \\text{ mm} = ? \\text{ m}',
            options: [
                { latex: '5 \\text{ m}' },
                { latex: '50 \\text{ m}' },
                { latex: '0.5 \\text{ m}' },
                { latex: '500 \\text{ m}' }
            ],
            correct: 0,
            hint: '1 m = 1000 mm'
        },
        {
            question: 'Convertir 2 millas a kilómetros (1 mi ≈ 1.609 km).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '2 \\text{ mi} = ? \\text{ km}',
            options: [
                { latex: '3.218 \\text{ km}' },
                { latex: '1.609 \\text{ km}' },
                { latex: '2.609 \\text{ km}' },
                { latex: '4.218 \\text{ km}' }
            ],
            correct: 0,
            hint: 'Multiplica por 1.609'
        },
        {
            question: 'Convertir 0.5 metros a nanómetros (Biología).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '0.5 \\text{ m} = ? \\text{ nm}',
            options: [
                { latex: '5 \\times 10^8 \\text{ nm}' },
                { latex: '5 \\times 10^9 \\text{ nm}' },
                { latex: '5 \\times 10^6 \\text{ nm}' },
                { latex: '500 \\text{ nm}' }
            ],
            correct: 0,
            hint: '1 m = 10^9 nm'
        },
        {
            question: 'Convertir 1 yarda a pies.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ yd} = ? \\text{ ft}',
            options: [
                { latex: '3 \\text{ ft}' },
                { latex: '12 \\text{ ft}' },
                { latex: '36 \\text{ ft}' },
                { latex: '2 \\text{ ft}' }
            ],
            correct: 0,
            hint: '1 yd = 3 ft'
        },
        {
            question: 'Convertir 1.5 metros a centímetros.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1.5 \\text{ m} = ? \\text{ cm}',
            options: [
                { latex: '150 \\text{ cm}' },
                { latex: '15 \\text{ cm}' },
                { latex: '1500 \\text{ cm}' },
                { latex: '1.5 \\text{ cm}' }
            ],
            correct: 0,
            hint: '1 m = 100 cm'
        },
        {
            question: 'Convertir 1000 micrómetros a milímetros.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1000 \\text{ } \\mu\\text{m} = ? \\text{ mm}',
            options: [
                { latex: '1 \\text{ mm}' },
                { latex: '0.1 \\text{ mm}' },
                { latex: '10 \\text{ mm}' },
                { latex: '0.01 \\text{ mm}' }
            ],
            correct: 0,
            hint: '1 mm = 1000 μm'
        },

        // 2. Área (8 preguntas)
        {
            question: 'Convertir 1 metro cuadrado a centímetros cuadrados.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ m}^2 = ? \\text{ cm}^2',
            options: [
                { latex: '10000 \\text{ cm}^2' },
                { latex: '100 \\text{ cm}^2' },
                { latex: '1000 \\text{ cm}^2' },
                { latex: '10 \\text{ cm}^2' }
            ],
            correct: 0,
            hint: '100 x 100'
        },
        {
            question: 'Convertir 2 hectáreas a metros cuadrados.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '2 \\text{ ha} = ? \\text{ m}^2',
            options: [
                { latex: '20000 \\text{ m}^2' },
                { latex: '2000 \\text{ m}^2' },
                { latex: '200 \\text{ m}^2' },
                { latex: '200000 \\text{ m}^2' }
            ],
            correct: 0,
            hint: '1 ha = 10000 m²'
        },
        {
            question: 'Convertir 5 pies cuadrados a pulgadas cuadradas.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '5 \\text{ ft}^2 = ? \\text{ in}^2',
            options: [
                { latex: '720 \\text{ in}^2' }, // 5 * 144
                { latex: '60 \\text{ in}^2' },
                { latex: '500 \\text{ in}^2' },
                { latex: '144 \\text{ in}^2' }
            ],
            correct: 0,
            hint: '1 ft² = 144 in²'
        },
        {
            question: 'Convertir 100 metros cuadrados a áreas.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '100 \\text{ m}^2 = ? \\text{ a}',
            options: [
                { latex: '1 \\text{ a}' },
                { latex: '10 \\text{ a}' },
                { latex: '0.1 \\text{ a}' },
                { latex: '100 \\text{ a}' }
            ],
            correct: 0,
            hint: '1 a = 100 m²'
        },
        {
            question: 'Convertir 1 kilómetro cuadrado a hectáreas.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ km}^2 = ? \\text{ ha}',
            options: [
                { latex: '100 \\text{ ha}' },
                { latex: '10 \\text{ ha}' },
                { latex: '1000 \\text{ ha}' },
                { latex: '1 \\text{ ha}' }
            ],
            correct: 0,
            hint: '1 km² = 100 ha'
        },
        {
            question: 'Convertir 0.5 acres a pies cuadrados (1 acre = 43560 ft²).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '0.5 \\text{ acre} = ? \\text{ ft}^2',
            options: [
                { latex: '21780 \\text{ ft}^2' },
                { latex: '43560 \\text{ ft}^2' },
                { latex: '10000 \\text{ ft}^2' },
                { latex: '20000 \\text{ ft}^2' }
            ],
            correct: 0,
            hint: 'Mitad de 43560'
        },
        {
            question: 'Convertir 30000 cm² a m².',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '30000 \\text{ cm}^2 = ? \\text{ m}^2',
            options: [
                { latex: '3 \\text{ m}^2' },
                { latex: '30 \\text{ m}^2' },
                { latex: '0.3 \\text{ m}^2' },
                { latex: '300 \\text{ m}^2' }
            ],
            correct: 0,
            hint: 'Divide por 10000'
        },
        {
            question: 'Convertir 400 mm² a cm².',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '400 \\text{ mm}^2 = ? \\text{ cm}^2',
            options: [
                { latex: '4 \\text{ cm}^2' },
                { latex: '40 \\text{ cm}^2' },
                { latex: '0.4 \\text{ cm}^2' },
                { latex: '4000 \\text{ cm}^2' }
            ],
            correct: 0,
            hint: 'Divide por 100'
        },

        // 3. Volumen (8 preguntas)
        {
            question: 'Convertir 1 metro cúbico a litros.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ m}^3 = ? \\text{ L}',
            options: [
                { latex: '1000 \\text{ L}' },
                { latex: '100 \\text{ L}' },
                { latex: '10 \\text{ L}' },
                { latex: '10000 \\text{ L}' }
            ],
            correct: 0,
            hint: '1 m³ = 1000 L'
        },
        {
            question: 'Convertir 500 mililitros a litros.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '500 \\text{ ml} = ? \\text{ L}',
            options: [
                { latex: '0.5 \\text{ L}' },
                { latex: '5 \\text{ L}' },
                { latex: '50 \\text{ L}' },
                { latex: '0.05 \\text{ L}' }
            ],
            correct: 0,
            hint: '1 L = 1000 ml'
        },
        {
            question: 'Convertir 1 galón (US) a litros (1 gal ≈ 3.785 L).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ gal} = ? \\text{ L}',
            options: [
                { latex: '3.785 \\text{ L}' },
                { latex: '4.546 \\text{ L}' }, // UK gal
                { latex: '3.5 \\text{ L}' },
                { latex: '4 \\text{ L}' }
            ],
            correct: 0,
            hint: 'Factor de conversión US'
        },
        {
            question: 'Convertir 2 decímetros cúbicos a litros.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '2 \\text{ dm}^3 = ? \\text{ L}',
            options: [
                { latex: '2 \\text{ L}' },
                { latex: '20 \\text{ L}' },
                { latex: '0.2 \\text{ L}' },
                { latex: '200 \\text{ L}' }
            ],
            correct: 0,
            hint: '1 dm³ = 1 L'
        },
        {
            question: 'Convertir 1000 centímetros cúbicos a litros.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1000 \\text{ cm}^3 = ? \\text{ L}',
            options: [
                { latex: '1 \\text{ L}' },
                { latex: '10 \\text{ L}' },
                { latex: '0.1 \\text{ L}' },
                { latex: '100 \\text{ L}' }
            ],
            correct: 0,
            hint: '1000 cm³ = 1 L'
        },
        {
            question: 'Convertir 3 pies cúbicos a litros (1 ft³ ≈ 28.32 L).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '3 \\text{ ft}^3 = ? \\text{ L}',
            options: [
                { latex: '84.96 \\text{ L}' },
                { latex: '28.32 \\text{ L}' },
                { latex: '56.64 \\text{ L}' },
                { latex: '90 \\text{ L}' }
            ],
            correct: 0,
            hint: 'Multiplica por 28.32'
        },
        {
            question: 'Convertir 50 microlitros a mililitros.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '50 \\text{ } \\mu\\text{L} = ? \\text{ ml}',
            options: [
                { latex: '0.05 \\text{ ml}' },
                { latex: '0.5 \\text{ ml}' },
                { latex: '0.005 \\text{ ml}' },
                { latex: '5 \\text{ ml}' }
            ],
            correct: 0,
            hint: '1 ml = 1000 μL'
        },
        {
            question: 'Convertir 2 barriles de petróleo a galones (1 bbl = 42 gal).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '2 \\text{ bbl} = ? \\text{ gal}',
            options: [
                { latex: '84 \\text{ gal}' },
                { latex: '42 \\text{ gal}' },
                { latex: '100 \\text{ gal}' },
                { latex: '80 \\text{ gal}' }
            ],
            correct: 0,
            hint: 'Multiplica por 42'
        },

        // 4. Masa y Peso (8 preguntas)
        {
            question: 'Convertir 1 kilogramo a libras (1 kg ≈ 2.2046 lb).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ kg} = ? \\text{ lb}',
            options: [
                { latex: '2.205 \\text{ lb}' },
                { latex: '1 \\text{ lb}' },
                { latex: '0.454 \\text{ lb}' },
                { latex: '2.5 \\text{ lb}' }
            ],
            correct: 0,
            hint: 'Factor de conversión'
        },
        {
            question: 'Convertir 500 gramos a kilogramos.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '500 \\text{ g} = ? \\text{ kg}',
            options: [
                { latex: '0.5 \\text{ kg}' },
                { latex: '5 \\text{ kg}' },
                { latex: '50 \\text{ kg}' },
                { latex: '0.05 \\text{ kg}' }
            ],
            correct: 0,
            hint: '1 kg = 1000 g'
        },
        {
            question: 'Convertir 1 tonelada métrica a kilogramos.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ t} = ? \\text{ kg}',
            options: [
                { latex: '1000 \\text{ kg}' },
                { latex: '100 \\text{ kg}' },
                { latex: '2000 \\text{ lb}' },
                { latex: '10000 \\text{ kg}' }
            ],
            correct: 0,
            hint: '1 t = 1000 kg'
        },
        {
            question: 'Convertir 16 onzas a libras.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '16 \\text{ oz} = ? \\text{ lb}',
            options: [
                { latex: '1 \\text{ lb}' },
                { latex: '0.5 \\text{ lb}' },
                { latex: '2 \\text{ lb}' },
                { latex: '1.6 \\text{ lb}' }
            ],
            correct: 0,
            hint: '1 lb = 16 oz'
        },
        {
            question: 'Convertir 100 miligramos a gramos.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '100 \\text{ mg} = ? \\text{ g}',
            options: [
                { latex: '0.1 \\text{ g}' },
                { latex: '1 \\text{ g}' },
                { latex: '0.01 \\text{ g}' },
                { latex: '10 \\text{ g}' }
            ],
            correct: 0,
            hint: '1 g = 1000 mg'
        },
        {
            question: 'Convertir 1 slug a kilogramos (1 slug ≈ 14.59 kg).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ slug} = ? \\text{ kg}',
            options: [
                { latex: '14.59 \\text{ kg}' },
                { latex: '10 \\text{ kg}' },
                { latex: '32.17 \\text{ kg}' },
                { latex: '1 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'Unidad imperial de masa'
        },
        {
            question: 'Convertir 5 quilates a gramos (1 ct = 0.2 g).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '5 \\text{ ct} = ? \\text{ g}',
            options: [
                { latex: '1 \\text{ g}' },
                { latex: '0.5 \\text{ g}' },
                { latex: '2 \\text{ g}' },
                { latex: '5 \\text{ g}' }
            ],
            correct: 0,
            hint: 'Multiplica por 0.2'
        },
        {
            question: 'Convertir 1 microgramo a nanogramos.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ } \\mu\\text{g} = ? \\text{ ng}',
            options: [
                { latex: '1000 \\text{ ng}' },
                { latex: '100 \\text{ ng}' },
                { latex: '10 \\text{ ng}' },
                { latex: '0.001 \\text{ ng}' }
            ],
            correct: 0,
            hint: '1 μg = 1000 ng'
        },

        // 5. Tiempo (8 preguntas)
        {
            question: 'Convertir 2 horas a minutos.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '2 \\text{ h} = ? \\text{ min}',
            options: [
                { latex: '120 \\text{ min}' },
                { latex: '60 \\text{ min}' },
                { latex: '100 \\text{ min}' },
                { latex: '200 \\text{ min}' }
            ],
            correct: 0,
            hint: '1 h = 60 min'
        },
        {
            question: 'Convertir 1 día a segundos.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ d} = ? \\text{ s}',
            options: [
                { latex: '86400 \\text{ s}' },
                { latex: '3600 \\text{ s}' },
                { latex: '1440 \\text{ s}' },
                { latex: '24000 \\text{ s}' }
            ],
            correct: 0,
            hint: '24 * 60 * 60'
        },
        {
            question: 'Convertir 1800 segundos a minutos.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1800 \\text{ s} = ? \\text{ min}',
            options: [
                { latex: '30 \\text{ min}' },
                { latex: '18 \\text{ min}' },
                { latex: '60 \\text{ min}' },
                { latex: '20 \\text{ min}' }
            ],
            correct: 0,
            hint: 'Divide por 60'
        },
        {
            question: 'Convertir 1 año (365 días) a horas.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ año} = ? \\text{ h}',
            options: [
                { latex: '8760 \\text{ h}' },
                { latex: '3650 \\text{ h}' },
                { latex: '8000 \\text{ h}' },
                { latex: '2400 \\text{ h}' }
            ],
            correct: 0,
            hint: '365 * 24'
        },
        {
            question: 'Convertir 1 milisegundo a microsegundos.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ ms} = ? \\text{ } \\mu\\text{s}',
            options: [
                { latex: '1000 \\text{ } \\mu\\text{s}' },
                { latex: '100 \\text{ } \\mu\\text{s}' },
                { latex: '10 \\text{ } \\mu\\text{s}' },
                { latex: '0.001 \\text{ } \\mu\\text{s}' }
            ],
            correct: 0,
            hint: '1 ms = 1000 μs'
        },
        {
            question: 'Convertir 0.5 horas a segundos.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '0.5 \\text{ h} = ? \\text{ s}',
            options: [
                { latex: '1800 \\text{ s}' },
                { latex: '3600 \\text{ s}' },
                { latex: '1200 \\text{ s}' },
                { latex: '3000 \\text{ s}' }
            ],
            correct: 0,
            hint: '30 min * 60'
        },
        {
            question: 'Convertir 1 semana a horas.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ sem} = ? \\text{ h}',
            options: [
                { latex: '168 \\text{ h}' },
                { latex: '120 \\text{ h}' },
                { latex: '144 \\text{ h}' },
                { latex: '240 \\text{ h}' }
            ],
            correct: 0,
            hint: '7 * 24'
        },
        {
            question: 'Convertir 1 década a años.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ década} = ? \\text{ años}',
            options: [
                { latex: '10 \\text{ años}' },
                { latex: '100 \\text{ años}' },
                { latex: '5 \\text{ años}' },
                { latex: '20 \\text{ años}' }
            ],
            correct: 0,
            hint: 'Definición de década'
        },

        // 6. Velocidad (6 preguntas)
        {
            question: 'Convertir 90 km/h a m/s.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '90 \\text{ km/h} = ? \\text{ m/s}',
            options: [
                { latex: '25 \\text{ m/s}' },
                { latex: '30 \\text{ m/s}' },
                { latex: '20 \\text{ m/s}' },
                { latex: '900 \\text{ m/s}' }
            ],
            correct: 0,
            hint: 'Divide por 3.6'
        },
        {
            question: 'Convertir 10 m/s a km/h.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '10 \\text{ m/s} = ? \\text{ km/h}',
            options: [
                { latex: '36 \\text{ km/h}' },
                { latex: '3.6 \\text{ km/h}' },
                { latex: '100 \\text{ km/h}' },
                { latex: '60 \\text{ km/h}' }
            ],
            correct: 0,
            hint: 'Multiplica por 3.6'
        },
        {
            question: 'Convertir 60 mph a km/h (1 mph ≈ 1.609 km/h).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '60 \\text{ mph} = ? \\text{ km/h}',
            options: [
                { latex: '96.54 \\text{ km/h}' },
                { latex: '100 \\text{ km/h}' },
                { latex: '60 \\text{ km/h}' },
                { latex: '120 \\text{ km/h}' }
            ],
            correct: 0,
            hint: 'Multiplica por 1.609'
        },
        {
            question: 'Convertir 1 nudo a km/h (1 kn = 1.852 km/h).',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ kn} = ? \\text{ km/h}',
            options: [
                { latex: '1.852 \\text{ km/h}' },
                { latex: '1.609 \\text{ km/h}' },
                { latex: '2 \\text{ km/h}' },
                { latex: '1 \\text{ km/h}' }
            ],
            correct: 0,
            hint: 'Milla náutica por hora'
        },
        {
            question: 'Convertir la velocidad de la luz (c ≈ 3x10^8 m/s) a km/s.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '3 \\times 10^8 \\text{ m/s} = ? \\text{ km/s}',
            options: [
                { latex: '300,000 \\text{ km/s}' },
                { latex: '30,000 \\text{ km/s}' },
                { latex: '3,000,000 \\text{ km/s}' },
                { latex: '300 \\text{ km/s}' }
            ],
            correct: 0,
            hint: 'Divide por 1000'
        },
        {
            question: 'Convertir Mach 1 (≈ 343 m/s) a km/h.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '343 \\text{ m/s} = ? \\text{ km/h}',
            options: [
                { latex: '1234.8 \\text{ km/h}' },
                { latex: '1000 \\text{ km/h}' },
                { latex: '3430 \\text{ km/h}' },
                { latex: '600 \\text{ km/h}' }
            ],
            correct: 0,
            hint: 'Multiplica por 3.6'
        },

        // 7. Temperatura (6 preguntas)
        {
            question: 'Convertir 0°C a Fahrenheit.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '0^\\circ\\text{C} = ? ^\\circ\\text{F}',
            options: [
                { latex: '32^\\circ\\text{F}' },
                { latex: '0^\\circ\\text{F}' },
                { latex: '100^\\circ\\text{F}' },
                { latex: '212^\\circ\\text{F}' }
            ],
            correct: 0,
            hint: '(C * 9/5) + 32'
        },
        {
            question: 'Convertir 100°C a Fahrenheit.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '100^\\circ\\text{C} = ? ^\\circ\\text{F}',
            options: [
                { latex: '212^\\circ\\text{F}' },
                { latex: '180^\\circ\\text{F}' },
                { latex: '100^\\circ\\text{F}' },
                { latex: '32^\\circ\\text{F}' }
            ],
            correct: 0,
            hint: 'Punto de ebullición del agua'
        },
        {
            question: 'Convertir 25°C a Kelvin.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '25^\\circ\\text{C} = ? \\text{ K}',
            options: [
                { latex: '298.15 \\text{ K}' },
                { latex: '273.15 \\text{ K}' },
                { latex: '300 \\text{ K}' },
                { latex: '25 \\text{ K}' }
            ],
            correct: 0,
            hint: 'C + 273.15'
        },
        {
            question: 'Convertir 0 K a Celsius.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '0 \\text{ K} = ? ^\\circ\\text{C}',
            options: [
                { latex: '-273.15^\\circ\\text{C}' },
                { latex: '0^\\circ\\text{C}' },
                { latex: '-100^\\circ\\text{C}' },
                { latex: '273.15^\\circ\\text{C}' }
            ],
            correct: 0,
            hint: 'Cero absoluto'
        },
        {
            question: 'Convertir 98.6°F a Celsius.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '98.6^\\circ\\text{F} = ? ^\\circ\\text{C}',
            options: [
                { latex: '37^\\circ\\text{C}' },
                { latex: '36^\\circ\\text{C}' },
                { latex: '38^\\circ\\text{C}' },
                { latex: '40^\\circ\\text{C}' }
            ],
            correct: 0,
            hint: '(F - 32) * 5/9'
        },
        {
            question: 'Convertir 300 K a Celsius.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '300 \\text{ K} = ? ^\\circ\\text{C}',
            options: [
                { latex: '26.85^\\circ\\text{C}' },
                { latex: '27^\\circ\\text{C}' },
                { latex: '300^\\circ\\text{C}' },
                { latex: '100^\\circ\\text{C}' }
            ],
            correct: 0,
            hint: 'K - 273.15'
        },

        // 8. Almacenamiento de Datos (6 preguntas)
        {
            question: 'Convertir 1 Kilobyte a bytes.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ KB} = ? \\text{ B}',
            options: [
                { latex: '1024 \\text{ B}' },
                { latex: '1000 \\text{ B}' },
                { latex: '8 \\text{ B}' },
                { latex: '100 \\text{ B}' }
            ],
            correct: 0,
            hint: 'Sistema binario (2^10)'
        },
        {
            question: 'Convertir 1 Gigabyte a Megabytes.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ GB} = ? \\text{ MB}',
            options: [
                { latex: '1024 \\text{ MB}' },
                { latex: '1000 \\text{ MB}' },
                { latex: '100 \\text{ MB}' },
                { latex: '10 \\text{ MB}' }
            ],
            correct: 0,
            hint: '1 GB = 1024 MB'
        },
        {
            question: 'Convertir 1 Terabyte a Gigabytes.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1 \\text{ TB} = ? \\text{ GB}',
            options: [
                { latex: '1024 \\text{ GB}' },
                { latex: '1000 \\text{ GB}' },
                { latex: '10000 \\text{ GB}' },
                { latex: '500 \\text{ GB}' }
            ],
            correct: 0,
            hint: '1 TB = 1024 GB'
        },
        {
            question: 'Convertir 8 bits a bytes.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '8 \\text{ bits} = ? \\text{ B}',
            options: [
                { latex: '1 \\text{ B}' },
                { latex: '8 \\text{ B}' },
                { latex: '0.1 \\text{ B}' },
                { latex: '2 \\text{ B}' }
            ],
            correct: 0,
            hint: '1 Byte = 8 bits'
        },
        {
            question: 'Convertir 1024 Megabytes a Gigabytes.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '1024 \\text{ MB} = ? \\text{ GB}',
            options: [
                { latex: '1 \\text{ GB}' },
                { latex: '10 \\text{ GB}' },
                { latex: '0.1 \\text{ GB}' },
                { latex: '100 \\text{ GB}' }
            ],
            correct: 0,
            hint: '1024 MB = 1 GB'
        },
        {
            question: 'Convertir 500 Gigabytes a Terabytes.',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '500 \\text{ GB} = ? \\text{ TB}',
            options: [
                { latex: '0.488 \\text{ TB}' }, // 500/1024
                { latex: '0.5 \\text{ TB}' },
                { latex: '5 \\text{ TB}' },
                { latex: '0.05 \\text{ TB}' }
            ],
            correct: 0,
            hint: 'Divide por 1024'
        }
    ]
};
