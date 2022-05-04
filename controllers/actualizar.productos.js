import { functPro } from '../services/cliente.servidor.js';
const url = document.querySelector('[data-imagen]');
const nombre = document.querySelector('[data-nombre]').value;
const precio = document.querySelector('[data-precio]').value;
const categoria = document.querySelector('[data-cate]').value;
const desc = document.querySelector('[data-desc]').value;


const verDetalleproducto = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id == null) {
        console.log('no hay nada');
    }
    functPro.detalleProducto(id).then((producto) => {

    })
}