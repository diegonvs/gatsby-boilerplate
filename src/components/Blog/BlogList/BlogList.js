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
                allMdx(filter: { fields: { slug: { regex: "/^blog/i"}, title: {  ne: "" } } }) {
                    edges {
                        node {
                            fields {
                                slug
                                title
                                date
                                description
                                author
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
                        {posts.map(({slug, title, description, author}, index) => (
                            <div key={index} className="card card-horizontal card-rounded">
                                <div className="card-row">
                                    <div className="autofit-col autofit-col-expand autofit-col-gutters">
                                        <section className="autofit-section">
                                            <Link to={slug}><h3 className="card-title">{title}</h3></Link>
                                            <div className="card-divider"></div>
                                            <p className="card-text">{description ? description : ''}</p>
                                            <div className="card-divider"></div>
                                            <p className="card-text">by {author ? author : ''}</p>
                                        </section>
                                    </div>
                                    <div className="autofit-col">
                                        {/* TODO- Thumbnails */}
                                        <img className="card-item-last" style={{width: 150+'px', height: 150+'px', backgroundColor: "magenta"}} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </BlogList>
                </>
            )
        }}
    />
)