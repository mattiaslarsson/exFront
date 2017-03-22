import * as types from '../actions/ActionTypes';

export default function(state = {}, action) {
    switch(action.type){
        case types.GET_NOTE:
            return Object.assign({}, state,
                {
                    currNote: action.data
                });

        case types.DELETE_NOTE:
            return Object.assign({}, state,
                {
                    currNote: null
                });
        case types.ADD_NOTE:
            return Object.assign({}, state,
                {
                    currNote: action.data
                });
        case types.UPDATE_NOTE:
            return Object.assign({}, state,
                {
                    currNote: action.data
                });

        default:
            return state;
    }
}