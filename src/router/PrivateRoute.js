import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// import Loader from '../components/Loader';

const PrivateRoute =  ({ component: Component, loading , ...rest }) => (
    <Route {...rest} render={props =>  {
            return( (localStorage.getItem('user') != undefined)
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/auth' }} />
        )}} />
)

// const mapStateToProps = state => ({

// });


export default PrivateRoute;