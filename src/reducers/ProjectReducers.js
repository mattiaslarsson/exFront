import * as types from '../actions/ActionTypes';

export default function projectReducer(state = {}, action) {
    switch (action.type) {

        case types.GET_ALL_USER_PROJECTS:
            return Object.assign({}, state,
                {
                    allProjects: action.data.projects
                });
        case types.GET_PROJECT:
            return Object.assign({}, state, {currProject: action.data});

        case types.ADD_PROJECT:
            return Object.assign({}, state,
                { currProject: action.data,
                allProjects: state.allProjects.push(action.data)});
        case types.UPDATE_PROJECT:
            return state;
        case types.DELETE_PROJECT:
            return state;


        default:
            return state;
    }
}
