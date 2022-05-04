 const crearNuevoProducto = (url, nombre, precio, categoria) => {
     const crearContPro = document.createElement('div')
     crearContPro.classList.add('caja__producto__contenido');
     const cajaImagen = document.createElement('div');
     cajaImagen.classList.add('caja__producto__contenido__imagen')
     cajaImagen.style.background = `url('${url}') center / cover no-repeat`
     cajaImagen.style.width = '164px';
     cajaImagen.style.height = '174px'
     const nombrePro = document.createElement('h3');
     nombrePro.classList.add('nombre__producto');
     nombrePro.innerHTML = nombre;
     const precios = document.createElement('span')
     precios.classList.add('caja__nombre__producto__precio')
     precios.innerHTML = precio;
     const referencesPro = document.createElement('p');
     const iconoBasura = document.createElement('i')
     iconoBasura.classList.add('fa-solid');
     iconoBasura.classList.add('fa-trash')
     const iconoedit = document.createElement('i')
     iconoedit.classList.add('fa-solid');
     iconoedit.classList.add('fa-pen');
     referencesPro.classList.add('referencia__producto')
     referencesPro.innerHTML = 'ver producto';
     cajaImagen.appendChild(iconoBasura);
     cajaImagen.appendChild(iconoedit);
     crearContPro.appendChild(cajaImagen);
     crearContPro.appendChild(nombrePro)
     crearContPro.appendChild(precios);
     crearContPro.appendChild(referencesPro)

     iconoedit.addEventListener('click', () => {
         window.location.href = `agregar-producto.html?id=${id}`;
     })
     return crearContPro;

 }

 export const enviarElemento = {
     crearNuevoProducto
 }