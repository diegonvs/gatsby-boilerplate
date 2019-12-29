import {graphql} from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React from 'react';
import Helmet from 'react-helmet';

import Auth from '../components/Auth';
import CodeClipboard from '../components/CodeClipboard';
import CodeTabs from '../components/CodeTabs';
import LayoutNav from '../components/LayoutNav';
import Sidebar from '../components/Sidebar';
import SimpleFooter from '../components/SimpleFooter';
import Typography from '../components/Typography';
import {logout} from '../services/auth';

export default class Docs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navbarToggled: false,
		};
	}

	componentDidMount() {
		this._codeTabs = new CodeTabs();
		this._codeClipboard = new CodeClipboard();
	}

	componentWillUnmount() {
		this._codeTabs = null;
		this._codeClipboard.dispose();
	}

	_handleLogout() {
		logout().then(() => {
			this.forceUpdate();
		});
	}

	docsNavbarToggleClick() {
		this.setState(prevState => ({
			navbarToggled: !prevState.navbarToggled,
		}));
	}

	render() {
		const {data, location} = this.props;

		const {
			mdx: {
				code,
				excerpt,
				frontmatter: {needsAuth, title},
				timeToRead,
			},
		} = data;

		return (
			<Auth needsAuth={needsAuth}>
				<div className="docs">
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

					<header>
						<LayoutNav
							effect={true}
							onNavbarToggleClick={this.docsNavbarToggleClick.bind(
								this
							)}
							sidebarHamburguerIcon={true}
							static={true}
						/>
					</header>
					<main className="content">
						<Sidebar
							location={location}
							navbarToggled={this.state.navbarToggled}
						/>
						<div className="sidebar-offset">
							<header>
								<div className="clay-site-container container-fluid">
									<h1>{title}</h1>
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

							<SimpleFooter
								editContentURL={process.env.EDIT_CONTENT_URL}
								issuesURL={process.env.ISSUES_URL}
								slug={this.props['*']}
							/>
						</div>
					</main>
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
				needsAuth
			}
			code {
				body
			}
		}
	}
`;
