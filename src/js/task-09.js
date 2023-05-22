function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changedColorBtn = document.querySelector(`.change-color`);
const colorValue = document.querySelector(`.color`);

changedColorBtn.addEventListener(`click`, () => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  colorValue.textContent = `${getRandomHexColor()}`;
});
