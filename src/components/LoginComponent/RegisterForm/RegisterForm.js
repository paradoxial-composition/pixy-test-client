import React from 'react';
import './RegisterForm.scss';
import { Form, Icon, Input, Button, Divider, DatePicker, Col, Row} from 'antd';


// import axios from 'axios';
import Loader from '../../Loader';

const BASE_URL = 'http://localhost:7000';
const usersURL = '/users';

let RegisterForm = ({form, history}) => {
	let  handleSubmit = async (e) => {
    e.preventDefault();
    form.validateFields( async (err, values) => {
      if (!err) {
      }
    });
	};
	
	const { getFieldDecorator } = form;

	return (
		<Form onSubmit={handleSubmit} className="register-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>

		<Form.Item>
          {getFieldDecorator('confirmPassword', {
            rules: [{ required: true, message: 'Please confirm your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Confirm Password"
            />,
          )}
        </Form.Item>

        <Divider />
        <Row style={{ textAlign: 'center'}}>
          <Col >
            <Form.Item>
              <Button type="primary" htmlType="submit" className="register-form-button">
                Enregistrer
              </Button>
            </Form.Item>
          </Col>
          <Col style={{ textAlign: 'center'}}>
            <Form.Item>
            <Button type="link" onClick={() => {history.push('/auth');}}>Annuler</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
		);
}
const WrappedRegisterForm = Form.create({ name: 'normal_register' })(RegisterForm);
export default WrappedRegisterForm;