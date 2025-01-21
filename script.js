function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const task = taskInput.value.trim();

    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input field
    }
    else {
        alert("Please enter a task.");
    }
}

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Check if Enter key is pressed
        addTask();
    }
});