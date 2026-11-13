export function createTodo(text) {
  return { id: Date.now()+Math.random(), text: text.trim(), completed: false };
}
export function addTodo(todos, text) {
  if (!text.trim()) return todos;
  return [...todos, createTodo(text)];
}
export function toggleTodo(todos, id) {
  return todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
}
export function deleteTodo(todos, id) {
  return todos.filter((t) => t.id !== id);
}
export function filterTodos(todos, filter) {
  if (filter === 'active') return todos.filter((t) => !t.completed);
  if (filter === 'completed') return todos.filter((t) => t.completed);
  return todos;
}
export function clearCompleted(todos) {
  return todos.filter((t) => !t.completed);
}ss