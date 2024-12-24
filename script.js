
// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const clearTasksButton = document.getElementById('clearTasks');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');

  // Add task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Add "Mark as Completed" button
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  // Add "Delete" button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  // Append elements to the list item
  listItem.appendChild(taskSpan);
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  // Add list item to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = '';
}

// Function to clear all tasks
function clearTasks() {
  taskList.innerHTML = '';
}

// Event listeners
addTaskButton.addEventListener('click', addTask);
clearTasksButton.addEventListener('click', clearTasks);

// Optional: Add task on Enter key press
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

