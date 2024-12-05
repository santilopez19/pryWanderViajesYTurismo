import { fetchData, RenderizarDestinos } from './renderizado.js';
import { manejadorFiltro, FiltrarPrecios } from './filtros.js';

document.addEventListener("DOMContentLoaded", async () => {
    const contenedor = document.querySelector(".destinos");
    try {
        const data = await fetchData(); // Llama a la función fetchData y espera la respuesta
        RenderizarDestinos(data); // Llama a la función de renderizado con los datos cargados

        const campoTexto = document.getElementById('filterName');
        const campoPrecio = document.getElementById('filterPrice');

        campoTexto.addEventListener("input", () => manejadorFiltro(data));
        campoPrecio.addEventListener('input', () => FiltrarPrecios(data));
    } catch (error) {
        contenedor.innerHTML = "<p>Error al cargar los destinos. Por favor, inténtalo más tarde.</p>";
    }
});

