export const onComplete = (index, tasks, setTasks) => {
	const newTasks = [...tasks];
	newTasks[index].status = !newTasks[index].status;
	setTasks(newTasks);
};

export const onDelete = (index, tasks, setTasks) => {
	const newTasks = [...tasks].filter((t) => t !== tasks[index]);
	setTasks(newTasks);
};
