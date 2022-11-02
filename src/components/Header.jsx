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
export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container fixed>
					<Toolbar>
						<Grid container justifyContent={"space-around"}>
							<Grid item xs={6}>
								<Link href="/">
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

							<Grid item sx={2} textAlign={"end"}>
								<Stack direction={"row"} spacing={2}>
									<Link href="/add-task">
										<Button
											color="inherit"
											sx={{ color: "white" }}
										>
											Add New Task
										</Button>
									</Link>
									<Link href="/list-tasks">
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
