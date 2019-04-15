const path = require('path');

module.exports = ({actions, stage}) => {
	let module = {};

	if (stage === 'build-html') {
		module = {
			rules: [
				{
					test: [
						path.resolve(__dirname, '../node_modules/wowjs'),
						path.resolve(__dirname, '../node_modules/metal-clipboard')
					],
					loader: 'null-loader',
				},
			],
		};
	}

	actions.setWebpackConfig({
		module,
		resolve: {
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
			alias: {
				$components: path.resolve(__dirname, '../src/components'),
			},
		},
	});
};
