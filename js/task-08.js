const refs = {
  inputEl: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesDivEl: document.querySelector('#boxes'),
};

refs.inputEl.addEventListener('blur', onInputChange);
refs.renderBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

let markupArray = [];

function onInputChange() {
  return refs.inputEl.value;
}

function createBoxes() {
  markupArray = [];
  refs.boxesDivEl.innerHTML = '';

  for (let i = 1; i <= onInputChange(); i += 1) {
    let boxSize = 10 + 5 * i;
    let markupString = `<div style="display: inline-block;
                          background-color: ${randomColor()}; 
                          padding: ${boxSize}px; 
                          margin: 5px">
                        </div>`;
    markupArray.push(markupString);
  }
  return refs.boxesDivEl.insertAdjacentHTML('afterbegin', markupArray.join(''));
}

function destroyBoxes() {
  refs.inputEl.value = '';
  refs.boxesDivEl.innerHTML = '';
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
