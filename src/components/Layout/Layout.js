import React, {useState} from 'react';
import { Redirect } from 'react-router-dom'
import './Layout.scss';
//import history from '../../history'
import { Layout, Row, Col, Card, Button} from 'antd';
const { Header} = Layout;

let _Layout = ({children, history}) => {

	let [redirect, setRedirect] = useState(false)
	let renderRedirect = () => {
		if (redirect) {
		  return <Redirect to='/auth' />
		}
	  }

	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 24
	}

	let logout = () => {
		localStorage.removeItem('user');
		setRedirect(true)
		//history.push('/auth');
	}

	return (
		<Layout>
			{renderRedirect()}
			<Header style={{ background: '#fff', padding: 0, textAlign: 'right'}}>
				<Button type="primary" shape="circle" icon="logout" onClick={logout}></Button>
				logout
			</Header>
			<Row align="middle">
			<Col style={{ width: '600px', margin: 'auto', textAlign: 'center' }}>
				<Card>
					{children}
				</Card>
			</Col>
		</Row>
		</Layout>
		);
}

export default _Layout;