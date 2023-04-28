`use strict`;
import { animate } from "./writeAnimate";
import { addItem } from "./addTodo";
import { speakTimer } from "./speak";
import { cDay } from "./date";

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

// console.log(Math.round(Math.abs((2023102002 - new Date) / (1000 * 60 * 60 * 24))));
// 
Mic.addEventListener("click", speakTimer.bind(Mic, inputTodo, AddBtn))

// cDay()
