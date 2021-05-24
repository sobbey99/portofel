const hamburger = document.querySelector('div.hamburger'),
        menu = document.querySelector('.menu'),
        closeMenu = document.querySelector('.menu-bloc__close');
        overlai = document.querySelector('.menu-overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active'),
    hamburger.classList.add('active');
    overlai.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active'),
    hamburger.classList.remove('active');
    overlai.classList.remove('active');
});


console.log(hamburger);