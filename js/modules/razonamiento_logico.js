window.examCategories = window.examCategories || {};

window.examCategories.razonamiento_logico = {
    name: 'Razonamiento Lógico',
    description: 'Series numéricas, analogías, silogismos y acertijos lógicos',
    questions: [
        // 1. Series Numéricas (10 preguntas)
        {
            question: 'Complete la serie: 2, 4, 8, 16, ...',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuál es el siguiente número?}',
            options: [
                { latex: '32' },
                { latex: '24' },
                { latex: '20' },
                { latex: '64' }
            ],
            correct: 0,
            hint: 'Cada número es el doble del anterior.'
        },
        {
            question: 'Complete la serie: 1, 1, 2, 3, 5, 8, ...',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuál es el siguiente número?}',
            options: [
                { latex: '13' },
                { latex: '11' },
                { latex: '10' },
                { latex: '21' }
            ],
            correct: 0,
            hint: 'Serie de Fibonacci: suma de los dos anteriores.'
        },
        {
            question: 'Complete la serie: 10, 7, 4, ...',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuál es el siguiente número?}',
            options: [
                { latex: '1' },
                { latex: '2' },
                { latex: '0' },
                { latex: '-1' }
            ],
            correct: 0,
            hint: 'Resta 3 en cada paso.'
        },
        {
            question: 'Complete la serie: 2, 5, 10, 17, ...',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuál es el siguiente número?}',
            options: [
                { latex: '26' },
                { latex: '24' },
                { latex: '25' },
                { latex: '30' }
            ],
            correct: 0,
            hint: 'n^2 + 1.'
        },
        {
            question: 'Complete la serie: 1, 4, 9, 16, ...',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuál es el siguiente número?}',
            options: [
                { latex: '25' },
                { latex: '20' },
                { latex: '36' },
                { latex: '24' }
            ],
            correct: 0,
            hint: 'Cuadrados perfectos.'
        },
        {
            question: 'Complete la serie: 3, 6, 12, 24, ...',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuál es el siguiente número?}',
            options: [
                { latex: '48' },
                { latex: '36' },
                { latex: '30' },
                { latex: '60' }
            ],
            correct: 0,
            hint: 'Multiplica por 2.'
        },
        {
            question: 'Complete la serie: 100, 50, 25, ...',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuál es el siguiente número?}',
            options: [
                { latex: '12.5' },
                { latex: '10' },
                { latex: '15' },
                { latex: '20' }
            ],
            correct: 0,
            hint: 'Divide por 2.'
        },
        {
            question: 'Complete la serie: 1, 8, 27, 64, ...',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuál es el siguiente número?}',
            options: [
                { latex: '125' },
                { latex: '100' },
                { latex: '81' },
                { latex: '216' }
            ],
            correct: 0,
            hint: 'Cubos perfectos.'
        },
        {
            question: 'Complete la serie: 2, 3, 5, 7, 11, ...',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuál es el siguiente número?}',
            options: [
                { latex: '13' },
                { latex: '15' },
                { latex: '17' },
                { latex: '12' }
            ],
            correct: 0,
            hint: 'Números primos.'
        },
        {
            question: 'Complete la serie: 0, 3, 8, 15, ...',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuál es el siguiente número?}',
            options: [
                { latex: '24' },
                { latex: '20' },
                { latex: '25' },
                { latex: '30' }
            ],
            correct: 0,
            hint: 'n^2 - 1.'
        },

        // 2. Analogías Lógicas (10 preguntas)
        {
            question: 'Analogía:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Médico es a Hospital como Maestro es a:}',
            options: [
                { latex: '\\text{Escuela}' },
                { latex: '\\text{Libro}' },
                { latex: '\\text{Alumno}' },
                { latex: '\\text{Clase}' }
            ],
            correct: 0,
            hint: 'Lugar de trabajo.'
        },
        {
            question: 'Analogía:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Pájaro es a Aire como Pez es a:}',
            options: [
                { latex: '\\text{Agua}' },
                { latex: '\\text{Tierra}' },
                { latex: '\\text{Mar}' },
                { latex: '\\text{Río}' }
            ],
            correct: 0,
            hint: 'Medio en el que se mueve.'
        },
        {
            question: 'Analogía:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Martillo es a Clavo como Destornillador es a:}',
            options: [
                { latex: '\\text{Tornillo}' },
                { latex: '\\text{Tuerca}' },
                { latex: '\\text{Madera}' },
                { latex: '\\text{Pared}' }
            ],
            correct: 0,
            hint: 'Herramienta y objeto.'
        },
        {
            question: 'Analogía:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Caliente es a Frío como Luz es a:}',
            options: [
                { latex: '\\text{Oscuridad}' },
                { latex: '\\text{Noche}' },
                { latex: '\\text{Sol}' },
                { latex: '\\text{Brillo}' }
            ],
            correct: 0,
            hint: 'Antónimos.'
        },
        {
            question: 'Analogía:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Círculo es a Esfera como Cuadrado es a:}',
            options: [
                { latex: '\\text{Cubo}' },
                { latex: '\\text{Caja}' },
                { latex: '\\text{Pirámide}' },
                { latex: '\\text{Rectángulo}' }
            ],
            correct: 0,
            hint: '2D a 3D.'
        },
        {
            question: 'Analogía:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Segundo es a Minuto como Minuto es a:}',
            options: [
                { latex: '\\text{Hora}' },
                { latex: '\\text{Día}' },
                { latex: '\\text{Tiempo}' },
                { latex: '\\text{Reloj}' }
            ],
            correct: 0,
            hint: 'Unidad mayor.'
        },
        {
            question: 'Analogía:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Escritor es a Libro como Pintor es a:}',
            options: [
                { latex: '\\text{Cuadro}' },
                { latex: '\\text{Pincel}' },
                { latex: '\\text{Museo}' },
                { latex: '\\text{Arte}' }
            ],
            correct: 0,
            hint: 'Obra creada.'
        },
        {
            question: 'Analogía:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Hambre es a Comida como Sed es a:}',
            options: [
                { latex: '\\text{Bebida}' },
                { latex: '\\text{Agua}' },
                { latex: '\\text{Vaso}' },
                { latex: '\\text{Líquido}' }
            ],
            correct: 0,
            hint: 'Necesidad y satisfacción.'
        },
        {
            question: 'Analogía:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Lunes es a Martes como Enero es a:}',
            options: [
                { latex: '\\text{Febrero}' },
                { latex: '\\text{Marzo}' },
                { latex: '\\text{Diciembre}' },
                { latex: '\\text{Año}' }
            ],
            correct: 0,
            hint: 'Siguiente en la secuencia.'
        },
        {
            question: 'Analogía:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Zapato es a Pie como Guante es a:}',
            options: [
                { latex: '\\text{Mano}' },
                { latex: '\\text{Dedo}' },
                { latex: '\\text{Brazo}' },
                { latex: '\\text{Puño}' }
            ],
            correct: 0,
            hint: 'Prenda y parte del cuerpo.'
        },

        // 3. Silogismos (10 preguntas)
        {
            question: 'Silogismo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Todos los hombres son mortales. Sócrates es hombre. Por lo tanto:}',
            options: [
                { latex: '\\text{Sócrates es mortal}' },
                { latex: '\\text{Sócrates es inmortal}' },
                { latex: '\\text{Todos son Sócrates}' },
                { latex: '\\text{Nadie es mortal}' }
            ],
            correct: 0,
            hint: 'Deducción lógica.'
        },
        {
            question: 'Silogismo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Ningún pez respira aire. El tiburón es un pez. Por lo tanto:}',
            options: [
                { latex: '\\text{El tiburón no respira aire}' },
                { latex: '\\text{El tiburón respira aire}' },
                { latex: '\\text{Todos los peces son tiburones}' },
                { latex: '\\text{Algún pez respira aire}' }
            ],
            correct: 0,
            hint: 'Deducción negativa.'
        },
        {
            question: 'Silogismo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Todas las aves tienen plumas. El pingüino es un ave. Por lo tanto:}',
            options: [
                { latex: '\\text{El pingüino tiene plumas}' },
                { latex: '\\text{El pingüino vuela}' },
                { latex: '\\text{Todas las plumas son de pingüino}' },
                { latex: '\\text{Ningún ave tiene plumas}' }
            ],
            correct: 0,
            hint: 'Propiedad universal.'
        },
        {
            question: 'Silogismo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Algunos mamíferos vuelan. El murciélago es un mamífero que vuela. Por lo tanto:}',
            options: [
                { latex: '\\text{Algunos mamíferos son murciélagos}' },
                { latex: '\\text{Todos los mamíferos vuelan}' },
                { latex: '\\text{Ningún mamífero vuela}' },
                { latex: '\\text{El murciélago no es mamífero}' }
            ],
            correct: 0,
            hint: 'Particular afirmativo.'
        },
        {
            question: 'Silogismo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si llueve, el suelo se moja. Está lloviendo. Por lo tanto:}',
            options: [
                { latex: '\\text{El suelo se moja}' },
                { latex: '\\text{El suelo está seco}' },
                { latex: '\\text{No está lloviendo}' },
                { latex: '\\text{El suelo causa la lluvia}' }
            ],
            correct: 0,
            hint: 'Modus Ponens.'
        },
        {
            question: 'Silogismo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si estudio, apruebo. No aprobé. Por lo tanto:}',
            options: [
                { latex: '\\text{No estudié}' },
                { latex: '\\text{Estudié}' },
                { latex: '\\text{Aprobé}' },
                { latex: '\\text{El examen fue difícil}' }
            ],
            correct: 0,
            hint: 'Modus Tollens.'
        },
        {
            question: 'Silogismo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Todos los cuadrados son rectángulos. Todos los rectángulos son cuadriláteros. Por lo tanto:}',
            options: [
                { latex: '\\text{Todos los cuadrados son cuadriláteros}' },
                { latex: '\\text{Algunos cuadrados son cuadriláteros}' },
                { latex: '\\text{Ningún cuadrado es cuadrilátero}' },
                { latex: '\\text{Todos los cuadriláteros son cuadrados}' }
            ],
            correct: 0,
            hint: 'Transitividad.'
        },
        {
            question: 'Silogismo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Ningún planeta tiene luz propia. Marte es un planeta. Por lo tanto:}',
            options: [
                { latex: '\\text{Marte no tiene luz propia}' },
                { latex: '\\text{Marte tiene luz propia}' },
                { latex: '\\text{El Sol es un planeta}' },
                { latex: '\\text{Marte es una estrella}' }
            ],
            correct: 0,
            hint: 'Deducción negativa.'
        },
        {
            question: 'Silogismo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Algunas frutas son ácidas. El limón es una fruta ácida. Por lo tanto:}',
            options: [
                { latex: '\\text{El limón es una fruta}' },
                { latex: '\\text{Todas las frutas son ácidas}' },
                { latex: '\\text{Ninguna fruta es ácida}' },
                { latex: '\\text{El limón es dulce}' }
            ],
            correct: 0,
            hint: 'Clasificación.'
        },
        {
            question: 'Silogismo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si es un triángulo, tiene 3 lados. Esta figura tiene 4 lados. Por lo tanto:}',
            options: [
                { latex: '\\text{No es un triángulo}' },
                { latex: '\\text{Es un triángulo}' },
                { latex: '\\text{Es un cuadrado}' },
                { latex: '\\text{Tiene 3 lados}' }
            ],
            correct: 0,
            hint: 'Negación del consecuente.'
        },

        // 4. Acertijos Lógicos (10 preguntas)
        {
            question: 'Acertijo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Qué pesa más, un kilo de hierro o un kilo de plumas?}',
            options: [
                { latex: '\\text{Pesan lo mismo}' },
                { latex: '\\text{El hierro}' },
                { latex: '\\text{Las plumas}' },
                { latex: '\\text{Depende del volumen}' }
            ],
            correct: 0,
            hint: 'Ambos son un kilo.'
        },
        {
            question: 'Acertijo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{El padre de Juan tiene 4 hijos: Lucas, Sandra, Ana y... ¿Quién es el cuarto?}',
            options: [
                { latex: '\\text{Juan}' },
                { latex: '\\text{Pedro}' },
                { latex: '\\text{Luis}' },
                { latex: '\\text{No se sabe}' }
            ],
            correct: 0,
            hint: 'Lee bien el principio.'
        },
        {
            question: 'Acertijo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuántos meses tienen 28 días?}',
            options: [
                { latex: '\\text{Todos}' },
                { latex: '\\text{Uno}' },
                { latex: '\\text{Ninguno}' },
                { latex: '\\text{Febrero}' }
            ],
            correct: 0,
            hint: 'Todos tienen al menos 28.'
        },
        {
            question: 'Acertijo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si vas en una carrera y adelantas al segundo, ¿en qué posición quedas?}',
            options: [
                { latex: '\\text{Segundo}' },
                { latex: '\\text{Primero}' },
                { latex: '\\text{Tercero}' },
                { latex: '\\text{Último}' }
            ],
            correct: 0,
            hint: 'Ocupas su lugar.'
        },
        {
            question: 'Acertijo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Qué sube y nunca baja?}',
            options: [
                { latex: '\\text{La edad}' },
                { latex: '\\text{La lluvia}' },
                { latex: '\\text{El sol}' },
                { latex: '\\text{Un globo}' }
            ],
            correct: 0,
            hint: 'Pasa el tiempo.'
        },
        {
            question: 'Acertijo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Tengo ciudades, pero no casas. Tengo montañas, pero no árboles. Tengo agua, pero no peces. ¿Qué soy?}',
            options: [
                { latex: '\\text{Un mapa}' },
                { latex: '\\text{Un sueño}' },
                { latex: '\\text{Un planeta}' },
                { latex: '\\text{Un dibujo}' }
            ],
            correct: 0,
            hint: 'Representación geográfica.'
        },
        {
            question: 'Acertijo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Qué es lo que se rompe cuando se nombra?}',
            options: [
                { latex: '\\text{El silencio}' },
                { latex: '\\text{El cristal}' },
                { latex: '\\text{Una promesa}' },
                { latex: '\\text{El hielo}' }
            ],
            correct: 0,
            hint: 'Ausencia de sonido.'
        },
        {
            question: 'Acertijo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Qué tiene cuello pero no cabeza?}',
            options: [
                { latex: '\\text{Una camisa}' },
                { latex: '\\text{Una botella}' },
                { latex: '\\text{Una jirafa}' },
                { latex: '\\text{Un suéter}' }
            ],
            correct: 0,
            hint: 'Prenda de vestir.'
        },
        {
            question: 'Acertijo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Qué es tuyo pero los demás lo usan más que tú?}',
            options: [
                { latex: '\\text{Tu nombre}' },
                { latex: '\\text{Tu dinero}' },
                { latex: '\\text{Tu coche}' },
                { latex: '\\text{Tu casa}' }
            ],
            correct: 0,
            hint: 'Te llaman por él.'
        },
        {
            question: 'Acertijo:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Qué animal camina con 4 patas por la mañana, 2 al mediodía y 3 por la noche?}',
            options: [
                { latex: '\\text{El ser humano}' },
                { latex: '\\text{El perro}' },
                { latex: '\\text{El gato}' },
                { latex: '\\text{El mono}' }
            ],
            correct: 0,
            hint: 'Enigma de la Esfinge.'
        },

        // 5. Razonamiento Espacial y Abstracto (10 preguntas)
        {
            question: 'Secuencia:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si A > B y B > C, entonces:}',
            options: [
                { latex: 'A > C' },
                { latex: 'A < C' },
                { latex: 'A = C' },
                { latex: 'C > A' }
            ],
            correct: 0,
            hint: 'Transitividad.'
        },
        {
            question: 'Lógica:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si NO es verdad que NO está lloviendo, entonces:}',
            options: [
                { latex: '\\text{Está lloviendo}' },
                { latex: '\\text{No está lloviendo}' },
                { latex: '\\text{Está nublado}' },
                { latex: '\\text{Es de noche}' }
            ],
            correct: 0,
            hint: 'Doble negación.'
        },
        {
            question: 'Secuencia:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Qué letra sigue? A, C, E, G, ...}',
            options: [
                { latex: 'I' },
                { latex: 'H' },
                { latex: 'J' },
                { latex: 'K' }
            ],
            correct: 0,
            hint: 'Salta una letra.'
        },
        {
            question: 'Secuencia:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Qué letra sigue? Z, X, V, T, ...}',
            options: [
                { latex: 'R' },
                { latex: 'S' },
                { latex: 'Q' },
                { latex: 'P' }
            ],
            correct: 0,
            hint: 'Retrocede saltando una.'
        },
        {
            question: 'Lógica:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si todos los Bloops son Razzies y todos los Razzies son Lazzies, entonces:}',
            options: [
                { latex: '\\text{Todos los Bloops son Lazzies}' },
                { latex: '\\text{Todos los Lazzies son Bloops}' },
                { latex: '\\text{Ningún Bloop es Lazzie}' },
                { latex: '\\text{Algunos Razzies no son Lazzies}' }
            ],
            correct: 0,
            hint: 'Silogismo abstracto.'
        },
        {
            question: 'Probabilidad:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si lanzas una moneda 3 veces y sale cara, ¿cuál es la probabilidad de que la próxima sea cruz?}',
            options: [
                { latex: '50\\%' },
                { latex: '25\\%' },
                { latex: '75\\%' },
                { latex: '100\\%' }
            ],
            correct: 0,
            hint: 'Eventos independientes.'
        },
        {
            question: 'Lógica:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si Ayer fue Jueves, ¿qué día será Pasado Mañana?}',
            options: [
                { latex: '\\text{Domingo}' },
                { latex: '\\text{Sábado}' },
                { latex: '\\text{Lunes}' },
                { latex: '\\text{Viernes}' }
            ],
            correct: 0,
            hint: 'Hoy es Viernes.'
        },
        {
            question: 'Matemática:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{La mitad de 2 más 2 es:}',
            options: [
                { latex: '3' },
                { latex: '2' },
                { latex: '4' },
                { latex: '1' }
            ],
            correct: 0,
            hint: '(2/2) + 2 = 1 + 2 = 3. Ojo con la redacción.'
        },
        {
            question: 'Lógica:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{¿Cuántos lados tiene un círculo?}',
            options: [
                { latex: '\\text{Infinitos (o cero)}' },
                { latex: '1' },
                { latex: '2' },
                { latex: '4' }
            ],
            correct: 0,
            hint: 'Concepto geométrico.'
        },
        {
            question: 'Lógica:',
            geogebraAppName: 'classic',
            geogebraState: '0',
            latex: '\\text{Si 3 gatos cazan 3 ratones en 3 minutos, ¿cuántos gatos cazan 100 ratones en 100 minutos?}',
            options: [
                { latex: '3' },
                { latex: '100' },
                { latex: '1' },
                { latex: '30' }
            ],
            correct: 0,
            hint: 'Un gato caza un ratón en 3 minutos.'
        }
    ]
};
