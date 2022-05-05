import { functPro } from '../services/cliente.servidor.js';
const formulario = document.querySelector('[ data-form]');
const urlact = document.querySelector('[data-imagen]');
const nombre = document.querySelector('[data-nombre]');
const precio = document.querySelector('[data-precio]');
const categoria = document.querySelector('.lista_despegable');
const desc = document.querySelector('[data-desc]');
export const verDetalleproducto = () => {
    const urls = new URL(window.location);
    const id = urls.searchParams.get("id");
    if (id === null) {
        console.log('no hay nada');
    }
    functPro.detalleProducto(id).then((producto) => {

        nombre.value = producto.nombre;
        precio.value = producto.precio;
        categoria.value = producto.categoria;
        desc.value = producto.desc;

    }).catch(err => console.log(err));

};


verDetalleproducto();
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log(modificarProducto());
    functPro.actualizarProducto(nombre.value, precio.value, categoria.value, desc.value, id)
    window.location.href = ("producto.html");

});