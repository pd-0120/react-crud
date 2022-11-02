import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	Container,
	Link,
	Grid,
	Stack,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container fixed>
					<Toolbar>
						<Grid container justifyContent={"space-around"}>
							<Grid item xs={6}>
								<Link component={RouterLink} to="/">
									<Typography
										variant="h6"
										component="div"
										sx={{ flexGrow: 1 }}
										color={"white"}
									>
										Next JS CRUD
									</Typography>
								</Link>
							</Grid>

							<Grid item xs={6} textAlign={"end"}>
								<Stack direction={"row"} spacing={2}>
									<Link component={RouterLink} to="/add-task">
										<Button
											color="inherit"
											sx={{ color: "white" }}
										>
											Add New Task
										</Button>
									</Link>
									<Link component={RouterLink} to="/list-tasks">
										<Button
											color="inherit"
											sx={{ color: "white" }}
										>
											List Tasks
										</Button>
									</Link>
								</Stack>
							</Grid>
						</Grid>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
