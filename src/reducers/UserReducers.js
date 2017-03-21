/**
 * Created by juan on 2017-03-20.
 */
import * as types from '../actions/ActionTypes';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            console.log(action);
            return Object.assign({}, state,
                {token: action.data.token, user: action.data.user, loggedIn: action.loggedIn});
        case types.DO_LOGOUT:
            return Object.assign({}, state,
                {token: null, user: null, loggedIn: action.loggedIn});
        case types.GET_USER:
            return Object.assign({}, state,
                {currUser: action.data});
        case types.GET_ALL_USERS:
            return Object.assign({}, state,
                {userList: action.data});
        case types.ADD_USER:
            return Object.assign({}, state,
                {currUser: action.data});
        case types.DELETE_USER:
            let oldList = state.userList;
            debugger;
            oldList.forEach(currUser => {
               if (currUser.id === action.userId) {
                   oldList.remove(currUser);
               }
            });
            return Object.assign({}, state,
                { userList: oldList});

        default:
            return state;
    }
}