
const newTaskForm = document.querySelector('.new-task-container form');
const tasksContainer = document.querySelector('.tasks-container ul');

document.addEventListener('DOMContentLoaded', function() {
	bindAddTaskEvents();
	showTasks();
});