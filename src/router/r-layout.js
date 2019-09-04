import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';

import Dashboard from '../components/Dashboard';

export default ({ match }) => {
    return (
        <Layout >
            <Route exact path={`${match.url}`} component={Dashboard} />
        </Layout>
    );
}