import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos, inputText }) {
	return (
		<div>
			<ul>
				{
					todos.map(todo => (
						<Todo
							todos={todos}
							setTodos={setTodos}
							text={todo.text}
							key={todo.id}
							todo={todo}
						/>
					))
				}
			</ul>
		</div>
	)
}

export default TodoList