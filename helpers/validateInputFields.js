export const validateInputFields = (tag) => {
  const inputs = document.querySelectorAll(tag);
  const inputsArr = [...inputs];
  const regExEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let isValid = true;

  for (let i = 0; i < inputsArr.length; i++) {
    if (inputsArr[i].value.length === 0) {
      inputsArr[i].classList.add('is-invalid');
      inputsArr[i].nextSibling.nextElementSibling.innerHTML = 'Field is empty!';
      isValid = false;
    } else if (inputsArr[i].id === 'email' && inputsArr[i].value.length > 0) {
      if (!regExEmail.test(inputsArr[i].value)) {
        console.log('Here');
        inputsArr[i].nextSibling.nextElementSibling.innerHTML = 'Invalid email';
        inputsArr[i].classList.add('is-invalid');
        isValid = false;
      } else {
        console.log('here');
        console.dir(inputsArr[i]);
        inputsArr[i].nextSibling.nextElementSibling.innerHTML = '';
        inputsArr[i].className = 'input email is-valid';
      }
    } else {
      inputsArr[i].classList.remove('is-invalid');
      inputsArr[i].classList.add('is-valid');
      inputsArr[i].nextSibling.nextElementSibling.innerHTML = '';
    }
  }

  return isValid;
};
