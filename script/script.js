const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
const $facebook = document.querySelectorAll('.facebook')[0];
const $youtube = document.querySelectorAll('.youtube')[0];
const $instagram = document.querySelectorAll('.instagram')[0];
const $spotify = document.querySelectorAll('.spotify')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];
window.addEventListener('scroll',toggleHeader,false);
function toggleHeader() {
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $facebook.classList.remove('max-facebook');
        $facebook.classList.add('min-facebool');
        $youtube.classList.remove('max-youtube');
        $youtube.classList.add('min-youtube');
        $instagram.classList.remove('max-instagram');
        $instagram.classList.add('min-instagram');
        $spotify.classList.remove('max-spotify');
        $spotify.classList.add('min-spotify');
        $navBar.classList.remove('max-nav')
        $navBar.classList.add('min-nav');
        $menu.firstElementChild.classList.remove('max-hamburger');
        $menu.firstElementChild.classList.add('min-hamburger');
    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        $header.classList.add('max-header');
        $header.classList.remove('min-header');
        $logo.classList.add('max-logo');
        $logo.classList.remove('min-logo');
        $facebook.classList.add('max-facebook');
        $facebook.classList.remove('min-facebool');
        $youtube.classList.add('max-youtube');
        $youtube.classList.remove('min-youtube');
        $instagram.classList.add('max-instagram');
        $instagram.classList.remove('min-instagram');
        $spotify.classList.add('max-spotify');
        $spotify.classList.remove('min-spotify');
        $navBar.classList.add('max-nav');
        $navBar.classList.remove('min-nav');
        $menu.firstElementChild.classList.add('max-hamburger');
        $menu.firstElementChild.classList.remove('min-hamburger');
    }
}

$menu.addEventListener('click',toggleMenu,false);
var isOpen = false;

function toggleMenu() {
    if (!isOpen) {
        $navBar.classList.add('menu-opened');
        isOpen = true;
    } else {
        $navBar.classList.remove('menu-opened');
        isOpen = false;
    }
}

$navBar.addEventListener('click',navClick,false);
function navClick(evt) {
    if (evt.target.tagName == 'A') {
        toggleMenu();
    }
    
}