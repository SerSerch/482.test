import { handleActions } from 'redux-actions';

import { getAllProjectsAction } from 'actions/projectsAction';

const initialState = {
    all: [],
};

export default handleActions({

    [getAllProjectsAction]: (state, action) => {
        let res = {};

        if (action.payload.length) {
            res = {
                all: action.payload,
            };
        } else {
            res = {
                ...state,
                error: "Err getProjects",
            };
        }

        return res;
    },

}, initialState);