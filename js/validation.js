'use strict'

const formElem = document.querySelector('.registration__form');
const formInputs = formElem.querySelectorAll('.form-control');
console.log(formInputs);
formElem.addEventListener('submit', e => {
  formInputs.forEach(formInput => {
    if (formInput.value === '') {
      formInput.classList.add('error')
      e.preventDefault();
    }
  });
});

formElem.addEventListener('input', e => {
  if (!e.target.classList.contains('form-control')) {
    return;
  }
  e.target.value === ''
    ? e.target.classList.add('error')
    : e.target.classList.remove('error');
});

