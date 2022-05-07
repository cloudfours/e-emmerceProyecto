import { borrarPro } from './eliminarProducto.js'
import { verProducto } from './verProductoDet.js'
const crearNuevoProducto = (producto) => {
    const crearContPro = document.createElement('div')
    crearContPro.classList.add('caja__producto__contenido');
    const cajaImagen = document.createElement('div');
    cajaImagen.classList.add('caja__producto__contenido__imagen')
    cajaImagen.style.background = `url('${producto.url}') center / cover no-repeat`
    cajaImagen.style.width = '164px';
    cajaImagen.style.height = '174px'
    const nombrePro = document.createElement('h3');
    nombrePro.classList.add('nombre__producto');
    nombrePro.innerHTML = producto.nombre;
    const precios = document.createElement('span')
    precios.classList.add('caja__nombre__producto__precio')
    precios.innerHTML = `${producto.precio}`;
    const referencesPro = document.createElement('a');
    const iconoBasura = document.createElement('i')
    iconoBasura.setAttribute('id', 'eliminar');
    iconoBasura.classList.add('fa-solid');
    iconoBasura.classList.add('fa-trash')

    const iconoedit = document.createElement('i')
    iconoedit.classList.add('fa-solid');
    iconoedit.classList.add('fa-pen');
    referencesPro.classList.add('referencia__producto')
    referencesPro.href = `producto.html?id=${producto.id}`;
    referencesPro.innerHTML = 'ver producto';
    cajaImagen.appendChild(iconoBasura);
    cajaImagen.appendChild(iconoedit);
    crearContPro.appendChild(cajaImagen);
    crearContPro.appendChild(nombrePro)
    crearContPro.appendChild(precios);
    crearContPro.appendChild(referencesPro)
    iconoedit.href = `editar-producto.html?id=${producto.id}`

    iconoBasura.addEventListener('click', (evento) => {
        evento.preventDefault();
        borrarPro(producto);
    })


    return crearContPro;

}




const mostrarProductoDetalle = (producto) => {
    const crearContPro = document.createElement('div')
    crearContPro.classList.add('imagen__producto__contenido');
    const cajaImagen = document.createElement('div');
    cajaImagen.classList.add('imagen__fondo')
    cajaImagen.style.background = `url('${producto.url}') center / cover no-repeat`
    cajaImagen.style.width = '360px';
    cajaImagen.style.height = '192px'
    const cajaTextoDet = document.createElement('div');
    cajaTextoDet.classList.add('contenido__texto')
    const nombrePro = document.createElement('h3')
    nombrePro.classList.add('nombre__producto__escogido');
    nombrePro.innerHTML = producto.nombre;
    const precios = document.createElement('span')
    precios.classList.add('precio__producto__escogido')
    precios.innerHTML = `$${producto.precio}`;
    const desc = document.createElement('p')
    desc.classList.add('parrafo__producto');
    desc.innerHTML = `${producto.desc}`;
    crearContPro.appendChild(cajaImagen);
    cajaTextoDet.appendChild(nombrePro);
    cajaTextoDet.appendChild(precios);
    cajaTextoDet.appendChild(desc)

    return crearContPro;
}

export const enviarElemento = {
    crearNuevoProducto,
    mostrarProductoDetalle
}