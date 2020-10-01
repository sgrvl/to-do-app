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

const All = ({ tasks, done }) => {
	return (
		<Tasks>
			{tasks.map((task, index) => (
				<div key={"Task" + index}>
					<input type="checkbox" name="" id={index} onClick={(e) => {}} />
					<label htmlFor={index}>{task}</label>
				</div>
			))}
			{done.map((task, index) => (
				<div key={"Task" + index}>
					<input type="checkbox" name="" id={index} onClick={(e) => {}} />
					<label htmlFor={index}>{task}</label>
				</div>
			))}
		</Tasks>
	);
};

export default All;
