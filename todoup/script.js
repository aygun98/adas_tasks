
const inputWrite = document.querySelector('input');
const addBtn = document.querySelector('.add-button');
const crossBtn = document.querySelector('.cross-icon');
const sorted = document.querySelector('.img-icon');
const container = document.querySelector('.todo');
const form = document.querySelector('form');




localStorage.clear()

document.addEventListener('DOMContentLoaded', () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    container.innerText = savedTodos;
  }

});
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (inputWrite.value.trim()) {
    const deyer = inputWrite.value;
    const box = document.createElement('div');
    box.className = 'input-box';

    const p = document.createElement('p');
    p.className = 'p-text'
    p.innerText = deyer;

    const xbtn = document.createElement('button');
    xbtn.className = 'cross-icon qutu-sil todo-cross';

    const iElement = document.createElement('i');
    iElement.className = 'fa-regular fa-circle-xmark';
    xbtn.appendChild(iElement);

    xbtn.addEventListener('click', (e) => {
      e.preventDefault();

      if (xbtn.classList.contains('qutu-sil')) {
        box.classList.add('bagla');
      }
    });

    box.appendChild(p);
    box.appendChild(xbtn);

    container.appendChild(box);

   
    saveToLocalStorage();

    inputWrite.value = '';
    crossBtn.style.display = 'none';
  }
});


function saveToLocalStorage() {
 
  const todoList = document.querySelector('.todo');
  const todos = Array.from(todoList.children);

 
  localStorage.setItem("todos", todoList.innerText);
}

function sortla() {
  const todoList = document.querySelector('.todo');
  const todoItems = Array.from(todoList.children);

  todoItems.sort((a, b) => {
    const textA = a.querySelector('p').innerText.toLowerCase();
    const textB = b.querySelector('p').innerText.toLowerCase();

    return textA.localeCompare(textB, 'az');
  });

  todoItems.forEach(item => todoList.appendChild(item));

  
  saveToLocalStorage();
}

inputWrite.addEventListener('input', iconshow);

function iconshow() {
  if (inputWrite.value.trim() !== '') {
    crossBtn.style.display = 'block';
  } else {
    crossBtn.style.display = 'none';
  }

  crossBtn.addEventListener('click', (e) => {
    e.preventDefault();
    inputWrite.value = '';
    crossBtn.style.display = 'none';

   
    saveToLocalStorage();
  });
}


sorted.addEventListener('click', sortla);

// localStorage.clear()

