let inputs = document.getElementById("inp");
let text = document.querySelector(".text");


window.addEventListener('load', function() {
  let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  storedTasks.forEach(task => {
    createTaskElement(task);
  });
});

function Add(){
  if(inputs.value == ""){
    alert("Please Enter Task")
  }else{
    createTaskElement(inputs.value);
   
    saveTasksToLocalStorage(inputs.value);
    inputs.value="";
  }
}
function createTaskElement(taskText) {
 let newTask = document.createElement("ul");

  let taskTextNode = document.createTextNode(taskText);
  let deleteButton = document.createElement("i");
  deleteButton.classList.add("fa-solid", "fa-trash");
  
  newTask.appendChild(taskTextNode);
  newTask.appendChild(deleteButton);
  
 
  text.appendChild(newTask);
  deleteButton.addEventListener("click", function() {
    newTask.remove();
    removeTaskFromLocalStorage(taskText);
  });
}
function saveTasksToLocalStorage(task) {
  let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  storedTasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

function removeTaskFromLocalStorage(task) {
  let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let updatedTasks = storedTasks.filter(t => t !== task);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}
