import {Link, graphql} from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React from 'react';
import Helmet from 'react-helmet';

import Auth from '../components/Auth';
import CodeClipboard from '../components/CodeClipboard';
import CodeTabs from '../components/CodeTabs';
import Footer from '../components/Footer';
import LayoutNav from '../components/LayoutNav';
import MultiStepNav from '../components/Onboarding/MultiStepNav';
import OnboardingMain from '../components/Onboarding/OnboardingMain';
import Typography from '../components/Typography';

export default class Onboarding extends React.Component {
	componentDidMount() {
		this._codeTabs = new CodeTabs();
		this._codeClipboard = new CodeClipboard();
	}

	componentWillUnmount() {
		this._codeTabs = null;
		this._codeClipboard.dispose();
	}

	render() {
		const {
			mdx: {
				code: {body},
				excerpt,
				frontmatter: {
					description,
					mainPage,
					needsAuth,
					stepNumber,
					title,
				},
				timeToRead,
			},
		} = this.props.data;
		const {pageContext} = this.props;

		const previous = pageContext.previous;
		const next = pageContext.next;

		return (
			<Auth needsAuth={needsAuth}>
				<div className="onboarding">
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
					<header className="header">
						<LayoutNav fixed={mainPage} opaque={!mainPage} />
						{mainPage && (
							<div className="container-fluid">
								<div className="row">
									<div className="blog-intro col intro text-center">
										<div className="container-fluid container-fluid-max-lg">
											<h1 className="h1">{title}</h1>
											<h2 className="h3">
												{description}
											</h2>
										</div>
									</div>
								</div>
							</div>
						)}
					</header>
					<main className="content">
						<div className="clay-site-container container">
							<div className="row">
								<div className="col-md-12">
									{!mainPage && (
										<>
											<MultiStepNav
												stepNumber={stepNumber}
											/>
											<div className="article-header">
												<h1 className="clay-h1">
													{title}
												</h1>
												<cite className="clay-h4">
													{description}
												</cite>
											</div>
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
													{body}
												</MDXRenderer>

												<div className="social">
													<div className="social-buttons">
														<div className="btn-group">
															{previous.fields && (
																<div className="btn-group-item">
																	<Link
																		className="btn btn-secondary"
																		to={
																			previous
																				.fields
																				.slug
																		}
																	>
																		Previous
																	</Link>
																</div>
															)}
															{next.fields &&
																next.fields.slug.startsWith(
																	'onboarding'
																) && (
																	<div className="btn-group-item">
																		<Link
																			className="btn btn-primary"
																			to={
																				next
																					.fields
																					.slug
																			}
																		>
																			Next
																			Step
																		</Link>
																	</div>
																)}
														</div>
													</div>
												</div>
											</article>
										</>
									)}
									{mainPage && (
										<OnboardingMain codeBody={body} />
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
}

export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: {slug: {eq: $slug}}) {
			excerpt
			timeToRead
			frontmatter {
				title
				mainPage
				stepNumber
				needsAuth
				description
				title
			}
			code {
				body
			}
		}
	}
`;
