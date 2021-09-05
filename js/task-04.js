const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

let counterValue = Number(refs.valueEl.textContent);

refs.decrementBtn.addEventListener('click', () => {
  if (counterValue >= 1) counterValue -= 1;
  return (refs.valueEl.textContent = counterValue);
});

refs.incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  return (refs.valueEl.textContent = counterValue);
});
