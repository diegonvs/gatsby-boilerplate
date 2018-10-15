import React, { Component } from 'react';

export default class Icon extends Component {
    static defaultProps = {
        className: '',
        spritemap: '/images/icons/icons.svg',
        symbol : '',
        placeholder: '',
    }

    render() {
        return(
            <img className={this.props.className} src={`${this.props.spritemap}#${this.props.symbol}`} />
        )
    }
}