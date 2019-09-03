import React, {useState, useEffect} from 'react';
import './Dashboard.scss';
import Todo from '../Todos'
import { Input, Col, Row, Divider, Button , notification} from 'antd';

import axios from 'axios';

const { Search } = Input;

let Dashboard = () => {
	let [currentTodo, SetCurrentTodo] = useState('')
	let [Todos, setTodos] = useState([])
	let [todoList, setTodoList] = useState([])
	let [searchValue, setSearchValue] = useState('')


	const BASE_URL = 'http://127.0.0.1:3000';
	const usersURL = '/todo';

	let  updateTaskList = async (e) => {
		let user = JSON.parse(localStorage.getItem('user')).user
		console.log(user)
		let userAndTasks = {
			_id : user._id,
			todoList: todoList
		}
		console.log(userAndTasks)
		await axios.post(`${BASE_URL}${usersURL}`, userAndTasks) // req.params.id
			.then((response) => {
			console.log(response)
			})
			.catch(err => {
			console.log(err)
			const args = {
				message: 'Error.',
				description:
					'Could not persist.',
				duration: 1.5,
				};
				notification.open(args);	
			})
	}
	
	let  readTaskList = async (e) => {
		let user = JSON.parse(localStorage.getItem('user')).user
		await axios.get(`${BASE_URL}${usersURL}/${user._id}`) // req.params.id
			.then((response) => {
				console.log(response.data.todo.todoList)
				setTodoList(response.data.todo.todoList)
				//return response.data.todosList
			// TODO: Redux Store here
			})
			.catch(err => {
			console.log(err)
			const args = {
				message: 'Error.',
				description:
					'Could not read task list from database.',
				duration: 1.5,
				};
				notification.open(args);
		})
	}

	let updateTodos = () => {
		setTodos([])
		//readTaskList();
		let _Todos = []
		todoList.map((item, index) => {
			_Todos.push(<Todo key={item} todo={item} todoList={todoList} setTodoList={setTodoList} updateTodos={updateTodos}/>) //todo component here
		})
		setTodos(_Todos)
	}


	useEffect(() => {
		// setTodos([])
		// console.log(readTaskList())
		// todoList.map((item, index) => {
		// 	let _Todos = []
		// 	_Todos.push(<Todo key={item} todo={item} todoList={todoList} setTodoList={setTodoList} updateTodos={updateTodos}/>) //todo component here
		// 	setTodos(_Todos)
		// })
		readTaskList();
	}, []);

	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 24
	}

	



	let addTodo = () => {
		if ( currentTodo !== '') {
			todoList.push(currentTodo)
			console.log(Todos)
			// let _Todos = Todos
			// _Todos.push(<Todo key={currentTodo} todo={currentTodo} todoList={todoList} updateTodos={updateTodos}/>)
			// setTodos(_Todos)

			updateTaskList()
			updateTodos()
		} else {
			const args = {
                message: 'Error.',
                description:
                  'Please type in a todo task',
                duration: 1.5,
              };
              notification.open(args);
		}
	}

	
	
	
	return (
			<div>
				<Row>
					<Col>
						<Search placeholder="..." onChange={e => {setSearchValue(e.target.value)}} onSearch={value => setSearchValue(value)} enterButton />
					</Col>
				</Row>
				<Divider />
				<Row>
					<Col style={{display: 'flex'}}>
						<Input placeholder="Add todo.." allowClear={true} onChange={e => {SetCurrentTodo(e.target.value)}}/>
						<Button type="primary" shape="circle" icon="check" onClick={addTodo}></Button>
					</Col>
				</Row>
				<Row>
					<Col>
						{Todos.filter(item => item.key.toLowerCase().includes(searchValue))}
					</Col>
				</Row>
			</div>
		);
}

export default Dashboard;