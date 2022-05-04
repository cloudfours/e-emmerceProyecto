const email = document.getElementById('email');
const password = document.getElementById('pass');
const botonLogin = document.querySelector('[data-login]');
const spanOne = document.getElementById('span_one');
const spanTwo = document.getElementById('span_two')
let expresiona = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
let expresionp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let link = document.getElementById('link');
email.addEventListener("keyup", habilitarBoton);
password.addEventListener("keyup", habilitarBoton);
botonLogin.addEventListener("click", (event) => {
    event.preventDefault();
    if (!expresionp.test(email.value) && !expresiona.test(password.value)) {
        alert('error')
        link.style.pointerEvents = 'none';
    } else {

    }

});
email.addEventListener('blur', function(event) {

    validarEmail(email);

})
password.addEventListener('blur', function(event) {

    validarPassword(password);

})

function habilitarBoton() {

    let contador = 0;
    if (email.value.length === 0) {
        contador++;
    }

    if (password.value.length === 0) {
        contador++;
    }
    if (contador == 0) {
        document.querySelector('[data-login]').disabled = false;






    } else {
        document.querySelector('[data-login]').disabled = true;







    }


}
const validarEmail = (email) => {
    if (email.value.length === 0 || email.value.lenght === null) {
        spanOne.innerHTML = 'esta vacio, por favor ingrese correo'
        email.style.border = '1px solid red';

    } else {
        spanOne.innerHTML = ''
        if (!expresionp.test(email.value)) {
            spanOne.innerHTML = 'ingrese correctamente el correo'
            console.log('email', expresionp.test(email.value));

        }
    }

}
const validarPassword = (password) => {
    if (password.value.length === 0 || password.value.lenght === null) {
        password.style.border = '1px solid red';
        spanTwo.innerHTML = 'esta vacio, por favor ingrese constraseña'


    } else {
        spanTwo.innerHTML = ''
        if (!expresiona.test(password.value)) {
            spanTwo.innerHTML = 'Mínimo ocho caracteres, al menos una letra y un númeroo'
            console.log('paswword', expresiona.test(password.value));
        }
    }


}