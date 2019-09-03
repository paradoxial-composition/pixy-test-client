import React, {useState} from 'react';
import './Todos.scss';
import {Card, Button, Checkbox, Col} from 'antd';

let Todos = ({todo, todoList, updateTodos}) => {

	let [taskDone, setTaskDone] = useState(false)
	let onChange = (e) => {
		setTaskDone(e.target.checked)
	  }
	  let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 24
	}

	let taskDoneMark = []
	if (taskDone)	taskDoneMark.push(<Button type="dashed" shape="circle" icon="check" disabled={true}></Button>)

	let removeTodo = () => {
		todoList.splice(todoList.indexOf(todo), 1)
		updateTodos()
	}

	return (
			
			<Card>
				<Col {...colGris}>
					{taskDoneMark}					
					<Checkbox onChange={onChange}>
						{todo}
					</Checkbox>
				</Col>

				<Col {...colGris}>	
					<Button type="primary" shape="circle" icon="delete" onClick={removeTodo}></Button>
				</Col>
			</Card>
		);
}

export default Todos;