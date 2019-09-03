import React from 'react';
import { Route } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';

import LoginForm from '../components/LoginComponent/LoginForm';
import RegisterForm from '../components/LoginComponent/RegisterForm';

export default ({ match }) => {
    return (
        <LoginComponent>
            <Route exact path={`${match.url}`} component={LoginForm} />
            <Route exact path={`${match.url}/register`} component={RegisterForm} />
        </LoginComponent>
    );    
}