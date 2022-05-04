import { functPro } from '../services/cliente.servidor.js';
import { enviarElemento } from './crearElementos.js'
const cajaContstar = document.querySelector('.star__wars').querySelector('[data-venta]')
const cajaContCon = document.querySelector('.consolas').querySelector('[data-venta]')
const cajaContDiv = document.querySelector('.diversion').querySelector('[data-venta]')

const agregarProductoPorSeccion = async(content, categoria) => {
    try {
        const listaProductos = await functPro.catLista(categoria);
        console.log(listaProductos);
        listaProductos.forEach((producto) => {

            const crearPro = enviarElemento.crearNuevoProducto(producto);

            content.appendChild(crearPro);
            console.log('recibe producto', content.appendChild(crearPro));
        })
    } catch (e) { console.log(e) } {

    }
}

agregarProductoPorSeccion(cajaContstar, 'starwar')
agregarProductoPorSeccion(cajaContCon, 'consolas')
agregarProductoPorSeccion(cajaContDiv, 'diversion')