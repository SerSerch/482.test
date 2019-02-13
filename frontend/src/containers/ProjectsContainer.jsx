import React from 'react';
import { connect } from 'react-redux';
import { getAllProjects, createProject, editProject, deleteProject } from 'actions/projectsAction';
import Projects from 'components/Projects';


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        projects: state.projects.all,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        getAllProjects: () => dispatch(getAllProjects()),
        createProject: (data) => dispatch(createProject(data)),
        editProject: (id, data) => dispatch(editProject(id, data)),
        deleteProject: (id) => dispatch(deleteProject(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);