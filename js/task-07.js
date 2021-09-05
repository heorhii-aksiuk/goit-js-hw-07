const inputEl = document.querySelector('#font-size-control');
const titleEl = document.querySelector('#text');

const onInputChange = () => {
  titleEl.style.fontSize = `${10 + 6 * (inputEl.value / 50)}px`;
};

inputEl.addEventListener('input', onInputChange);
