import React, { Component } from 'react';
import { navigate } from 'gatsby';
import {handleLogin, isBrowser, isLoggedIn} from '../../services/auth';

class Auth extends Component {
    render() {
        if (this.props.needsAuth && !isLoggedIn()) {
            handleLogin().then(() => {
                if(isBrowser()) {
                    navigate(window.location.pathname);
                }
            });
            return null;
        }

        return this.props.children;
    }
}

export default Auth;