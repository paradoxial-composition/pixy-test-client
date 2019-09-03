import React from 'react';
import Dashboard from './Dashboard';

let DashboardContainer = (props) => {
	let methods = {
		...props
	}
	return (
		<Dashboard {...methods} />
	)
}

export default DashboardContainer;