import {graphql} from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Auth from '../components/Auth';
import Footer from '../components/Footer';
import LayoutNav from '../components/LayoutNav';
import Timeline from '../components/Timeline';

export default function Updates({data}) {
	const {
		mdx: {
			excerpt,
			frontmatter: {needsAuth, title, updates},
			timeToRead,
		},
	} = data;

	return (
		<Auth needsAuth={needsAuth}>
			<div className="updates">
				<Helmet>
					<title>Updates</title>
					<meta content={excerpt} name="description" />
					<meta content={excerpt} name="og:description" />
					<meta content={excerpt} name="twitter:description" />
					<meta content={title} name="og:title" />
					<meta content="article" name="og:type" />
					<meta content="Reading time" name="twitter.label1" />
					<meta
						content={`${timeToRead} min read`}
						name="twitter:data1"
					/>
				</Helmet>
				<main className="content">
					<header className="header">
						<LayoutNav />
						<div className="container-fluid">
							<div className="row">
								<div className="blog-intro col intro text-center">
									<div className="container-fluid container-fluid-max-lg">
										<h1 className="h1">Updates</h1>
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

export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: {slug: {eq: $slug}}) {
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
