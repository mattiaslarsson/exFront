import * as types from "./ActionTypes";
import * as api from "../api/UserApi";

// ACTION PRODUCERS ----------------------------------------------------------------------------------------------------
function loginSuccess(data) {
    return {type: types.LOGIN_SUCCESS, data, loggedIn: true}
}

function loginFailed(data) {
    return {type: types.LOGIN_FAIL, data, loggedIn: false}
}

function logout() {
    return {type: types.DO_LOGOUT, loggedIn: false}
}

function getU(data) {
    return {type: types.GET_USER, data}
}

function getAllU(data) {
    return {type: types.GET_ALL_USERS, data}
}

function addU(data) {
    return {type: types.ADD_USER, data}
}

function deleteU(userId) {
    return {type: types.DELETE_USER, userId}
}

function updateU(data) {
    return {type: types.UPDATE_USER, data}
}

// CALLS ---------------------------------------------------------------------------------------------------------------
export function doLogin(username, password) {
    return function (dispatch) {
        return api.doLogin(username, password)
            .then(response => {
                response.json().then((json) =>
               dispatch(loginSuccess(json)));
            })
            .catch(err => {
                dispatch(loginFailed(err));
            });
    }
}

export function getUser(userId) {
    return function(dispatch) {
        return api.getUser(userId)
            .then(response => {
                response.json().then(json => {
                    dispatch(getU(json));
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function doLogout() {
    debugger;
    return function (dispatch) {
        return dispatch(logout());
    }
}

export function getAllUsers() {
    return function(dispatch) {
        return api.getAllUsers()
            .then(response => {
                response.json().then(json => {
                    dispatch(getAllU(json));
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function addUser(user) {
    return function(dispatch) {
        return api.postNewUser(user)
            .then(response => {
                response.json().then(json => {
                    dispatch(addU(json));
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function deleteUser(userId) {
    return function(dispatch) {
        return api.deleteUser(userId)
            .then(response => {
                dispatch(deleteU(userId))
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function updateUser(user) {
    return function(dispatch) {
        return api.updateUser(user)
            .then(response => {
                response.json().then(json =>{
                    dispatch(updateU(json));
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
}