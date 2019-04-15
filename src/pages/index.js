import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix, Link } from 'gatsby';
import LayoutNav from '../components/LayoutNav';
import {WOW} from 'wowjs';
import Footer from '../components/Footer';

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
        const description = "Start using Gatsby for make powerful static sites";

        return (
            <div className="home">
                <Helmet>
                    <title>{process.env.PROJECT_NAME}</title>
                    <meta name="description" content={description} />
                    <meta name="og:description" content={description} />
                    <meta name="twitter:description" content={description} />
                    <meta name="og:title" content={process.env.PROJECT_NAME} />
                </Helmet>
                <main className="content">
                    <header className="header">
                        <LayoutNav />

                        <div className="container-fluid">
                            <div className="row">
                                <div className="intro text-center col">
                                    <div className="container-fluid container-fluid-max-lg">
                                        <h1 className="h1">{process.env.PROJECT_NAME}</h1>
                                        <h2 className="h3">{description}</h2>
                                        <Link to="/docs/" className="btn btn-lg btn-outline-light font-weight-bold mx-3 mb-4">
                                            Docs
                                        </Link>
                                        <Link to="/onboarding/" className="btn btn-lg btn-outline-light font-weight-bold mx-3 mb-4">
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
                                <div className="col-md-4 ml-auto mr-lg-4 wow zoomIn" data-wow-duration="1.2s">
                                    <div className="text-center text-lg-right">
                                        <img src={withPrefix("images/home/github.svg")} alt="Github Logo" />
                                    </div>
                                </div>
                                <div className="col-md-6 mr-auto wow zoomIn" data-wow-duration="0.8s">
                                    <div className="media-body mt-4 text-center text-lg-left">
                                        <p className="h1 font-weight-bold">Want to contribute? Found an issue? Head on over to the <a href={process.env.GITHUB_REPO} className="font-weight-bold"  target="_blank" rel="noopener noreferrer">GitHub repo.</a></p>
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
    )};
}

export default Index;
