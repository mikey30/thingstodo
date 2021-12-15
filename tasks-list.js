
function showTasks() {
	tasks.forEach(function(title) {
		addNewTask(title);
	});
}


function toggleTaskComplete(toggleBtn) {
	toggleBtn.classList.toggle('btn-success');
}

function deleteTask(deleteBtn) {
	const liToDelete = deleteBtn.closest('li');
	deleteBtn.closest('ul').removeChild(liToDelete);
}