import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { Component } from 'react';
import Footer from '../components/Footer';
import LayoutNav from '../components/LayoutNav';
import Auth from '../components/Auth';
import Timeline from '../components/Timeline';

export default class Updates extends Component {
    render() {
        const { data } = this.props;
        const { mdx: { frontmatter: { title, needsAuth, updates }, excerpt, timeToRead } } = data;

        return (
            <Auth needsAuth={needsAuth}>
                <div className="updates">
                    <Helmet>
                        <title>Updates</title>
                        <meta name="description" content={excerpt} />
                        <meta name="og:description" content={excerpt} />
                        <meta name="twitter:description" content={excerpt} />
                        <meta name="og:title" content={title} />
                        <meta name="og:type" content="article" />
                        <meta name="twitter.label1" content="Reading time" />
                        <meta
                            name="twitter:data1"
                            content={`${timeToRead} min read`}
                        />
                    </Helmet>
                    <main className="content">
                        <header className="header">
                            <LayoutNav />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="intro blog-intro text-center col">
                                        <div className="container-fluid container-fluid-max-lg">
                                            <h1 className="h1">Updates</h1>
                                            <h2 className="h3">Check out what's new</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div className="clay-site-container container">
                            <div className="row">
                                <div className="col-md-12">

                                    <Timeline data={updates} />

                                </div>
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            </Auth>
        );
    }
}


export const pageQuery = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            excerpt
            timeToRead
            frontmatter {
                title
                needsAuth
                updates {
                    version
                    major
                    features {
                        icon
                        title
                        description
                        url
                    }
                }
            }
        }
    }
`;