import React, {useState} from 'react';
import './Layout.scss';
import history from '../../history'
import { Layout, Row, Col, Card, Button} from 'antd';
const { Header, Sider, Content } = Layout;

let _Layout = ({children, history}) => {
	let [collapsed, setCollapsed] = useState(false);
	
	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 24
	}

	let logout = () => {
		//history.push('/auth')
	}

	return (
		<Layout>
			<Header style={{ background: '#fff', padding: 0, textAlign: 'right'}}>
				logout
				<Button type="primary" shape="circle" icon="logout" onClick={logout}></Button>
			</Header>
			<Row align="middle">
			<Col {...colGris}>
				<Card style={{ width: 800}}>
					{children}
				</Card>
			</Col>
		</Row>
		</Layout>
		);
}

export default _Layout;