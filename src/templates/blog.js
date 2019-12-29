import {graphql} from 'gatsby';
import React, {useEffect, useRef} from 'react';
import Helmet from 'react-helmet';

import Auth from '../components/Auth';
import BlogArticle from '../components/Blog/BlogArticle';
import BlogMain from '../components/Blog/BlogMain';
import CodeClipboard from '../components/CodeClipboard';
import CodeTabs from '../components/CodeTabs';
import Footer from '../components/Footer';
import LayoutNav from '../components/LayoutNav';

export default function Blog({data, location}) {
	const _codeClipboard = useRef(null);
	const _codeTabs = useRef(null);

	useEffect(() => {
		_codeTabs.current = new CodeTabs();
		_codeClipboard.current = new CodeClipboard();

		return () => {
			if (_codeTabs.current) {
				_codeTabs.current = null;
			}
			if (_codeClipboard.current) {
				_codeClipboard.current.dispose();
			}
		};
	}, []);

	const {
		mdx: {
			code,
			excerpt,
			frontmatter: {author, date, mainPage, needsAuth, title},
			timeToRead,
		},
	} = data;

	return (
		<Auth needsAuth={needsAuth}>
			<div className="blog">
				<Helmet>
					<title>{title}</title>
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
						<LayoutNav fixed={mainPage} opaque={!mainPage} />
						{mainPage && (
							<div className="container-fluid">
								<div className="row">
									<div className="blog-intro col intro text-center">
										<div className="container-fluid container-fluid-max-lg">
											<h1 className="h1">Blog</h1>
											<h2 className="h3">
												Where good ideas come from
											</h2>
										</div>
									</div>
								</div>
							</div>
						)}
					</header>

					<div className="clay-site-container container">
						<div className="row">
							<div className="col-md-12">
								{/*renders a blog post content */}
								{!mainPage && (
									<article>
										<BlogArticle
											author={author}
											codeBody={code.body}
											date={date}
											location={location}
											title={title}
										/>
									</article>
								)}

								{/* renders the main page */}
								{mainPage && (
									<BlogMain
										excerpt={excerpt}
										timeToRead={timeToRead}
										title={title}
									/>
								)}
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
				mainPage
				date(formatString: "MMMM DD, YYYY")
				author
				needsAuth
			}
			code {
				body
			}
		}
	}
`;
