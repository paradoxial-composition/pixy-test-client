import React from 'react';
import RegisterForm from './RegisterForm';

let RegisterFormContainer = (props) => {
	let methods = {
		...props
	}
	return (
		<RegisterForm {...methods} />
	)
}

export default RegisterFormContainer;