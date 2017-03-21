import * as types from '../actions/ActionTypes';

export default function projectReducer(state = {}, action) {
    switch (action.type) {
        case types.GET_ALL_USER_PROJECTS:

            return Object.assign({}, state,
                {
                    allProjects: action.data.projects
                });
            // ...state - splitters the array so each element is as passed individually
            // Object.assign makes a deep copy of current element and passes in the id.

        case types.GET_PROJECT:
            return Object.assign({}, state, {currProject: action.data});

        default:
            return state;
    }
}
