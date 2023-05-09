`use strict`;
import { animate } from "./writeAnimate";
import { addItem } from "./addTodo";
import { speakTimer } from "./speak";
import { cDay } from "./date";
import { toDay } from "./date";

import "./style.css";
const wordT = document.querySelector(".voice");
const AddBtn = document.querySelector(".btn ");
const inputTodo = document.getElementById("input");
const wrapperTodo = document.querySelector(".todo_wrapper");
const filterTodo = document.querySelector(".todo-filter");
const Mic = document.querySelector(".fa");
const clearTodo = document.querySelector(".clear-todo");
const curDate = document.querySelector(".cur-date");

export function addToStorage(item) {
  const itemsArray = getItemsFromStorage();
  console.log(item);
  itemsArray.push(item);

  localStorage.setItem("todoItems", JSON.stringify(itemsArray));
}

function getItemsFromStorage() {
  let itemArray;
  if (localStorage.getItem("todoItems") === null) return (itemArray = []);
  return (itemArray = JSON.parse(localStorage.getItem("todoItems")));
}

function checkUI() {
  const itemArray = getItemsFromStorage();
  console.log("love");
  if (itemArray.length === 0) {
    filterTodo.style.display = "none";
    clearTodo.style.display = "none";
  } else {
    filterTodo.style.display = "block";
    clearTodo.style.display = "block";
  }
}

const init = () => {
  // console.log(localStorage);
  curDate.innerText = `${toDay()}`
  filterTodo.value = "";
  inputTodo.value = "";

  const todoItemsArray = getItemsFromStorage();
  if (todoItemsArray.length !== 0) {
    todoItemsArray.forEach((todoItem) => {
      console.log(todoItem);
      addItem(todoItem, wrapperTodo)();
    });
  }
  checkUI();

  console.log(todoItemsArray);
};

window.addEventListener("load", init);
// The speaking Mic
Mic.addEventListener("click", speakTimer.bind(Mic, inputTodo, AddBtn));

AddBtn.addEventListener("click", () => {
  if (inputTodo.value === "") {
    alert("Please Add a Todo 😊");
  }

  if (inputTodo.value !== "") {
    let Date = cDay();
    let todoInput = inputTodo.value;
    const todoData = {todoInput, Date}
    console.log(todoData);

    const word = `${inputTodo.value}`;
    addItem(todoData, wrapperTodo)();
    addToStorage(todoData);
  }

  animate(wordT, 400, 50);
  inputTodo.value = "";
  checkUI();
});

clearTodo.addEventListener("click", () => {
  const todos = document.querySelectorAll(".todo-items");
  // console.log(wrapperTodo, todos, todos.length, wrapperTodo.firstChild);
  todos.forEach((todo) => {
    wrapperTodo.removeChild(todo);
  });

  animate(wordT, 400, 50);
  localStorage.removeItem("todoItems");

  checkUI();
});

filterTodo.oninput = (e) => {
let ab = "";
const datas = getItemsFromStorage();
  if (e.inputType === "insertText") ab += e.data;
   
};
