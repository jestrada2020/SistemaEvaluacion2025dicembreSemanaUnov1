// Avisos dentro de la página (en lugar de alert/confirm), con los colores de Bootstrap
// como en el resto de la Caja de Herramientas:
//   Avisos.mostrar(texto, 'warning' | 'danger' | 'success' | 'info', { duracion })
//   await Avisos.confirmar(texto, { si: 'Aceptar', no: 'Cancelar', peligro: false }) -> true/false
const Avisos = (() => {
    let zona = null;

    function contenedor() {
        if (zona && document.body.contains(zona)) return zona;
        zona = document.createElement('div');
        zona.id = 'avisos';
        zona.className = 'avisos-zona';
        zona.setAttribute('aria-live', 'polite');
        document.body.appendChild(zona);
        return zona;
    }

    // Muestra un aviso que se cierra solo (salvo los de error, que esperan a que se cierren)
    function mostrar(texto, tipo = 'warning', opciones = {}) {
        const caja = document.createElement('div');
        caja.className = `alert alert-${tipo} alert-dismissible shadow-sm aviso`;
        caja.setAttribute('role', tipo === 'danger' ? 'alert' : 'status');
        const icono = { danger: '⛔', warning: '⚠', success: '✔', info: 'ℹ' }[tipo] || '';
        const cuerpo = document.createElement('div');
        cuerpo.className = 'aviso-texto';
        // Se respetan los saltos de línea del mensaje
        String(texto).split('\n').forEach((linea, i) => {
            if (i) cuerpo.appendChild(document.createElement('br'));
            cuerpo.appendChild(document.createTextNode(i === 0 && icono ? `${icono} ${linea}` : linea));
        });
        const cerrar = document.createElement('button');
        cerrar.type = 'button';
        cerrar.className = 'btn-close';
        cerrar.setAttribute('aria-label', 'Cerrar aviso');
        cerrar.addEventListener('click', () => caja.remove());
        caja.append(cuerpo, cerrar);
        contenedor().appendChild(caja);

        const duracion = opciones.duracion ?? (tipo === 'danger' ? 0 : 7000);
        if (duracion > 0) setTimeout(() => caja.remove(), duracion);
        return caja;
    }

    let pendiente = null; // confirmación abierta (solo una a la vez)

    // Ventana de confirmación accesible; devuelve una promesa con true (sí) o false (no)
    function confirmar(texto, opciones = {}) {
        cerrarConfirmacion(false);
        const { si = 'Aceptar', no = 'Cancelar', peligro = false, titulo = 'Confirmar' } = opciones;
        const anterior = document.activeElement;

        const fondo = document.createElement('div');
        fondo.className = 'aviso-fondo';
        const dialogo = document.createElement('div');
        dialogo.className = 'aviso-dialogo';
        dialogo.setAttribute('role', 'alertdialog');
        dialogo.setAttribute('aria-modal', 'true');
        dialogo.setAttribute('aria-labelledby', 'aviso-dialogo-titulo');
        dialogo.setAttribute('aria-describedby', 'aviso-dialogo-texto');

        const h = document.createElement('h2');
        h.id = 'aviso-dialogo-titulo';
        h.className = 'h5 mb-3';
        h.textContent = titulo;
        const p = document.createElement('p');
        p.id = 'aviso-dialogo-texto';
        String(texto).split('\n').forEach((linea, i) => {
            if (i) p.appendChild(document.createElement('br'));
            p.appendChild(document.createTextNode(linea));
        });
        const botones = document.createElement('div');
        botones.className = 'd-flex justify-content-end gap-2 mt-3';
        const bNo = document.createElement('button');
        bNo.type = 'button';
        bNo.className = 'btn btn-outline-secondary';
        bNo.textContent = no;
        bNo.dataset.avisosConfirmar = 'no';
        const bSi = document.createElement('button');
        bSi.type = 'button';
        bSi.className = `btn ${peligro ? 'btn-danger' : 'btn-primary'}`;
        bSi.textContent = si;
        bSi.dataset.avisosConfirmar = 'si';
        botones.append(bNo, bSi);
        dialogo.append(h, p, botones);
        fondo.appendChild(dialogo);
        document.body.appendChild(fondo);
        bSi.focus();

        return new Promise(resolve => {
            const terminar = (valor) => {
                document.removeEventListener('keydown', teclas, true);
                fondo.remove();
                pendiente = null;
                if (anterior && typeof anterior.focus === 'function' && document.body.contains(anterior)) anterior.focus();
                resolve(valor);
            };
            const teclas = (e) => {
                if (e.key === 'Escape') { e.preventDefault(); terminar(false); }
                if (e.key === 'Tab') { // mantener el foco dentro del diálogo
                    e.preventDefault();
                    (document.activeElement === bSi ? bNo : bSi).focus();
                }
            };
            document.addEventListener('keydown', teclas, true);
            bSi.addEventListener('click', () => terminar(true));
            bNo.addEventListener('click', () => terminar(false));
            pendiente = terminar;
        });
    }

    // Cierra la confirmación abierta (p. ej. cuando se acaba el tiempo del examen)
    function cerrarConfirmacion(valor = false) {
        if (pendiente) pendiente(valor);
    }

    return { mostrar, confirmar, cerrarConfirmacion };
})();
window.Avisos = Avisos;
