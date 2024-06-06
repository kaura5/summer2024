function init() {
  let addTaskButton = document.getElementById("addTaskButton");
  let newTask = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", addTask);

  function addTask(ev) {
    ev.preventDefault();
    console.log("inside the function");
    console.log(newTask.value);
    let value = newTask.value.trim();
    console.log(value);
    //it removes the white space
    if (value !== "") {
      let li = document.createElement("li");
      li.textContent = value;
      taskList.append(li);
      newTask.value = "";
    }
  }
}

window.addEventListener("DOMContentLoaded", init);
