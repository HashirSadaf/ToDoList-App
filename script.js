import { AddDoc } from './firebase.js';
function addItem(inputText) {
  let text = document.getElementById('todo-input');

  AddDoc('todo-items', {
    text: inputText,
    status: 'active',
  });
}

function test(e) {
  e.preventDefault();
}

const todo = document.getElementById('todo-input');

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addItem(todo.value);
  todo.value = '';
});
