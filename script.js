const menu = document.querySelector('.menu');
const NavMenu = document.querySelector9('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})