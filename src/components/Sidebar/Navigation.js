import React from 'react';
import { Link, withPrefix } from "gatsby"

class Navigation extends React.Component {
    _handleOnClick(index, depth, section, event) {
        const el = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();

        el.classList.toggle('active');
    }

    _isActive(section) {
        const { location } = this.props;

        const sectionLocation = location.pathname.split('.')[0];

        if (section.isFolder) {
            return sectionLocation.includes(section.id);
        }

        return sectionLocation === section.link;
    }

    renderNavigationItems() {
        const { sectionList, location, depth = 0 } = this.props;

        return sectionList.map((section, index) => {
            let style = section.items ? 'nav-heading nav-item' : 'nav-item';

            return(
                <li key={index} ref={`navItem${index}${depth}`} className={style}>
                    <Anchor active={this._isActive(section)} page={section} onclick={this._handleOnClick.bind(this, index, depth, section)} />

                    {section.items && (
                        <Navigation sectionList={section.items} location={location} depth={depth + 1} />
                    )}
                </li>
            );
        });
    }

    render() {
        return(
            <ul className="nav nav-stacked">
                {this.renderNavigationItems()}
            </ul>
        );
    }
}

const Anchor = ({active, page, onclick}) => {
    let style = active ? 'active nav-link ' : 'nav-link ';

    if (page.items) {
        style += 'collapse-toggle';

        return(
            <a className={style} href="#no" onClick={onclick}>
                <span>{page.title}</span>
                <svg className="lexicon-icon lexicon-icon-caret-bottom">
                    <use xlinkHref={withPrefix("images/icons/icons.svg#caret-bottom")} />
                </svg>
            </a>
        );
    }

    return (
        <Link
            to={`${page.link}.html`}
            className={style}
        >
            <span>{page.title}</span>
        </Link>
    );
};

export default Navigation;