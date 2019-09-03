import React from 'react';
import './Todos.scss';
import {Card, Button, Checkbox} from 'antd';

let Todos = ({todo}) => {

	let onChange = (e) => {
		console.log(`checked = ${e.target.checked}`);
	  }

	return (
			<Card>
				<Checkbox onChange={onChange}>
				{todo}
				<Button type="primary" shape="circle" icon="delete"></Button>
				</Checkbox>
			</Card>
		);
}

export default Todos;