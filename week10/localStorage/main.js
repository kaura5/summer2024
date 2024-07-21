//localStorage.setItem( key, value );
//localStorage.getItem( key);
// localStorage.removeItem( key );
//localStorage.clear();

// let customerName = "Amber";

// let key = "customerData";

// // localStorage.setItem(key, customerName);
// let data = localStorage.getItem(key);
// console.log(data);

window.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("newTaskButton");
  let userInput = document.getElementById("newTask");
  let toDoDOM = document.getElementById("todoList");

  let todoList = [];
  //todoList = ["Assignment 1", "Homework"];

  let key = "kaura5-com.test";

  btn = document.addEventListener("click", handleNewTask);
  grabData();
  displayTask();

  function handleNewTask(ev) {
    //default behavior
    ev.preventDefault();
    //grab user value
    let newTask = userInput.value.trim();

    if (newTask) {
      userInput.value = "";
      todoList.push(newTask);
      saveData();
      displayTask();
    }
  }

  function displayTask() {
    toDoDOM.innerHTML = "";
    console.log(todoList);
    let df = new DocumentFragment();
    todoList.forEach(function (item, index) {
      let li = document.createElement("li");
      li.textContent = item;
      li.classList.add("todoItem");

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("data-index", index);
      deleteButton.classList.add("deleteButton");

      li.append(deleteButton);
      df.append(li);
    });
    toDoDOM.addEventListener("click", deleteItem);
    toDoDOM.append(df);
  }

  function deleteItem(ev) {
    ev.preventDefault();

    console.log(ev.target.classList);
    if (ev.target.classList.contains("deleteButton")) {
      let index = ev.target.getAttribute("data-index");
      console.log(index);
      if (index) {
        todoList.splice(index, 1);
        saveData();
        displayTask();
      } else {
        console.log("click was not on delete button");
      }
    }
  }

  function saveData() {
    localStorage.setItem(key, JSON.stringify(todoList));
  }
  function grabData() {
    let data = localStorage.getItem(key);
    if (data) {
      todoList = JSON.parse(data);
    } else {
      todoList = [];
    }
  }
});
