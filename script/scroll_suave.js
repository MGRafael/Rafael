const $intLinks = document.querySelectorAll('.int-link a');
$intLinks.forEach(function (cur) {
    cur.addEventListener('click',function (evt) {
        evt.preventDefault();
        window.scrollTo({
            top: document.querySelector(cur.getAttribute('href')).offsetTop - $webNavBar.offsetHeight,
            left: 0,
            behavior: 'smooth'
        });
    },false);
})