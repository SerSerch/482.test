import React from 'react';
import { connect } from 'react-redux';
import { getUser, createUser, userSignOut, userSignAuth } from 'actions/usersAction';
import { getAllProjects, createProject, editProject, deleteProject } from 'actions/projectsAction';
import MyProjects from 'components/MyProjects';


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        user: state.user.user,
        error: state.user.error,
        projects: state.projects.all,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        getUser: (params) => dispatch(getUser(params)),
        createUser: (data) => dispatch(createUser(data)),
        userSignOut: () => dispatch(userSignOut()),
        userSignAuth: () => dispatch(userSignAuth()),

        getAllProjects: (params) => dispatch(getAllProjects(params)),
        createProject: (data) => dispatch(createProject(data)),
        editProject: (id, data) => dispatch(editProject(id, data)),
        deleteProject: (id) => dispatch(deleteProject(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);