import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import * as PropTypes from "prop-types";

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('userInfo') && localStorage.getItem('isAuthenticated') && localStorage.getItem('accessToken')
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
    )
}


PrivateRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
};