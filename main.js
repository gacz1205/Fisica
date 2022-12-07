// TOOGLE MOBILE MENU

const menuMobileIcon = document.querySelector('.menu');

menuMobileIcon.addEventListener('click', toogleMobileMenu)

const mobileMenu = document.querySelector('.mobile-menu');

function toogleMobileMenu (){
    mobileMenu.classList.toggle('inactive');
}