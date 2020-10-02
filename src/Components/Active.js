import React from "react";
import styled from "styled-components";
import { onComplete } from "./utils";

const Tasks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	label {
		user-select: none;
	}
`;

const Active = ({ tasks, setTasks }) => {
	return (
		<Tasks>
			{tasks.map((task, index) => {
				if (!task.status) {
					return (
						<div key={"Task" + index}>
							<input
								type="checkbox"
								name=""
								id={index}
								onChange={(e) => onComplete(e.target.id, tasks, setTasks)}
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

export default Active;
