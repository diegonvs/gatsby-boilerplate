import {Link, withPrefix} from 'gatsby';
import React from 'react';

class Navigation extends React.Component {
	_handleOnClick(index, depth, section, event) {
		const el = event.currentTarget;

		event.preventDefault();
		event.stopPropagation();

		el.classList.toggle('active');
	}

	_isActive(section) {
		const {location} = this.props;

		const sectionLocation = location.pathname.split('.')[0];

		if (section.isFolder) {
			return sectionLocation.includes(section.id);
		}

		return sectionLocation === section.link;
	}

	renderNavigationItems() {
		const {depth = 0, location, sectionList} = this.props;

		return sectionList.map((section, index) => {
			const style = section.items ? 'nav-heading nav-item' : 'nav-item';

			return (
				<li
					className={style}
					key={index}
					ref={`navItem${index}${depth}`}
				>
					<Anchor
						active={this._isActive(section)}
						onclick={this._handleOnClick.bind(
							this,
							index,
							depth,
							section
						)}
						page={section}
					/>

					{section.items && (
						<Navigation
							depth={depth + 1}
							location={location}
							sectionList={section.items}
						/>
					)}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="nav nav-stacked">{this.renderNavigationItems()}</ul>
		);
	}
}

const Anchor = ({active, onclick, page}) => {
	let style = active ? 'active nav-link ' : 'nav-link ';

	if (page.items) {
		style += 'collapse-toggle';

		return (
			<a className={style} href="#no" onClick={onclick}>
				<span>{page.title}</span>
				<svg className="lexicon-icon lexicon-icon-caret-bottom">
					<use
						xlinkHref={withPrefix(
							'images/icons/icons.svg#caret-bottom'
						)}
					/>
				</svg>
			</a>
		);
	}

	return (
		<Link className={style} to={`${page.link}.html`}>
			<span>{page.title}</span>
		</Link>
	);
};

export default Navigation;
