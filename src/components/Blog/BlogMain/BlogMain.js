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
                <h1> {this.props.title ? this.props.title : "Blog" } </h1>
                <h3> Latest Stories: </h3>
                <BlogList />
            </>
        );
    }
}