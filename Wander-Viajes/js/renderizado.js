// Archivo renderizado.js
export function RenderizarDestinos(tienda) {
    const contenedor = document.querySelector(".destinos");
    let contenidoHTML = '';
    
    tienda.destinos.forEach(destino => {
        contenidoHTML += `
        <div class="card">
            <img src="${destino.imagen}" alt="${destino.nombre}">
            <h2>${destino.nombre}</h2>
            <p>${destino.descripcion}</p>
            <div class="price">$${destino.precio}</div>
            <button id="${destino.id}">Reservar ahora</button>
        </div>
        `;
    });

    contenedor.innerHTML = contenidoHTML;
}
