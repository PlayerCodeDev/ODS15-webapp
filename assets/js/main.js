import loadNavbar from './components/navbar.js';
import setupSearch from './components/search.js';

document.addEventListener('DOMContentLoaded', async () => {
    await loadNavbar();
    setupSearch();

    await loadComponent('/assets/components/featured-campaigns.html', 'featured-campaigns-container');
    await loadComponent('/assets/components/upcoming-events.html', 'upcoming-events-section');

    const upcomingEventsSection = document.querySelector('.upcoming-events-section');
    if (upcomingEventsSection) {
        const module = await import('./components/upcoming-events.js');
        module.initUpcomingEventCarousel();
    }
});

async function loadComponent(path, containerId) {

    try {
        const response = await fetch(path);
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error(`Error al cargar el componente ${path}:`, error)
    }
}
