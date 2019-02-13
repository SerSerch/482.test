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

    render() {
        const {id, quantity, disabled, onClick} = this.props;
        return (
            <Fragment>
                {disabled?
                    <ButtonLikes name={id} disabled>++</ButtonLikes>
                    :
                    <ButtonLikes name={id} onClick={onClick}>++</ButtonLikes>
                }
            </Fragment>
        );
    }
}

export class Dislikes extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {id, quantity, disabled, onClick} = this.props;
        return (
            <Fragment>
                {disabled?
                    <ButtonDislikes name={id} disabled>--</ButtonDislikes>
                    :
                    <ButtonDislikes name={id} onClick={onClick}>--</ButtonDislikes>
                }
            </Fragment>
        );
    }
}