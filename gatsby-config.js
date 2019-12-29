const clay = require('clay-css');
const path = require('path');

module.exports = {
	// pathPrefix: '/gatsby-boilerplate',
	plugins: [
		'gatsby-plugin-meta-redirect',
		{
			options: {
				includePaths: clay.includePaths.concat(
					path.join(clay.includePaths[0], 'node_modules')
				),
				precision: 8,
			},
			resolve: 'gatsby-plugin-sass',
		},
		{
			options: {
				name: 'packages',
				path: `${__dirname}/content`,
			},
			resolve: 'gatsby-source-filesystem',
		},
		{
			options: {
				extensions: ['.mdx', '.md'],
				gatsbyRemarkPlugins: [
					{
						resolve: path.resolve(
							__dirname,
							'./plugins/gatsby-remark-code-label-extractor'
						),
					},
					{
						pluginOptions: {
							classPrefix: 'gatsby-code-',
						},
						resolve: 'gatsby-remark-prismjs',
					},
					{
						resolve: path.resolve(
							__dirname,
							'./plugins/gatsby-remark-use-clipboard'
						),
					},
				],
			},
			resolve: 'gatsby-mdx',
		},
		{
			options: {
				trackingId: process.env.GA_TRACKING_ID,
			},
			resolve: 'gatsby-plugin-google-analytics',
		},
		'gatsby-plugin-react-helmet',
		{
			options: {
				background_color: '#FFFFFF',
				display: 'minimal-ui',
				icons: [
					{
						sizes: '192x192',
						src: 'favicons/android-chrome-192x192.png',
						type: 'image/png',
					},
					{
						sizes: '512x512',
						src: 'favicons/android-chrome-512x512.png',
						type: 'image/png',
					},
				],
				name: 'Gatsby Boilerplate',
				short_name: 'Gatsby Boilerplate',
				start_url: '/',
				theme_color: '#0B5FFF',
			},
			resolve: 'gatsby-plugin-manifest',
		},
		{
			options: {
				globPatterns: ['**/*.{js,jpg,png,gif,html,css,svg}'],
			},
			resolve: 'gatsby-plugin-offline',
		},
		'gatsby-plugin-zopfli',
	],
};
