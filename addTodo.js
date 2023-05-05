import { cDay } from "./date";
export function addItem(input, Parent){
  
   return function (){
    
    const Todo = document.createElement(`li`)
    const deleteBtn = document.createElement(`button`)
    const closeIcon = document.createElement(`i`)
    const TodoTime = document.createElement(`span`)

     Todo.className = "todo-items"
     deleteBtn.className = "remove-items text-red"
     closeIcon.className = " fa-solid fa-xmark"
     TodoTime.className = "date"

     if (typeof input === `string`){
        Todo.innerText = `${input}`
     }else{
        Todo.innerText = `${input.value}`
        input.value = ""
     }
     TodoTime.innerText = `${cDay()}`;

     deleteBtn.appendChild(closeIcon)
   //   console.log(deleteBtn);
     Todo.appendChild(TodoTime);
     Todo.appendChild(deleteBtn);

     Parent.appendChild(Todo)

   } 
}

console.log(document.designMode);