function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const task = taskInput.value.trim();

    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        // Create the delete button (X)
        const deleteButton = document.createElement('span');
        deleteButton.textContent = '✖'; // X symbol
        deleteButton.classList.add('delete-btn');

        // Add event listener to delete task on click
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    } else {
        alert("Please enter a task.");
    }
}

// Add event listener for Enter key (allow submit without clicking)
document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevents form submission or default behavior
        addTask();
    }
});

// As of 01/21, the delete button is not working. I will fix this in the next update.