import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addTodo, toggleTodo, deleteTodo, filterTodos, clearCompleted } from '../js/todo-logic.js';

test('adds a todo', () => {
  const todos = addTodo([], 'Buy milk');
  assert.equal(todos.length, 1);
  assert.equal(todos[0].text, 'Buy milk');
});
test('does not add empty todo', () => {
  assert.equal(addTodo([], '   ').length, 0);
});
test('toggles todo', () => {
  const todos = addTodo([], 'Task');
  const toggled = toggleTodo(todos, todos[0].id);
  assert.equal(toggled[0].completed, true);
});
test('deletes todo', () => {
  const todos = addTodo([], 'Task');
  assert.equal(deleteTodo(todos, todos[0].id).length, 0);
});
test('filters todos', () => {
  let todos = addTodo([], 'A');
  todos = addTodo(todos, 'B');
  todos = toggleTodo(todos, todos[0].id);
  assert.equal(filterTodos(todos, 'active').length, 1);
  assert.equal(filterTodos(todos, 'completed').length, 1);
});
test('clears completed', () => {
  let todos = addTodo([], 'A');
  todos = addTodo(todos, 'B');
  todos = toggleTodo(todos, todos[0].id);
  assert.equal(clearCompleted(todos).length, 1);
});