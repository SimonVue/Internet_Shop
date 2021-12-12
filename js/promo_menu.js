'use strict'

const burger = document.querySelector('.header__menu');
const closer = document.querySelector('.promo__menu-close');
const promoMenu = document.querySelector('.promo__menu');

burger.addEventListener('click', () => {
  promoMenu.classList.remove('hidden')
});

closer.addEventListener('click', () => {
  promoMenu.classList.add('hidden')
});