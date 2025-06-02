
export function initUpcomingEventCarousel() {
    const eventCards = document.querySelectorAll('.event-card');

    if(!eventCards.length) {
        console.warn('No se encontraron tarjetas de eventos para inicializar el carrusel.')
        return;
    }
    
    eventCards.forEach((card, index) => {
        card.style.setProperty("--position", index + 1);
    });
}