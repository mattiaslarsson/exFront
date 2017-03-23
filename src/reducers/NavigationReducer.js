import * as types from '../actions/ActionTypes';

export default function(state = {}, action) {
    switch (action.type) {
        case types.GOTO_LOGIN:
            return Object.assign({}, state,
                {
                    currPage: "LOGIN",
                    menuDisplay: false
                });
        case types.GOTO_HOME:
            return Object.assign({}, state,
                {
                    currPage: "HOME",
                    menuDisplay: true
                });
        case types.GOTO_PROJECT:
            return Object.assign({}, state,
                {
                    currPage: "PROJECT",
                    menuDisplay: true
                });
        case types.GOTO_ADMIN:
            return Object.assign({}, state,
                {
                    currPage: "ADMIN",
                    menuDisplay: true
                });

        default:
            return state;
    }
}