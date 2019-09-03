import React, {useState} from 'react';
import './Dashboard.scss';
import Todo from '../Todos'
import { Input, Col, Row, Divider, Button } from 'antd';

const { Search } = Input;

let Dashboard = ({Todos}) => {

	let [currentTodo, SetCurrentTodo] = useState('')
	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 24
	}

	let todoList = [];

	let updateTodos = () => {
		Todos= []
		todoList.map(item => {
			Todos.push(<Todo todo={item} removeTodo={removeTodo}/>) //todo component here
		})
	}

	let addTodo = () => {
		console.log(currentTodo)
		todoList.push(currentTodo)
		console.log(todoList)
		updateTodos();
	}
	
	let removeTodo = (todo) => {
		console.log(todo)
		todoList.splice (todoList.indexOf(todo), 1)
		updateTodos();
	}
	
	return (
			<div>
				<Row>
					<Col {...colGris}>
						<Search placeholder="..." onSearch={value => console.log(value)} enterButton />
					</Col>
				</Row>
				<Divider />
				<Row>
					<Col {...colGris}>
						<Input placeholder="Add todo.." allowClear={true} onChange={e => {SetCurrentTodo(e.target.value)}}/>
						<Button type="primary" shape="circle" icon="check" onClick={addTodo}></Button>
					</Col>
				</Row>
				<Row>
					<Col {...colGris}>
						{Todos}
					</Col>
				</Row>
			</div>
		);
}

export default Dashboard;