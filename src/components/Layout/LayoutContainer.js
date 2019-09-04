import React from 'react';
import Layout from './Layout';

let LayoutContainer = (props) => {
	let methods = {
		...props
	}
	return (
		<Layout {...methods} />
	)
}

export default LayoutContainer;