import { Link, StaticQuery, graphql } from 'gatsby';
import React, { Component } from 'react';

class BlogList extends Component {
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
                allMdx(filter: { fields: { slug: { regex: "/^blog/i"}, title: {  ne: "" } } },
                    sort: {order:DESC, fields: frontmatter___date}
                ) {
                    edges {
                        node {
                            fields {
                                slug
                                title
                                date(formatString: "MMMM DD, YYYY")
                                description
                                author
                                banner
                            }
                        }
                    }
                }
            }
        `}
        render={({ allMdx: {edges} }) => {
            const fieldsFn = ({ node: { fields } }) =>fields;

            const posts = edges.map(fieldsFn);

            return(
                <>
                    <BlogList>
                        {posts.map(({slug, title, description, author, banner, date}, index) => (
                            <div key={index} className="card">
                                <img className="mx-auto" src={banner} />
                                <div className="card-body">
                                    <h2 className="clay-h2 font-weight-bold">{title}</h2>
                                    <p className="clay-p">{description}</p>
                                    <br />
                                    <small style={{float: "right"}}> {`by ${author} at ${date}`}</small>
                                    <Link className="link-primary" to={slug}>
                                        <span className="learn-more">Learn More</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </BlogList>
                </>
            )
        }}
    />
)