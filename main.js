`use strict`;
import { animate } from "./writeAnimate";
import { addItem } from "./addTodo";

import "./style.css";
const Todo = document.querySelector(".voice");
const AddBtn = document.querySelector(".btn ");
const inputTodo = document.getElementById("input");
const ListTodo = document.querySelector(".todo_wrapper");



AddBtn.addEventListener("click", () => {
  if (inputTodo.value !== "") {
    addItem(inputTodo, ListTodo)();
  }
  animate(Todo, 400, 50);
});

console.log(Todo);
