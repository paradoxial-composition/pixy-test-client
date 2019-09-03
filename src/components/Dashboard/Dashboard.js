import React, {useState, useEffect} from 'react';
import './Dashboard.scss';
import Todo from '../Todos'
import { Input, Col, Row, Divider, Button , notification} from 'antd';

const { Search } = Input;

let Dashboard = () => {
	let [currentTodo, SetCurrentTodo] = useState('')
	let [Todos, setTodos] = useState([])
	let [todoList, setTodoList] = useState([])
	let [searchValue, setSearchValue] = useState('')

	useEffect(() => {
		setTodos([])
		todoList.map((item, index) => {
			let _Todos = []
			_Todos.push(<Todo key={item} todo={item} todoList={todoList} setTodoList={setTodoList} updateTodos={updateTodos}/>) //todo component here
			setTodos(_Todos)
		})
	}, []);


	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 24
	}

	

	let updateTodos = () => {
		setTodos([])
		let _Todos = []
		todoList.map((item, index) => {
			_Todos.push(<Todo key={item} todo={item} todoList={todoList} setTodoList={setTodoList} updateTodos={updateTodos}/>) //todo component here
			setTodos(_Todos)
		})
	}


	let addTodo = () => {
		if ( currentTodo !== '') {
			todoList.push(currentTodo)
			console.log(Todos)
			// let _Todos = Todos
			// _Todos.push(<Todo key={currentTodo} todo={currentTodo} todoList={todoList} updateTodos={updateTodos}/>)
			// setTodos(_Todos)

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