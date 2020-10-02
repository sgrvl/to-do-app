import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledTabs = styled.div`
	font-weight: bold;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgb(50, 50, 50);
	margin: 1rem 0;
`;

const Tab = styled(Link)`
	text-align: center;
	width: 100%;
	padding: 1rem 0.5rem;
	cursor: pointer;
	user-select: none;
	position: relative;
	text-decoration: none;
	color: inherit;

	&::after {
		position: ${(props) => (props.isSelected ? "absolute" : "relative")};
		width: 60%;
		height: 2.5px;
		bottom: 0;
		left: 20%;
		content: " ";
		background: rgb(0, 102, 255);
		border-radius: 5px 5px 0 0;
	}
`;

const Tabs = () => {
	const [selected, setSelected] = useState("All");
	return (
		<StyledTabs>
			<Tab
				isSelected={selected === "All"}
				onClick={() => setSelected("All")}
				to="/"
			>
				All
			</Tab>
			<Tab
				isSelected={selected === "Active"}
				onClick={() => setSelected("Active")}
				to="/active"
			>
				Active
			</Tab>
			<Tab
				isSelected={selected === "Completed"}
				onClick={() => setSelected("Completed")}
				to="/completed"
			>
				Completed
			</Tab>
		</StyledTabs>
	);
};

export default Tabs;
