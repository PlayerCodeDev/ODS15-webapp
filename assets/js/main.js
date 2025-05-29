import loadNavbar from './components/navbar.js';
import setupSearch from './components/search.js';

document.addEventListener('DOMContentLoaded', () => {
    loadNavbar().then(() => {
        setupSearch();
    });
});