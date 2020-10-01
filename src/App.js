import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";

function App() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	//when the app loads, we need to listen to the db and fetch new todos as they get added/removed

	useEffect(() => {
		//this code here... fires when the app loads
		db.collection("todos").onSnapshot((snapshot) => {
			//console.log(snapshot.docs.map((doc) => doc.data()));
			setTodos(snapshot.docs.map((doc) => doc.data().todo));
		});
	}, []);

	//console.log(input);

	//The thing that happens when Button is pushed
	const addTodo = (event) => {
		event.preventDefault(); //prevents page from refreshing after each submit
		console.log("I'm Working >>>", input);
		//... is spread. lets you append to array and keep what is in state.
		setTodos([...todos, input]);
		//this will clear input field after submitting
		setInput("");
	};

	return (
		<div className="App">
			<h1>Hello World</h1>
			{/* form and type submit lets you use enter key to submit*/}
			<form>
				<FormControl>
					<InputLabel>Write a Todo!</InputLabel>
					<Input
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
					{/* onChange line allows the input to be updated as you type*/}
				</FormControl>

				<Button
					disabled={!input}
					type="submit"
					onClick={addTodo}
					variant="contained"
					color="primary"
				>
					Add Todo
				</Button>
				{/* <button type="submit" onClick={addTodo}> */}
				{/* Add ToDo */}
				{/* </button> */}
				{/*submit will reset page which will clear state */}
			</form>
			<ul>
				{todos.map((todo) => (
					<Todo text={todo} />
					//<li>{todo}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
