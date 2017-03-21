/**
 * Created by juan on 2017-03-20.
 */
import * as types from '../actions/ActionTypes';

export default function userReducer(state = {}, action) {
    switch (action.type) {

        case types.LOGIN_SUCCESS:
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
            return Object.assign({}, state,
                { userList: state.userList.filter(item => item.id != action.userId)});
        case types.UPDATE_USER:
            const index = state.userList.findIndex(item => item.id === action.data.id);
            let updatedList = state.userList;
            if (index !== -1) {
                updatedList = state.userList.splice(index,1,action.data);
            }
            return Object.assign({}, state,
                { currUser: action.data,
                userList: updatedList});

        default:
            return state;
    }
}