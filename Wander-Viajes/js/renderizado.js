// Archivo renderizado.js
export async function fetchData() {
    try {
        const response = await fetch('./data.json'); // Cambia la ruta si es necesario
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parsear el JSON a un objeto JS
        return data; // Retornar los datos para que se puedan usar donde se llame a esta función
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
        throw error; // Lanzar el error para manejarlo fuera de la función si es necesario
    }
}
 
export function RenderizarDestinos(data) {

    const contenedor = document.querySelector(".destinos");
    let contenidoHTML = '';
    
    data.destinos.forEach(destino => {
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

