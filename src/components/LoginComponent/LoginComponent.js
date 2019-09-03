import React from 'react';
import './LoginComponent.scss';
import {Card, Col, Row} from 'antd';

let LoginComponent = ({children}) => {
	return (
		<Row align="middle">
		<Col push={9}>
			<Card style={{ width: 300}}>
				{children}
			</Card>
		</Col>
	</Row>
		);
}

export default LoginComponent;