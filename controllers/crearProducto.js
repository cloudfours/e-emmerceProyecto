import { functPro } from '../services/cliente.servidor.js';
const formulario = document.querySelector('[data-form]')
let retorno = '';
const url = document.querySelector('[data-imagen]');
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

})

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const url = document.querySelector('[data-imagen]');
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const categoria = document.querySelector('.lista_despegable').value;
    const desc = document.querySelector('[data-desc]').value;

    functPro.crearProducto(retorno, nombre, precio, categoria, desc)
        .then(() => {
            window.location.href = 'productos-por-categoria.html'
        })
        .catch(err => alert(err));


})