import React from 'react';
import { connect } from 'react-redux';
import {
    getUser,
    createUser,
    userSignOut,
    userSignAuth
} from 'actions/usersAction';
import {
    getMyProjects,
    createProject,
    editMyProject,
    deleteProject
} from 'actions/projectsAction';
import MyProjects from 'components/MyProjects';


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        user: state.user.user,
        error: state.user.error,
        myProjects: state.projects.myProjects,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        getUser: (params) => dispatch(getUser(params)),
        createUser: (data) => dispatch(createUser(data)),
        userSignOut: () => dispatch(userSignOut()),
        userSignAuth: () => dispatch(userSignAuth()),

        getMyProjects: (params) => dispatch(getMyProjects(params)),
        createProject: (data) => dispatch(createProject(data)),
        editMyProject: (id, data) => dispatch(editMyProject(id, data)),
        deleteProject: (id) => dispatch(deleteProject(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);