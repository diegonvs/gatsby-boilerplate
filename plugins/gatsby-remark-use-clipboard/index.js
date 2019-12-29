const visit = require('unist-util-visit');

const {pathPrefix} = require('../../gatsby-config');

module.exports = ({markdownAST}) => {
	visit(markdownAST, 'html', node => {
		if (typeof node.lang === 'undefined') {
			return;
		}

		node.value = `<div class="code-container" data-label="${node.label}">
            <button class="btn btn-sm btn-copy" title="Copy"><svg class="lexicon-icon"><use xlink:href="${pathPrefix}/images/icons/icons.svg#paste"></use></svg></button>
            ${node.value}
        </div>`;
	});
};
