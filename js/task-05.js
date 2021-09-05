const formEl = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

formEl.addEventListener('input', () =>
  formEl.value !== ''
    ? (userName.textContent = formEl.value)
    : (userName.textContent = 'незнакомец'),
);
