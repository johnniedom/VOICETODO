`use strict`;
import { animate } from "./writeAnimate";
import { addItem } from "./addTodo";
import { speakTimer } from "./speak";

import "./style.css";
const wordT = document.querySelector(".voice");
const AddBtn = document.querySelector(".btn ");
const inputTodo = document.getElementById("input");
const wrapperTodo = document.querySelector(".todo_wrapper");
const Mic = document.querySelector(".fa");
const TodoS = document.querySelectorAll(".todo-items");

window.addEventListener("load", () => {
  console.log(localStorage);
});

(()=>{
  const todoItemsArray = getItemsFromStorage();
  todoItemsArray.forEach(todoItem=>{
    addItem(todoItem, wrapperTodo)()
  })
  
})()


AddBtn.addEventListener("click", () => {
  if (inputTodo.value === "") {
    alert("Please Add a Todo 😊");
  }

  if (inputTodo.value !== "") {
    const word = `${inputTodo.value}`
    addItem(inputTodo, wrapperTodo)();
    addToStorage(word);
  }

  animate(wordT, 400, 50);
});

Mic.addEventListener("click", speakTimer.bind(Mic, inputTodo, AddBtn));

export function addToStorage(item) {
  

  const itemsArray = getItemsFromStorage();
  console.log(itemsArray);

  itemsArray.push(item);

  localStorage.setItem("todoItems", JSON.stringify(itemsArray));

  // console.log(itemsArray, localStorage.todoItems);
}

function getItemsFromStorage() {
  let itemArray;
  if (localStorage.getItem("todoItems") === null) return (itemArray = []);
  return (itemArray = JSON.parse(localStorage.getItem("todoItems")));
}
