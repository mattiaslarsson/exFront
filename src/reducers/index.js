import {combineReducers} from 'redux';
import projects from './ProjectReducers';
import users from './UserReducers';
import customers from './CustomerReducers';
import notes from './NoteReducers';
import sprints from './SprintReducers';

const rootReducer = combineReducers({
    sprints,
    notes,
    customers,
    projects,
    users
});

export default rootReducer;
