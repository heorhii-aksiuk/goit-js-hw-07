const inputEl = document.querySelector('input');

const onInputBlur = () => {
  if (inputEl.value.length === +inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else if (inputEl.value.length === 0) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', onInputBlur);
