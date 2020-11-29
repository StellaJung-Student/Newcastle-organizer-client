import React, {useEffect} from 'react';
import {Redirect, Route} from 'react-router-dom';
import * as PropTypes from "prop-types";
import {localStorageExtract} from "../../utils/LocalStorage";

export const PrivateRoute = ({component: Component, ...rest}) => {

    useEffect(() => {
        localStorageExtract()
    }, [])

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