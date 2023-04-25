`use strict`;
import { animate } from "./writeAnimate";
import { addItem } from "./addTodo";
import { speakTimer } from "./speak";

import "./style.css";
const Todo = document.querySelector(".voice");
const AddBtn = document.querySelector(".btn ");
const inputTodo = document.getElementById("input");
const ListTodo = document.querySelector(".todo_wrapper");
const Mic = document.querySelector(".fa");


AddBtn.addEventListener("click", () => {
  if (inputTodo.value === "" ){
    alert('Please Add a Todo 😊')
}

  if (inputTodo.value !== "") {
    addItem(inputTodo, ListTodo)();
  }
  animate(Todo, 400, 50);
});

console.log(Todo.classList);


Mic.addEventListener("click", speakTimer)
