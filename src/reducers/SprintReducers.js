import * as types from '../actions/ActionTypes';

export default function(state, action) {
    switch (action.type) {
        case types.GET_SPRINT:
            return Object.assign({}, state,
                {
                    currSprint: action.data
                });

        case types.ADD_SPRINT:
            return Object.assign({}, state,
                {
                    currSprint: action.data
                });
        case types.UPDATE_SPRINT:
            return Object.assign({}, state,
                {
                    currSprint: action.data
                });
        case types.DELETE_SPRINT:
            return Object.assign({}, state,
                {
                    currSprint: null
                });

        default:
            return state;
    }
}