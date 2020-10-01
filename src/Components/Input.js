import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.form`
	input[type="text"] {
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
				setTasks([...tasks, task]);
				setTask("");
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
