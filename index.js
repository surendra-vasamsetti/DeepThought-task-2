const taskDataUrl = 'https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json'; // Replace with your JSON URL


fetch(taskDataUrl)
  .then((response) => response.json())
  .then((data) => renderTasks(data));

s
function renderTasks(data) {
  const container = document.getElementById('task-container');
  data.tasks.forEach((task) => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task-item');
    taskElement.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <div>
        ${task.subtasks
          .map(
            (subtask) =>
              `<div class="subtask-item">
                <h4>${subtask.title}</h4>
                <p>${subtask.description}</p>
                <input type="text" placeholder="Enter your input">
              </div>`
          )
          .join('')}
      </div>
    `;
    container.appendChild(taskElement);
  });
}
