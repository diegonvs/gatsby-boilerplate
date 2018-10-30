import React, {Component} from 'react';
import {isLoggedIn} from '../../services/auth';
import Login from '../Login';

const Auth = (props) => {
    if (props.needsAuth && !isLoggedIn()) {
        return <Login />;
    }

    return props.children;
};

export default Auth;