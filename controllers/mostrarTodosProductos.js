import { functPro } from '../services/cliente.servidor.js';
import { enviarElemento } from './crearElementos.js'
functPro.listaProducto().then((lista) => verProductosTotal(lista)).catch((err) => console.log(err));

const verProductosTotal = async(lista) => {
    const verTodoProductos = document.querySelector('.caja__productos');
    lista.forEach((producto) => {
        const crearPro = enviarElemento.crearNuevoProducto(producto);
        verTodoProductos.appendChild(crearPro);
    })
}