import { validateInputFields } from '../helpers/validateInputFields.js';

const menubtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const sumbitBtn = document.querySelector('.submit');
const form = document.querySelector('.form');
const closeBtn = document.querySelector('.btn-close');
const msgContainer = document.querySelector('.success-msg');

menubtn.addEventListener('click', (e) => {
  nav.classList.toggle('show');
});

//Form
export const removeValidationStyle = (tag) => {
  const inputs = document.querySelectorAll(tag);
  const inputsArr = [...inputs];

  for (let i = 0; i < inputsArr.length; i++) {
    inputsArr[i].classList.remove('is-invalid');
    inputsArr[i].classList.remove('is-valid');
  }
};

sumbitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const isValid = validateInputFields('.input');
  if (isValid === false || isValid === undefined) return;
  msgContainer.style.display = 'block';
  form.reset();
});

closeBtn.addEventListener('click', () => {
  msgContainer.style.display = 'none';
});
