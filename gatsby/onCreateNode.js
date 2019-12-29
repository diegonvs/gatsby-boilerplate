module.exports = exports.onCreateNode = ({actions, getNode, node}) => {
	const {createNodeField} = actions;

	if (node.internal.type === 'Mdx') {
		const {
			alwaysActive,
			author,
			banner,
			date,
			description,
			mainPage,
			needsAuth,
			order,
			path,
			redirect,
			short,
			stepNumber,
			title,
			updates,
			url,
		} = node.frontmatter;

		const {relativePath} = getNode(node.parent);

		let slug = path;

		if (!slug) {
			slug = relativePath.replace('.md', '.html');
		}

		createNodeField({
			name: 'alwaysActive',
			node,
			value: alwaysActive || false,
		});

		createNodeField({
			name: 'title',
			node,
			value: node.frontmatter.title,
		});

		createNodeField({
			name: 'slug',
			node,
			value: slug,
		});

		createNodeField({
			name: 'title',
			node,
			value: title,
		});

		createNodeField({
			name: 'order',
			node,
			value: order,
		});

		createNodeField({
			name: 'redirect',
			node,
			value: redirect,
		});

		createNodeField({
			name: 'author',
			node,
			value: author || '',
		});

		createNodeField({
			name: 'date',
			node,
			value: date || '',
		});

		createNodeField({
			name: 'description',
			node,
			value: description || '',
		});

		createNodeField({
			name: 'mainPage',
			node,
			value: mainPage || false,
		});

		createNodeField({
			name: 'banner',
			node,
			value: banner || '',
		});

		createNodeField({
			name: 'stepNumber',
			node,
			value: stepNumber || 0,
		});

		createNodeField({
			name: 'short',
			node,
			value: short || '',
		});

		createNodeField({
			name: 'needsAuth',
			node,
			value: needsAuth || 0,
		});

		createNodeField({
			name: 'updates',
			node,
			value: updates || [],
		});

		createNodeField({
			name: 'url',
			node,
			value: url || [],
		});
	}
};
