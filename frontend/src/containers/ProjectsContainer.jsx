import React from 'react';
import { connect } from 'react-redux';
import { getAllProjects } from 'actions/projectsAction';
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);