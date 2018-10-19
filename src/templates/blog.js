import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React, { Component } from 'react';
import SimpleFooter from '../components/SimpleFooter'
import CodeTabs from '../components/CodeTabs';
import CodeClipboard from '../components/CodeClipboard';
import Typography from '../components/Typography';
import BlogMain from '../components/Blog/BlogMain';

export default class Blog extends Component {
    componentDidMount() {
        this._codeTabs = new CodeTabs();
        this._codeClipboard = new CodeClipboard();
    }

    componentWillUnmount() {
        this._codeTabs = null;
        this._codeClipboard.dispose();
    }

    render() {
        const { data } = this.props;
        const { mdx: { code, frontmatter: { title, mainPage }, excerpt, timeToRead } } = data;

        const githubRepo = "https://github.com/liferay/clay";

        return (
            <div className="blog">
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
                    <header>
                        <div className="clay-site-container container-fluid">
                            <h1>{title}</h1>
                        </div>
                    </header>
                    <div className="clay-site-container container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <article>

                                    {/* renders the main page */}
                                    {mainPage &&
                                        <BlogMain title={title} excerpt={excerpt} timeToRead={timeToRead} />
                                    }

                                    {/*renders a blog post content */}
                                    {!mainPage &&
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
                                    }
                                </article>
                            </div>
                        </div>
                    </div>
                </main>

                <SimpleFooter githubRepo={githubRepo} />
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
                mainPage
            }
            code {
                body
            }
        }
    }
`;