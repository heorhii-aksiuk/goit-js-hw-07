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

const test = '#6e1a1a'
const arrayToCreate = []

refs.inputEl.addEventListener('blur', onInputChange);

function onInputChange () {
  for (let i = 1; i <= refs.inputEl.value; i += 1) {
    let size = 10 + (5 * i);
    arrayToCreate.push(`<div style="display: inline-block; background-color: ${test}; padding: ${size}px; margin: 5px"></div>`)
  }
    let string = arrayToCreate.join('')
    console.log(string);
    return refs.boxesDivEl.insertAdjacentHTML('afterbegin', string)
}




// const onRenderBtnClick = () => {
//   const divEl = document.createElement('div');
//   refs.boxesDivEl.insertAdjacentElement('afterend', divEl);
// };

// refs.renderBtn.addEventListener('click', onRenderBtnClick);
// refs.destroyBtn.addEventListener('click', onDestroyBtnClick);
