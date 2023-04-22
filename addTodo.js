export function addItem(input, Parent){
    if (input.value === "" ){
        console.log(input.value);
        alert('Please Add a Todo 😊')
    }
    console.log(typeof input.value);
   return function (){
    
    const Todo = document.createElement(`li`)
    const deleteBtn = document.createElement(`button`)
     Todo.className = "todo-items"
     deleteBtn.className = "remove-items text-red"
     Todo.innerText = `${input.value}`;
     Todo.append(deleteBtn);
 
     console.log(Todo, Todo.textContent);


     Parent.appendChild(Todo)

    input.value = ""
   } 
}