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

     Todo.className = "todo-items"
     deleteBtn.className = "remove-items text-red"
     closeIcon.className = " fa-solid fa-xmark"
     Todo.innerText = `${input.value}`;
     deleteBtn.appendChild(closeIcon)
     console.log(deleteBtn);
     Todo.appendChild(deleteBtn);
 
     console.log(Todo, Todo.textContent);


     Parent.appendChild(Todo)

    input.value = ""
   } 
}