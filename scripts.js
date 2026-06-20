document.addEventListener("DOMContentLoaded", () => {  
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    const imagenLightbox = document.createElement('img');
    lightbox.appendChild(imagenLightbox);

    const imagenesGaleria = document.querySelectorAll('.galeria-item img');

    imagenesGaleria.forEach(imagen => {
        imagen.parentElement.addEventListener('click', () => {
            imagenLightbox.src = imagen.src;
            imagenLightbox.alt = imagen.alt;
            lightbox.classList.add('activo');
        });
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== imagenLightbox) {
            lightbox.classList.remove('activo');
        }
    });

   
    const inputBuscador = document.getElementById('buscar-glosario');
    const terminos = document.querySelectorAll('.glosario-lista dt');
    const descripciones = document.querySelectorAll('.glosario-lista dd');

    if (inputBuscador) {
        inputBuscador.addEventListener('input', (e) => {
            const textoBusqueda = e.target.value.toLowerCase().trim();

            terminos.forEach((dt, indice) => {
                const dd = descripciones[indice];
                const terminoTexto = dt.textContent.toLowerCase();
                const descripcionTexto = dd.textContent.toLowerCase();

                if (terminoTexto.includes(textoBusqueda) || descripcionTexto.includes(textoBusqueda)) {
                    dt.classList.remove('oculto');
                    dd.classList.remove('oculto');
                } else {
                    dt.classList.add('oculto');
                    dd.classList.add('oculto');
                }
            });
        });
    }
});