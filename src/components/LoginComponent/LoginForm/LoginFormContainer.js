import React from 'react';
import LoginForm from './LoginForm';

let LoginFormContainer = (props) => {
	let methods = {
		...props
	}
	return (
		<LoginForm {...methods} />
	)
}

export default LoginFormContainer;