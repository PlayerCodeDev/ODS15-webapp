import loadNavbar from './components/navbar.js';
import setupSearch from './components/search.js';

document.addEventListener('DOMContentLoaded', () => {
    loadNavbar().then(() => {
        setupSearch();
    });
});

async function loadComponent(path, containerId) {
    const response = await fetch(path);
    const html = await response.text();
    document.getElementById(containerId).innerHTML = html;
}

loadComponent('/assets/components/featured-campaigns.html', 'featured-campaigns-container');