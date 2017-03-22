import {combineReducers} from 'redux';
import projects from './ProjectReducers';
import users from './UserReducers';
import customers from './CustomerReducers';
import notes from './NoteReducers';

const rootReducer = combineReducers({
    notes,
    customers,
    projects,
    users
});

export default rootReducer;
