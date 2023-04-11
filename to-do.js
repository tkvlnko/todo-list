const todoList = [
    // {
    //     name: 'make dinner',
    //     dueDate: '02-02-2023',
    // },
    // {
    //     name: 'make dinner',
    //     dueDate: '02-02-2023',
    // },
];

renderTodoList();

function renderTodoList () {

    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {

        const todoObject = todoList[i];
        const { name, dueDate } = todoObject
        const html = `
        
        <div class="grid-item">${name}</div>
        <div class="grid-item">${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            ">
            Delete</button>`;
        todoListHTML += html;

    }
    console.log(todoListHTML)
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML

}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({name, dueDate});

    inputElement.value = '';
    renderTodoList();
    
}