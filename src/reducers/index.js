import {combineReducers} from 'redux';
import projects from './ProjectReducers';
import users from './UserReducers';
import customers from './CustomerReducers';
import notes from './NoteReducers';
import navigation from './NavigationReducer';

const rootReducer = combineReducers({
    navigation,
    notes,
    customers,
    projects,
    users
});

export default rootReducer;
