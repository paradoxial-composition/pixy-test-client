import React,{useState, useEffect} from 'react';
import Dashboard from './Dashboard';
import Todo from '../Todos'
import {notification} from 'antd';
import axios from 'axios';
import Loader from '../Loader'

let DashboardContainer = (props) => {
	let [Todos, setTodos] = useState([])
	let [todoList, setTodoList] = useState([])
	let [pageNumber, setPageNumber] = useState(1)
	let [pageSize, setPageSize] = useState(5)
	let [totalPages, setTotalPages] = useState(1)
	let [loading, setLoading] = useState(false)

	const BASE_URL = 'http://127.0.0.1:3000';
	const usersURL = '/todo';

	let  updateTaskList = async (e) => {
		let user = JSON.parse(localStorage.getItem('user')).user
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
		readTaskList();
		updateTodos();
	}, []);

	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 24
	}

	





	let methods = {
		totalPages,
		pageNumber,
		setPageNumber,
		pageSize,
		setPageSize,
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