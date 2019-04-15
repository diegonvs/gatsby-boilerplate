import React from 'react';
import { handleLogin, logout, isLoggedIn, isBrowser } from '../../services/auth'
import { navigate } from 'gatsby';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: isLoggedIn()
        }
        this._handleLogin = this._handleLogin.bind(this);
        this._handleLogout = this._handleLogout.bind(this);
    }

    _handleLogin = (event) => {
        event.preventDefault();
        handleLogin().then(() => {
            this.setState({
                login: isLoggedIn()
            });
        });
    }

    _handleLogout = (event) => {
        event.preventDefault();
        logout().then(() => {
            this.setState({
                login: isLoggedIn()
            });
            if(isBrowser()) {
                navigate('/');
            }
        });
    }

    render() {
        let button;
        if(this.state.login) {
            button =
                <button className="btn btn-sm btn-outline-light font-weight-bold mx-3"
                        onClick={this._handleLogout}>
                    Logout
                </button>;
        } else {
            button =
                <button className="btn btn-sm btn-outline-light font-weight-bold mx-3"
                        onClick={this._handleLogin}>
                    Sign Up / Login
                </button>;

        }
        return (
            <>
                {button}
            </>
        )
    }
}

export default Login;