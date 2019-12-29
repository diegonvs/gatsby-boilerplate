import {withPrefix} from 'gatsby';
import React from 'react';

class Timeline extends React.Component {
	_compareVersions(a, b) {
		if (a.version < b.version) return 1;
		if (a.version > b.version) return -1;
		return 0;
	}

	render() {
		const updates = this.props.data;

		updates.sort(this._compareVersions);

		return (
			<>
				<ul className="timeline timeline-center">
					{updates.map(({features, major, version}, updatesIndex) => (
						<li className="timeline-item" key={updatesIndex}>
							{features.map((featProp, featuresIndex) => (
								<div
									className="panel panel-secondary"
									key={featuresIndex}
								>
									<a
										aria-expanded="true"
										className="panel-header panel-header-link"
										data-toggle="collapse"
										href={featProp.url}
										id="headingTimelineCenter0"
										role="tab"
									>
										<span className="panel-title">
											{featProp.title}
										</span>
										<div className="timeline-increment">
											<svg
												aria-hidden="true"
												className={`lexicon-icon lexicon-icon-${featProp.icon}`}
											>
												<use
													xlinkHref={withPrefix(
														`images/icons/icons.svg#${featProp.icon}`
													)}
												></use>
											</svg>
										</div>
										<div className="timeline-item-label">
											{featuresIndex > 0 ? (
												''
											) : major ? (
												<h2> {version} </h2>
											) : (
												<p>{version}</p>
											)}
										</div>
									</a>
									<div
										aria-labelledby="headingTimelineCenter0"
										className="collapse panel-collapse show"
										role="tabpanel"
									>
										<div className="panel-body">
											{featProp.description}
										</div>
									</div>
								</div>
							))}
						</li>
					))}
				</ul>
			</>
		);
	}
}

export default Timeline;
