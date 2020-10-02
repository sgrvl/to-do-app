import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledTabs = styled.div`
	font-weight: bold;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgba(50, 50, 50, 0.5);
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
		position: ${(props) => (props.active ? "absolute" : "relative")};
		width: 60%;
		height: 2.5px;
		bottom: 0;
		left: 20%;
		content: " ";
		background: #3080ed;
		border-radius: 5px 5px 0 0;
	}
`;

const Tabs = () => {
	const location = useLocation();

	return (
		<StyledTabs>
			<Tab
				active={location.pathname === "/" ? 1 : 0}
				to="/"
				replace={location.pathname === "/"}
			>
				All
			</Tab>
			<Tab
				active={location.pathname === "/active" ? 1 : 0}
				to="/active"
				replace={location.pathname === "/active"}
			>
				Active
			</Tab>
			<Tab
				active={location.pathname === "/completed" ? 1 : 0}
				to="/completed"
				replace={location.pathname === "/completed"}
			>
				Completed
			</Tab>
		</StyledTabs>
	);
};

export default Tabs;
