import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React, { Component } from 'react';

import SimpleFooter from '../components/SimpleFooter';
import Sidebar from '../components/Sidebar';
import CodeTabs from '../components/CodeTabs';
import CodeClipboard from '../components/CodeClipboard';
import Typography from '../components/Typography';

export default class Docs extends Component {
    componentDidMount() {
        this._codeTabs = new CodeTabs();
        this._codeClipboard = new CodeClipboard();
    }

    componentWillUnmount() {
        this._codeTabs = null;
        this._codeClipboard.dispose();
    }

    render() {
        const { data, location } = this.props;

        const { mdx: { code, frontmatter, excerpt, timeToRead } } = data;

        const title = frontmatter.title;

        return (
            <div className="docs">
                <Helmet>
                    <title>{title}</title>
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
                    <Sidebar location={location} />
                    <div className="sidebar-offset">
                        <header>
                            <div className="clay-site-container container-fluid">
                                <h1>{frontmatter.title}</h1>
                            </div>
                        </header>

                        <div className="clay-site-container container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <article>
                                        <MDXRenderer
                                            components={{
                                                h1: Typography.H1,
                                                h2: Typography.H2,
                                                h3: Typography.H3,
                                                h4: Typography.H4,
                                                p: Typography.P,
                                            }}
                                        >
                                            {code.body}
                                        </MDXRenderer>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <SimpleFooter githubRepo="http://github.com/liferay/clay" />
                    </div>
                </main>
            </div>
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
            }
            code {
                body
            }
        }
    }
`;