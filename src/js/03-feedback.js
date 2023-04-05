
//instaluje biblioteki 'lodash.throttle' 
//deklaruje zmienną playerCurrentTime która odpowiada za aktualny czas video
//do zmiennej iframe pobieram poprzez id video
//zmienną player nawiązuje do sekcji pre-existing player w bibliotece


import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);


let dataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.currentTarget.reset();
  dataForm = {};
}