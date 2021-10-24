const menubtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const sumbitBtn = document.querySelector('.submit');
const emailField = document.querySelector('.email');
const errorEmail = document.querySelector('.response-email');
const form = document.querySelector('.form');

menubtn.addEventListener('click', (e) => {
  nav.classList.toggle('show');
});

//Form

const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

sumbitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
  const email = emailField.value;
  if (validateEmail(email)) {
    errorEmail.innerHTML = 'Hiya Cowboy, this email will work for us 🤠';
  } else {
    response.innerHTML = 'Sorry, this email is not cool enough 😩';
  }
});
