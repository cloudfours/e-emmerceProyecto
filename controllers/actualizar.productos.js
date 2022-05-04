import { functPro } from '../services/cliente.servidor.js';
const urlact = document.querySelector('[data-imagen]').value;
const nombre = document.querySelector('[data-nombre]').value;
const precio = document.querySelector('[data-precio]').value;
const categoria = document.querySelector('.lista_despegable').value;
const desc = document.querySelector('[data-desc]').value;

urlact.addEventListener('change', (e) => {
    e.preventDefault();

    var reader = new FileReader();
    reader.readAsDataURL(url.files[0]);
    reader.onload = function() {
        console.log(reader.result);

        retorno = reader.result
        console.log('mi retorno', retorno);

        return retorno;


    }

})
const verDetalleproducto = () => {
    const urls = new URL(window.location);
    const id = urls.searchParams.get("id");
    if (id == null) {
        console.log('no hay nada');
    }
    functPro.detalleProducto(id).then((producto) => {
        url = producto.url;
        nombre = producto.nombre;
        precio = producto.precio;
        categoria = producto.categoria;
        desc = producto.desc;

    }).catch(err => console.log(err));

};


verDetalleproducto();
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    modificarPro();


})
const modificarPro = async() => {
    try {
        const modificarPro = await functPro.actualizarProducto(url, nombre, precio, categoria, desc, id)
        window.location.href = 'index.html';
    } catch (error) {

    }
}