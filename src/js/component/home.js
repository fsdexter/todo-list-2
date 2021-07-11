import React, { useState } from "react";
import "./home.scss";

export function Home() {
	// JS aqui abaixo
	const [toDo, setToDo] = useState([
		"Tomar banho",
		"Escovar os Dentes",
		"Tirar o lixo",
		"Brincar com o Alexandre",
		"Fazer Comida"
	]);
	const [newTask, setNewTask] = useState("");

	function del(i) {
		setToDo(toDo.filter((iten, index) => index !== i));
	}

	const toDoList = toDo.map((task, i) => {
		return (
			<li key={i}>
				<div className="row">
					<div className="col d-flex justify-content-between">
						{task}
						<i
							id="trash"
							className="fas fa-trash-alt"
							onClick={() => del(i)}
						/>
					</div>
				</div>
			</li>
		);
	});

	// JS somente acima

	return (
		<div className="container d-flex justify-content-md-center row mt-5">
			<div id="caixa" className="col-7 ">
				<h1 className="text-center">ToDo List</h1>
				<div className="row justify-content-md-center">
					<div className="col col-lg-8">
						<center>
							<input
								value={newTask}
								id="input"
								type="text"
								placeholder="New Task"
								onChange={event => {
									setNewTask(event.target.value);
								}}
								onKeyPress={event => {
									if (event.key === "Enter") {
										setToDo([...toDo, event.target.value]);
										setNewTask("");
									}
								}}
							/>
						</center>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div className="col col-lg-8 mt-3">
						<ul>{toDoList}</ul>
					</div>
				</div>
				<div className="text-center">Made by Felipe</div>
			</div>
		</div>
	);
}
