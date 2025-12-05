window.examCategories = window.examCategories || {};

window.examCategories.regla_de_tres_agro = {
    name: 'Regla de Tres (Agro)',
    description: 'Problemas de proporcionalidad directa e inversa en el contexto agropecuario',
    questions: [
        // 1. Regla de Tres Simple Directa (25 preguntas)
        {
            question: 'Si 2 hectáreas de tierra producen 8 toneladas de maíz, ¿cuántas toneladas producirán 5 hectáreas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 ha} \\to 8 \\text{ ton} \\\\ \\text{5 ha} \\to x',
            options: [
                { latex: '20 \\text{ ton}' },
                { latex: '16 \\text{ ton}' },
                { latex: '25 \\text{ ton}' },
                { latex: '15 \\text{ ton}' }
            ],
            correct: 0,
            hint: 'A más tierra, más producción (Directa).'
        },
        {
            question: 'Para fertilizar 100 plantas de café se necesitan 5 kg de abono. ¿Cuántos kg se necesitan para 350 plantas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{100 plantas} \\to 5 \\text{ kg} \\\\ \\text{350 plantas} \\to x',
            options: [
                { latex: '17.5 \\text{ kg}' },
                { latex: '15 \\text{ kg}' },
                { latex: '20 \\text{ kg}' },
                { latex: '18.5 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'A más plantas, más abono (Directa).'
        },
        {
            question: 'Si 3 vacas producen 60 litros de leche al día, ¿cuántos litros producirán 8 vacas con el mismo rendimiento?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{3 vacas} \\to 60 \\text{ L} \\\\ \\text{8 vacas} \\to x',
            options: [
                { latex: '160 \\text{ L}' },
                { latex: '150 \\text{ L}' },
                { latex: '180 \\text{ L}' },
                { latex: '140 \\text{ L}' }
            ],
            correct: 0,
            hint: 'A más vacas, más leche (Directa).'
        },
        {
            question: 'Un tractor consume 12 litros de diésel para arar 4 hectáreas. ¿Cuánto consumirá para arar 10 hectáreas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 ha} \\to 12 \\text{ L} \\\\ \\text{10 ha} \\to x',
            options: [
                { latex: '30 \\text{ L}' },
                { latex: '28 \\text{ L}' },
                { latex: '32 \\text{ L}' },
                { latex: '25 \\text{ L}' }
            ],
            correct: 0,
            hint: 'A más hectáreas, más consumo (Directa).'
        },
        {
            question: 'Si se necesitan 200 gramos de semilla para sembrar 10 metros cuadrados, ¿cuántos gramos se necesitan para 50 metros cuadrados?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{10 m}^2 \\to 200 \\text{ g} \\\\ \\text{50 m}^2 \\to x',
            options: [
                { latex: '1000 \\text{ g}' },
                { latex: '800 \\text{ g}' },
                { latex: '1200 \\text{ g}' },
                { latex: '1500 \\text{ g}' }
            ],
            correct: 0,
            hint: 'A más área, más semilla (Directa).'
        },
        {
            question: 'Si 5 trabajadores recolectan 200 kg de fruta, ¿cuántos kg recolectarán 12 trabajadores al mismo ritmo?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{5 trab} \\to 200 \\text{ kg} \\\\ \\text{12 trab} \\to x',
            options: [
                { latex: '480 \\text{ kg}' },
                { latex: '400 \\text{ kg}' },
                { latex: '500 \\text{ kg}' },
                { latex: '450 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'A más trabajadores, más recolección (Directa).'
        },
        {
            question: 'El precio de 50 kg de papa es 25 dólares. ¿Cuál es el precio de 120 kg?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{50 kg} \\to 25 \\text{ USD} \\\\ \\text{120 kg} \\to x',
            options: [
                { latex: '60 \\text{ USD}' },
                { latex: '50 \\text{ USD}' },
                { latex: '70 \\text{ USD}' },
                { latex: '55 \\text{ USD}' }
            ],
            correct: 0,
            hint: 'A más peso, mayor precio (Directa).'
        },
        {
            question: 'Si un sistema de riego vierte 500 litros en 2 horas, ¿cuántos litros vierte en 5 horas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 h} \\to 500 \\text{ L} \\\\ \\text{5 h} \\to x',
            options: [
                { latex: '1250 \\text{ L}' },
                { latex: '1000 \\text{ L}' },
                { latex: '1500 \\text{ L}' },
                { latex: '1200 \\text{ L}' }
            ],
            correct: 0,
            hint: 'A más tiempo, más agua (Directa).'
        },
        {
            question: 'Para alimentar 20 cerdos se necesitan 40 kg de balanceado al día. ¿Cuánto se necesita para 35 cerdos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{20 cerdos} \\to 40 \\text{ kg} \\\\ \\text{35 cerdos} \\to x',
            options: [
                { latex: '70 \\text{ kg}' },
                { latex: '60 \\text{ kg}' },
                { latex: '80 \\text{ kg}' },
                { latex: '75 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'A más animales, más comida (Directa).'
        },
        {
            question: 'Si 4 árboles de aguacate producen 200 frutos, ¿cuántos frutos producirán 10 árboles?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 árboles} \\to 200 \\text{ frutos} \\\\ \\text{10 árboles} \\to x',
            options: [
                { latex: '500 \\text{ frutos}' },
                { latex: '400 \\text{ frutos}' },
                { latex: '600 \\text{ frutos}' },
                { latex: '450 \\text{ frutos}' }
            ],
            correct: 0,
            hint: 'A más árboles, más frutos (Directa).'
        },
        {
            question: 'Si 15 gallinas ponen 105 huevos a la semana, ¿cuántos huevos pondrán 20 gallinas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{15 gallinas} \\to 105 \\text{ huevos} \\\\ \\text{20 gallinas} \\to x',
            options: [
                { latex: '140 \\text{ huevos}' },
                { latex: '130 \\text{ huevos}' },
                { latex: '150 \\text{ huevos}' },
                { latex: '120 \\text{ huevos}' }
            ],
            correct: 0,
            hint: 'A más gallinas, más huevos (Directa).'
        },
        {
            question: 'Un agricultor vende 3 sacos de arroz por 120 dólares. ¿Cuánto ganará por 7 sacos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{3 sacos} \\to 120 \\text{ USD} \\\\ \\text{7 sacos} \\to x',
            options: [
                { latex: '280 \\text{ USD}' },
                { latex: '250 \\text{ USD}' },
                { latex: '300 \\text{ USD}' },
                { latex: '240 \\text{ USD}' }
            ],
            correct: 0,
            hint: 'A más sacos, más dinero (Directa).'
        },
        {
            question: 'Si 6 metros de alambre de púas pesan 2 kg, ¿cuánto pesarán 15 metros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{6 m} \\to 2 \\text{ kg} \\\\ \\text{15 m} \\to x',
            options: [
                { latex: '5 \\text{ kg}' },
                { latex: '4 \\text{ kg}' },
                { latex: '6 \\text{ kg}' },
                { latex: '4.5 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'A más longitud, más peso (Directa).'
        },
        {
            question: 'Una bomba extrae 80 litros de agua en 4 minutos. ¿Cuántos litros extraerá en 15 minutos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 min} \\to 80 \\text{ L} \\\\ \\text{15 min} \\to x',
            options: [
                { latex: '300 \\text{ L}' },
                { latex: '250 \\text{ L}' },
                { latex: '320 \\text{ L}' },
                { latex: '280 \\text{ L}' }
            ],
            correct: 0,
            hint: 'A más tiempo, más agua (Directa).'
        },
        {
            question: 'Si 2 kg de fertilizante cubren 50 m², ¿cuántos m² cubrirán 9 kg?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 kg} \\to 50 \\text{ m}^2 \\\\ \\text{9 kg} \\to x',
            options: [
                { latex: '225 \\text{ m}^2' },
                { latex: '200 \\text{ m}^2' },
                { latex: '250 \\text{ m}^2' },
                { latex: '215 \\text{ m}^2' }
            ],
            correct: 0,
            hint: 'A más fertilizante, más área (Directa).'
        },
        {
            question: 'Si 10 ovejas producen 30 kg de lana, ¿cuánta lana producirán 25 ovejas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{10 ovejas} \\to 30 \\text{ kg} \\\\ \\text{25 ovejas} \\to x',
            options: [
                { latex: '75 \\text{ kg}' },
                { latex: '60 \\text{ kg}' },
                { latex: '80 \\text{ kg}' },
                { latex: '70 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'A más ovejas, más lana (Directa).'
        },
        {
            question: 'Un camión transporta 4 toneladas en 2 viajes. ¿Cuántas toneladas transportará en 5 viajes?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 viajes} \\to 4 \\text{ ton} \\\\ \\text{5 viajes} \\to x',
            options: [
                { latex: '10 \\text{ ton}' },
                { latex: '8 \\text{ ton}' },
                { latex: '12 \\text{ ton}' },
                { latex: '9 \\text{ ton}' }
            ],
            correct: 0,
            hint: 'A más viajes, más carga (Directa).'
        },
        {
            question: 'Si 8 litros de pesticida cuestan 120 dólares, ¿cuánto cuestan 3 litros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{8 L} \\to 120 \\text{ USD} \\\\ \\text{3 L} \\to x',
            options: [
                { latex: '45 \\text{ USD}' },
                { latex: '40 \\text{ USD}' },
                { latex: '50 \\text{ USD}' },
                { latex: '35 \\text{ USD}' }
            ],
            correct: 0,
            hint: 'A más litros, más costo (Directa).'
        },
        {
            question: 'Si 12 plantas de tomate dan 36 kg de fruto, ¿cuántos kg darán 20 plantas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{12 plantas} \\to 36 \\text{ kg} \\\\ \\text{20 plantas} \\to x',
            options: [
                { latex: '60 \\text{ kg}' },
                { latex: '50 \\text{ kg}' },
                { latex: '70 \\text{ kg}' },
                { latex: '55 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'A más plantas, más fruto (Directa).'
        },
        {
            question: 'Si 5 caballos consumen 25 pacas de heno en un mes, ¿cuántas pacas consumirán 8 caballos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{5 caballos} \\to 25 \\text{ pacas} \\\\ \\text{8 caballos} \\to x',
            options: [
                { latex: '40 \\text{ pacas}' },
                { latex: '35 \\text{ pacas}' },
                { latex: '45 \\text{ pacas}' },
                { latex: '30 \\text{ pacas}' }
            ],
            correct: 0,
            hint: 'A más caballos, más heno (Directa).'
        },
        {
            question: 'Si 30 metros de manguera cuestan 45 dólares, ¿cuánto cuestan 50 metros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{30 m} \\to 45 \\text{ USD} \\\\ \\text{50 m} \\to x',
            options: [
                { latex: '75 \\text{ USD}' },
                { latex: '70 \\text{ USD}' },
                { latex: '80 \\text{ USD}' },
                { latex: '65 \\text{ USD}' }
            ],
            correct: 0,
            hint: 'A más longitud, más costo (Directa).'
        },
        {
            question: 'Si el 10% de una cosecha se pierde por plagas y son 50 kg, ¿cuánto es la cosecha total?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{10\\%} \\to 50 \\text{ kg} \\\\ \\text{100\\%} \\to x',
            options: [
                { latex: '500 \\text{ kg}' },
                { latex: '450 \\text{ kg}' },
                { latex: '600 \\text{ kg}' },
                { latex: '550 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 4 jornaleros podan 80 árboles, ¿cuántos árboles podarán 7 jornaleros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 jorn} \\to 80 \\text{ árb} \\\\ \\text{7 jorn} \\to x',
            options: [
                { latex: '140 \\text{ árb}' },
                { latex: '120 \\text{ árb}' },
                { latex: '160 \\text{ árb}' },
                { latex: '130 \\text{ árb}' }
            ],
            correct: 0,
            hint: 'A más jornaleros, más árboles (Directa).'
        },
        {
            question: 'Si 20 litros de leche dan 2 kg de queso, ¿cuántos kg de queso dan 50 litros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{20 L} \\to 2 \\text{ kg} \\\\ \\text{50 L} \\to x',
            options: [
                { latex: '5 \\text{ kg}' },
                { latex: '4 \\text{ kg}' },
                { latex: '6 \\text{ kg}' },
                { latex: '4.5 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'A más leche, más queso (Directa).'
        },
        {
            question: 'Si 6 sacos de abono pesan 300 kg, ¿cuánto pesan 10 sacos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{6 sacos} \\to 300 \\text{ kg} \\\\ \\text{10 sacos} \\to x',
            options: [
                { latex: '500 \\text{ kg}' },
                { latex: '450 \\text{ kg}' },
                { latex: '550 \\text{ kg}' },
                { latex: '400 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'A más sacos, más peso (Directa).'
        },

        // 2. Regla de Tres Inversa (25 preguntas)
        {
            question: 'Si 4 tractores aran un campo en 10 horas, ¿cuánto tardarán 8 tractores?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 tract} \\to 10 \\text{ h} \\\\ \\text{8 tract} \\to x',
            options: [
                { latex: '5 \\text{ h}' },
                { latex: '20 \\text{ h}' },
                { latex: '8 \\text{ h}' },
                { latex: '6 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más tractores, menos tiempo (Inversa).'
        },
        {
            question: 'Un depósito de agua dura 12 días para 20 vacas. ¿Cuánto durará si hay 30 vacas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{20 vacas} \\to 12 \\text{ días} \\\\ \\text{30 vacas} \\to x',
            options: [
                { latex: '8 \\text{ días}' },
                { latex: '18 \\text{ días}' },
                { latex: '6 \\text{ días}' },
                { latex: '10 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más vacas, menos dura el agua (Inversa).'
        },
        {
            question: 'Si 6 jornaleros cosechan una parcela en 4 días, ¿cuánto tardarán 12 jornaleros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{6 jorn} \\to 4 \\text{ días} \\\\ \\text{12 jorn} \\to x',
            options: [
                { latex: '2 \\text{ días}' },
                { latex: '8 \\text{ días}' },
                { latex: '3 \\text{ días}' },
                { latex: '6 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más jornaleros, menos tiempo (Inversa).'
        },
        {
            question: 'Si 10 caballos consumen un silo de heno en 30 días, ¿cuánto durará para 15 caballos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{10 caballos} \\to 30 \\text{ días} \\\\ \\text{15 caballos} \\to x',
            options: [
                { latex: '20 \\text{ días}' },
                { latex: '45 \\text{ días}' },
                { latex: '25 \\text{ días}' },
                { latex: '15 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más caballos, menos dura el heno (Inversa).'
        },
        {
            question: 'Una bomba de 5 HP llena un tanque en 6 horas. ¿Cuánto tardará una bomba de 10 HP (doble potencia)?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{5 HP} \\to 6 \\text{ h} \\\\ \\text{10 HP} \\to x',
            options: [
                { latex: '3 \\text{ h}' },
                { latex: '12 \\text{ h}' },
                { latex: '4 \\text{ h}' },
                { latex: '2 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más potencia, menos tiempo (Inversa).'
        },
        {
            question: 'Si 5 personas limpian un canal de riego en 8 horas, ¿cuánto tardarán 10 personas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{5 pers} \\to 8 \\text{ h} \\\\ \\text{10 pers} \\to x',
            options: [
                { latex: '4 \\text{ h}' },
                { latex: '16 \\text{ h}' },
                { latex: '6 \\text{ h}' },
                { latex: '5 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más personas, menos tiempo (Inversa).'
        },
        {
            question: 'Un camión a 60 km/h tarda 2 horas en llevar la carga al mercado. ¿Cuánto tardará a 80 km/h?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{60 km/h} \\to 2 \\text{ h} \\\\ \\text{80 km/h} \\to x',
            options: [
                { latex: '1.5 \\text{ h}' },
                { latex: '2.5 \\text{ h}' },
                { latex: '1.8 \\text{ h}' },
                { latex: '1.2 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más velocidad, menos tiempo (Inversa).'
        },
        {
            question: 'Si 20 gallinas consumen un saco de maíz en 15 días, ¿cuánto durará para 30 gallinas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{20 gallinas} \\to 15 \\text{ días} \\\\ \\text{30 gallinas} \\to x',
            options: [
                { latex: '10 \\text{ días}' },
                { latex: '22.5 \\text{ días}' },
                { latex: '12 \\text{ días}' },
                { latex: '8 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más gallinas, menos dura el maíz (Inversa).'
        },
        {
            question: 'Para cercar un terreno, 3 obreros tardan 12 días. ¿Cuánto tardarán 9 obreros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{3 obr} \\to 12 \\text{ días} \\\\ \\text{9 obr} \\to x',
            options: [
                { latex: '4 \\text{ días}' },
                { latex: '36 \\text{ días}' },
                { latex: '6 \\text{ días}' },
                { latex: '3 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más obreros, menos tiempo (Inversa).'
        },
        {
            question: 'Si 4 mangueras de riego llenan un reservorio en 10 horas, ¿cuánto tardarán 5 mangueras?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 mang} \\to 10 \\text{ h} \\\\ \\text{5 mang} \\to x',
            options: [
                { latex: '8 \\text{ h}' },
                { latex: '12.5 \\text{ h}' },
                { latex: '9 \\text{ h}' },
                { latex: '7 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más mangueras, menos tiempo (Inversa).'
        },
        {
            question: 'Un agricultor tiene comida para 50 cerdos por 40 días. Si compra 30 cerdos más (total 80), ¿cuánto durará la comida?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{50 cerdos} \\to 40 \\text{ días} \\\\ \\text{80 cerdos} \\to x',
            options: [
                { latex: '25 \\text{ días}' },
                { latex: '64 \\text{ días}' },
                { latex: '30 \\text{ días}' },
                { latex: '20 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más cerdos, menos tiempo (Inversa).'
        },
        {
            question: 'Si 2 cosechadoras terminan un campo en 6 días, ¿cuánto tardarán 3 cosechadoras?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 cos} \\to 6 \\text{ días} \\\\ \\text{3 cos} \\to x',
            options: [
                { latex: '4 \\text{ días}' },
                { latex: '9 \\text{ días}' },
                { latex: '3 \\text{ días}' },
                { latex: '5 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más cosechadoras, menos tiempo (Inversa).'
        },
        {
            question: 'Si 8 personas recolectan café en 5 días, ¿cuántas personas se necesitan para hacerlo en 2 días?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{5 días} \\to 8 \\text{ pers} \\\\ \\text{2 días} \\to x',
            options: [
                { latex: '20 \\text{ pers}' },
                { latex: '16 \\text{ pers}' },
                { latex: '25 \\text{ pers}' },
                { latex: '30 \\text{ pers}' }
            ],
            correct: 0,
            hint: 'A menos tiempo, más personas (Inversa).'
        },
        {
            question: 'Un tanque de agua dura 20 días consumiendo 100 L/día. ¿Cuánto durará si se consumen 200 L/día?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{100 L/día} \\to 20 \\text{ días} \\\\ \\text{200 L/día} \\to x',
            options: [
                { latex: '10 \\text{ días}' },
                { latex: '40 \\text{ días}' },
                { latex: '15 \\text{ días}' },
                { latex: '5 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más consumo, menos días (Inversa).'
        },
        {
            question: 'Si 6 bueyes aran un terreno en 12 horas, ¿cuánto tardarán 9 bueyes?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{6 bueyes} \\to 12 \\text{ h} \\\\ \\text{9 bueyes} \\to x',
            options: [
                { latex: '8 \\text{ h}' },
                { latex: '18 \\text{ h}' },
                { latex: '10 \\text{ h}' },
                { latex: '6 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más bueyes, menos tiempo (Inversa).'
        },
        {
            question: 'Si 15 trabajadores construyen un invernadero en 10 días, ¿cuánto tardarán 25 trabajadores?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{15 trab} \\to 10 \\text{ días} \\\\ \\text{25 trab} \\to x',
            options: [
                { latex: '6 \\text{ días}' },
                { latex: '16.6 \\text{ días}' },
                { latex: '8 \\text{ días}' },
                { latex: '5 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más trabajadores, menos tiempo (Inversa).'
        },
        {
            question: 'Un vehículo reparte leche en 4 horas a 50 km/h. ¿Cuánto tardará a 80 km/h?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{50 km/h} \\to 4 \\text{ h} \\\\ \\text{80 km/h} \\to x',
            options: [
                { latex: '2.5 \\text{ h}' },
                { latex: '6.4 \\text{ h}' },
                { latex: '3 \\text{ h}' },
                { latex: '2 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más velocidad, menos tiempo (Inversa).'
        },
        {
            question: 'Si 12 patos consumen su comida en 8 días, ¿cuánto durará para 16 patos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{12 patos} \\to 8 \\text{ días} \\\\ \\text{16 patos} \\to x',
            options: [
                { latex: '6 \\text{ días}' },
                { latex: '10.6 \\text{ días}' },
                { latex: '5 \\text{ días}' },
                { latex: '7 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más patos, menos días (Inversa).'
        },
        {
            question: 'Si 5 bombas de fumigación cubren un área en 6 horas, ¿cuánto tardarán 10 bombas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{5 bombas} \\to 6 \\text{ h} \\\\ \\text{10 bombas} \\to x',
            options: [
                { latex: '3 \\text{ h}' },
                { latex: '12 \\text{ h}' },
                { latex: '4 \\text{ h}' },
                { latex: '2 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más bombas, menos tiempo (Inversa).'
        },
        {
            question: 'Un grupo de 8 personas empaca fruta en 5 horas. ¿Cuánto tardarán 20 personas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{8 pers} \\to 5 \\text{ h} \\\\ \\text{20 pers} \\to x',
            options: [
                { latex: '2 \\text{ h}' },
                { latex: '12.5 \\text{ h}' },
                { latex: '3 \\text{ h}' },
                { latex: '1.5 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más personas, menos tiempo (Inversa).'
        },
        {
            question: 'Si 3 molinos muelen una cantidad de trigo en 8 horas, ¿cuánto tardarán 6 molinos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{3 molinos} \\to 8 \\text{ h} \\\\ \\text{6 molinos} \\to x',
            options: [
                { latex: '4 \\text{ h}' },
                { latex: '16 \\text{ h}' },
                { latex: '5 \\text{ h}' },
                { latex: '3 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más molinos, menos tiempo (Inversa).'
        },
        {
            question: 'Si 10 conejos comen una cantidad de alfalfa en 12 días, ¿cuánto durará para 15 conejos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{10 conejos} \\to 12 \\text{ días} \\\\ \\text{15 conejos} \\to x',
            options: [
                { latex: '8 \\text{ días}' },
                { latex: '18 \\text{ días}' },
                { latex: '10 \\text{ días}' },
                { latex: '6 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más conejos, menos días (Inversa).'
        },
        {
            question: 'Si 4 aspersores riegan un campo en 15 horas, ¿cuánto tardarán 10 aspersores?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 asp} \\to 15 \\text{ h} \\\\ \\text{10 asp} \\to x',
            options: [
                { latex: '6 \\text{ h}' },
                { latex: '37.5 \\text{ h}' },
                { latex: '8 \\text{ h}' },
                { latex: '5 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más aspersores, menos tiempo (Inversa).'
        },
        {
            question: 'Si 2 personas ordeñan las vacas en 3 horas, ¿cuánto tardarán 6 personas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 pers} \\to 3 \\text{ h} \\\\ \\text{6 pers} \\to x',
            options: [
                { latex: '1 \\text{ h}' },
                { latex: '9 \\text{ h}' },
                { latex: '2 \\text{ h}' },
                { latex: '0.5 \\text{ h}' }
            ],
            correct: 0,
            hint: 'A más personas, menos tiempo (Inversa).'
        },
        {
            question: 'Un tanque de combustible dura 10 días usando 2 tractores. ¿Cuánto durará usando 5 tractores?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 tract} \\to 10 \\text{ días} \\\\ \\text{5 tract} \\to x',
            options: [
                { latex: '4 \\text{ días}' },
                { latex: '25 \\text{ días}' },
                { latex: '5 \\text{ días}' },
                { latex: '2 \\text{ días}' }
            ],
            correct: 0,
            hint: 'A más tractores, menos días (Inversa).'
        }
    ]
};
