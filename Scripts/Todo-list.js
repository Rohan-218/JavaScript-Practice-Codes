//Array to store list object and localStorage to get already saved list
const todoList = JSON.parse(localStorage.getItem('list')) || [];

renderTodoList();   // Renders the pre-stored list

document.querySelector('.js-add-button')
    .addEventListener('click', () => addTodo());

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name= inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate= dateInputElement.value;

    if (name && dueDate) {
        todoList.push({
            name,
            dueDate
        });
        inputElement.value = '';
        dateInputElement.value= '';
    } else {
        alert("Input is blank!!!")
    }

    localStorage.setItem('list', JSON.stringify(todoList));
    //console.log(todoList);
    renderTodoList();                       //Renders the list after adding a new todo
}

function renderTodoList() {
    let todoListHtml = '';

    todoList.forEach((todoObject, index) => {
        const {name, dueDate} = todoObject;

        const html =`
          <div><ul><li></li></ul></div>
          <div>${name}</div>
          <div>${dueDate}</div>
          <button class="delte-button js-delete-button">Delete</button>
          </ul>
        `
        todoListHtml += html;
    });

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHtml;

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', (e) => {
                todoList.splice(index, 1);          // Removes the object selected(using index)
                renderTodoList();                              // Renders the new list after deleting
            });
        });
}
