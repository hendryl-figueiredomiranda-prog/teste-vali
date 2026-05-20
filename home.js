const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');


menuOpenButton.addEventListener('click', () => {
    //abir menu mobile
    document.body.classList.toggle("show-mobile-menu");
});


    //fechar menu mobile
menuCloseButton.addEventListener('click', () => menuOpenButton.click());

