document.querySelector('.busqueda__button').addEventListener('submit', (event) => {
    const entrada = document.querySelector('.buscar__campo').value;
    window.location.href = `buscar.html?buscar=${entrada}`
})