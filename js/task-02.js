const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createList = function (parentSelector, itemsListToCreate) {
  const parent = document.querySelector(parentSelector);

  const elements = itemsListToCreate.map(element => {
    const item = document.createElement('li');
    item.textContent = element;
    return item;
  });

  parent.append(...elements);
};

createList('#ingredients', ingredients);
