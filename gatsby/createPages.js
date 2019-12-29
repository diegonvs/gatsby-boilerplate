'use strict';

const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const path = require('path');

const createPages = (actions, edges) => {
	const {createPage, createRedirect} = actions;

	edges.forEach(({node}, index) => {
		const {mainPage, redirect, slug} = node.fields;

		const templateKey = slug.split('/')[0];

		if (redirect || mainPage) {
			const slugWithBar = slug.startsWith('/') ? slug : `/${slug}`;
			const fromPath = slugWithBar.endsWith('index.html')
				? slugWithBar.replace('index.html', '')
				: slugWithBar;

			const toPath = mainPage ? slugWithBar : redirect;

			createRedirect({
				fromPath,
				isPermanent: true,
				redirectInBrowser: true,
				toPath,
			});
		}

		if (!redirect) {
			const previous = index === 0 ? false : edges[index - 1].node;
			const next =
				index === edges.length - 1 ? false : edges[index + 1].node;

			createPage({
				component: componentWithMDXScope(
					path.resolve(
						__dirname,
						`../src/templates/${templateKey}.js`
					),
					node.code.scope,
					__dirname
				),
				context: {
					next,
					previous,
					slug,
				},
				path: slug,
			});
		}
	});
};

module.exports = async ({actions, graphql}) => {
	actions.createRedirect({
		fromPath: '/index.html',
		redirectInBrowser: true,
		toPath: '/',
	});

	return graphql(`
		query {
			allMdx(sort: {order: ASC, fields: frontmatter___stepNumber}) {
				edges {
					node {
						fields {
							redirect
							slug
							mainPage
						}
						code {
							scope
						}
					}
				}
			}
		}
	`).then(({data, errors}) => {
		if (errors) {
			return Promise.reject(errors);
		}

		const {edges} = data.allMdx;

		createPages(actions, edges);
	});
};
