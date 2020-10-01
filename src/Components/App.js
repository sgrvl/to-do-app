import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import Active from "./Active";
import All from "./All";
import Completed from "./Completed";
import Input from "./Input";
import Tabs from "./Tabs";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }

  body {
    max-width: 500px;
    color: rgb(50,50,50);
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

function App() {
	const [tasks, setTasks] = useLocalStorageState("tasks", []);
	const [tab, setTab] = useState("All");

	return (
		<>
			<h1>#todo</h1>
			<Tabs tab={tab} setTab={setTab} />
			<Input tasks={tasks} setTasks={setTasks} />
			{tab === "All" && <All tasks={tasks} setTasks={setTasks} />}
			{tab === "Active" && <Active tasks={tasks} setTasks={setTasks} />}
			{tab === "Completed" && <Completed tasks={tasks} setTasks={setTasks} />}
			<GlobalStyle />
		</>
	);
}

export default App;
