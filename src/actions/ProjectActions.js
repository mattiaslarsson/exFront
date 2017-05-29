import * as types from "./ActionTypes";
import * as api from "../api/ProjectApi";
import * as apiS from '../api/SprintApi';
import * as apiT from '../api/TaskApi';
import store from '../index';

// STATE ---------------------------------------------------------------------------------------------------------------

let getProjId = function() {
    return store.getState().projects.currProject.id;
};


// ACTION PRODUCERS ----------------------------------------------------------------------------------------------------

// Projects
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

function setProj(data) {
    return {
        type: types.SET_PROJECT,
        data
    }
}

// Sprints

function getS(data) {
    return {
        type: types.GET_SPRINT,
        data
    }
}

function deleteS(sprintId) {
    return {
        type: types.DELETE_SPRINT,
        sprintId
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

// Tasks

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

function deleteT(data) {
    console.log(data);
    return {
        type: types.DELETE_TASK,
        data
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

function setT(data) {
    return {
        type: types.SET_TASK,
        data
    }
}

function removeT() {
    return {
        type: types.REMOVE_TASK
    }
}

// CALLS ---------------------------------------------------------------------------------------------------------------

// Project
export function getAllProjects(userId) {
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

export function setProject(project) {
    return function (dispatch) {
        dispatch(setProj(project))
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

// Sprint
export function getSprint(sprintId) {
    return function (dispatch) {
        return apiS.getSprint(getProjId(), sprintId)
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
        return apiS.deleteSprint(getProjId(), sprintId)
            .then(response => {
                dispatch(deleteS(sprintId));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function addSprint(sprint) {
    return function (dispatch) {
        return apiS.addSprint(getProjId(), sprint)
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
        return apiS.updateSprint(getProjId(), sprint)
            .then(response => {
                response.json().then((json) =>
                    dispatch(updateS(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

// Tasks
export function getTask(taskId) {
    return function (dispatch) {
        return apiT.getTask(getProjId(), taskId)
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
        return apiT.getAllTasks()
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
        return apiT.deleteTask(getProjId(), taskId)
            .then(response => {
                dispatch(deleteT(taskId));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function addTask(task) {
    return function (dispatch) {
        return apiT.postNewTask(getProjId(), task)
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
        return apiT.updateTask(getProjId(), task)
            .then(response => {
                response.json().then((json) =>
                    dispatch(updateT(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function setTask(task) {
    return function (dispatch) {
        dispatch(setT(task));
    }
}

export function removeTask() {
    return function(dispatch) {
        dispatch(removeT());
    }
}
