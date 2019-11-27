const $logo = document.querySelectorAll('.logo')[0];
const $facebook = document.querySelectorAll('.facebook')[0];
const $youtube = document.querySelectorAll('.youtube')[0];
const $instagram = document.querySelectorAll('.instagram')[0];
const $spotify = document.querySelectorAll('.spotify')[0];
const $webNavBar = document.querySelectorAll('.web-nav-bar')[0];
const $mobileNavBar = document.querySelectorAll('.mobile-nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];
window.addEventListener('scroll',toggleHeader,false);
function toggleHeader() {
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $webNavBar.classList.remove('web-max-nav');
        $webNavBar.classList.add('web-min-nav');
        $mobileNavBar.classList.remove('mobile-max-nav');
        $mobileNavBar.classList.add('mobile-min-nav');
        $menu.firstElementChild.classList.remove('max-hamburger');
        $menu.firstElementChild.classList.add('min-hamburger');
        $facebook.classList.remove('max-facebook');
        $facebook.classList.add('min-facebook');
        $youtube.classList.remove('max-youtube');
        $youtube.classList.add('min-youtube');
        $instagram.classList.remove('max-instagram');
        $instagram.classList.add('min-instagram');
        $spotify.classList.remove('max-spotify');
        $spotify.classList.add('min-spotify');
    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        $logo.classList.add('max-logo');
        $logo.classList.remove('min-logo');
        $webNavBar.classList.add('web-max-nav');
        $webNavBar.classList.remove('web-min-nav');
        $mobileNavBar.classList.add('mobile-max-nav');
        $mobileNavBar.classList.remove('mobile-min-nav');
        $menu.firstElementChild.classList.add('max-hamburger');
        $menu.firstElementChild.classList.remove('min-hamburger');
        $facebook.classList.add('max-facebook');
        $facebook.classList.remove('min-facebook');
        $youtube.classList.add('max-youtube');
        $youtube.classList.remove('min-youtube');
        $instagram.classList.add('max-instagram');
        $instagram.classList.remove('min-instagram');
        $spotify.classList.add('max-spotify');
        $spotify.classList.remove('min-spotify');
    }
}

$menu.addEventListener('click',toggleMenu,false);
var isOpen = false;
function toggleMenu() {
    if (!isOpen) {
        $mobileNavBar.classList.add('menu-opened');
        $menu.firstElementChild.classList.add('close-btn');
        isOpen = true;
    } else {
        $mobileNavBar.classList.remove('menu-opened');
        $menu.firstElementChild.classList.remove('close-btn');
        isOpen = false;
    }
}

$mobileNavBar.addEventListener('click',mobileNavClick,false);
function mobileNavClick(evt) {
    if (evt.target.tagName == 'A') {
        toggleMenu();
    }
}


