import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	Box,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export const ListTasks = () => {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();
    const endpoint = import.meta.env.VITE_API_ENDPOINT;
	const [isLoading, setIsloading] = useState(false);

	const getPosts = () => {
		axios.get(`${endpoint}tasks`).then((res) => setPosts(res.data));
	};

	useEffect(() => {
		getPosts();
	}, []);

	const handleAction = (action, id) => {
		if (action === "edit") {
			navigate(`/edit-task/${id}`);
		} else {
			setIsloading(true);
			axios.delete(`${endpoint}tasks/${id}/delete`).then(() => {
				getPosts();
				setIsloading(false);
			});
		}
	};
	return (
		<Box>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Name:</TableCell>
							<TableCell>Description:</TableCell>
							<TableCell>Status:</TableCell>
							<TableCell>Created AT:</TableCell>
							<TableCell>Action:</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{posts.length > 0 &&
							posts.map((post, i) => {
								return (
									<TableRow key={i}>
										<TableCell>{post.name}</TableCell>
										<TableCell>
											{post.description}
										</TableCell>
										<TableCell>{post.status}</TableCell>
										<TableCell>{post.createdAt}</TableCell>
										<TableCell>
											<Button
												variant="contained"
												sx={{ mt: 1, ml: 1 }}
												onClick={() =>
													handleAction(
														"edit",
														post.id
													)
												}
											>
												<CreateIcon />
											</Button>
											<Button
												variant="contained"
												color={"error"}
												sx={{ mt: 1, ml: 1 }}
												disabled={isLoading}
												onClick={() =>
													handleAction(
														"delete",
														post.id
													)
												}
											>
												<DeleteIcon />
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}

export default ListTasks;
