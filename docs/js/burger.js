document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const body = document.body;

    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.header__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
});