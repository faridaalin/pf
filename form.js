import { validateInputFields } from './helpers/validateInputFields.js';
import { toggleMenu } from './helpers/toggleMenu.js';

const sumbitBtn = document.querySelector('.submit');
const form = document.querySelector('.form');
const closeBtn = document.querySelector('.btn-close');
const msgContainer = document.querySelector('.success-msg');

toggleMenu();

//Form

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
