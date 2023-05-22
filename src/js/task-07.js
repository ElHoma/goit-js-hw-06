// const inputEL = document.querySelector(`#font-size-control`);
// const textEl = document.querySelector(`#text`);

// textEl.addEventListener(`input`, () => {
//   textEl.style.fontSize = `${inputEL.value}px`;
// });

const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

function inputRange(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}

inputEl.addEventListener("input", inputRange);
