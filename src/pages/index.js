import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import LayoutNav from '../components/LayoutNav';
import {WOW} from 'wowjs';
import Footer from '../components/Footer';

/**
 * Index page
 */
class Index extends Component {
    componentDidMount() {
        this._wow = new WOW();
        this._wow.init();
    }

    componentWillUnmount() {
        this._wow = null;
    }

    render() {
        const description = "Make powerful static sites 💖";

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
                                        <Link to="/blog/" className="btn btn-lg btn-outline-light font-weight-bold mx-3 mb-4">
                                            Blog
                                        </Link>
                                        <Link to="/onboarding/" className="btn btn-lg btn-outline-light font-weight-bold mx-3 mb-4">
                                            Onboarding
                                        </Link>
                                        <Link to="/updates/" className="btn btn-lg btn-outline-light font-weight-bold mx-3 mb-4">
                                            Updates
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
                                        <img src="/images/home/github.svg" alt="" />
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

                    <section className="link-blocks text-center">
                        <div className="container-fluid container-fluid-max-lg">
                            <div className="row">
                                <div className="body ml-auto col-md-9 mr-auto">
                                    <h2 className="h1 font-weight-bold">This is a amazing boilerplate</h2>
                                    <p className="pb-5 pt-4">This boilerplate uses Gatsby! <div className="font-weight-bold">So fast, wow</div></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 ml-auto mb-4">
                                    <div className="card h-100 wow fadeInUp">
                                        <div className="card-body mx-5">
                                            <img className="mx-auto" src="/images/home/liferay-logo-full-color.svg" alt="" />
                                            <p>Check this card, wow <br />
                                            Awesome! Check this incredible company website!</p>
                                            <a href="https://liferay.com" className="mb-3"  target="_blank" rel="noopener noreferrer">
                                                Visit Liferay website
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 mr-auto mb-4">
                                    <div className="card h-100 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="card-body mx-5">
                                            <img className="mx-auto" src="/images/home/gatsby.svg" alt="" />
                                            <p>
                                                Cambrian explosion citizens of distant epochs invent the universe dispassionate extraterrestrial observer birth extraplanetary?
                                            </p>
                                            <a href="https://gatsbyjs.org" className="mb-3"  target="_blank" rel="noopener noreferrer">
                                                Visit Gatsby Page
                                            </a>
                                        </div>
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
