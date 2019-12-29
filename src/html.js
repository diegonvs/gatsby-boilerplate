import {withPrefix} from 'gatsby';
import React from 'react';

class HTML extends React.Component {
	render() {
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
					<meta
						content="width=device-width, initial-scale=1.0"
						name="viewport"
					/>
					<link
						href={withPrefix('favicons/favicon-32x32.png')}
						rel="shortcut icon"
						sizes="16x16 32x32"
						type="image/png"
					/>
					<link
						href={withPrefix('favicons/apple-touch-icon.png')}
						rel="apple-touch-icon"
						sizes="180x180"
					/>
					<link
						href={withPrefix('favicons/favicon-32x32.png')}
						rel="icon"
						sizes="32x32"
						type="image/png"
					/>
					<link
						href={withPrefix('favicons/favicon-16x16.png')}
						rel="icon"
						sizes="16x16"
						type="image/png"
					/>
					<link
						color="#0b5fff"
						href={withPrefix('/favicons/safari-pinned-tab.svg')}
						rel="mask-icon"
					/>
					<meta content="#ffffff" name="msapplication-TileColor" />
					<meta content="#ffffff" name="theme-color" />
					{this.props.headComponents}

					<link
						href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
						rel="stylesheet"
					/>
				</head>
				<body {...this.props.bodyAttributes}>
					<div
						dangerouslySetInnerHTML={{__html: this.props.body}}
						id="___gatsby"
					/>
					{this.props.postBodyComponents}
					<script
						src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
						type="text/javascript"
					></script>
				</body>
			</html>
		);
	}
}

export default HTML;
