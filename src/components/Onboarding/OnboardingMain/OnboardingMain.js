import {Link} from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import React from 'react';

import Typography from '../../Typography';

export default class OnboardingMain extends React.Component {
	render() {
		return (
			<div className="onboarding-main">
				<MDXRenderer
					components={{
						h1: Typography.H1,
						h2: Typography.H2,
						h3: Typography.H3,
						h4: Typography.H4,
						p: Typography.P,
					}}
				>
					{this.props.codeBody}
				</MDXRenderer>
				<div className="social">
					<div className="social-buttons">
						<div className="btn-group">
							<div className="btn-group-item">
								<Link
									className="btn btn-primary"
									to="onboarding/one.html"
								>
									Get Started
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
