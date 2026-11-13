import { state } from './state.js';
import { loadTodos, saveTodos } from './storage.js';
import { addTodo, toggleTodo, deleteTodo, filterTodos, clearCompleted } from './todo-logic.js';
import { renderTodos } from './ui.js';
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const count = document.getElementById('todo-count');
state.todos = loadTodos();
function render() { renderTodos(filterTodos(state.todos, state.filter), list, count); }
form.addEventListener('submit', (e) => {
  e.preventDefault();
  state.todos = addTodo(state.todos, input.value);
  saveTodos(state.todos);
  input.value = '';
  render();
});
list.addEventListener('toggle', (e) => {
  state.todos = toggleTodo(state.todos, e.detail);
  saveTodos(state.todos);
  render();
});
list.addEventListener('delete', (e) => {
  state.todos = deleteTodo(state.todos, e.detail);
  saveTodos(state.todos);
  render();
});
document.querySelectorAll('[data-filter]').forEach((b) => {
  b.addEventListener('click', () => { state.filter = b.dataset.filter; render(); });
});
document.getElementById('clear-completed').addEventListener('click', () => {
  state.todos = clearCompleted(state.todos);
  saveTodos(state.todos);
  render();
});
render();