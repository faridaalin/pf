const menubtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menubtn.addEventListener('click', (e) => {
  nav.classList.toggle('show');
});
