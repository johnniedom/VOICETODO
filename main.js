`use strict`;
import { animate } from "./writeAnimate";
import { addItem } from "./addTodo";
import { speakTimer } from "./speak";

import "./style.css";
const wordT = document.querySelector(".voice");
const AddBtn = document.querySelector(".btn ");
const inputTodo = document.getElementById("input");
const wrapperTodo = document.querySelector(".todo_wrapper");
const filterTodo = document.querySelector(".todo-filter");
const Mic = document.querySelector(".fa");
const clearTodo = document.querySelector(".clear-todo");

export function addToStorage(item) {
  const itemsArray = getItemsFromStorage();


  itemsArray.push(item);

  localStorage.setItem("todoItems", JSON.stringify(itemsArray));
}

function getItemsFromStorage() {
  let itemArray;
  if (localStorage.getItem("todoItems") === null) return (itemArray = []);
  return (itemArray = JSON.parse(localStorage.getItem("todoItems")));
}

 function checkUI (){
  const itemArray = getItemsFromStorage()
  console.log("love");
  if(itemArray.length === 0){
    filterTodo.style.display = "none"
    clearTodo.style.display = "none"
  }else{
    filterTodo.style.display = "block"
    clearTodo.style.display = "block"
  }

 }
 
const init  = () => {
  // console.log(localStorage);
  const todoItemsArray = getItemsFromStorage();
  if(todoItemsArray.length !== 0){
  todoItemsArray.forEach((todoItem) => {
    addItem(todoItem, wrapperTodo)();
  });
}
  checkUI();

  console.log(todoItemsArray.length);
  
}

window.addEventListener("load", init);

// The speaking Mic 
Mic.addEventListener("click", speakTimer.bind(Mic, inputTodo, AddBtn));

AddBtn.addEventListener("click", () => {
  if (inputTodo.value === "") {
    alert("Please Add a Todo 😊");
  }

  if (inputTodo.value !== "") {
    const word = `${inputTodo.value}`;
    addItem(inputTodo, wrapperTodo)();
    addToStorage(word);
  }

  animate(wordT, 400, 50);
  checkUI ();
});


clearTodo.addEventListener("click", () => {
  const todos = document.querySelectorAll(".todo-items");
  console.log(wrapperTodo, todos , todos.length,wrapperTodo.firstChild );
  todos.forEach(todo =>{
    wrapperTodo.removeChild(todo)
  })
  
  animate(wordT, 400, 50);
  localStorage.removeItem("todoItems");

  checkUI();
});