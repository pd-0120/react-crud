import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import { useParams, useNavigate } from "react-router-dom";

export const EditTask = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	
	const [task, setTask] = useState({});

	useEffect(() => {
		if (id) {
			const endpoint = import.meta.env.VITE_API_ENDPOINT;

			axios.get(`${endpoint}tasks/${id}`).then((res) => {
					setTask(res.data.post);
				})
				.catch(() => {
					navigate("/list-tasks");
				});
		}
	}, [id]);

	return <>{Object.entries(task).length > 0 && <TaskForm task={task} />}</>;
}

export default EditTask;