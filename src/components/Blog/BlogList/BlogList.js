import {Link, StaticQuery, graphql} from 'gatsby';
import React from 'react';

import {Card} from './Card';

export default () => (
	<StaticQuery
		query={graphql`
			query {
				allMdx(
					filter: {
						fields: {
							slug: {regex: "/^blog/i", ne: "blog/index.html"}
						}
					}
					sort: {order: DESC, fields: frontmatter___date}
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
		render={({allMdx: {edges}}) => {
			const postsFn = ({node: {fields, frontmatter}}) => ({
				...frontmatter,
				...fields,
			});

			const posts = edges.map(postsFn);

			return posts.map((post, index) =>
				post.url !== null ? (
					<ExternalLinkTo key={`post-${index}`} post={post} />
				) : (
					<InternalLinkTo key={`post-${index}`} post={post} />
				)
			);
		}}
	/>
);

function ExternalLinkTo({index, post}) {
	return (
		<a
			className="link-primary"
			href={post.url}
			rel="noopener noreferrer"
			target="_blank"
		>
			<Card index={index} post={post} />
		</a>
	);
}

function InternalLinkTo({index, post}) {
	return (
		<Link className="link-primary" to={post.slug}>
			<Card index={index} post={post} />
		</Link>
	);
}
