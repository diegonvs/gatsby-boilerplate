import { Link, StaticQuery, graphql } from 'gatsby';
import Navigation from './Navigation';
import React, {Component} from 'react';
import Search from './Search';

const SidebarRef = React.createRef();
const SideNavRef = React.createRef();

const expandToggler = () => {
	SidebarRef.current.classList.toggle('toggler-expanded');
};

const getSection = data => {
	const elements = data.allMdx.edges.map(({node}) => {
		const { fields: { slug, title, alwaysActive, order } } = node;

		return toSectionElements(slug.replace('.html', ''), title, order, alwaysActive);
	});

	let rootElements = elements.filter(path => path.isRoot);

	return rootElements.map(path => toSectionItem(path, elements))
		.sort((a, b) => a.order - b.order);
};

const toSectionElements = (slug, title, order, alwaysActive) => {
	const slugs = slug.split("/");
	const lastSlug = slugs[slugs.length - 1];
	const penultimateSlug = slugs[slugs.length - 2];

	const id = lastSlug === "index" ? penultimateSlug : lastSlug;
	const link = '/' + slug;
	const parentLink = '/' + slug.substring(0, slug.lastIndexOf("/") + 1);
	const isFolder = lastSlug === "index";
	const isRoot = (slugs.length === 3 && isFolder) || (slugs.length === 2 && !isFolder);

	return {id, link, title, parentLink, isFolder, isRoot, order, alwaysActive};
};

const toSectionItem = (item, paths) => {
	if (item.isFolder) {
		item.items = paths.filter(path => path.link !== item.link)
			.filter(path => path.link === (item.parentLink + path.id + (path.isFolder ? "/index" : "")))
			.map(path => toSectionItem(path, paths))
			.sort((a, b) => a.order - b.order);
	}

	return item;
};

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
								alwaysActive
								redirect
								slug
								title
								order
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
