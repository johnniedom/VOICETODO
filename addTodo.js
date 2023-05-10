export function addItem(input, Parent) {
  // console.log(input);
  const { todoInput, Date } = input;
  // console.log(todoInput, Date);

  return function () {
    const Todo = document.createElement(`li`);
    const deleteBtn = document.createElement(`button`);
    const closeIcon = document.createElement(`i`);
    const TodoTime = document.createElement(`span`);

    Todo.className = "todo-items";
    deleteBtn.className = "remove-items text-red";
    closeIcon.className = " fa-solid fa-xmark";
    TodoTime.className = "date";

    Todo.innerText = `${todoInput}`;

    TodoTime.innerText = `${Date}`;

    deleteBtn.appendChild(closeIcon);
    //   console.log(deleteBtn);
    Todo.appendChild(TodoTime);
    Todo.appendChild(deleteBtn);

    Parent.appendChild(Todo);
  };
}

console.log(document.designMode);
