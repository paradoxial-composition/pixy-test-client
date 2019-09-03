import React, {useState} from 'react';
import './Layout.scss';
import { Layout, Drawer} from 'antd';
const { Header, Sider, Content } = Layout;

let _Layout = ({children, history}) => {
	let [collapsed, setCollapsed] = useState(false);
	let [visible, setVisible] = useState(false);

	let toggle = () => {
    setCollapsed(!collapsed);
	};
	
	return (
		<Layout>
			<Content
				className="LayoutContent"
				style={{
					margin: '24px 16px',
					padding: 24,
					background: '#fff',
					minHeight: 280,
				}}
				>
				{children}
			</Content>
		</Layout>
		);
}

export default _Layout;