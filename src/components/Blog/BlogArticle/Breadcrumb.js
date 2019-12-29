import {Link} from 'gatsby';
import React from 'react';

export function Breadcrumb(props) {
	return (
		<ol className="breadcrumb">
			<li className="breadcrumb-item">
				<Link
					className="breadcrumb-link"
					title="Return to Blog"
					to="/blog/"
				>
					<span className="breadcrumb-text-truncate">
						Return to Blog
					</span>
				</Link>
			</li>
			<li className="active breadcrumb-item">
				<Link
					className="breadcrumb-link"
					title={props.activePage}
					to="#"
				>
					<span
						className="breadcrumb-text-truncate"
						title={props.activePage}
					>
						{props.activePage}
					</span>
				</Link>
			</li>
		</ol>
	);
}
