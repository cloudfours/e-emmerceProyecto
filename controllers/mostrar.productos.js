import { functPro } from '../services/cliente.servidor.js';
import { enviarElemento } from '../controllers/crearElementos.js'



const cajaContstar = document.querySelector('.star__wars').querySelector('[data-venta]')
const cajaContCon = document.querySelector('.consola').querySelector('[data-venta]')
const cajaContDiv = document.querySelector('.diversion').querySelector('[data-venta]')

const agregarProductoPorSeccion = (categoria, seccion) => {
    try {
        const listaProductos = functPro.seccionLista(seccion);
        listaProductos.forEach((producto) => {
            const crearPro = enviarElemento.crearNuevoProducto(producto);
            categoria.appendChild(crearPro);
        })
    } catch (e) { console.log(e) } {

    }
}

agregarProductoPorSeccion(cajaContstar, 'Starwar')
agregarProductoPorSeccion(cajaContCon, 'Consolas')
agregarProductoPorSeccion(cajaContDiv, 'Diversion')