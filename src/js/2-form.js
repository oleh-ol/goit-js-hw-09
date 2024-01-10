'use strict'

const FEEDBACK_STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formObject = {};

try {
  const storageValue = localStorage.getItem(FEEDBACK_STORAGE_KEY);
  if (storageValue) {
    formObject = JSON.parse(storageValue);
    for (let key in formObject) {
      form.elements[key].value = formObject[key];
    }
  }
} catch (error) {
  console.error('PARSE ERROR');
}

form.addEventListener('input', event => {
  formObject[event.target.name] = event.target.value.trim();
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(formObject));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(formObject);
  localStorage.removeItem(FEEDBACK_STORAGE_KEY);
  form.reset();
});