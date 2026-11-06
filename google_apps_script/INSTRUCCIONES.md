# Enviar los resultados a Google Sheets

Cada vez que un estudiante finaliza una **evaluación en línea**, la aplicación envía su nota y el detalle de cada pregunta a una hoja de cálculo de Google suya. Esto se configura **una sola vez**. Necesita unos 10 minutos.

## 1. Crear la hoja y pegar el script

1. Entre a <https://sheets.google.com> con su cuenta y cree una hoja en blanco, por ejemplo «Resultados Evaluaciones».
2. Abra el menú **Extensiones → Apps Script**.
3. Borre el contenido de `Código.gs` y pegue todo el contenido del archivo `Codigo.gs` de esta carpeta.
4. En la línea `const TOKEN = 'cambie-este-texto';`, cambie el texto por una palabra que solo usted conozca, por ejemplo `'geo-2026-grupo7'`.
5. Guarde el proyecto (icono del disquete).

## 2. Publicarlo como aplicación web

1. Pulse **Implementar → Nueva implementación**.
2. En el engranaje «Seleccionar tipo», elija **Aplicación web**.
3. Configure:
   - **Ejecutar como:** *Yo* (su cuenta).
   - **Quién tiene acceso:** *Cualquier usuario*. Es necesario para que los navegadores de los estudiantes puedan enviar sin iniciar sesión. Los estudiantes **no** pueden ver la hoja; solo pueden añadir filas.
4. Pulse **Implementar** y autorice los permisos que pide Google. Si aparece «Google no ha verificado esta aplicación», elija *Configuración avanzada → Ir a (nombre del proyecto)*: es su propio script.
5. Copie la **URL de la aplicación web**. Termina en `/exec`.

Para comprobarla, abra esa URL en el navegador. Debe aparecer: `{"ok":true,"mensaje":"Servicio de resultados activo"}`.

## 3. Configurar la aplicación

Abra `js/config.js` y complete los datos:

```js
window.APP_CONFIG = {
    resultsEndpoint: 'https://script.google.com/macros/s/AKfy..../exec', // la URL copiada
    resultsToken: 'geo-2026-grupo7',  // la misma palabra del paso 1.4
    courseName: 'Cálculo I - Grupo 7' // opcional
};
```

Haga una evaluación de prueba. En la pantalla de resultados debe aparecer **«✔ Resultados enviados al docente.»** y la hoja debe tener dos pestañas nuevas: **Resultados** y **Detalle**.

## Cómo funciona

- **Sin internet:** el resultado se guarda en el equipo del estudiante y se reenvía automáticamente la próxima vez que se abra la aplicación con conexión. También hay un botón «Reintentar ahora».
- **Reenvíos duplicados:** cada envío tiene un identificador único y el script descarta los repetidos.
- **Columna «ID evaluación»:** identifica cada evaluación generada (`EV-AAAAMMDD-HHMM-XXXX`). Sirve para filtrar la hoja por evaluación.
- **Descargas de Excel:** siguen disponibles en la pantalla de resultados.

## Si cambia el código del script

Use **Implementar → Gestionar implementaciones → editar (lápiz) → Versión: Nueva versión**. Así la URL no cambia. Si crea una implementación nueva, la URL cambia y hay que actualizar `js/config.js`.

## Limitaciones (seguridad)

- La palabra clave (`TOKEN`) solo impide que otras personas escriban en la hoja por accidente. Cualquiera que abra `js/config.js` puede leerla. No es una contraseña fuerte.
- La aplicación no puede confirmar que Google recibió el envío: el navegador no deja leer la respuesta de Apps Script. Solo detecta la falta de conexión. Revise la hoja después de cada evaluación.
