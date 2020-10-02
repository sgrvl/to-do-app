export const onComplete = (index, tasks, setTasks) => {
	const newTasks = [...tasks];
	newTasks[index].status = !newTasks[index].status;
	setTasks(newTasks);
};
