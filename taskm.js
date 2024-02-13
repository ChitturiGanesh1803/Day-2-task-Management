document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
        addTask(taskInput);
        document.getElementById('taskInput').value = '';
    }
});

function addTask(task) {
    var taskList = document.getElementById('taskList');
    var taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    var label = document.createElement('label');
    label.textContent = task;
    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        taskDiv.remove();
    });
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);
}
