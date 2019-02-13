import { createAction } from 'redux-actions';

export const getAllProjectsAction = createAction('[Projects] getAllProjectsAction');
export const getMyProjectsAction = createAction('[Projects] getMyProjectsAction');
export const createProjectAction = createAction('[Projects] createProjectAction');
export const editAllProjectAction = createAction('[Projects] editAllProjectAction');
export const editMyProjectAction = createAction('[Projects] editMyProjectAction');
export const deleteProjectAction = createAction('[Projects] deleteProjectAction');

export const getAllProjects = (params=[]) => (dispatch) => {
    Promise.all([
        fetch('/api/users').then(res => res.json()),
        fetch('/api/projects?'+params.join('&')).then(res => res.json())
    ])
        .then(projects => {
            dispatch(getAllProjectsAction(projects))
        })
        .catch(err => {
            dispatch(getAllProjectsAction( {error: err} ))
        });
};

export const getMyProjects = (params=[]) => (dispatch) => {
    fetch('/api/projects?'+params.join('&'))
        .then(res => res.json() )
        .then(projects => {
            dispatch(getMyProjectsAction(projects))
        })
        .catch(err => {
            dispatch(getMyProjectsAction( {error: err} ))
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

export const editAllProject = (id, data) => (dispatch) => {
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
            dispatch(editAllProjectAction(project))
        })
        .catch(err => {
            dispatch(editAllProjectAction( {error: err} ))
        });


};

export const editMyProject = (id, data) => (dispatch) => {
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
            dispatch(editMyProjectAction(project))
        })
        .catch(err => {
            dispatch(editMyProjectAction( {error: err} ))
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