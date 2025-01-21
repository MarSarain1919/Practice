/* function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const task = taskInput.value.trim();

    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        // Create a delete button (X)
        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');

        // Add event listener to delete button on click
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = ''; // Clear the input field
    }
    else {
        alert("Please enter a task.");
    }
}

// Allows user to submit task by pressing Enter key
document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Check if Enter key is pressed
        event.preventDefault(); // Prevents accidental form submission
        addTask();
    }
}); */

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const task = taskInput.value.trim();

    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        // // Create the delete button (X)
        // const deleteButton = document.createElement('span');
        // deleteButton.textContent = '✖'; // X symbol
        // deleteButton.classList.add('delete-btn');

        // // Add event listener to delete task on click
        // deleteButton.addEventListener('click', function () {
        //     taskList.removeChild(listItem);
        // });

        // // Append the delete button to the list item
        // listItem.appendChild(deleteButton);
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