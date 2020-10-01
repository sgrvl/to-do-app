import React from "react";
import styled from "styled-components";

const Tasks = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Active = ({ tasks }) => {
	return (
		<Tasks>
			{tasks.map((task, index) => (
				<div key={"Task" + index}>
					<input type="checkbox" name="" id={"Task" + index} />
					<label htmlFor={"Task" + index}>{task}</label>
				</div>
			))}
		</Tasks>
	);
};

export default Active;
