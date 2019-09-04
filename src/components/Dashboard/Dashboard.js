import React, {useState, useEffect} from 'react';
import './Dashboard.scss';
import Todo from '../Todos'
import { Input, Col, Row, Divider, Button , notification} from 'antd';


const { Search } = Input;

let Dashboard = ({updateTaskList, updateTodos, Todos, setTodos, todoList, setTodoList,}) => {
	let [searchValue, setSearchValue] = useState('')
	let [currentTodo, SetCurrentTodo] = useState('')
	
	useEffect(() => {
		updateTodos();
	}, []);

	let addTodo = () => {
		if ( currentTodo !== '') {
			todoList.push(currentTodo)
			console.log(Todos)

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