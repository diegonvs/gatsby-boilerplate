const path = require('path');

module.exports = ({actions, stage}) => {
	let module = {};

	if (stage === 'build-html') {
		module = {
			rules: [
				{
					loader: 'null-loader',
					test: [
						path.resolve(__dirname, '../node_modules/wowjs'),
						path.resolve(
							__dirname,
							'../node_modules/metal-clipboard'
						),
					],
				},
			],
		};
	}

	actions.setWebpackConfig({
		module,
		resolve: {
			alias: {
				$components: path.resolve(__dirname, '../src/components'),
			},
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		},
	});
};
