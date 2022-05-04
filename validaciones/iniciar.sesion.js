let span1 = document.querySelector('#span1');
let span2 = document.querySelector('#span2');
let form = document.getElementById('form')
const nombre = document.getElementById('nombre');
const cajaTexto = document.getElementById('textarea')
const campoError = document.getElementById('caja')
let boton = document.getElementById("boton");

nombre.addEventListener("keyup", habilitarBoton);
cajaTexto.addEventListener("keyup", habilitarBoton);
boton.addEventListener("click", (event) => {

    alert("formulario lleno");
});

cajaTexto.addEventListener("blur", function(event) {
    if (cajaTexto.value.length === 0 || cajaTexto.value.length === null) {

        span1.innerHTML = 'esta vacio, por favor instroduzca nombre'
        cajaTexto.style.border = '1px solid red'

    } else {
        span1.innerHTML = ''
        cajaTexto.style.border = 'none'
    }
})
nombre.addEventListener("blur", function(event) {
    if (nombre.value.length === 0 || nombre.value.length === null) {
        span2.innerHTML = 'esta vacio, por favor instroduzca mensaje'
        nombre.style.border = '1px solid red'

    } else {
        span2.innerHTML = ''
        nombre.style.border = 'none'
    }

})

function habilitarBoton() {

    let contador = 0;
    if (nombre === "") {
        contador++;
    }

    if (cajaTexto === "") {
        contador++;
    }
    if (contador == 0) {
        document.querySelector("[data-login]").disabled = false;


    } else {
        document.querySelector("[data-login]").disabled = true;
    }


}