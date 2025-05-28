// NAVBAR

// Add the NavBar to the DOM of the HTML file
document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    document.body.prepend(header);

    fetch('/assets/components/navbar.html')
    .then((res) => res.text())
    .then((html) => {
        header.innerHTML = html;

        const searchToggle = document.getElementById('search-toggle');
        const searchForm = document.getElementById('search-form');
        const navMenu = document.getElementById('nav-menu');

        if (searchForm && searchToggle && navMenu) {
            searchToggle.addEventListener('click', () => {
                const isSearchVisible = !searchForm.classList.contains('hidden');

                if (isSearchVisible) {
                    searchForm.classList.add('hidden');
                    navMenu.classList.remove('d-none');
                } else {
                    searchForm.classList.remove('hidden');
                    navMenu.classList.add('d-none');
                    const input = searchForm.querySelector('input');
                    if (input) input.focus();
                }
            })
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !searchForm.classList.contains('hidden')) {
                searchForm.classList.add('hidden');
                navMenu.classList.remove('d-none');
            }
        });
    })
    .catch((err) => console.error('Error al cargar el navbar: ', err));
});