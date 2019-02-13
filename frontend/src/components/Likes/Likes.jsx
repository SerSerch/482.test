import './Likes.scss';

import React, { PureComponent, Fragment } from 'react';

import ButtonM from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const stylesButtonLikes = theme => ({
    root: {
        backgroundColor: '#7ac794',
    }
});
const stylesButtonDislikes = theme => ({
    root: {
        backgroundColor: '#c7947a',
    }
});

const ButtonLikes = withStyles(stylesButtonLikes)(ButtonM);
const ButtonDislikes = withStyles(stylesButtonDislikes)(ButtonM);

export class Likes extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    setLikes = () => {
        const {id, onClick} = this.props;

        onClick(id);
    };

    render() {
        const {quantity, disabled} = this.props;
        return (
            <Fragment>
                <ButtonLikes onClick={this.setLikes} disabled={disabled}>{quantity}</ButtonLikes>
            </Fragment>
        );
    }
}

export class Dislikes extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    setLikes = () => {
        const {id, onClick} = this.props;

        onClick(id);
    };

    render() {
        const {quantity, disabled} = this.props;
        return (
            <Fragment>
                <ButtonDislikes onClick={this.setLikes} disabled={disabled}>{quantity}</ButtonDislikes>
            </Fragment>
        );
    }
}