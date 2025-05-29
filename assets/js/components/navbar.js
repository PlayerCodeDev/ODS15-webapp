export default async function loadNavbar() {
    const response = await fetch('/assets/components/navbar.html');
    const html = await response.text();
    const header = document.createElement('header');
    header.innerHTML = html;
    document.body.prepend(header);
}