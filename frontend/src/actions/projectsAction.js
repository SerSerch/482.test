import { createAction } from 'redux-actions';

export const getAllProjectsAction = createAction('[Projects] getAllProjectsAction');
export const createProjectAction = createAction('[Projects] createProjectAction');
export const editProjectAction = createAction('[Projects] editProjectAction');
export const deleteProjectAction = createAction('[Projects] deleteProjectAction');

export const getAllProjects = () => (dispatch) => {
    fetch('/api/projects')
        .then(res => res.json() )
        .then(projects => {
            dispatch(getAllProjectsAction(projects))
        })
        .catch(err => {
            dispatch(getAllProjectsAction( {error: err} ))
        });
};

export const createProject = (data) => (dispatch) => {
    fetch('/api/projects',{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json() )
        .then(project => {
            dispatch(createProjectAction(project))
        })
        .catch(err => {
            dispatch(createProjectAction( {error: err} ))
        });
};

export const editProject = (id, data) => (dispatch) => {
    fetch('/api/projects/'+id,{
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json() )
        .then(project => {
            dispatch(editProjectAction(project))
        })
        .catch(err => {
            dispatch(editProjectAction( {error: err} ))
        });
};

export const deleteProject = (id) => (dispatch) => {
    fetch('/api/projects/'+id,{
        method: 'delete'
    })
        .then(res => res.text() )
        .then(data => {
            dispatch(deleteProjectAction([id, data]))
        })
        .catch(err => {
            dispatch(deleteProjectAction( {error: err} ))
        });
};