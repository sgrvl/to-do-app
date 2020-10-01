import React from "react";
import styled from "styled-components";

const StyledTabs = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgb(50, 50, 50);
`;

const Tab = styled.div`
	text-align: center;
	width: 100%;
`;

const Tabs = ({ tab }) => {
	return (
		<StyledTabs>
			<Tab>All</Tab>
			<Tab>Active</Tab>
			<Tab>Completed</Tab>
		</StyledTabs>
	);
};

export default Tabs;
