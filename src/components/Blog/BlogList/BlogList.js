import { window } from 'browser-monads';
import { Link, StaticQuery, withPrefix, graphql } from 'gatsby';
import React from 'react';
import CodeTabs from '../../CodeTabs';
import CodeClipboard from '../../CodeClipboard';

class BlogList extends React.Component {
    componentDidMount() {
        this._codeTabs = new CodeTabs();
        this._codeClipboard = new CodeClipboard();
    }

    componentWillUnmount() {
        this._codeTabs = null;
        this._codeClipboard.dispose();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                allMdx(filter: { fields: { slug: { regex: "/^blog/i", ne: "blog/index.html"}} },
                    sort: {order:DESC, fields: frontmatter___date}
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                                date(formatString: "MMMM DD, YYYY")
                                description
                                author
                                url
                                banner
                            }
                        }
                    }
                }
            }
        `}
        render={({ allMdx: {edges} }) => {
            const postsFn = ({ node: { fields, frontmatter } }) => ({...frontmatter, ...fields});

            const posts = edges.map(postsFn);

            return(
                <>
                    <BlogList>
                        {posts.map((post, index) =>
                            (post.url !== null) ? externalLinkTo(post, index) : internalLinkTo(post, index))}
                    </BlogList>
                </>
            )
        }}
    />
)

const externalLinkTo = (post, index) => {
    return(
        <a className="link-primary" target="_blank" rel="noopener noreferrer" href={post.url}>
            {card(post, index)}
        </a>
    );
};

const internalLinkTo = (post, index) => {
    return(
        <Link className="link-primary" to={post.slug}>
            {card(post, index)}
        </Link>
    );
};

const card = (post, index) => {
    return(
        <div key={index} className="card">
            <img className="mx-auto" alt="banner" src={isExternalUrl(post.banner) ? post.banner : withPrefix(post.banner)} />
            <div className="card-body">
                <h2 className="clay-h2 font-weight-bold">{post.title}</h2>
                <p className="clay-p">{post.description}</p>
                <br />
                <small style={{float: "right"}}> {`by ${post.author} at ${post.date}`}</small>
            </div>
        </div>
    );
};

const isExternalUrl = (url) => {
    const match = url.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/); //eslint-disable-line
    if (typeof match[1] === "string" && match[1].length > 0 && match[1].toLowerCase() !== window.location.protocol) {
        return true;
    }
    if (typeof match[2] === "string" && match[2].length > 0 && match[2].replace(new RegExp(":(" + { "http:": 80, "https:": 443 }[window.location.protocol] + ")?$"), "") !== window.location.host) {
        return true;
    }
    return false;
}