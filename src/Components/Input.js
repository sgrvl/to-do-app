import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

const StyledInput = styled.form`
	display: flex;
	flex-grow: 1;
`;

const Text = styled(TextField)`
	width: 100% !important;
	margin-right: 0.5rem !important;
	outline-color: #3080ed !important;
`;

const Add = styled(Button)`
	min-width: 20% !important;
	background: #3080ed !important;
	margin-left: 0.5rem;
	color: white !important;
	text-transform: inherit !important;
	font-weight: inherit !important;
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
			<Text
				variant="outlined"
				label="add details"
				value={task.value || ""}
				onChange={(e) =>
					setTask({
						status: false,
						value: e.target.value,
						timestamp: Date.now(),
					})
				}
			/>
			<Add type="submit" variant="contained">
				Add
			</Add>
		</StyledInput>
	);
};

export default Input;
