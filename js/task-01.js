const numberOfCategriesInfo = function (elements) {
  const categoriesEl = document.querySelectorAll(elements);

  return console.log(`В списке ${categoriesEl.length} категории`);
};

numberOfCategriesInfo('.item');

const categoryInfo = function (elements) {
  const itemsEl = document.querySelectorAll(elements);

  return itemsEl.forEach(item =>
    console.log(
      `Категория: ${
        item.querySelector('h2').textContent
      } \nКоличество элементов: ${item.querySelectorAll('li').length}`,
    ),
  );
};

categoryInfo('.item');
