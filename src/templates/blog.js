import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React, { Component } from 'react';
import SimpleFooter from '../components/SimpleFooter'
import CodeTabs from '../components/CodeTabs';
import CodeClipboard from '../components/CodeClipboard';
import BlogMain from '../components/Blog/BlogMain';
import BlogArticle from '../components/Blog/BlogArticle';
import LayoutNav from '../components/LayoutNav';

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
        const { mdx: { code, frontmatter: { title, mainPage, date, author }, excerpt, timeToRead } } = data;


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
                    <header className="header">
                        <div className="intro">
                            <LayoutNav />
                        </div>
                    </header>

                    <div className="clay-site-container container">
                        <div className="row">
                            <div className="col-md-12">

                                {/*renders a blog post content */}
                                {!mainPage &&
                                    <article>
                                        <BlogArticle title={title} author={author} date={date} codeBody={code.body} location={this.props.location} />
                                    </article>
                                }

                                {/* renders the main page */}
                                {mainPage &&
                                    <BlogMain title={title} excerpt={excerpt} timeToRead={timeToRead} />
                                }

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
                date(formatString: "MMMM DD, YYYY")
                author
            }
            code {
                body
            }
        }
    }
`;