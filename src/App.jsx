import { useState } from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);

	return (
		<div className="App">
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
			/>
			<TodoList
				todos={todos}
				key={todos.id}
				setTodos={setTodos}
			/>
		</div>
	)
}

export default App
