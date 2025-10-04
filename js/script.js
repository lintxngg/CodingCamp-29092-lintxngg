const form = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');
const deleteAllBtn = document.getElementById('deleteAll');
const filter = document.getElementById('filter');

let todos = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('taskName').value;
  const date = document.getElementById('taskDate').value;
  const status = document.getElementById('taskStatus').value;

  todos.push({ name, date, status });
  form.reset();
  displayTodos();
});

deleteAllBtn.addEventListener('click', () => {
  todos = [];
  displayTodos();
});

function displayTodos() {
  todoList.innerHTML = '';

  const filterValue = filter.value;
  const filteredTodos = todos.filter(todo =>
    filterValue === 'all' ? true : todo.status === filterValue
  );

  filteredTodos.forEach((todo, index) => {
    const list = document.createElement('list');
    list.innerHTML = `
    <span>${todo.name} - ${todo.date} - <strong>${todo.status}</strong></span>
    <button onclick="deleteTask(${index})">Delete</button>
  `;
  todoList.appendChild(list);

  });
}

function deleteTask(index) {
  todos.splice(index, 1);
  displayTodos();
}

filter.addEventListener('change', displayTodos);
