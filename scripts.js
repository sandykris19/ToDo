const addTodo = document.querySelector(".add");
const todos = document.querySelector(".todos");
const search = document.querySelector(".search input");
const helper = document.querySelector(".helper");

const generateTemplate = (todo) => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;
  todos.innerHTML += html;
};

addTodo.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = addTodo.add.value.trim();

  if (todo.length) generateTemplate(todo);

  addTodo.reset();
  const slist = [
    "Meet John",
    "Make pasta",
    "Order pizza",
    "Clean Bedroom",
    "Complete homework",
  ];
  let random = slist[Math.floor(Math.random() * slist.length)];
  helper.setAttribute("placeholder", random);
});

todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(todos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(todos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
