import { handleActions } from 'redux-actions';

import {
    getAllProjectsAction,
    createProjectAction,
    editProjectAction,
    deleteProjectAction
} from 'actions/projectsAction';

const initialState = {
    all: [],
};

export default handleActions({

    [getAllProjectsAction]: (state, action) => {
        let res = {};

        if (!action.payload.error && Array.isArray(action.payload)) {
            res = {
                all: action.payload,
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },

    [createProjectAction]: (state, action) => {
        let res = {};

        if (!action.payload.error && action.payload.id) {
            res = {
                all: state.all.concat(action.payload),
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },

    [editProjectAction]: (state, action) => {
        let res = {};

        if (!action.payload.error && action.payload.id) {
            let id = action.payload.id;
            res = {
                all: [...state.all].map(item => {
                    return item.id == id ? action.payload : item;
                }),
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },

    [deleteProjectAction]: (state, action) => {
        let res = {};
        let [id=false, data=false] = action.payload;

        if (!action.payload.error && data == '{}') {
            res = {
                all: [...state.all].filter(item => item.id != id)
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