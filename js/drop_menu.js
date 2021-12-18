'use strict'

const burger = document.querySelector('.header__burger');
const closer = document.querySelector('.header__menu-close');
const dropMenu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  dropMenu.classList.remove('hidden')
});

closer.addEventListener('click', () => {
  dropMenu.classList.add('hidden')
});