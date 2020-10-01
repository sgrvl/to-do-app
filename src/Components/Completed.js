import React from "react";
import styled from "styled-components";

const Tasks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	label {
		user-select: none;
	}
`;

const Completed = ({ tasks, setTasks }) => {
	const onComplete = (index) => {
		const newTasks = [...tasks];
		newTasks[index].status = !newTasks[index].status;
		setTasks(newTasks);
	};
	return (
		<Tasks>
			{tasks.map((task, index) => {
				if (task.status) {
					return (
						<div key={"Task" + index}>
							<input
								type="checkbox"
								name=""
								id={index}
								onChange={(e) => onComplete(e.target.id)}
								defaultChecked
							/>
							<label htmlFor={index}>{task.value}</label>
						</div>
					);
				}
				return null;
			})}
		</Tasks>
	);
};

export default Completed;
