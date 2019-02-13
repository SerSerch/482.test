import { handleActions } from 'redux-actions';

import {
    getAllProjectsAction,
    getMyProjectsAction,
    createProjectAction,
    editAllProjectAction,
    editMyProjectAction,
    deleteProjectAction
} from 'actions/projectsAction';

const initialState = {
    allProjects: [],
    myProjects: [],
    allUsers: [],
};

export default handleActions({

    [getAllProjectsAction]: (state, action) => {
        let res = {};

        if (!action.payload.error && Array.isArray(action.payload)) {
            res = {
                allProjects: action.payload[1],
                allUsers: action.payload[0]
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },

    [getMyProjectsAction]: (state, action) => {
        let res = {};

        if (!action.payload.error && Array.isArray(action.payload)) {
            res = {
                myProjects: action.payload,
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
                myProjects: state.myProjects.concat(action.payload),
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }

        return res;
    },

    [editAllProjectAction]: (state, action) => {
        let res = {};

        if (!action.payload.error && action.payload.id) {
            let id = action.payload.id;
            res = {
                allProjects: [...state.allProjects].map(item => {
                    return item.id == id ? action.payload : item;
                })
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },

    [editMyProjectAction]: (state, action) => {
        let res = {};

        if (!action.payload.error && action.payload.id) {
            let id = action.payload.id;
            res = {
                myProjects: [...state.myProjects].map(item => {
                    return item.id == id ? action.payload : item;
                })
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
                myProjects: [...state.myProjects].filter(item => item.id != id)
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