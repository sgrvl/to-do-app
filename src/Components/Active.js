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

const Active = ({ tasks, setTasks, done, setDone }) => {
	const onComplete = (index) => {
		const newTasks = tasks.filter((t) => t !== tasks[index]);
		setDone([...done, tasks[index]]);
		setTasks(newTasks);
	};

	return (
		<Tasks>
			{tasks.map((task, index) => (
				<div key={"Task" + index}>
					<input
						type="checkbox"
						name=""
						id={index}
						onClick={(e) => onComplete(e.target.id)}
					/>
					<label htmlFor={index}>{task}</label>
				</div>
			))}
		</Tasks>
	);
};

export default Active;
