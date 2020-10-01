import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
} from "@material-ui/core";
import "./Todo.css";

function Todo(props) {
	return (
		<List className="todo__list">
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<img
							scr="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png"
							alt="Batman"
						/>
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary={props.text} secondary="Deadline..." />
			</ListItem>
		</List>
	);
}

export default Todo;
