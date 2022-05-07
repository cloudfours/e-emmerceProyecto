const link = 'https://young-cove-98921.herokuapp.com/producto'

const listaProducto = async() => {
    const responder = await fetch(`${link}`);
    return await responder.json();

}
const crearProducto = (url, nombre, precio, categoria, descripcion) => {
    return fetch(`${link}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, nombre, precio, descripcion, categoria, id: uuid.v4() }),
    });
}
const eliminarProducto = (id) =>
    fetch(`${link}/${id}`, {
        method: "DELETE"
    })
    .then((respuesta) => respuesta)
    .catch((error) => error);
const actualizarProducto = (url, nombre, precio, categoria, descripcion, id) => {
    try {
        const respuesta = fetch(`${link}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url, nombre, precio, categoria, descripcion }),
        });
        return respuesta;
    } catch (err) {
        return console.log(err);
    }
}

const detalleProducto = (id) => fetch(`${link}?id=${id}`).then((respuesta) => respuesta.json()).catch((error) => error);
console.log(detalleProducto);
const catLista = async(categoria) => {
    try {
        const respuesta = await fetch(`${link}?categoria=${categoria}&_sort=id&_order=desc&_limit=6`);
        return respuesta.json();
    } catch (err) {
        return err;
    }

}
const buscarPro = (buscar) => fetch(`${link}?nombre_like=${buscar}`).then((respuesta) => respuesta.json()).catch((error) => error);
const productosPorcate = (categoria) => fetch(`${link}?categoria=${categoria}`).then((respuesta) => respuesta.json()).catch((error) => error);
export const functPro = {
    crearProducto,
    listaProducto,
    actualizarProducto,
    eliminarProducto,
    detalleProducto,
    catLista,
    productosPorcate,
    buscarPro
}