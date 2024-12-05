// Archivo filtros.js
const contenedor = document.querySelector(".destinos");
const mostrarPrecio = document.getElementById('selectedPrice');

export function manejadorFiltro(data) {
    const campoTexto = document.getElementById('filterName').value.toLowerCase();
    const destinosFiltrados = data.destinos.filter((destino) => {
        const nombreMinusculas = destino.nombre.toLowerCase();
        return nombreMinusculas.includes(campoTexto);
    });

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

    contenedor.innerHTML = contenidoHTMLFiltrado;
}

export function FiltrarPrecios(data) {
    const campoPrecio = document.getElementById('filterPrice');
    const precioMaximo = parseInt(campoPrecio.value, 10);
    const campoTexto = document.getElementById('filterName').value.toLowerCase();

    const destinosFiltrados = data.destinos.filter((destino) => {
        const nombreMinusculas = destino.nombre.toLowerCase();
        return nombreMinusculas.includes(campoTexto) && destino.precio <= precioMaximo;
    });

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

    mostrarPrecio.innerText = "Precio seleccionado: $" + campoPrecio.value;
    contenedor.innerHTML = contenidoHTMLFiltrado;
}
