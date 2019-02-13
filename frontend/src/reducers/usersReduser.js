import { handleActions } from 'redux-actions';

import { getUserAction, createUserAction, userSignOutAction, userSignAuthAction } from 'actions/usersAction';

const initialState = {
    isLogined: false,
};

export default handleActions({
    [getUserAction]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('error') && action.payload.hasOwnProperty('email')) {
            res = {
                isLogined: true,
                user: action.payload,
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
    [createUserAction]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('errors') && action.payload.hasOwnProperty('email')) {
            res = {
                isLogined: true,
                user: action.payload,
            };
        } else {
            res = {
                ...state,
                errors: action.payload.errors,
            };
        }
        return res;
    },
    [userSignOutAction]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('error') && action.payload.hasOwnProperty('out')) {
            res = {
                isLogined: false,
                user: action.payload,
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
    [userSignAuthAction]: (state, action) => {
        let res = {};
        if (!action.payload.error) {
            res = {
                isLogined: true,
                user: action.payload,
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
}, initialState);