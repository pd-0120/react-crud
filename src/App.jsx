import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { ListTasks } from "./pages/ListTasks";
import { AddTask } from "./pages/AddTask";
import { EditTask } from "./pages/EditTask";
import { Container } from "@mui/system";

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

function App() {

	return (
		<>
			<Header />
			<Container>
				<Routes>
					{routes.map((route, i) => (
						<Route
							path={route.path}
							element={route.element}
							key={i}
						/>
					))}
				</Routes>
			</Container>
			<Footer />
		</>
	);
}

export default App;
