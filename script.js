const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-button");
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

todoInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        todoButton.click();
    }
});

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "trash-button") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }
    if (item.classList[0] === "completed-button") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
