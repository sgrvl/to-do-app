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

const All = ({ tasks, setTasks }) => {
	const onComplete = (index) => {
		const newTasks = [...tasks];
		newTasks[index].status = !newTasks[index].status;
		setTasks(newTasks);
	};
	return (
		<Tasks>
			{tasks.map((task, index) => {
				return (
					<div key={"Task" + index}>
						<input
							type="checkbox"
							name=""
							id={index}
							checked={task.status}
							onChange={(e) => onComplete(e.target.id)}
						/>
						<label htmlFor={index}>{task.value}</label>
					</div>
				);
			})}
		</Tasks>
	);
};

export default All;
