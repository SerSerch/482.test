import React from 'react';
import { connect } from 'react-redux';
import {
    getUser,
    createUser,
    updateUser,
    userSignOut,
    userSignAuth
} from 'actions/usersAction';
import {
    getAllProjects,
    createProject,
    editAllProject,
    deleteProject
} from 'actions/projectsAction';
import Projects from 'components/Projects';


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        projects: state.projects.allProjects,
        allUsers: state.projects.allUsers,
        user: state.user.user,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        getAllProjects: (params) => dispatch(getAllProjects(params)),
        userSignAuth: () => dispatch(userSignAuth()),
        editAllProject: (id, data) => dispatch(editAllProject(id, data)),
        updateUser: (id, data) => dispatch(updateUser(id, data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);