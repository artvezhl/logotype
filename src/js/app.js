window.addEventListener('scroll', () => {
    const menu = document.querySelector('.header__menu');

    if (window.pageYOffset > 200) {
        menu.classList.add('header__menu_hidden');
    } 
    
    if (window.pageYOffset <= 200) {
        menu.classList.remove('header__menu_hidden')
    }
});

const menuCheckbox = document.querySelector('.header__mobile-menu');

menuCheckbox.addEventListener('click', () => {
    console.log('click');
    console.log(menuCheckbox.checked);

    menuCheckbox.checked
        ? document.body.classList.add('noscroll')
        : document.body.classList.remove('noscroll');
});