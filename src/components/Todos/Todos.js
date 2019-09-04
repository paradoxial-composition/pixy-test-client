import React, {useState} from 'react';
import './Todos.scss';
import {Card, Button, Checkbox, Col, Popover, Input, Typography} from 'antd';

const { Text } = Typography;

let Todos = ({todo, todoList, updateTodos, setTodoList, updateTaskList}) => {

	let [taskDone, setTaskDone] = useState(false)
	let [newTaskName, setNewTaskName] = useState('')
	let [editVisible, setEditVisible] = useState(false)
	let onChange = (e) => {
		setTaskDone(e.target.checked)
	  }
	  let colGris = {
		xxl: 6,
		xl: 20,
		lg: 8,
		md: 8,
		ms: 24
	}

	let colGris2 = {
		xxl: 6,
		xl: 4,
		lg: 4,
		md: 4,
		ms: 24
	}

	let updateTask = () => {
		//let _todoList = todoList
		todoList[todoList.indexOf(todo)] = newTaskName
		//setTodoList(_todoList)
		setEditVisible(!editVisible)
		updateTodos()
	}

	let handlePopup = () => {
		setEditVisible(!editVisible)
	}
 
	let taskDoneMark = []
	if (taskDone)	taskDoneMark.push(<Text delete>{todo}</Text>)
	else taskDoneMark.push(<Text >{todo}</Text>)

	let removeTodo = () => {
		todoList.splice(todoList.indexOf(todo), 1)
		updateTaskList()
		updateTodos()
	}

	return (
			
		<Card>
			<Col style={{textAlign: 'left'}} {...colGris}>
				<Checkbox onChange={onChange}>				
					<Popover
						content={
							<div>
							<Input placeholder="..." allowClear={true} onChange={e => {setNewTaskName(e.target.value)}}/>
							<a onClick={updateTask}>Edit</a>
							</div>
						}
						title="Edit task."
						trigger="click"
						visible={editVisible}
						onVisibleChange={handlePopup}
					>
						{taskDoneMark}
					</Popover>
				</Checkbox>
			</Col>

			<Col style={{textAlign: 'right'}}  {...colGris2}>	
				<Button type="primary" shape="circle" icon="delete" onClick={removeTodo}></Button>
			</Col>
		</Card>
	);
}

export default Todos;