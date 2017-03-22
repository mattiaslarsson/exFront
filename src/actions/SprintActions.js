import * as types from "./ActionTypes";
import * as api from "../api/SprintApi";
import store from '../index';

// ACTION PRODUCERS ----------------------------------------------------------------------------------------------------
function getS(data) {
    return {
        type: types.GET_SPRINT,
        data
    }
}

function deleteS() {
    return {
        type: types.DELETE_SPRINT
    }
}

function updateS(data) {
    return {
        type: types.UPDATE_SPRINT,
        data
    }
}

function addS(data) {
    return {
        type: types.ADD_SPRINT
    }
}

// CALLS ---------------------------------------------------------------------------------------------------------------
export function getSprint(sprintId) {
    return function (dispatch) {
        return api.getSprint(getProjId(), sprintId)
            .then(response => {
                response.json().then((json) =>
                    dispatch(getS(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function deleteSprint(sprintId) {
    return function (dispatch) {
        return api.deleteSprint(getProjId(), sprintId)
            .then(response => {
                dispatch(deleteS());
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function addSprint(sprint) {
    return function (dispatch) {
        return api.addSprint(getProjId(), sprint)
            .then(response => {
                response.json().then((json) =>
                    dispatch(addS(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function updateSprint(sprint) {
    return function (dispatch) {
        return api.updateSprint(getProjId(), sprint)
            .then(response => {
                response.json().then((json) =>
                    dispatch(updateS(json)));
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