import { functPro } from '../services/cliente.servidor.js';
const urlact = document.querySelector('[data-imagen]');
const nombre = document.querySelector('[data-nombre]');
const precio = document.querySelector('[data-precio]');
const categoria = document.querySelector('.lista_despegable');
const desc = document.querySelector('[data-desc]');
const formulario = document.querySelector('[ data-form]');
let retorno = '';
const verDetalleproducto = () => {
    const urls = new URL(window.location);
    const id = urls.searchParams.get("id");
    urlact.addEventListener('change', (e) => {
        e.preventDefault();

        var reader = new FileReader();
        reader.readAsDataURL(urlact.files[0]);
        reader.onload = function() {
            console.log(reader.result);

            retorno = reader.result
            console.log('mi retorno', retorno);

            return retorno;


        }

    })
    if (id == null) {
        console.log('no hay nada');
    }
    functPro.detalleProducto(id).then((producto) => {
        urlact.value = producto.url;
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
});


const modificarProducto = async() => {

    try {
        functPro.actualizarProducto(urlact.value, nombre.value, precio.value, categoria.value, desc.value, id)
        window.location.href = ("producto.html");
    } catch (error) {
        console.log(error)
    }
}