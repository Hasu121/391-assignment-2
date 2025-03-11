const Input = document.getElementById("task-input");
const List = document.getElementById("task-list");

window.onload = function() {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach(task => {
    addTaskLocal(task);
  });
};

function addTask(){
  const taskText = Input.value.trim();
  if (taskText !== "") {
    addTaskLocal(taskText);
    saveTask(taskText);
    Input.value = "";
  }
}

function addTaskLocal(taskText){
  const Item = document.createElement("li");
  Item.className = "task-item";
  Item.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
  List.appendChild(Item);
}

function saveTask(taskText){
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(saved));
}

function deleteTask(button){
  const Item = button.parentElement;
  const taskText = Item.querySelector("span").textContent;
  List.removeChild(Item);
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = saved.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
