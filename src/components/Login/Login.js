import React, {Component} from 'react';
import { handleLogin, isLoggedIn} from '../../services/auth'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleUpdate = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        handleLogin(this.state).then(() => {
            this.props.changeLoginState(true);
        }).catch(() => {
            this.props.changeLoginState(false);
        });
    }

    render() {
        return (
            <>
                <div className="login">
                    <div className="clay-site-container container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sheet">
                                    <div className="sheet-header">
                                        <h2 className="sheet-title">Login</h2>
                                    </div>
                                    <form method="post" onSubmit={event => {
                                        this.handleSubmit(event);
                                    }}>
                                        <div className="form-group">
                                            <label htmlFor="basicInputTypeEmail">Email</label>
                                            <input className="form-control" type="email" name="email" onChange={this.handleUpdate} id="basicInputTypeEmail" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="basicInputTypePassword">Password</label>
                                            <input className="form-control" id="basicInputTypePassword" onChange={this.handleUpdate} placeholder="Enter password" name="password" type="password" />
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-primary" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;