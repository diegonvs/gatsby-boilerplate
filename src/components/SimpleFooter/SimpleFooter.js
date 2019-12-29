import {withPrefix} from 'gatsby';
import React from 'react';

const SimpleFooter = props => {
	const {editContentURL, issuesURL, slug} = props;

	return (
		<footer className="clay-site-container container-fluid">
			<div className="row">
				<div className="col-6">
					<p className="legal">
						Except as otherwise noted, the content of this site is
						licensed under{' '}
						<a
							href="https://creativecommons.org/licenses/by-sa/4.0/"
							rel="noopener noreferrer"
							target="_blank"
						>
							CC BY-SA
						</a>{' '}
						4.0 license.
					</p>
				</div>
				<div className="col-6 p-md-0">
					<ul className="social-icons">
						<li className="mr-2">
							<a
								className="rounded-circle sticker sticker-secondary"
								href={issuesURL}
								rel="noopener noreferrer"
								target="_blank"
							>
								<svg
									aria-hidden="true"
									className="lexicon-icon lexicon-icon-bars"
								>
									<use
										xlinkHref={withPrefix(
											'images/icons/icons.svg#comments'
										)}
									/>
								</svg>
							</a>
						</li>
						<li>
							<a
								className="rounded-circle sticker sticker-secondary"
								href={`${editContentURL}/${slug.replace(
									'html',
									'md'
								)}`}
								rel="noopener noreferrer"
								target="_blank"
							>
								<img
									alt="Github Logo"
									src={withPrefix(
										'images/home/GitHub-Mark-64px.svg'
									)}
								/>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default SimpleFooter;
