document.addEventListener('DOMContentLoaded', () => {
    const catalogoCarousel = document.getElementById('catalogo-carousel');
    const recomendacionesList = document.getElementById('recomendaciones-list');

    const librosCatalogo = [
        { titulo: "El Quijote", autor: "Miguel de Cervantes", imagen: "imagen1.jpg" },
        { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", imagen: "imagen2.jpg" }
    ];

    const librosRecomendados = [
        { titulo: "Rayuela", autor: "Julio Cortázar", imagen: "imagen3.jpg" },
        { titulo: "La Sombra del Viento", autor: "Carlos Ruiz Zafón", imagen: "imagen4.jpg" }
    ];

    if (catalogoCarousel) {
        librosCatalogo.forEach(libro => {
            const div = document.createElement('div');
            div.innerHTML = `
                <img src="${libro.imagen}" alt="${libro.titulo}">
                <h3>${libro.titulo}</h3>
                <p>${libro.autor}</p>
            `;
            catalogoCarousel.appendChild(div);
        });
    }

    if (recomendacionesList) {
        librosRecomendados.forEach(libro => {
            const div = document.createElement('div');
            div.innerHTML = `
                <img src="${libro.imagen}" alt="${libro.titulo}">
                <h3>${libro.titulo}</h3>
                <p>${libro.autor}</p>
            `;
            recomendacionesList.appendChild(div);
        });
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const libros = document.querySelectorAll('.libro');

    libros.forEach(libro => {
        libro.addEventListener('click', function() {
            // Limpiar la selección anterior
            libros.forEach(l => {
                l.classList.remove('active');
                l.classList.add('inactive');
            });

            // Seleccionar el libro actual
            this.classList.add('active');
            this.classList.remove('inactive');
        });
    });
});
