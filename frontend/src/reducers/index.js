import { combineReducers } from 'redux';

import userReducer from './usersReduser';
import projectsReducer from './projectsReduser';

export default combineReducers({
    user: userReducer,
    projects: projectsReducer,
});