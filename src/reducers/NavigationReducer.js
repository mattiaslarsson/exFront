import * as types from '../actions/ActionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case types.GOTO_LOGIN:
            return Object.assign({}, state,
                {
                    currPage: "LOGIN",
                    menuDisplay: false,
                    modalOpen: false
                });
        case types.GOTO_HOME:
            return Object.assign({}, state,
                {
                    currPage: "HOME",
                    menuDisplay: true,
                    modalOpen: false
                });
        case types.GOTO_PROJECT:
            return Object.assign({}, state,
                {
                    currPage: "PROJECT",
                    menuDisplay: true,
                    modalOpen: false
                });
        case types.GOTO_ADMIN:
            return Object.assign({}, state,
                {
                    currPage: "ADMIN",
                    menuDisplay: true,
                    modalOpen: false
                });
        case types.MODAL_OPEN:
            return Object.assign({}, state, {
                modalOpen: true
            });
        case types.MODAL_CLOSE:
            return Object.assign({}, state, {
                modalOpen: false
            });
        default:
            return state;
    }
}