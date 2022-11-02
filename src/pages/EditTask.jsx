import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import { useLocation } from "react-router-dom";

export const EditTask = () => {
	const router = useLocation();
	
	const [task, setTask] = useState({});

	useEffect(() => {
		console.log("🚀 ~ file: EditTask.jsx ~ line 13 ~ useEffect ~ router", router)
		if (router.query.id) {
			axios
				.get(`/api/tasks/${router.query.id}`)
				.then((res) => {
					setTask(res.data.post);
				})
				.catch(() => {
					router.push("/list-tasks");
				});
		} else {
			router.push("/list-tasks");
		}
	}, [router]);

	return <>{Object.entries(task).length > 0 && <TaskForm task={task} />}</>;
}

export default EditTask;