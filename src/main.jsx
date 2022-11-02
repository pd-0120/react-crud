import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
	BrowserRouter,
} from "react-router-dom";
import { ListTasks } from "./pages/ListTasks";
import { AddTask } from "./pages/AddTask";
import { EditTask } from "./pages/EditTask";

const routes = [
	{
		path: "/",
		element: <ListTasks />,
	},
	{
		path: "/list-tasks",
		element: <ListTasks />,
	},
	{
		path: "/edit-task",
		element: <EditTask />,
	},
	{
		path: "/add-task",
		element: <AddTask />,
	},
];

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
