import React, {Component} from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import {Link} from 'gatsby';
import Typography from '../../Typography';

export default class BlogArticle extends Component {

    render() {
        console.log('otherProps:', ...this.props);
        return (
            <>
                <Breadcrumb activePage={this.props.title} />

                <small>
                    {this.props.author ? `by ${this.props.author}` : ''} | {this.props.date ? `${this.props.date}` : ''}
                </small>

                <h1 className="">{this.props.title}</h1>

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
                    <div className="social-banner">
                        <p className="social-banner-title">Share this article</p>
                    </div>
                    <div className="social-buttons">
                        <a className="social-button facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${this.props.location.href}`} target="_blank">
                            <svg className="lexicon-icon lexicon-icon-social-facebook">
                                <use xlinkHref="/images/icons/icons.svg#social-facebook"></use>
                            </svg>
                        </a>
                        <a className="social-button twitter" href={`https://twitter.com/home?status=Markdown Post%20${this.props.location.href}`} target="_blank">
                            <svg className="lexicon-icon lexicon-icon-social-twitter">
                                <use xlinkHref="/images/icons/icons.svg#social-twitter"></use>
                            </svg>
                        </a>
                        <a className="social-button linkedin" href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${this.props.location.href}`} target="_blank">
                            <svg className="lexicon-icon lexicon-icon-social-linkedin">
                                <use xlinkHref="/images/icons/icons.svg#social-linkedin"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </>
        );
    }
};

class Breadcrumb extends Component {
    constructor() {
        super();
        this._rootNode = window || document;
        this._addScroll = this._addScroll.bind(this);
    }

    _getScrollTop() {
        if (this._rootNode === window) {
            return this._rootNode.pageYOffset;
        }
        if (this._rootNode === document) {
            return this._rootNode.defaultView.pageYOffset;
        }
    }

    _addScroll() {
        if (this._getScrollTop() >= 50) {
            this.refs.navElement.classList.add('scroll');
        } else {
            this.refs.navElement.classList.remove('scroll');
        }
    }

    componentDidMount() {
        this._rootNode.addEventListener('scroll', this._addScroll, false);
    }

    componentWillUnmount() {
        this._rootNode.removeEventListener('scroll', this._addScroll, false);
    }

    render() {
        const {fixed = true} = this.props;

        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link className="breadcrumb-link" to="/blog/" title="Return to Blog">
                        <span className="breadcrumb-text-truncate">Return to Blog</span>
                    </Link>
                </li>
                <li className="active breadcrumb-item">
                    <Link className="breadcrumb-link" to="#" title={this.props.activePage}>
                        <span className="breadcrumb-text-truncate" title={this.props.activePage}>{this.props.activePage}</span>
                    </Link>
                </li>
            </ol>
        );
    }
}