import React, {useState} from 'react';
import './Layout.scss';
import { Layout, Row, Col, Card} from 'antd';
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

	return (
		<Layout>
			<Header style={{ background: '#fff', padding: 0, textAlign: 'right'}}>
				<h1>Log out</h1>
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