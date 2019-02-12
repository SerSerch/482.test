import { combineReducers } from 'redux';

import userReducer from './usersReduser';

export default combineReducers({
    //за управление этим хранилищем отвечает этот редюсер
    user: userReducer,
});