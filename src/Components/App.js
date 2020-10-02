import React from "react";
import { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import Active from "./Active";
import All from "./All";
import Completed from "./Completed";
import Input from "./Input";
import Tabs from "./Tabs";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
		box-sizing: border-box;
  }

  body {
    max-width: 500px;
    color: rgb(50,50,50);
    width: 100%;
    margin: 0 auto;
		padding: 0 0.5rem;
    text-align: center;
  }
`;

function App() {
	const [tasks, setTasks] = useLocalStorageState("tasks", []);

	return (
		<>
			<h1>#todo</h1>
			<Tabs />
			<Input tasks={tasks} setTasks={setTasks} />
			<Switch>
				<Route exact path="/">
					<All tasks={tasks} setTasks={setTasks} />
				</Route>
				<Route path="/active">
					<Active tasks={tasks} setTasks={setTasks} />
				</Route>
				<Route path="/completed">
					<Completed tasks={tasks} setTasks={setTasks} />
				</Route>
			</Switch>
			<GlobalStyle />
		</>
	);
}

export default App;
