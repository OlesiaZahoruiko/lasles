'use strict'


// hamburger-menu
const burgerBtn = document.getElementById('burger__btn');
const burgerMenu = document.getElementById('header__menu');

burgerBtn.addEventListener('click', function () {
  burgerMenu.classList.toggle('active');
  burgerBtn.classList.toggle('open');
  document.body.classList.toggle('lock');
});




// Swiper
const customersSwiper = document.querySelector('.swiper-customers');

if (customersSwiper) {
  const swiper = new Swiper('.swiper-customers', {
  // Optional parameters
    // autoHeight: true,
    loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
}


