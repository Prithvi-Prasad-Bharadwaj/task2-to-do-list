document.addEventListener("DOMContentLoaded", function () {
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const tasksList = document.getElementById("tasks");
  
    addTaskButton.addEventListener("click", function () {
      const taskText = newTaskInput.value.trim();
  
      if (taskText) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          <span>${taskText}</span>
          <button class="delete">Delete</button>
        `;
  
        taskItem.querySelector("button.delete").addEventListener("click", function () {
          taskItem.remove();
        });
  
        tasksList.appendChild(taskItem);
        newTaskInput.value = "";
      }
    });
  });
  