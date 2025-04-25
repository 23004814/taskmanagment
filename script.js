function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.onclick = () => {
    li.classList.toggle('completed');
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}
