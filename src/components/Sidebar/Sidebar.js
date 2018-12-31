import { Link, StaticQuery, graphql } from 'gatsby';
import arrangeIntoTree from '../../utils/arrangeIntoTree';
import Navigation from './Navigation';
import React, {Component} from 'react';
import Search from './Search';

const SidebarRef = React.createRef();
const SideNavRef = React.createRef();

const expandToggler = () => {
	SidebarRef.current.classList.toggle('toggler-expanded');
}

const getSection = ({allMdx: {edges}}) => {
	const resolveNode = edges.map(({node}) => {
		const {
			slug,
			title,
			weight,
			layout,
		} = node.fields;
		const slugWithoutExtension = slug.replace('.html', '');
		const pathSplit = slugWithoutExtension.split('/');

		return {
			id: pathSplit[pathSplit.length - 1],
			layout,
			link: '/' + slugWithoutExtension,
			title,
			weight,
		};
	});

	return arrangeIntoTree(resolveNode);
}

let scrollTop = 0;

class SideNavScroll extends Component {
	onScroll(event) {
		scrollTop = event.currentTarget.scrollTop;
	}

	componentDidMount() {
		SideNavRef.current.scrollTop = scrollTop;
	}

	render() {
		return (
			<div
				ref={SideNavRef}
				onScroll={this.onScroll.bind(this)}
				className="sidebar sidebar-clay-site sidenav-menu d-flex flex-column"
			>
				{this.props.children}
			</div>
		);
	}
}

export default (props) => (
	<StaticQuery
		query={graphql`
			query {
				allMdx(filter: { fields: { slug: { regex: "/^docs/i" } } }) {
					edges {
						node {
							fields {
								layout
								redirect
								slug
								title
								weight
							}
						}
					}
				}
			}
		`}
		render={data => {

			const logoPath = "/images/home/liferay_logo_black.svg";

			return (
				<>
					<div className="navbar navbar-mobile navbar-expand-lg navbar-header">
						<Link to="/" className="navbar-brand d-flex">
							<img className="logo mr-2" src={logoPath} alt="" />
							<span className="title h1 font-weight-bold mb-0 p-1">{process.env.PROJECT_NAME}</span>
						</Link>

						<button onClick={expandToggler} className="navbar-toggler sidebar-toggler p-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<svg aria-hidden="true" className="lexicon-icon lexicon-icon-bars">
								<use xlinkHref="/images/icons/icons.svg#bars" />
							</svg>
						</button>
					</div>

					<nav
						ref={SidebarRef}
						className="sidebar-toggler-content sidenav-fixed sidenav-menu-slider mt-5"
						id="clay-sidebar"
					>
						<SideNavScroll>
							<div className="sidebar-body mb-auto mt-5">
								<Search placeholder="Search" />

								<Navigation sectionList={getSection(data)} location={props.location} />
							</div>
						</SideNavScroll>
					</nav>
				</>
			)}
		}
	/>
);
