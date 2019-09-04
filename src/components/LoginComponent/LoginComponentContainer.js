import React from 'react';
import LoginComponent from './LoginComponent';

let LoginComponentContainer = (props) => {
	let methods = {
		...props
	}
	return (
		<LoginComponent {...methods} />
	)
}

export default LoginComponentContainer;