// Array to store the tasks and their corresponding states
let tasks = [];

// Function to add a new task to the array and render the updated task list
function addTask() {
  let taskInput = document.getElementById("task-input");
  let taskName = taskInput.value;
  if (taskName !== "") {
    tasks.push({ name: taskName, completed: false });
    renderTasks();
    taskInput.value = "";
  }
}

// Function to render the task list with delete and edit buttons for each task
function renderTasks() {
  let taskList = document.querySelector(".task-list");
  taskList.innerHTML = "";
  tasks.forEach(function (task, index) {
    let taskElement = document.createElement("li");
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    let taskName = document.createElement("span");
    taskName.classList.add("task-name");
    taskName.textContent = task.name;
    taskDiv.appendChild(taskName);
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.setAttribute("data-index", index);
    taskDiv.appendChild(editBtn);
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("data-index", index);
    taskDiv.appendChild(deleteBtn);
    taskElement.appendChild(taskDiv);
    taskList.appendChild(taskElement);
  });
}

// Event listener for the Add button that calls the addTask function
let addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addTask();
});

// Event listener for the Edit and Delete buttons that call their respective functions
let taskList = document.querySelector(".task-list");
taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit-btn")) {
    let index = event.target.getAttribute("data-index");
    let taskName = tasks[index].name;
    let newTaskName = prompt("Enter the new task name:", taskName);
    if (newTaskName !== null && newTaskName !== "") {
      tasks[index].name = newTaskName;
      renderTasks();
    }
  }
  if (event.target.classList.contains("delete-btn")) {
    let index = event.target.getAttribute("data-index");
    tasks.splice(index, 1);
    renderTasks();
  }
});

// Function to initialize the todo list
function init() {
  renderTasks();
}

// Call the init function to initialize the todo list
init();