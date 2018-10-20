import { graphql } from 'gatsby';
import React, { Component } from 'react';
import CodeTabs from '../../CodeTabs';
import CodeClipboard from '../../CodeClipboard';
import BlogList from '../BlogList';
import LayoutNav from '../../LayoutNav';

export default class BlogMain extends Component {
    componentDidMount() {
        this._codeTabs = new CodeTabs();
        this._codeClipboard = new CodeClipboard();
    }

    componentWillUnmount() {
        this._codeTabs = null;
        this._codeClipboard.dispose();
    }

    render() {
        return (
            <>
                <div className="blog-main">
                    <h1>Latest Stories: </h1>
                    <BlogList />
                </div>
            </>
        );
    }
}