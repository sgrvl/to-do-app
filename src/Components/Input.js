import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.form`
	display: flex;
	flex-grow: 1;

	input[type="text"] {
		outline: none;
		width: 100%;
		padding: 1rem 0.5rem;
		border-radius: 10px;
		border: 1px solid rgba(50, 50, 50, 0.5);
		margin-right: 0.5rem;
	}

	input[type="submit"] {
		min-width: 20%;
		background: #3080ed;
		border-radius: 10px;
		border: none;
		color: white;
		cursor: pointer;
		margin-left: 0.5rem;
		outline: none;
	}
`;

const Input = ({ tasks, setTasks }) => {
	const [task, setTask] = useState({
		status: false,
		value: "",
		timestamp: Date.now(),
	});
	return (
		<StyledInput
			onSubmit={(e) => {
				e.preventDefault();
				if (task.value) {
					setTasks([...tasks, task]);
				}
				setTask({
					status: false,
					value: "",
					timestamp: Date.now(),
				});
			}}
		>
			<input
				type="text"
				placeholder="add details"
				value={task.value || ""}
				onChange={(e) =>
					setTask({
						status: false,
						value: e.target.value,
						timestamp: Date.now(),
					})
				}
			/>
			<input type="submit" value="Add" />
		</StyledInput>
	);
};

export default Input;
