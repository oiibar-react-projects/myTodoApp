import React from 'react'

function Todo({ todos, setTodos, text, todo }) {

	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
		console.log(todos)
	}

	const completeHandler = () => {
		setTodos(todos.map(item => {
			if (item.id === todo.id) {
				return {
					...item, completed: !item.completed
				}
			}
			return item
		}))
	}

	return (
		<div>
			<li>
				{text}
			</li>
			<button onClick={deleteHandler}>
				Delete
			</button>
			<button onClick={completeHandler}>
				Done
			</button>
		</div>
	)
}

export default Todo