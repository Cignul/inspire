import Todo from "../../models/Todo.js";




const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Jackson/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT???? to get object from server to then 
				//manipulate check if this is correct
				todoList = res.data.data.map(rawTodo => {
					return new Todo(rawTodo)
				})
				//callback function to draw the todos
				console.log(todoList)
				draw(todoList)
			})
			.catch(logError)
	}

	addTodo(todo, cb) {
		// WHAT IS THIS FOR??? add something to the list on the server
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO? push it to server and update list
				console.log(res)
				console.log("FORM DATA This IS IN THE ADDTODO FUNCTION" + todo)
				cb()

			})
			.catch(logError)

	}


	toggleTodoStatus(todoId, cb) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		todoId = todoList.findIndex
		var todo = { todoId } ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				todo.completed = !todo.completed
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	removeTodo() {
		// todoApi.pop()
		todoList.pop()
	}

}
