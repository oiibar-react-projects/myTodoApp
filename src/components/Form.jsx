import React from 'react'

function Form({ inputText, setInputText, todos, setTodos }) {

	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	}

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{
				text: inputText,
				completed: false,
				id: Math.random() * 1000,
			}
		])
		setInputText('');
	}

	return (
		<form>
			<input
				value={inputText}
				type="text"
				onChange={inputTextHandler}
			/>
			<button onClick={submitTodoHandler}>Add</button>
		</form>
	)
}

export default Form