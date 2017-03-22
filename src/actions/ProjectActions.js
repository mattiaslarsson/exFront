import * as types from "./ActionTypes";
import * as api from "../api/ProjectApi";

// ACTION PRODUCERS ----------------------------------------------------------------------------------------------------
function getProjectSuccess(data) {
    return {
        type: types.GET_PROJECT,
        data
    }
}

function getAllUserProjects(data) {
    return {
        type: types.GET_ALL_USER_PROJECTS,
        data
    }
}

function updateProj(data) {
    return {
        type: types.UPDATE_PROJECT,
        data
    }
}

function deleteProj(projectId) {
    return {
        type: types.DELETE_PROJECT,
        projectId
    }
}

function addProj(data) {
    return {
        type: types.ADD_PROJECT,
        data
    }
}

// CALLS ---------------------------------------------------------------------------------------------------------------
export function getProjects(userId) {
    return function (dispatch) {
        return api.getAllProjects(userId)
            .then(response => {
                response.json().then((json) =>
                    dispatch(getAllUserProjects(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function getProject(projectId) {
    return function (dispatch) {
        return api.getProject(projectId)
            .then(response => {
                response.json().then((json) =>
                    dispatch(getProjectSuccess(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function deleteProject(projectId) {
    return function (dispatch) {
        return api.deleteProject(projectId)
            .then(response => {
                if (response.status === 200) {
                    dispatch(deleteProj());
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function addProject(project) {
    return function (dispatch) {
        return api.postNewProject(project)
            .then(response => {
                response.json().then((json) =>
                    dispatch(addProj(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function updateProject(project) {
    return function (dispatch) {
        return api.updateProject(project)
            .then(response => {
                response.json().then((json) =>
                dispatch(updateProj(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}