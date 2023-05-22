const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  const formElements = event.currentTarget.elements;
  event.preventDefault();

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formObj = { email, password };
  console.log(formObj);

  formEl.reset();
}
