import React,{useState, useEffect} from 'react';
import Dashboard from './Dashboard';
import Todo from '../Todos'
import {notification} from 'antd';
import axios from 'axios';
import Loader from '../Loader'

let DashboardContainer = (props) => {
	let [Todos, setTodos] = useState([])
	let [todoList, setTodoList] = useState([])
	let [loading, setLoading] = useState(false);

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
		setLoading(true);
		let user = JSON.parse(localStorage.getItem('user')).user
		await axios.get(`${BASE_URL}${usersURL}/${user._id}`) // req.params.id
			.then((response) => {
				console.log(response.data.todo.todoList)
				//todoList = response.data.todo.todoList
				setTodoList(response.data.todo.todoList)
				console.log({todoList})
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
		.finally(() => setLoading(false))
	}

	let updateTodos = () => {
		setTodos([])
		//readTaskList();
		let _Todos = []
		todoList.map((item, index) => {
			_Todos.push(<Todo key={item} todo={item} todoList={todoList} setTodoList={setTodoList} updateTodos={updateTodos} updateTaskList={updateTaskList}/>) //todo component here
		})
		setTodos(_Todos)
	}


	useEffect( () => {
		// setTodos([])
		// console.log(readTaskList())
		// todoList.map((item, index) => {
		// 	let _Todos = []
		// 	_Todos.push(<Todo key={item} todo={item} todoList={todoList} setTodoList={setTodoList} updateTodos={updateTodos}/>) //todo component here
		// 	setTodos(_Todos)
		// })
		readTaskList();
		updateTodos();
		//console.log({todoList})
	}, []);

	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 24
	}

	





	let methods = {
		updateTaskList,
		updateTodos,
		Todos,
		setTodos,
		todoList,
		setTodoList,
		...props
	}
	if (loading === true) return <Loader />
	return (
		<Dashboard {...methods} />
	)
}

export default DashboardContainer;