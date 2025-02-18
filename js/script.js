document.addEventListener("DOMContentLoaded", function() {
    // Efecto de aparición en el timeline
    const events = document.querySelectorAll(".event");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    events.forEach(event => {
        observer.observe(event);
    });

    // Efecto en tarjetas de proyectos
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.boxShadow = "5px 5px 15px rgba(0,0,0,0.2)";
        });
        card.addEventListener("mouseout", () => {
            card.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.1)";
        });
    });
});
