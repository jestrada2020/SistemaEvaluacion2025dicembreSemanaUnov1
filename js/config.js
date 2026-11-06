// Configuración general de la aplicación.
// Edite este archivo una sola vez (ver google_apps_script/INSTRUCCIONES.md).
window.APP_CONFIG = {
    // URL de la aplicación web de Google Apps Script que guarda los resultados
    // en su hoja de cálculo. Ejemplo:
    // 'https://script.google.com/macros/s/AKfy..../exec'
    // Déjela vacía ('') para no enviar resultados a Google Sheets.
    resultsEndpoint: '',

    // Debe coincidir con TOKEN en Codigo.gs. Evita que cualquier persona que
    // descubra la URL escriba en su hoja por accidente (no es una contraseña fuerte:
    // quien abra este archivo puede leerla).
    resultsToken: 'cambie-este-texto',

    // Nombre del curso o grupo que se guarda junto a cada resultado (opcional)
    courseName: ''
};
