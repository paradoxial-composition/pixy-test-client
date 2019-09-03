import React from 'react';
import Dashboard from './Dashboard';

let DashboardContainer = (props) => {
	

	let Todos = []

	let methods = {
		Todos,
		...props
	}
	return (
		<Dashboard {...methods} />
	)
}

export default DashboardContainer;