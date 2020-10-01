import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import Active from "./Active";
import Input from "./Input";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif
  }

  body {
    max-width: 50vw;
    color: rgb(50,50,50);
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

function App() {
	const [tasks, setTasks] = useLocalStorageState("tasks", []);
	const [tab, setTab] = useState("Active");

	return (
		<>
			<h1>#todo</h1>
			<Input tasks={tasks} setTasks={setTasks} />
			<Active tasks={tasks} />
			<GlobalStyle />
		</>
	);
}

export default App;
