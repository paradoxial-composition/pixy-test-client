import React, {useState, useEffect} from 'react';
import './Dashboard.scss';
import Todo from '../Todos'
import { Input, Col, Row, Divider, Button , notification, Pagination, Empty, List} from 'antd';


const { Search } = Input;

let Dashboard = ({updateTaskList, updateTodos, Todos, setTodos, todoList, setTodoList, pageNumber, pageSize, setPageNumber, setPageSize, totalPages}) => {
	let [searchValue, setSearchValue] = useState('')
	let [currentTodo, SetCurrentTodo] = useState('')
	
	useEffect(() => {
		updateTodos();
	}, []);

	let addTodo = () => {
		if ( currentTodo !== '') {
			todoList.push(currentTodo)

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
						<List
							pagination={{
								onChange: page => {
									setPageNumber(page)
								},
								pageSize: pageSize,
							}}
							dataSource={Todos.filter(item => item.props.todo.toLowerCase().includes(searchValue))}
							renderItem={item => (
								<List.Item>
									{item}
								</List.Item>
							)}
						/>
					</Col>
				</Row>
			</div>
		);
}

export default Dashboard;