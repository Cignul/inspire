import TodoService from "./todo-service.js";



var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {

	//i'm guessing similar to cars / homes arrays
	//somewhat working, looks ugly thouhgh
	var template = `<form onsubmit="app.controllers.todoController.addTodoFromForm(event)">
	<input type="text" name="description">
</form>`
	for (let i = 0; i < todos.length; i++) {
		const todo = todos[i];
		template += ` <p> ${todo.description}</p>
								<button onclick="app.controllers.todoController.removeTodo('${todo.id}')">delete</button>
									<p>ID: ${todo.id}</p>`


	}
	document.getElementById('todo').innerHTML = template

	//DONT FORGET TO LOOP loop thru


}


export default class TodoController {
	constructor() {
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
		getTodos()

	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			//follow car example it's a bit different though
			// carService.addCar(formData, drawCars)
			// formData.reset() slightly diff object
			//VVVVV first attempt VVVV
			//todoService.addTodo(form, draw)
			// formData.reset() slightly diff object
			//VVVVV second attempt VVVV
			description: form.description.value

		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		//remove not working correctly, does call getTodos again though
		todoService.removeTodo(todoId, getTodos)
		//todoService.removeTodo()
		//	removeTodo(
		//return updated list


		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}
}
