import checkComplete from "./chechkComplete.js";
import deleteIcon from "./deteleIcon.js";
(() => {
  const btnCreate = document.querySelector("[data-form-btn]");

  const createTask = (event) => {
    event.preventDefault();
    const inputTarea = document.querySelector("[data-form-input]");
    const value = inputTarea.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    inputTarea.value = "";
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete())
    taskContent.appendChild(titleTask);
    //task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon())
    list.appendChild(task);
  };

  btnCreate.addEventListener("click", createTask);

})()