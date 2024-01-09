document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const tasksList = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskValue = taskInput.value.trim();
    if(taskValue !== ''){

      const listItem = document.createElement('li');
      listItem.textContent = taskValue;
      tasksList.appendChild(listItem);
      taskInput.value = '';
    };
  });
});
