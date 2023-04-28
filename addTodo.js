import { cDay } from "./date";
export function addItem(input, Parent){
    // if (input.value === "" ){
    //     console.log(input.value);
    //     alert('Please Add a Todo 😊')
    // }
    console.log(typeof input.value);

    
   return function (){
    
    const Todo = document.createElement(`li`)
    const deleteBtn = document.createElement(`button`)
    const closeIcon = document.createElement(`i`)
    const TodoTime = document.createElement(`span`)

     Todo.className = "todo-items"
     deleteBtn.className = "remove-items text-red"
     closeIcon.className = " fa-solid fa-xmark"
     TodoTime.className = "date"

     Todo.innerText = `${input.value}`;
     TodoTime.innerText = `${cDay()}`;

     deleteBtn.appendChild(closeIcon)
     console.log(deleteBtn);
     Todo.appendChild(deleteBtn);
     Todo.appendChild(TodoTime);
 
    //  console.log(Todo, Todo.textContent);
    // console.log(Todo.designMode);

     Parent.appendChild(Todo)


    input.value = ""
   } 
}

console.log(document.designMode);