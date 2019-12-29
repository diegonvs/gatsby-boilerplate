import {withPrefix} from 'gatsby';
import React from 'react';

const apiKey = process.env.ALGOLIA_API_KEY;

const indexName = process.env.ALGOLIA_INDEX_NAME;

const isProduction = process.env.NODE_ENV === 'production' ? true : false;

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			disabled: false,
		};
	}
	componentDidMount() {
		if (window.docsearch && apiKey !== '' && indexName !== '') {
			window.docsearch({
				apiKey: apiKey || 'apiKey',
				indexName: indexName || 'indexName',
				inputSelector: '#algolia-doc-search',
			});
		} else {
			this.setState({disabled: true});
		}
	}

	render() {
		const {placeholder} = this.props;

		if (isProduction && this.state.disabled) {
			return false;
		}

		return (
			<div className="sidebar-search">
				<div className="page-autocomplete">
					<div className="form-group">
						<div className="input-group">
							<input
								className="form-control"
								disabled={this.state.disabled}
								id="algolia-doc-search"
								name="q"
								placeholder={placeholder}
								required
								type="text"
							/>
							<span className="input-group-addon">
								<svg className="lexicon-icon">
									<use
										xlinkHref={withPrefix(
											'images/icons/icons.svg#search'
										)}
									/>
								</svg>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
