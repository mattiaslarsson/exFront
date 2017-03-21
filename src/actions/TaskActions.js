import * as types from "./ActionTypes";
import * as api from "../api/TaskApi";
import store from '../index';

function getT(data) {
    return {
        type: types.GET_TASK,
        data
    }
}

function getAllT(data) {
    return {
        type: types.GET_ALL_TASKS,
        data
    }
}

function deleteT() {
    return {
        type: types.DELETE_TASK
    }
}

function updateT(data) {
    return {
        type: types.UPDATE_TASK,
        data
    }
}

function addT(data) {
    return {
        type: types.ADD_TASK,
        data
    }
}

// CALLS ---------------------------------------------------------------------------------------------------------------
export function getTask(taskId) {
    return function (dispatch) {
        return api.getTask(getProjId(), sprintId)
            .then(response => {
                response.json().then((json) =>
                    dispatch(getT(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function getAllTasks() {
    return function(dispatch) {
        return api.getAllTasks()
            .then(response => {
                response.json().then(json => {
                    dispatch(getAllT(json));
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function deleteTask(taskId) {
    return function (dispatch) {
        return api.deleteTask(getProjId(), taskId)
            .then(response => {
                dispatch(deleteT());
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function addTask(task) {
    return function (dispatch) {
        return api.postNewTask(getProjId(), task)
            .then(response => {
                response.json().then((json) =>
                    dispatch(addT(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function updateTask(task) {
    return function (dispatch) {
        return api.updateTask(getProjId(), task)
            .then(response => {
                response.json().then((json) =>
                    dispatch(updateT(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

// STATE ---------------------------------------------------------------------------------------------------------------

let getProjId = function() {
    return store.getState().projects.project.id;
};