import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StyledTabs = styled.div`
	font-weight: bold;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgba(50, 50, 50, 0.5);
	margin: 1rem 0;
	position: relative;
`;

const Tab = styled(Link)`
	text-align: center;
	width: 100%;
	padding: 1rem 0.5rem;
	cursor: pointer;
	user-select: none;
	text-decoration: none;
	color: inherit;
	font-weight: initial;
`;

const Highlight = styled(motion.div)`
	height: 3px;
	width: 23.33%;
	bottom: 0;
	position: absolute;
	background: #3080ed;
	border-radius: 5px 5px 0 0;
`;

const Tabs = ({ location }) => {
	return (
		<StyledTabs>
			<Highlight
				animate={{
					left: `${
						location.pathname === "/"
							? "5%"
							: location.pathname === "/active"
							? "38.33%"
							: "71.66%"
					}`,
				}}
			/>
			<Tab to="/" replace={location.pathname === "/"}>
				All
			</Tab>
			<Tab to="/active" replace={location.pathname === "/active"}>
				Active
			</Tab>
			<Tab to="/completed" replace={location.pathname === "/completed"}>
				Completed
			</Tab>
		</StyledTabs>
	);
};

export default Tabs;
