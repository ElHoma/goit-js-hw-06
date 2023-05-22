const inputEL = document.querySelector(`#validation-input`);
const attLength = inputEL.getAttribute(`data-length`);

inputEL.addEventListener(`blur`, () => {
  let inputVal = inputEL.value;

  if (inputVal.length == attLength) {
    inputEL.classList.remove(`invalid`);
    inputEL.classList.add(`valid`);
  } else {
    inputEL.classList.remove(`valid`);
    inputEL.classList.add(`invalid`);
  }
});
