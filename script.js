/* Assignment 04: Finishing a Todo List App */

//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app container");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

// Function to add a task to the task list
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskListContainer = document.getElementById('taskList');

  if (taskInput.value !== '') {
    taskList.push(taskInput.value);
    taskInput.value = '';
    renderTasks();
  }
}

// Function to delete a task from the task list
function deleteTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}

// Function to render the tasks in the task list
function renderTasks() {
  const taskListContainer = document.getElementById('taskList');
  taskListContainer.innerHTML = '';

  taskList.forEach((task, index) => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    li.innerHTML = task;
    deleteBtn.innerHTML = 'Done';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(index));

    li.appendChild(deleteBtn);
    taskListContainer.appendChild(li);
  });
}

//
// Inits & Event Listeners
//
inititialise();
let taskList = [];
