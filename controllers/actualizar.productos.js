import { functPro } from '../services/cliente.servidor.js';
const formulario = document.querySelector('[ data-form]');
const urlact = document.querySelector('[data-imagen]');
const nombre = document.querySelector('[data-nombre]');
const precio = document.querySelector('[data-precio]');
const categoria = document.querySelector('.lista_despegable');
const desc = document.querySelector('[data-desc]');
const url = document.querySelector('[data-imagen]');
let retorno = ''
url.addEventListener('change', (e) => {
    e.preventDefault();

    var reader = new FileReader();
    reader.readAsDataURL(url.files[0]);
    reader.onload = function() {
        console.log(reader.result);

        retorno = reader.result
        console.log('mi retorno', retorno);

        return retorno;


    }
    const verDetalleproducto = () => {
        const urls = new URL(window.location);
        const id = urls.searchParams.get("id");
        if (id === null) {
            console.log('no hay nada');
        }
        functPro.detalleProducto(id).then((producto) => {
            retorno.value = producto.retorno;
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            categoria.value = producto.categoria;
            desc.value = producto.desc;
            console.log(producto);
        }).catch(err => console.log(err));

    };


    verDetalleproducto();
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const urls = new URL(window.location);
        const id = urls.searchParams.get("id");

        functPro.actualizarProducto(retorno.value, nombre.value, precio.value, categoria.value, desc.value, id)
        window.location.href = ("productos-por-categoria.html");

    });
})