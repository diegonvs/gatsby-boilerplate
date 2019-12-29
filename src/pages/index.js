import {withPrefix, Link} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import {WOW} from 'wowjs';

import Footer from '../components/Footer';
import LayoutNav from '../components/LayoutNav';

/**
 * Index page
 */
class Index extends React.Component {
	componentDidMount() {
		this._wow = new WOW();
		this._wow.init();
	}

	componentWillUnmount() {
		this._wow = null;
	}

	render() {
		const description = 'Start using Gatsby for make powerful static sites';

		return (
			<div className="home">
				<Helmet>
					<title>{process.env.PROJECT_NAME}</title>
					<meta content={description} name="description" />
					<meta content={description} name="og:description" />
					<meta content={description} name="twitter:description" />
					<meta content={process.env.PROJECT_NAME} name="og:title" />
				</Helmet>
				<main className="content">
					<header className="header">
						<LayoutNav />

						<div className="container-fluid">
							<div className="row">
								<div className="col intro text-center">
									<div className="container-fluid container-fluid-max-lg">
										<h1 className="h1">
											{process.env.PROJECT_NAME}
										</h1>
										<h2 className="h3">{description}</h2>
										<Link
											className="btn btn-lg btn-outline-light font-weight-bold mb-4 mx-3"
											to="/docs/"
										>
											Docs
										</Link>
										<Link
											className="btn btn-lg btn-outline-light font-weight-bold mb-4 mx-3"
											to="/onboarding/"
										>
											Get Started
										</Link>
									</div>
								</div>
							</div>
						</div>
					</header>

					<section className="contact-us">
						<div className="container-fluid container-fluid-max-lg">
							<div className="row">
								<div
									className="col-md-4 ml-auto mr-lg-4 wow zoomIn"
									data-wow-duration="1.2s"
								>
									<div className="text-center text-lg-right">
										<img
											alt="Github Logo"
											src={withPrefix(
												'images/home/github.svg'
											)}
										/>
									</div>
								</div>
								<div
									className="col-md-6 mr-auto wow zoomIn"
									data-wow-duration="0.8s"
								>
									<div className="media-body mt-4 text-center text-lg-left">
										<p className="font-weight-bold h1">
											Want to contribute? Found an issue?
											Head on over to the{' '}
											<a
												className="font-weight-bold"
												href={process.env.GITHUB_REPO}
												rel="noopener noreferrer"
												target="_blank"
											>
												GitHub repo.
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						<Footer />
					</section>
				</main>
			</div>
		);
	}
}

export default Index;
