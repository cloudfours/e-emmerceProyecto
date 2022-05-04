const arrastrarImagen = document.querySelector('#arrastrar_imagen');
const botonFile = document.querySelector('#cargar');
const inputFile = document.querySelector('#cargarImagen')
const titulo = document.querySelector('#imagen_cambiar_titulo');
const nombrePro = document.querySelector('[data-nombre]');
const precio = document.querySelector('[data-precio]');
const descrip = document.querySelector('[data-desc]');
const spanOne = document.querySelector('#span_One_ag')
const spanTwo = document.querySelector('#span_Two_ag')
const spanTree = document.querySelector('#span_Tree_ag')
const spanFour = document.querySelector('#spanFour')
const botonPro = document.querySelector('[data-producto]')
const expresionNum = /^[0-9,$]*$/g


nombrePro.addEventListener("keyup", habilitarBoton);
precio.addEventListener("keyup", habilitarBoton);
descrip.addEventListener("keyup", habilitarBoton);
botonPro.addEventListener('click', () => {

})



arrastrarImagen.addEventListener('blur', (e) => {
    validarImagen(arrastrarImagen);
})
nombrePro.addEventListener('blur', (e) => {
    validarNombre(nombrePro);
})
precio.addEventListener('blur', () => {
    validarPrecio(precio);
})
descrip.addEventListener('blur', () => {
    validarDescrip(descrip);
})


function habilitarBoton() {

    let contador = 0;
    if (nombrePro.value.length === 0) {
        contador++;
    }

    if (precio.value.length === 0) {
        contador++;
    }
    if (descrip.value.length === 0) {
        contador++;
    }
    if (contador == 0) {
        document.querySelector('[data-producto]').disabled = false;

    } else {
        document.querySelector('[data-producto]').disabled = true
    }





}
const validarImagen = (file) => {
    if (file.value.length === 0 || file.value.lenght === undefined) {

        spanFour.innerHTML = 'no hay imagen'


    } else {
        spanFour.innerHTML = ''

    }


}
const validarNombre = (nombre) => {
    if (nombrePro.value.length === 0 || nombrePro.value.lenght === null) {
        spanOne.innerHTML = 'esta vacio, por favor ingrese nombre'
        nombrePro.style.border = '1px solid red';

    } else {
        spanOne.innerHTML = ''

    }

}
const validarPrecio = (precio) => {
    if (precio.value.length === 0 || precio.value.lenght === null) {
        precio.style.border = '1px solid red';
        spanTwo.innerHTML = 'esta vacio, por favor ingrese valor'


    } else {
        spanTwo.innerHTML = ''
        if (!expresionNum.test(precio.value)) {
            spanTwo.innerHTML = 'solo numeros'
            console.log('paswword', expresionNum.test(precio.value));
        }
    }


}
const validarDescrip = (descrip) => {
    if (descrip.value.length === 0 || descrip.value.lenght === null) {
        descrip.style.border = '1px solid red';
        spanTree.innerHTML = 'esta vacio, por favor ingrese descripcion'


    } else {
        spanTree.innerHTML = ''

    }


}