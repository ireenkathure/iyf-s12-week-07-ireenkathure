export function renderTodos(todos, listEl, countEl) {
  listEl.innerHTML = '';
  todos.forEach((todo) => {
    const li = document.createElement('li');
    if (todo.completed) li.classList.add('completed');
    const span = document.createElement('span');
    span.textContent = todo.text;
    span.addEventListener('click', () => li.dispatchEvent(new CustomEvent('toggle', { detail: todo.id, bubbles: true })));
    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.addEventListener('click', () => li.dispatchEvent(new CustomEvent('delete', { detail: todo.id, bubbles: true })));
    li.append(span, del);
    listEl.append(li);
  });
  const left = todos.filter((t) => !t.completed).length;
  countEl.textContent = `${left} task(s) left`;
}