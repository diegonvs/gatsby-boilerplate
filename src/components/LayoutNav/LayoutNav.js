import { window, document } from 'browser-monads';
import React, { Component } from 'react';
import { Link } from "gatsby";
import classnames from 'classnames';

import { isLoggedIn, logout } from '../../services/auth';

class LayoutNav extends Component {
    constructor() {
        super();
        this._rootNode = window || document;
        this._addScroll = this._addScroll.bind(this);
    }

    _getScrollTop() {
        if (this._rootNode === window) {
            return this._rootNode.pageYOffset;
        }
        if (this._rootNode === document) {
            return this._rootNode.defaultView.pageYOffset;
        }
    }

    _addScroll() {
        if (this._getScrollTop() >= 50) {
            this.refs.navElement.classList.add('scroll');
        } else {
            this.refs.navElement.classList.remove('scroll');
        }
    }

    _handleLogout() {
        logout()
            .then(() => {
                this.forceUpdate();
            })
            .catch((error) => {
                alert(error);
                window.location.reload();
            });
    }

    componentDidMount() {
        if (!this.props.static) {
            this._rootNode.addEventListener('scroll', this._addScroll, false);
        }
    }

    componentWillUnmount() {
        if (!this.props.static) {
            this._rootNode.removeEventListener('scroll', this._addScroll, false);
        }
    }

    render() {
        const { fixed = true, opaque = false, effect = false } = this.props;

        const styles = classnames('navbar navbar-clay-site navbar-expand-lg navbar-dark', {
            'fixed-top': fixed,
            'scroll': effect,
            'bg-primary': opaque
        });

        return (
            <nav ref="navElement" className={styles}>
                <div className="container-fluid container-fluid-max-xl">
                    <Link to="/" className="navbar-brand">
                        <img className="logo mr-2" src="/images/home/liferay_logo.svg" alt="" />
                        <span className="title align-middle">{process.env.PROJECT_NAME}</span>
                    </Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/docs/">Docs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/blog/">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/onboarding/">Onboarding</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/updates/">Updates</Link>
                        </li>
                        {isLoggedIn() ? (
                            <li className="nav-item">
                                <Link className="nav-link ml-3" to="#" onClick={this._handleLogout.bind(this)}>Logout</Link>
                            </li>
                        ) : ''}
                        <li className="nav-item">
                            <a className="mx-3 mr-lg-0" href={process.env.GITHUB_REPO}  target="_blank" rel="noopener noreferrer">
                                <img src="/images/home/GitHub-Mark-64px.svg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default LayoutNav;