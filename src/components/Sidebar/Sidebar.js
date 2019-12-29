import {StaticQuery, graphql} from 'gatsby';
import React from 'react';

import Navigation from './Navigation';
import Search from './Search';

const SideNavRef = React.createRef();

const getSection = data => {
	const elements = data.allMdx.edges.map(({node}) => {
		const {
			fields: {alwaysActive, order, slug, title},
		} = node;

		return toSectionElements(
			slug.replace('.html', ''),
			title,
			order,
			alwaysActive
		);
	});

	const rootElements = elements.filter(path => path.isRoot);

	return rootElements
		.map(path => toSectionItem(path, elements))
		.sort((a, b) => a.order - b.order);
};

const toSectionElements = (slug, title, order, alwaysActive) => {
	const slugs = slug.split('/');
	const lastSlug = slugs[slugs.length - 1];
	const penultimateSlug = slugs[slugs.length - 2];

	const id = lastSlug === 'index' ? penultimateSlug : lastSlug;
	const link = '/' + slug;
	const parentLink = '/' + slug.substring(0, slug.lastIndexOf('/') + 1);
	const isFolder = lastSlug === 'index';
	const isRoot =
		(slugs.length === 3 && isFolder) || (slugs.length === 2 && !isFolder);

	return {
		alwaysActive,
		id,
		isFolder,
		isRoot,
		link,
		order,
		parentLink,
		title,
	};
};

const toSectionItem = (item, paths) => {
	if (item.isFolder) {
		item.items = paths
			.filter(path => path.link !== item.link)
			.filter(
				path =>
					path.link ===
					item.parentLink + path.id + (path.isFolder ? '/index' : '')
			)
			.map(path => toSectionItem(path, paths))
			.sort((a, b) => a.order - b.order);
	}

	return item;
};

let scrollTop = 0;

class SideNavScroll extends React.Component {
	onScroll(event) {
		scrollTop = event.currentTarget.scrollTop;
	}

	componentDidMount() {
		SideNavRef.current.scrollTop = scrollTop;
	}

	render() {
		return (
			<div
				className="d-flex flex-column sidebar sidebar-clay-site sidenav-menu"
				onScroll={this.onScroll.bind(this)}
				ref={SideNavRef}
			>
				{this.props.children}
			</div>
		);
	}
}

export default props => (
	<StaticQuery
		query={graphql`
			query {
				allMdx(filter: {fields: {slug: {regex: "/^docs/i"}}}) {
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
			let navbarClasses =
				'sidebar-toggler-content sidenav-fixed sidenav-menu-slider mt-5';
			if (props.navbarToggled) {
				navbarClasses += ' toggler-expanded';
			}

			return (
				<nav className={navbarClasses} id="clay-sidebar">
					<SideNavScroll>
						<div className="mb-auto mt-5 sidebar-body">
							<Search placeholder="Search" />

							<Navigation
								location={props.location}
								sectionList={getSection(data)}
							/>
						</div>
					</SideNavScroll>
				</nav>
			);
		}}
	/>
);
