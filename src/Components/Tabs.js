import React from "react";
import styled from "styled-components";

const StyledTabs = styled.div`
	font-weight: bold;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgb(50, 50, 50);
	margin: 1rem 0;
`;

const Tab = styled.div`
	text-align: center;
	width: 100%;
	padding: 1rem 0.5rem;
	cursor: pointer;
	user-select: none;
	position: relative;

	&::after {
		position: ${(props) => (props.selected ? "absolute" : "relative")};
		width: 60%;
		height: 2.5px;
		bottom: 0;
		left: 20%;
		content: " ";
		background: rgb(0, 102, 255);
		border-radius: 5px 5px 0 0;
	}
`;

const Tabs = ({ tab, setTab }) => {
	return (
		<StyledTabs>
			<Tab selected={tab === "All"} onClick={() => setTab("All")}>
				All
			</Tab>
			<Tab selected={tab === "Active"} onClick={() => setTab("Active")}>
				Active
			</Tab>
			<Tab selected={tab === "Completed"} onClick={() => setTab("Completed")}>
				Completed
			</Tab>
		</StyledTabs>
	);
};

export default Tabs;
