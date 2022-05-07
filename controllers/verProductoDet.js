import { functPro } from '../services/cliente.servidor.js';
import { enviarElemento } from './crearElementos.js'

const verProducto = async() => {

    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    try {
        const producto = functPro.detalleProducto(id);
        productosSimilares(producto);
        mostrarProducto(producto);
    } catch (error) { console.log(error); } {

    }
}



const productosSimilares = async(producto) => {
    try {
        const misProductos = await functPro.proSimiliares(producto.categoria);
        const similares = document.querySelector('caja__button__texto');
        misProductos.forEach((producto => {
            if (similares.childElementCount < 6) {
                const produc = enviarElemento.crearNuevoProducto(producto);
                similares.appendChild(produc);
            }
        }))

    } catch (error) { console.log(error) } {

    }
}

const mostrarProducto = (producto) => {
    enviarElemento.mostrarProductoDetalle(producto);

}
verProducto();