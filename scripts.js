const addTodo = document.querySelector('.add')
const todos = document.querySelector('.todos')

const generateTemplate = (todo) => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`
    todos.innerHTML += html

}

addTodo.addEventListener('submit', (event) => {
    event.preventDefault()

    const todo = addTodo.add.value.trim()
    console.log(todo);

    if (todo.length)
        generateTemplate(todo)

    addTodo.reset()
})

todos.addEventListener('click', (e) => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }

})