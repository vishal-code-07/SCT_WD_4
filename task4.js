const taskList = document.getElementById("taskList");

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTime = document.getElementById("taskTime");

  const text = taskInput.value.trim();
  const time = taskTime.value;

  if (!text || !time) {
    alert("Please enter both task and time!");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("task");

  taskItem.innerHTML = `
    <div class="info">
      <span class="text">${text}</span>
      <span class="time">${new Date(time).toLocaleString()}</span>
    </div>
    <div class="controls">
      <button onclick="toggleComplete(this)">✔️</button>
      <button onclick="editTask(this)">✏️</button>
      <button onclick="deleteTask(this)">🗑️</button>
    </div>
  `;

  taskList.appendChild(taskItem);

  taskInput.value = "";
  taskTime.value = "";
}

function toggleComplete(btn) {
  const task = btn.closest(".task");
  task.classList.toggle("completed");
}

function editTask(btn) {
  const task = btn.closest(".task");
  const textEl = task.querySelector(".text");
  const newText = prompt("Edit task:", textEl.textContent);
  if (newText) {
    textEl.textContent = newText;
  }
}

function deleteTask(btn) {
  const task = btn.closest(".task");
  task.remove();
}
