const listaProducto = () => {
    return fetch("http://localhost:3000/producto").then((responder) => responder.json());
}
const crearProducto = (url, nombre, precio, categoria, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url, nombre, precio, descripcion, categoria, id: uuid.v4() }),
    });
}
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
    });
}
const actualizarProducto = (url, nombre, precio, categoria, descripcion, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre, precio, categoria, descripcion }),
        })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
}
const verProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((responder) => responder.json());
}
const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>
        respuesta.json()
    );
}
const seccionLista = (categoria) => {
    fetch(`http://localhost:3000/producto/${categoria}`).then((respuesta) => respuesta.json()).catch((err) => err)
}
export const functPro = {
    crearProducto,
    listaProducto,
    actualizarProducto,
    eliminarProducto,
    detalleProducto,
    verProducto,
    seccionLista
}