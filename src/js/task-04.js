const minusBtnRef = document.querySelector(`[data-action="decrement"]`);

const plusBtnRef = document.querySelector(`[data-action="increment"]`);

let valueElement = document.querySelector(`#value`);

let counterValue = 0;

const minusCallBack = () => {
  counterValue -= 1;
  valueElement.textContent = counterValue;
};

const plusCallBack = () => {
  counterValue += 1;
  valueElement.textContent = counterValue;
};

minusBtnRef.addEventListener(`click`, minusCallBack);
plusBtnRef.addEventListener(`click`, plusCallBack);
