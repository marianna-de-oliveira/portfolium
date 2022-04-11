const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change");
});
