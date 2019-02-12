import { createAction } from 'redux-actions';

export const getAllProjectsAction = createAction('[Projects] getAllProjectsAction');

export const getAllProjects = () => (dispatch) => {
    fetch('/api/projects')
        .then((res) => {
            return res.json();
        }).then((projects) => {
        localStorage.projects = JSON.stringify(projects);
        dispatch(getAllProjectsAction(projects));
    }).catch((err) => console.log('error getAllProjects', err)); //test
};