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

const Completed = ({ tasks, setTasks, done, setDone }) => {
	const onComplete = (index) => {
		const newDone = done.filter((t) => t !== done[index]);
		setTasks([...tasks, done[index]]);
		setDone(newDone);
	};
	return (
		<Tasks>
			{done.map((task, index) => (
				<div key={"Done" + index}>
					<input
						type="checkbox"
						name=""
						id={index}
						defaultChecked
						onClick={(e) => onComplete(e.target.id)}
					/>
					<label htmlFor={index}>{task}</label>
				</div>
			))}
		</Tasks>
	);
};

export default Completed;
