import { functPro } from '../services/cliente.servidor.js';

export const borrarPro = ((producto) => {
    try {
        const lisnta = functPro.catLista(producto.categoria);
        if (lisnta.length < 6) {
            throw new 'no se puede borrar mas productos';
        } else {
            functPro.eliminarProducto(producto.id).then((respuesta) => window.location.href = 'productos-por-categoria.html')
        }
    } catch {

    }
});