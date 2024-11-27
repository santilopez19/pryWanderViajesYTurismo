// Archivo index.js
import { tienda } from './tienda.js';
import { RenderizarDestinos } from './renderizado.js';
import { manejadorFiltro, FiltrarPrecios } from './filtros.js';

document.addEventListener("DOMContentLoaded", () => {
    RenderizarDestinos(tienda);
    
    const campoTexto = document.getElementById('filterName');
    const campoPrecio = document.getElementById('filterPrice');
    
    campoTexto.addEventListener("input", manejadorFiltro);
    campoPrecio.addEventListener('input', FiltrarPrecios);
});
