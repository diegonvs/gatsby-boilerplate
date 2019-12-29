import {window} from 'browser-monads';
import {withPrefix} from 'gatsby';
import React from 'react';

export function Card({index, post}) {
	return (
		<div className="card" key={index}>
			<img
				alt="banner"
				className="mx-auto"
				src={
					post.banner && isExternalUrl(post.banner)
						? post.banner
						: withPrefix(post.banner)
				}
			/>
			<div className="card-body">
				<h2 className="clay-h2 font-weight-bold">{post.title}</h2>
				<p className="clay-p">{post.description}</p>
				<br />
				<small style={{float: 'right'}}>
					{' '}
					{`by ${post.author} at ${post.date}`}
				</small>
			</div>
		</div>
	);
}

const isExternalUrl = url => {
	const match = url.match(
		/^([^:?#]+:)?(?:\/\/([^?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/
	); //eslint-disable-line
	if (
		typeof match[1] === 'string' &&
		match[1].length > 0 &&
		match[1].toLowerCase() !== window.location.protocol
	) {
		return true;
	}
	if (
		typeof match[2] === 'string' &&
		match[2].length > 0 &&
		match[2].replace(
			new RegExp(
				':(' +
					{'http:': 80, 'https:': 443}[window.location.protocol] +
					')?$'
			),
			''
		) !== window.location.host
	) {
		return true;
	}
	return false;
};
