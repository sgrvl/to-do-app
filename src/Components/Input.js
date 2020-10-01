import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.form`
	input[type="text"] {
		outline: none;
	}
`;

const Input = ({ tasks, setTasks }) => {
	const [task, setTask] = useState("");
	return (
		<StyledInput
			onSubmit={(e) => {
				e.preventDefault();
				setTasks([...tasks, task]);
				setTask("");
			}}
		>
			<input
				type="text"
				placeholder="add details"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<input type="submit" value="Add" />
		</StyledInput>
	);
};

export default Input;
