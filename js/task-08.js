/* 
Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
Создай функцию destroyBoxes(), которая очищает div#boxes.
*/

const refs = {
  inputEl: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesDivEl: document.querySelector('#boxes'),
};

refs.inputEl.addEventListener('blur', onInputChange);
refs.renderBtn.addEventListener('click', onRenderBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

let markupArray = [];

function onInputChange() {
  return refs.inputEl.value;
}

function onRenderBtnClick() {
  markupArray = [];
  refs.boxesDivEl.innerHTML = '';

  for (let i = 1; i <= onInputChange(); i += 1) {
    let size = 10 + 5 * i;
    let markupString = `<div style="display: inline-block;
                          background-color: ${randomColor()}; 
                          padding: ${size}px; 
                          margin: 5px">
                        </div>`;
    markupArray.push(markupString);
  }
  return refs.boxesDivEl.insertAdjacentHTML('afterbegin', markupArray.join(''));
}

function onDestroyBtnClick() {
  refs.inputEl.value = 0;
  refs.boxesDivEl.innerHTML = '';
}

function randomColor() {
  let r = Math.floor(Math.random() * 257);
  let g = Math.floor(Math.random() * 257);
  let b = Math.floor(Math.random() * 257);
  return `rgb(${r},${g},${b})`;
}
