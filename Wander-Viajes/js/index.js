const tienda = {
    destinos: [
        {
            id: 1,
            nombre: "Escapada a Playa Tropical",
            precio: 1499,
            descripcion: "Disfruta de 7 días en una paradisíaca playa de arena blanca, con todo incluido. Relájate bajo el sol y sumérgete en aguas cristalinas.",
            imagen:"https://elplanetaurbano.com/wp-content/uploads/2021/01/billetes-avion-viajes-tarifas-comparacion-precios-ahorro-compra-vuelos-bbva-1024x683-1.jpg"
        },
        {
            id: 2,
            nombre: "Aventura en las Montañas",
            precio: 899,
            descripcion: "Explora las alturas durante 5 días de trekking y aventura en las montañas. Incluye guías expertos y alojamiento en cabañas rústicas.",
            imagen:"https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_2670050crop.jpg?w=1900&h=1267"
        },
        {
            id: 3,
            nombre: "Safari en África",
            precio: 3200,
            descripcion: "Vive la experiencia de un safari en África durante 10 días. Descubre la fauna salvaje y alójate en exclusivos campamentos de lujo.",
            imagen:"https://mapsicologos.com/wp-content/uploads/2019/10/viajes.jpg"
        },
        {
            id: 4,
            nombre: "Tour por las Capitales Europeas",
            precio: 2800,
            descripcion: "Un recorrido de 15 días por las ciudades más emblemáticas de Europa: París, Roma, Madrid y Ámsterdam. Incluye vuelos y hoteles 4 estrellas.",
            imagen:"https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/wgsdxz2hky14y2yidh6j"
        },
        {
            id: 5,
            nombre: "Descanso en las Maldivas",
            precio: 4500,
            descripcion: "Pasa una semana en un bungalow sobre el agua en las islas Maldivas. Relájate con tratamientos de spa y cenas a la luz de las velas.",
            imagen:"https://destinosuroeste.com/wp-content/uploads/2023/06/IMG_7859-1024x819.jpg"
        },
        {
            id: 6,
            nombre: "Crucero por el Caribe",
            precio: 2100,
            descripcion: "Disfruta de un crucero todo incluido por las islas del Caribe durante 10 días. Diversión a bordo y paisajes inolvidables.",
            imagen: "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2023/06/08/64821418dcfd5.jpeg"
        }
    ]
};
const contenedor = document.querySelector(".destinos")
//funcion carga
function RenderizarDestinos(){

// referenciamos contenedor 

// renderizamos
let contenidoHTML = ''
tienda.destinos.forEach(destino => {
    contenidoHTML += `
    <div class="card">
            <img src=${destino.imagen}>
            <h2>${destino.nombre}</h2>
            <p>${destino.descripcion}</p>
            <div class="price">${destino.precio}</div>
            <button id=${destino.id}>Reservar ahora</button>
        </div>
    `
    // console.log(contenidoHTML)
})
contenedor.innerHTML = contenidoHTML
}
document.addEventListener("DOMContentLoaded",RenderizarDestinos)



// Seleccionar el ícono de hamburguesa y el menú de navegación
const hamburguesa = document.querySelector(".hamburguesa");
const navMenu = document.querySelector("nav");

// Agregar el evento de clic a la hamburguesa
hamburguesa.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});



const campoTexto = document.getElementById('filterName')
const manejadorFiltro = () => {
    const destinosFiltrados = tienda.destinos.filter((destino) => {
        const textoMinusculas = campoTexto.value.toLowerCase()
        const nombreMinusculas = destino.nombre.toLowerCase()
        return nombreMinusculas.includes(textoMinusculas)
    })
    // renderizamos
    let contenidoHTMLFiltrado = ''
    destinosFiltrados.forEach(destino => {
        contenidoHTMLFiltrado += `
                <div class="card">
           <img src=${destino.imagen}>
           <h2>${destino.nombre}</h2>
           <p>${destino.descripcion}</p>
           <div class="price">${destino.precio}</div>
           <button id=${destino.id}>Reservar ahora</button>
           </div>
            `
    })
    contenedor.innerHTML = contenidoHTMLFiltrado
}
campoTexto.addEventListener("input", manejadorFiltro)


const campoPrecio = document.getElementById('filterPrice')
const mostrarPrecio = document.getElementById('selectedPrice')

const FiltrarPrecios = () => {
    const precioMaximo = parseInt(campoPrecio.value, 10); // Obtenemos el valor del rango de precio
    const textoMinusculas = campoTexto.value.toLowerCase();

    // Filtrar destinos por nombre y precio
    const destinosFiltrados = tienda.destinos.filter((destino) => {
        const nombreMinusculas = destino.nombre.toLowerCase();
        return nombreMinusculas.includes(textoMinusculas) && destino.precio <= precioMaximo;
    });

    // Renderizar los destinos filtrados
    let contenidoHTMLFiltrado = '';
    destinosFiltrados.forEach(destino => {
        contenidoHTMLFiltrado += `
            <div class="card">
                <img src="${destino.imagen}" alt="${destino.nombre}">
                <h2>${destino.nombre}</h2>
                <p>${destino.descripcion}</p>
                <div class="price">$${destino.precio}</div>
                <button id="${destino.id}">Reservar ahora</button>
            </div>
        `;
    });

    mostrarPrecio.innerText = "Precio seleccionado: $"+campoPrecio.value
    contenedor.innerHTML = contenidoHTMLFiltrado; // Mostrar los destinos filtrados en el contenedor
};

// Eventos para activar el filtrado
campoPrecio.addEventListener('input', FiltrarPrecios);

