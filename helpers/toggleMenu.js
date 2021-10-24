const menubtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

export const toggleMenu = () => {
  menubtn.addEventListener('click', (e) => {
    nav.classList.toggle('show');
  });
};
