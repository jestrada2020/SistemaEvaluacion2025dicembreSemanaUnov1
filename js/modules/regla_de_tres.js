window.examCategories = window.examCategories || {};

window.examCategories.regla_de_tres = {
    name: 'Regla de Tres (Simple e Inversa)',
    description: 'Problemas de proporcionalidad directa e inversa',
    questions: [
        // 1. Regla de Tres Simple Directa (30 preguntas)
        {
            question: 'Si 5 manzanas cuestan 10 dólares, ¿cuánto costarán 8 manzanas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{5 manzanas} \\to 10 \\text{ dólares} \\\\ \\text{8 manzanas} \\to x',
            options: [
                { latex: '16 \\text{ dólares}' },
                { latex: '15 \\text{ dólares}' },
                { latex: '12 \\text{ dólares}' },
                { latex: '20 \\text{ dólares}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa: (8 * 10) / 5'
        },
        {
            question: 'Un coche recorre 180 km en 3 horas. ¿Cuántos km recorrerá en 5 horas a la misma velocidad?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{3 horas} \\to 180 \\text{ km} \\\\ \\text{5 horas} \\to x',
            options: [
                { latex: '300 \\text{ km}' },
                { latex: '250 \\text{ km}' },
                { latex: '360 \\text{ km}' },
                { latex: '280 \\text{ km}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 4 libros pesan 2 kg, ¿cuánto pesarán 10 libros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 libros} \\to 2 \\text{ kg} \\\\ \\text{10 libros} \\to x',
            options: [
                { latex: '5 \\text{ kg}' },
                { latex: '4 \\text{ kg}' },
                { latex: '6 \\text{ kg}' },
                { latex: '8 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Para hacer 2 pasteles se necesitan 6 huevos. ¿Cuántos huevos se necesitan para 5 pasteles?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 pasteles} \\to 6 \\text{ huevos} \\\\ \\text{5 pasteles} \\to x',
            options: [
                { latex: '15 \\text{ huevos}' },
                { latex: '12 \\text{ huevos}' },
                { latex: '10 \\text{ huevos}' },
                { latex: '18 \\text{ huevos}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 10 metros de tela cuestan 50 euros, ¿cuánto costarán 25 metros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{10 m} \\to 50 \\text{ euros} \\\\ \\text{25 m} \\to x',
            options: [
                { latex: '125 \\text{ euros}' },
                { latex: '100 \\text{ euros}' },
                { latex: '150 \\text{ euros}' },
                { latex: '75 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Un grifo vierte 15 litros de agua en 3 minutos. ¿Cuántos litros verterá en 12 minutos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{3 min} \\to 15 \\text{ L} \\\\ \\text{12 min} \\to x',
            options: [
                { latex: '60 \\text{ L}' },
                { latex: '45 \\text{ L}' },
                { latex: '50 \\text{ L}' },
                { latex: '75 \\text{ L}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 2 kg de peras cuestan 3 euros, ¿cuánto cuestan 5 kg?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 kg} \\to 3 \\text{ euros} \\\\ \\text{5 kg} \\to x',
            options: [
                { latex: '7.5 \\text{ euros}' },
                { latex: '6 \\text{ euros}' },
                { latex: '8 \\text{ euros}' },
                { latex: '9 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Un corredor da 4 vueltas a la pista en 12 minutos. ¿Cuánto tardará en dar 7 vueltas al mismo ritmo?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 vueltas} \\to 12 \\text{ min} \\\\ \\text{7 vueltas} \\to x',
            options: [
                { latex: '21 \\text{ min}' },
                { latex: '20 \\text{ min}' },
                { latex: '24 \\text{ min}' },
                { latex: '18 \\text{ min}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 100 gramos de jamón cuestan 2 euros, ¿cuánto cuestan 350 gramos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{100 g} \\to 2 \\text{ euros} \\\\ \\text{350 g} \\to x',
            options: [
                { latex: '7 \\text{ euros}' },
                { latex: '6 \\text{ euros}' },
                { latex: '8 \\text{ euros}' },
                { latex: '5 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Una impresora imprime 20 páginas por minuto. ¿Cuántas páginas imprimirá en 15 minutos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{1 min} \\to 20 \\text{ pág} \\\\ \\text{15 min} \\to x',
            options: [
                { latex: '300 \\text{ pág}' },
                { latex: '250 \\text{ pág}' },
                { latex: '350 \\text{ pág}' },
                { latex: '400 \\text{ pág}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 3 entradas de cine cuestan 27 euros, ¿cuánto cuestan 5 entradas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{3 entradas} \\to 27 \\text{ euros} \\\\ \\text{5 entradas} \\to x',
            options: [
                { latex: '45 \\text{ euros}' },
                { latex: '40 \\text{ euros}' },
                { latex: '50 \\text{ euros}' },
                { latex: '35 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Un coche consume 6 litros de gasolina cada 100 km. ¿Cuántos litros consumirá en 250 km?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{100 km} \\to 6 \\text{ L} \\\\ \\text{250 km} \\to x',
            options: [
                { latex: '15 \\text{ L}' },
                { latex: '12 \\text{ L}' },
                { latex: '18 \\text{ L}' },
                { latex: '20 \\text{ L}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 8 obreros construyen 12 metros de muro, ¿cuántos metros construirán 12 obreros en el mismo tiempo?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{8 obreros} \\to 12 \\text{ m} \\\\ \\text{12 obreros} \\to x',
            options: [
                { latex: '18 \\text{ m}' },
                { latex: '16 \\text{ m}' },
                { latex: '20 \\text{ m}' },
                { latex: '24 \\text{ m}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 500 folios pesan 2.5 kg, ¿cuánto pesan 200 folios?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{500 folios} \\to 2.5 \\text{ kg} \\\\ \\text{200 folios} \\to x',
            options: [
                { latex: '1 \\text{ kg}' },
                { latex: '0.5 \\text{ kg}' },
                { latex: '1.5 \\text{ kg}' },
                { latex: '2 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'En un mapa, 2 cm representan 10 km. ¿Qué distancia real representan 7 cm?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 cm} \\to 10 \\text{ km} \\\\ \\text{7 cm} \\to x',
            options: [
                { latex: '35 \\text{ km}' },
                { latex: '30 \\text{ km}' },
                { latex: '40 \\text{ km}' },
                { latex: '25 \\text{ km}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 6 latas de refresco cuestan 3.60 euros, ¿cuánto cuestan 10 latas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{6 latas} \\to 3.60 \\text{ euros} \\\\ \\text{10 latas} \\to x',
            options: [
                { latex: '6 \\text{ euros}' },
                { latex: '5 \\text{ euros}' },
                { latex: '7 \\text{ euros}' },
                { latex: '4.50 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Un tren recorre 240 km en 2 horas. ¿Qué distancia recorrerá en 3.5 horas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 h} \\to 240 \\text{ km} \\\\ \\text{3.5 h} \\to x',
            options: [
                { latex: '420 \\text{ km}' },
                { latex: '360 \\text{ km}' },
                { latex: '400 \\text{ km}' },
                { latex: '450 \\text{ km}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 12 huevos cuestan 2.40 euros, ¿cuánto cuestan 30 huevos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{12 huevos} \\to 2.40 \\text{ euros} \\\\ \\text{30 huevos} \\to x',
            options: [
                { latex: '6 \\text{ euros}' },
                { latex: '5 \\text{ euros}' },
                { latex: '7 \\text{ euros}' },
                { latex: '4.80 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Para pintar 50 m² se necesitan 4 litros de pintura. ¿Cuántos litros se necesitan para 125 m²?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{50 m}^2 \\to 4 \\text{ L} \\\\ \\text{125 m}^2 \\to x',
            options: [
                { latex: '10 \\text{ L}' },
                { latex: '8 \\text{ L}' },
                { latex: '12 \\text{ L}' },
                { latex: '9 \\text{ L}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 3 kg de naranjas dan 1.5 litros de zumo, ¿cuántos litros darán 10 kg?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{3 kg} \\to 1.5 \\text{ L} \\\\ \\text{10 kg} \\to x',
            options: [
                { latex: '5 \\text{ L}' },
                { latex: '4.5 \\text{ L}' },
                { latex: '6 \\text{ L}' },
                { latex: '4 \\text{ L}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Un ciclista recorre 15 km en 45 minutos. ¿Cuánto tardará en recorrer 25 km?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{15 km} \\to 45 \\text{ min} \\\\ \\text{25 km} \\to x',
            options: [
                { latex: '75 \\text{ min}' },
                { latex: '60 \\text{ min}' },
                { latex: '90 \\text{ min}' },
                { latex: '80 \\text{ min}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 4 camisetas cuestan 60 euros, ¿cuánto cuestan 6 camisetas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 camisetas} \\to 60 \\text{ euros} \\\\ \\text{6 camisetas} \\to x',
            options: [
                { latex: '90 \\text{ euros}' },
                { latex: '80 \\text{ euros}' },
                { latex: '100 \\text{ euros}' },
                { latex: '120 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Una receta para 4 personas necesita 200 g de arroz. ¿Cuánto arroz se necesita para 7 personas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 personas} \\to 200 \\text{ g} \\\\ \\text{7 personas} \\to x',
            options: [
                { latex: '350 \\text{ g}' },
                { latex: '300 \\text{ g}' },
                { latex: '400 \\text{ g}' },
                { latex: '250 \\text{ g}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 7 días de hotel cuestan 350 euros, ¿cuánto cuestan 10 días?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{7 días} \\to 350 \\text{ euros} \\\\ \\text{10 días} \\to x',
            options: [
                { latex: '500 \\text{ euros}' },
                { latex: '450 \\text{ euros}' },
                { latex: '600 \\text{ euros}' },
                { latex: '400 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Un grifo llena un depósito de 200 litros en 40 minutos. ¿Cuánto tardará en llenar 300 litros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{200 L} \\to 40 \\text{ min} \\\\ \\text{300 L} \\to x',
            options: [
                { latex: '60 \\text{ min}' },
                { latex: '50 \\text{ min}' },
                { latex: '80 \\text{ min}' },
                { latex: '70 \\text{ min}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 5 litros de aceite pesan 4.6 kg, ¿cuánto pesan 8 litros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{5 L} \\to 4.6 \\text{ kg} \\\\ \\text{8 L} \\to x',
            options: [
                { latex: '7.36 \\text{ kg}' },
                { latex: '7 \\text{ kg}' },
                { latex: '6.5 \\text{ kg}' },
                { latex: '8 \\text{ kg}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 15% de una cantidad es 30, ¿cuál es la cantidad total (100%)?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{15\\%} \\to 30 \\\\ \\text{100\\%} \\to x',
            options: [
                { latex: '200' },
                { latex: '150' },
                { latex: '300' },
                { latex: '250' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Un obrero gana 400 euros en 5 días. ¿Cuánto ganará en 20 días?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{5 días} \\to 400 \\text{ euros} \\\\ \\text{20 días} \\to x',
            options: [
                { latex: '1600 \\text{ euros}' },
                { latex: '1200 \\text{ euros}' },
                { latex: '2000 \\text{ euros}' },
                { latex: '1500 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si 3 cajas contienen 36 botellas, ¿cuántas botellas hay en 7 cajas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{3 cajas} \\to 36 \\text{ botellas} \\\\ \\text{7 cajas} \\to x',
            options: [
                { latex: '84 \\text{ botellas}' },
                { latex: '72 \\text{ botellas}' },
                { latex: '90 \\text{ botellas}' },
                { latex: '80 \\text{ botellas}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },
        {
            question: 'Si un dólar equivale a 0.90 euros, ¿cuántos euros son 50 dólares?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{1 dólar} \\to 0.90 \\text{ euros} \\\\ \\text{50 dólares} \\to x',
            options: [
                { latex: '45 \\text{ euros}' },
                { latex: '40 \\text{ euros}' },
                { latex: '50 \\text{ euros}' },
                { latex: '48 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad directa.'
        },

        // 2. Regla de Tres Inversa (30 preguntas)
        {
            question: 'Si 4 obreros tardan 6 días en hacer una obra, ¿cuánto tardarán 8 obreros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 obreros} \\to 6 \\text{ días} \\\\ \\text{8 obreros} \\to x',
            options: [
                { latex: '3 \\text{ días}' },
                { latex: '12 \\text{ días}' },
                { latex: '4 \\text{ días}' },
                { latex: '2 \\text{ días}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa: (4 * 6) / 8'
        },
        {
            question: 'Un coche a 80 km/h tarda 3 horas en un viaje. ¿Cuánto tardará a 120 km/h?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{80 km/h} \\to 3 \\text{ h} \\\\ \\text{120 km/h} \\to x',
            options: [
                { latex: '2 \\text{ h}' },
                { latex: '4.5 \\text{ h}' },
                { latex: '1.5 \\text{ h}' },
                { latex: '2.5 \\text{ h}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si 10 vacas comen el pasto en 6 días, ¿cuánto tardarán 15 vacas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{10 vacas} \\to 6 \\text{ días} \\\\ \\text{15 vacas} \\to x',
            options: [
                { latex: '4 \\text{ días}' },
                { latex: '9 \\text{ días}' },
                { latex: '3 \\text{ días}' },
                { latex: '5 \\text{ días}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Para llenar una piscina, 2 grifos tardan 12 horas. ¿Cuánto tardarán 3 grifos iguales?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 grifos} \\to 12 \\text{ h} \\\\ \\text{3 grifos} \\to x',
            options: [
                { latex: '8 \\text{ h}' },
                { latex: '18 \\text{ h}' },
                { latex: '6 \\text{ h}' },
                { latex: '9 \\text{ h}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si 6 personas pagan 20 euros cada una por un regalo, ¿cuánto pagarán si son 10 personas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{6 personas} \\to 20 \\text{ euros} \\\\ \\text{10 personas} \\to x',
            options: [
                { latex: '12 \\text{ euros}' },
                { latex: '33.3 \\text{ euros}' },
                { latex: '15 \\text{ euros}' },
                { latex: '10 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Un ganadero tiene pienso para 20 días para 30 ovejas. Si compra 10 ovejas más, ¿para cuántos días tendrá?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{30 ovejas} \\to 20 \\text{ días} \\\\ \\text{40 ovejas} \\to x',
            options: [
                { latex: '15 \\text{ días}' },
                { latex: '26 \\text{ días}' },
                { latex: '10 \\text{ días}' },
                { latex: '18 \\text{ días}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si voy a 100 km/h tardo 45 minutos. ¿A qué velocidad debo ir para tardar 30 minutos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{45 min} \\to 100 \\text{ km/h} \\\\ \\text{30 min} \\to x',
            options: [
                { latex: '150 \\text{ km/h}' },
                { latex: '120 \\text{ km/h}' },
                { latex: '130 \\text{ km/h}' },
                { latex: '140 \\text{ km/h}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: '5 pintores pintan una casa en 4 días. ¿Cuántos días tardarán 2 pintores?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{5 pintores} \\to 4 \\text{ días} \\\\ \\text{2 pintores} \\to x',
            options: [
                { latex: '10 \\text{ días}' },
                { latex: '8 \\text{ días}' },
                { latex: '12 \\text{ días}' },
                { latex: '6 \\text{ días}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si 3 bombas de agua vacían un pozo en 2 horas, ¿cuánto tardará 1 sola bomba?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{3 bombas} \\to 2 \\text{ h} \\\\ \\text{1 bomba} \\to x',
            options: [
                { latex: '6 \\text{ h}' },
                { latex: '3 \\text{ h}' },
                { latex: '4 \\text{ h}' },
                { latex: '5 \\text{ h}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Un libro tiene 200 páginas con 30 líneas por página. ¿Cuántas páginas tendría si tuviera 25 líneas por página?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{30 líneas} \\to 200 \\text{ pág} \\\\ \\text{25 líneas} \\to x',
            options: [
                { latex: '240 \\text{ pág}' },
                { latex: '166 \\text{ pág}' },
                { latex: '220 \\text{ pág}' },
                { latex: '250 \\text{ pág}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si 12 personas comen una tarta en 10 minutos, ¿cuánto tardarán 4 personas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{12 personas} \\to 10 \\text{ min} \\\\ \\text{4 personas} \\to x',
            options: [
                { latex: '30 \\text{ min}' },
                { latex: '3.3 \\text{ min}' },
                { latex: '20 \\text{ min}' },
                { latex: '40 \\text{ min}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Un rectángulo tiene base 10 cm y altura 6 cm. Si mantengo el área y cambio la base a 12 cm, ¿cuál es la nueva altura?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{10 cm} \\to 6 \\text{ cm} \\\\ \\text{12 cm} \\to x',
            options: [
                { latex: '5 \\text{ cm}' },
                { latex: '7.2 \\text{ cm}' },
                { latex: '4 \\text{ cm}' },
                { latex: '8 \\text{ cm}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si 8 máquinas hacen un trabajo en 9 horas, ¿cuántas máquinas se necesitan para hacerlo en 6 horas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{9 h} \\to 8 \\text{ máq} \\\\ \\text{6 h} \\to x',
            options: [
                { latex: '12 \\text{ máq}' },
                { latex: '10 \\text{ máq}' },
                { latex: '14 \\text{ máq}' },
                { latex: '16 \\text{ máq}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Un ejército de 1000 soldados tiene comida para 30 días. Si se unen 500 soldados más, ¿cuánto durará la comida?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{1000 sold} \\to 30 \\text{ días} \\\\ \\text{1500 sold} \\to x',
            options: [
                { latex: '20 \\text{ días}' },
                { latex: '45 \\text{ días}' },
                { latex: '25 \\text{ días}' },
                { latex: '15 \\text{ días}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si camino a 4 km/h tardo 30 minutos en llegar. ¿Cuánto tardaré si camino a 6 km/h?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 km/h} \\to 30 \\text{ min} \\\\ \\text{6 km/h} \\to x',
            options: [
                { latex: '20 \\text{ min}' },
                { latex: '45 \\text{ min}' },
                { latex: '15 \\text{ min}' },
                { latex: '25 \\text{ min}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Para envasar cierta cantidad de leche se necesitan 8 botellas de 2 litros. ¿Cuántas botellas de 1 litro se necesitarían?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 L} \\to 8 \\text{ botellas} \\\\ \\text{1 L} \\to x',
            options: [
                { latex: '16 \\text{ botellas}' },
                { latex: '4 \\text{ botellas}' },
                { latex: '12 \\text{ botellas}' },
                { latex: '10 \\text{ botellas}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si 3 jardineros tardan 12 horas en arreglar un parque, ¿cuánto tardarán 9 jardineros?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{3 jard} \\to 12 \\text{ h} \\\\ \\text{9 jard} \\to x',
            options: [
                { latex: '4 \\text{ h}' },
                { latex: '36 \\text{ h}' },
                { latex: '6 \\text{ h}' },
                { latex: '3 \\text{ h}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Un rueda da 4000 vueltas en 20 minutos. Si gira más rápido y da las mismas vueltas en 10 minutos, ¿a qué velocidad gira (vueltas/min)?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{20 min} \\to 200 \\text{ v/min} \\\\ \\text{10 min} \\to x',
            options: [
                { latex: '400 \\text{ v/min}' },
                { latex: '100 \\text{ v/min}' },
                { latex: '300 \\text{ v/min}' },
                { latex: '500 \\text{ v/min}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si 20 alumnos pagan 15 euros para una excursión, ¿cuánto pagarían si fueran 25 alumnos (mismo coste total)?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{20 alum} \\to 15 \\text{ euros} \\\\ \\text{25 alum} \\to x',
            options: [
                { latex: '12 \\text{ euros}' },
                { latex: '18.75 \\text{ euros}' },
                { latex: '10 \\text{ euros}' },
                { latex: '14 \\text{ euros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Un edificio se construye en 12 meses con 50 obreros. ¿Cuántos obreros se necesitan para hacerlo en 10 meses?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{12 meses} \\to 50 \\text{ obreros} \\\\ \\text{10 meses} \\to x',
            options: [
                { latex: '60 \\text{ obreros}' },
                { latex: '40 \\text{ obreros}' },
                { latex: '55 \\text{ obreros}' },
                { latex: '70 \\text{ obreros}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si 4 mangueras llenan una piscina en 9 horas, ¿cuánto tardarán 6 mangueras?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 mang} \\to 9 \\text{ h} \\\\ \\text{6 mang} \\to x',
            options: [
                { latex: '6 \\text{ h}' },
                { latex: '13.5 \\text{ h}' },
                { latex: '5 \\text{ h}' },
                { latex: '7 \\text{ h}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Un tren tarda 6 horas a 100 km/h. ¿A qué velocidad debe ir para tardar 5 horas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{6 h} \\to 100 \\text{ km/h} \\\\ \\text{5 h} \\to x',
            options: [
                { latex: '120 \\text{ km/h}' },
                { latex: '83.3 \\text{ km/h}' },
                { latex: '110 \\text{ km/h}' },
                { latex: '130 \\text{ km/h}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si 10 personas consumen un depósito de agua en 15 días, ¿cuánto durará para 25 personas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{10 pers} \\to 15 \\text{ días} \\\\ \\text{25 pers} \\to x',
            options: [
                { latex: '6 \\text{ días}' },
                { latex: '37.5 \\text{ días}' },
                { latex: '5 \\text{ días}' },
                { latex: '8 \\text{ días}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Para embaldosar una sala se necesitan 300 baldosas de 20x20 cm. ¿Cuántas se necesitarían de 30x30 cm?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{400 cm}^2 \\to 300 \\text{ bald} \\\\ \\text{900 cm}^2 \\to x',
            options: [
                { latex: '133.3 \\text{ bald}' }, // 300 * 400 / 900 = 120000 / 900 = 133.33
                { latex: '200 \\text{ bald}' },
                { latex: '150 \\text{ bald}' },
                { latex: '100 \\text{ bald}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa al área.'
        },
        {
            question: 'Si 5 camiones transportan una mercancía en 6 viajes, ¿cuántos viajes harán 3 camiones?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{5 cam} \\to 6 \\text{ viajes} \\\\ \\text{3 cam} \\to x',
            options: [
                { latex: '10 \\text{ viajes}' },
                { latex: '3.6 \\text{ viajes}' },
                { latex: '8 \\text{ viajes}' },
                { latex: '12 \\text{ viajes}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Un ganadero tiene forraje para 15 vacas durante 30 días. Si vende 5 vacas, ¿para cuántos días tendrá?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{15 vacas} \\to 30 \\text{ días} \\\\ \\text{10 vacas} \\to x',
            options: [
                { latex: '45 \\text{ días}' },
                { latex: '20 \\text{ días}' },
                { latex: '40 \\text{ días}' },
                { latex: '50 \\text{ días}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si 2 mecanógrafos escriben un texto en 6 horas, ¿cuánto tardarán 4 mecanógrafos?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{2 mec} \\to 6 \\text{ h} \\\\ \\text{4 mec} \\to x',
            options: [
                { latex: '3 \\text{ h}' },
                { latex: '12 \\text{ h}' },
                { latex: '4 \\text{ h}' },
                { latex: '2 \\text{ h}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Un grifo de caudal 10 L/min llena un depósito en 30 min. ¿Cuánto tardará uno de 15 L/min?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{10 L/min} \\to 30 \\text{ min} \\\\ \\text{15 L/min} \\to x',
            options: [
                { latex: '20 \\text{ min}' },
                { latex: '45 \\text{ min}' },
                { latex: '25 \\text{ min}' },
                { latex: '15 \\text{ min}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Si 8 personas hacen un trabajo en 5 días, ¿cuántas personas se necesitan para hacerlo en 2 días?',
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
            hint: 'Proporcionalidad inversa.'
        },
        {
            question: 'Un coche tarda 4 horas a 90 km/h. ¿A qué velocidad debe ir para tardar 3 horas?',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{4 h} \\to 90 \\text{ km/h} \\\\ \\text{3 h} \\to x',
            options: [
                { latex: '120 \\text{ km/h}' },
                { latex: '110 \\text{ km/h}' },
                { latex: '130 \\text{ km/h}' },
                { latex: '100 \\text{ km/h}' }
            ],
            correct: 0,
            hint: 'Proporcionalidad inversa.'
        }
    ]
};
