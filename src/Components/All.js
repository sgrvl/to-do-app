import React from "react";
import styled from "styled-components";
import { onComplete } from "./utils";
import { Checkbox } from "@material-ui/core";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Tasks = styled(motion.div)`
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

const Cross = styled(motion.div)`
	position: absolute;
	content: " ";
	height: 1px;
	width: 100%;
	background: black;
	left: 0;
	bottom: 0;
`;

const All = ({ tasks, setTasks }) => {
	return (
		<Tasks layout>
			<AnimateSharedLayout>
				{tasks
					.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1))
					.map((task, index) => {
						return (
							<div className="taskWrap" key={"Task" + index}>
								<Checkbox
									id={`${index}`}
									onChange={(e) => onComplete(e.target.id, tasks, setTasks)}
									checked={task.status}
									color="primary"
								/>
								<label htmlFor={index}>
									<AnimatePresence>
										{task.status && (
											<Cross
												initial={{ width: 0 }}
												animate={{ width: "100%" }}
												exit={{ width: 0, opacity: 0 }}
											/>
										)}
									</AnimatePresence>
									{task.value}
								</label>
							</div>
						);
					})}
			</AnimateSharedLayout>
		</Tasks>
	);
};

export default All;
