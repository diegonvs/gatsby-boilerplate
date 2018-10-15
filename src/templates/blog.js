import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React, { Component } from 'react';
import SimpleFooter from '../components/SimpleFooter'
import Sidebar from '../components/Sidebar';
import CodeTabs from '../components/CodeTabs';
import CodeClipboard from '../components/CodeClipboard';
import Typography from '../components/Typography';

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
        const { mdx: { code, frontmatter, excerpt, timeToRead } } = data;

        const title = `${frontmatter.title} - Clay`;

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
                    {/* {posts
                        .map(({ node: post }) => (
                            <div
                                className="content"
                                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                                key={post.id}
                            >
                                <p>
                                    <Link className="has-text-primary" to={post.fields.slug}>
                                        {post.frontmatter.title}
                                    </Link>
                                    <span> &bull; </span>
                                    <small>{post.frontmatter.date}</small>
                                </p>
                                <p>
                                    {post.excerpt}
                                    <br />
                                    <br />
                                    <Link className="button is-small" to={post.fields.slug}>
                                        Keep Reading →
                                    </Link>
                                </p>
                            </div>
                    ))} */}
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
                date(formatString: "MMMM DD, YYYY")
                description
            }
            code {
                body
            }
        }
    }
`;