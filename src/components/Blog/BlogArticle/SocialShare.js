import {withPrefix} from 'gatsby';
import React from 'react';

export function SocialShare({location}) {
	return (
		<div className="social">
			<div className="social-banner">
				<p className="social-banner-title">Share this article</p>
			</div>
			<div className="social-buttons">
				<a
					className="facebook social-button"
					href={`https://www.facebook.com/sharer/sharer.php?u=${location.href}`}
					rel="noopener noreferrer"
					target="_blank"
				>
					<svg className="lexicon-icon">
						<use
							xlinkHref={withPrefix(
								'images/icons/icons.svg#social-facebook'
							)}
						></use>
					</svg>
				</a>
				<a
					className="social-button twitter"
					href={`https://twitter.com/home?status=${location.href}`}
					rel="noopener noreferrer"
					target="_blank"
				>
					<svg className="lexicon-icon">
						<use
							xlinkHref={withPrefix(
								'images/icons/icons.svg#twitter'
							)}
						></use>
					</svg>
				</a>
				<a
					className="linkedin social-button"
					href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${location.href}`}
					rel="noopener noreferrer"
					target="_blank"
				>
					<svg className="lexicon-icon">
						<use
							xlinkHref={withPrefix(
								'images/icons/icons.svg#social-linkedin'
							)}
						></use>
					</svg>
				</a>
			</div>
		</div>
	);
}
