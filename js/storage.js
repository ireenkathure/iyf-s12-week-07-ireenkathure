export function loadTodos() {
  try { return JSON.parse(localStorage.getItem('todos')) || []; } catch { return []; }
}
export function saveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}