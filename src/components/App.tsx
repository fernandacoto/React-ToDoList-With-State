
import React from 'react';

import '../styles/index.css';
import ToDoList from './ToDoList';

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<h1>My To Do List</h1>
				<ToDoList/>
			</div>
		);
	}
}

export default App;