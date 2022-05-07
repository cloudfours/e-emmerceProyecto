import { functPro } from '../services/cliente.servidor.js';
import { enviarElemento } from './crearElementos.js'

const url = new URL(window.location);
const buscar = url.searchParams.get('buscar');

const mostrarResultadoBusqueda = async() => {
    try {
        const productoBuscar = await functPro.buscarPro(buscar);
        const tituloCambiar = document.querySelector('.titulo__producto__texto');
        const cargarProducto = document.querySelector('.titulo__producto__texto').querySelector('[data-conten-pro]');
        if (!productoBuscar.lenght === 0) {

            console.log(`NO SE HA CONTRADO NADA "${buscar}"`)
        } else {
            console.log(` SE HA CONTRADO  "${buscar}"`)
            productoBuscar.forEach(producto => {
                const crearProducto = enviarElemento.crearNuevoProducto(producto)
                cargarProducto.appendChild(crearProducto);
            });
        }
    } catch {
        console.log('no se encontro nada')
    }
}
mostrarResultadoBusqueda();