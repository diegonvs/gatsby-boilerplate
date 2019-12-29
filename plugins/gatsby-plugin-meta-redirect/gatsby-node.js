const {ensureDir, exists, writeFile} = require('fs-extra');
const path = require('path');

const getMetaRedirect = require('./getMetaRedirect');

// Adapted from https://github.com/getchalk/gatsby-plugin-meta-redirect
async function writeRedirectsFile(redirects, folder, pathPrefix) {
	if (!redirects.length) return;

	// eslint-disable-next-line no-for-of-loops/no-for-of-loops
	for (const redirect of redirects) {
		const {fromPath, toPath} = redirect;

		if (fromPath.endsWith('index.html')) continue;

		const FILE_PATH = path.join(
			folder,
			fromPath.replace(pathPrefix, ''),
			'index.html'
		);

		let fileExists;

		try {
			fileExists = await exists(FILE_PATH);
		} catch (err) {
			throw new Error(err);
		}

		if (!fileExists) {
			try {
				await ensureDir(path.dirname(FILE_PATH));
			} catch (err) {
				// ignore if the directory already exists;
			}

			const data = getMetaRedirect(toPath);
			await writeFile(FILE_PATH, data);
		}
	}
}

exports.onPostBuild = ({store}) => {
	const {config, program, redirects} = store.getState();

	let pathPrefix = '';
	if (program.prefixPaths) {
		pathPrefix = config.pathPrefix;
	}

	const folder = path.join(program.directory, 'public');
	return writeRedirectsFile(redirects, folder, pathPrefix);
};
