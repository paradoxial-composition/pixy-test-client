import React from 'react';
import Todos from './Todos';

let TodosContainer = (props) => {
	let methods = {
		todo: 'test',
		...props
	}
	return (
		<Todos {...methods} />
	)
}

export default TodosContainer;