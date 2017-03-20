import {combineReducers} from 'redux';
import projects from './ProjectReducers';
import users from './UserReducers';

const rootReducer = combineReducers({
    projects,
    users
});

export default rootReducer;
