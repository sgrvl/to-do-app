import React from "react";
import styled from "styled-components";
import { onComplete } from "./utils";
import Checkbox from "@material-ui/core/Checkbox";

const Tasks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 1rem 0;

	div {
		display: flex;
		align-items: center;
		text-align: left;
		margin: 0.5rem 0;
	}
`;

const Active = ({ tasks, setTasks }) => {
	return (
		<Tasks>
			{tasks
				.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))
				.map((task, index) => {
					if (!task.status) {
						return (
							<div key={"Task" + index}>
								<Checkbox
									id={`${index}`}
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
