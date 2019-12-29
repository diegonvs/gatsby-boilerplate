import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React from 'react';

import Typography from '../../Typography';
import {Breadcrumb} from './Breadcrumb';
import {SocialShare} from './SocialShare';

export default function BlogArticle({author, codeBody, date, location, title}) {
	return (
		<>
			<Breadcrumb activePage={title} />

			<small>
				{author ? `by ${author}` : ''} | {date ? `${date}` : ''}
			</small>

			<h1>{title}</h1>

			<div className="blog-article">
				<MDXRenderer
					components={{
						h1: Typography.H1,
						h2: Typography.H2,
						h3: Typography.H3,
						h4: Typography.H4,
						p: Typography.P,
					}}
				>
					{codeBody}
				</MDXRenderer>
			</div>

			<SocialShare location={location} />
		</>
	);
}
