/* Задание 8 - дополнительное, выполнять не обязательно
Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */

const refs = {
  inputEl: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesDivEl: document.querySelector('#boxes'),
};

let arrayToCreate = [];
let inputValue;
let rgb;

refs.renderBtn.addEventListener('click', onRenderBtnClick);
refs.inputEl.addEventListener('blur', onInputChange);

function onInputChange() {
  inputValue = refs.inputEl.value;
}

function randomColor() {
  let r = Math.round(Math.random() * 256); // тут мат сел и 257
  let g = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);
  return (rgb = `rgb(${r},${g},${b})`);
}

function onRenderBtnClick() {
  arrayToCreate = [];
  refs.boxesDivEl.innerHTML = '';
  for (let i = 1; i <= inputValue; i += 1) {
    // тут подумать как заменить фор и возможно избавится от массива?
    let size = 10 + 5 * i;
    arrayToCreate.push(
      `<div style="display: inline-block; background-color: ${randomColor()}; padding: ${size}px; margin: 5px"></div>`,
    );
  }
  let string = arrayToCreate.join('');
  return refs.boxesDivEl.insertAdjacentHTML('afterbegin', string);
}

refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onDestroyBtnClick() {
  arrayToCreate = [];
  return (refs.boxesDivEl.innerHTML = '');
}
