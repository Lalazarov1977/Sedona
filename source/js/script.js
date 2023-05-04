(function () {
    const header = document.querySelector('.page-header');
    window.onscroll = () => {
       if (window.pageYOffset > 0) {
           header.classList.add('header_active');
       } else {
           header.classList.remove('header_active');
       }
    };
}());
   
// burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.main-nav');
    const menuClosedItem = document.querySelector ('.main-nav_close');
    const menuLinks = document.querySelectorAll('.site-list__item');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('main-nav_active');
    });
    menuClosedItem.addEventListener('click', () => {
        menu.classList.remove('main-nav_active');
    });
    if (window.innerWidth < 321) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('main_nav_active');
            });
        }
    }    
}());