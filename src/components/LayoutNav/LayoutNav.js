import {window, document} from 'browser-monads';
import classnames from 'classnames';
import {Link, withPrefix} from 'gatsby';
import React from 'react';

import Login from '../Login';

class LayoutNav extends React.Component {
	constructor() {
		super();
		this._rootNode = window || document;
		this._addScroll = this._addScroll.bind(this);
		this._navElement = React.createRef(null);
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
		if (this._getScrollTop() >= 50 && this._navElement.current) {
			this._navElement.current.classList.add('scroll');
		} else {
			this._navElement.current.classList.remove('scroll');
		}
	}

	componentDidMount() {
		if (!this.props.static) {
			this._rootNode.addEventListener('scroll', this._addScroll, false);
		}
	}

	componentWillUnmount() {
		if (!this.props.static) {
			this._rootNode.removeEventListener(
				'scroll',
				this._addScroll,
				false
			);
		}
	}

	expandToggler() {
		this.props.onNavbarToggleClick();
	}

	render() {
		const {
			effect = false,
			fixed = true,
			opaque = false,
			sidebarHamburguerIcon = false,
		} = this.props;

		const styles = classnames(
			'navbar navbar-clay-site navbar-expand-lg navbar-dark',
			{
				'bg-primary': opaque,
				'fixed-top': fixed,
				scroll: effect,
			}
		);

		return (
			<nav className={styles} ref={this._navElement}>
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img
							alt="Liferay Logo"
							className="logo mr-2"
							src={withPrefix('/images/home/liferay_logo.svg')}
						/>
						<span className="align-middle title">
							{process.env.PROJECT_NAME}
						</span>
					</Link>

					{sidebarHamburguerIcon && (
						<button
							aria-controls="claySidebar"
							aria-expanded="false"
							aria-label="Toggle navigation"
							className="navbar-toggler order-md-1 p-2"
							data-target="#claySidebar"
							data-toggle="collapse"
							onClick={this.expandToggler.bind(this)}
							type="button"
						>
							<svg
								aria-hidden="true"
								className="lexicon-icon lexicon-icon-bars"
							>
								<use
									xlinkHref={withPrefix(
										'images/icons/icons.svg#bars'
									)}
								/>
							</svg>
						</button>
					)}

					<ul className="ml-md-auto navbar-nav">
						<li className="nav-item">
							<Link className="ml-lg-3 nav-link" to="/docs/">
								Docs
							</Link>
						</li>
						<li className="nav-item">
							<Link className="ml-lg-3 nav-link" to="/blog/">
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="ml-lg-3 nav-link"
								to="/onboarding/"
							>
								Onboarding
							</Link>
						</li>
						<li className="nav-item">
							<Link className="ml-lg-3 nav-link" to="/updates/">
								Updates
							</Link>
						</li>
						<li className="nav-item">
							<Login />
						</li>
						<li className="nav-item">
							<a
								className="mr-lg-0 mx-3"
								href={process.env.GITHUB_REPO}
								rel="noopener noreferrer"
								target="_blank"
							>
								<img
									alt=""
									src={withPrefix(
										'/images/home/GitHub-Mark-64px.svg'
									)}
								/>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default LayoutNav;
