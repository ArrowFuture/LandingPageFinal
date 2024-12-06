document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad de desplazamiento suave del menú
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el desplazamiento instantáneo

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Elimina la clase 'highlighted' de todas las secciones
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('highlighted');
            });

            // Agrega la clase 'highlighted' a la sección objetivo
            targetSection.classList.add('highlighted');

            // Desplazamiento suave
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidad del acordeón
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;

            // Cierra el contenido de todos los acordeones
            document.querySelectorAll('.accordion-content').forEach(c => {
                if (c !== content) {
                    c.style.maxHeight = null;
                    c.style.padding = "0 15px";
                }
            });

            // Alterna la visibilidad del contenido actual
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 15px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "15px";
            }
        });
    });

    // Funcionalidad del modal
    const openModalButton = document.getElementById('openModal');
    const modal = document.getElementById('videoModal');
    const closeModalButton = document.querySelector('.modal-close-btn');
    const youtubeVideo = document.getElementById('youtubeVideo');

    openModalButton.addEventListener('click', function() {
        modal.style.display = 'block';
        youtubeVideo.src = 'https://www.youtube.com/embed/tgbNymZ7vqY'; // Reemplaza con el ID de tu video
    });

    function closeModal() {
        modal.style.display = 'none';
        youtubeVideo.src = ''; // Detiene el video al cerrar el modal
    }

    closeModalButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Funcionalidad de la presentación de diapositivas
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${n * 100}%)`;
        });
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    setInterval(nextSlide, 5000); // Cambia cada 5 segundos
});
