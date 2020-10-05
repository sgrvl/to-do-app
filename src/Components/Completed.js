import React from "react";
import styled from "styled-components";
import { onComplete, onDelete, onDeleteAll } from "./utils";
import { ReactComponent as Trash } from "./trash.svg";
import { Checkbox, Button } from "@material-ui/core";

const Tasks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 1rem 0;

	.taskWrap {
		display: flex;
		align-items: center;
		text-align: left;
		width: 100%;
		justify-content: flex-start;
		position: relative;
		margin: 0.5rem 0;
	}

	.trash {
		fill: rgba(50, 50, 50, 0.5);
		position: absolute;
		right: 0;
		cursor: pointer;
	}

	path {
		pointer-events: none;
	}
`;

const Delete = styled(Button)`
	background: #eb5757 !important;
	align-self: flex-end;
	color: white !important;
	margin: 1rem 0 !important;
	text-transform: inherit !important;
	font-weight: inherit !important;

	.delete {
		height: 1rem;
		fill: white;
	}
`;

const Completed = ({ tasks, setTasks }) => {
	return (
		<Tasks>
			{tasks.map((task, index) => {
				if (task.status) {
					return (
						<div className="taskWrap" key={"Task" + index}>
							<Checkbox
								checked={task.status}
								id={`${index}`}
								onChange={(e) => onComplete(e.target.id, tasks, setTasks)}
								color="primary"
							/>
							<label htmlFor={index}>{task.value}</label>
							<Trash
								className="trash"
								id={index}
								onClick={(e) => onDelete(e.target.id, tasks, setTasks)}
							/>
						</div>
					);
				}
				return null;
			})}
			<Delete variant="contained" onClick={() => onDeleteAll(tasks, setTasks)}>
				<Trash className="delete" />
				&nbsp;delete all
			</Delete>
		</Tasks>
	);
};

export default Completed;
