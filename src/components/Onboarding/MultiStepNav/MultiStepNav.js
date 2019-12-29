import {Link, StaticQuery, graphql} from 'gatsby';
import React from 'react';

export default props => (
	<StaticQuery
		query={graphql`
			query {
				allMdx(
					filter: {
						fields: {
							slug: {
								regex: "/^onboarding/i"
								ne: "onboarding/index.html"
							}
						}
					}
					sort: {order: ASC, fields: frontmatter___stepNumber}
				) {
					edges {
						node {
							fields {
								slug
								stepNumber
								short
							}
						}
					}
				}
			}
		`}
		render={({allMdx: {edges}}) => {
			const fieldsFn = ({node: {fields}}) => fields;

			const steps = edges.map(fieldsFn);

			const activeStepNumber = props.stepNumber;

			return (
				<>
					<div className="container-fluid">
						<div className="sheet">
							<ol className="multi-step-indicator-label-top multi-step-nav multi-step-nav-collapse-sm">
								{steps.map(
									({short, slug, stepNumber}, index) => (
										<li
											className={`${handleActiveOrCompletedClasses_(
												stepNumber,
												activeStepNumber
											)} multi-step-item multi-step-item-expand`}
											key={index}
										>
											{steps[index + 1] && (
												<div className="multi-step-divider"></div>
											)}
											<div className="multi-step-indicator">
												<div className="multi-step-indicator-label">
													{handleSuccessPage_(
														slug,
														stepNumber,
														short
													)}
												</div>
												<Link
													className="multi-step-icon"
													data-multi-step-icon={`${stepNumber}`}
													to={slug}
												></Link>
											</div>
										</li>
									)
								)}
							</ol>
						</div>
					</div>
				</>
			);
		}}
	/>
);

const handleSuccessPage_ = (slug, stepNumber, short) => {
	if (short !== undefined && short.length > 0) {
		return short;
	} else if (slug.endsWith('success.html')) {
		return 'Final Step';
	}
	return `Step ${stepNumber}`;
};

const handleActiveOrCompletedClasses_ = (stepNumber, activeStepNumber) => {
	if (activeStepNumber === stepNumber) {
		return 'active';
	}

	if (activeStepNumber < stepNumber) {
		return '';
	}

	if (activeStepNumber >= stepNumber) {
		return 'complete';
	}
};
