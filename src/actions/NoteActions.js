import * as types from "./ActionTypes";
import * as api from "../api/NoteApi";
import store from '../index';

function getN(data) {
    return {
        type: types.GET_NOTE,
        data
    }
}

function deleteN() {
    return {
        type: types.DELETE_NOTE
    }
}

function updateN(data) {
    return {
        type: types.UPDATE_NOTE,
        data
    }
}

function addN(data) {
    return {
        type: types.ADD_NOTE,
        data
    }
}

// CALLS ---------------------------------------------------------------------------------------------------------------
export function getNote(noteId) {
    return function (dispatch) {
        return api.getNote(getProjId(), noteId)
            .then(response => {
                response.json().then((json) =>
                    dispatch(getN(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function deleteNote(noteId) {
    return function (dispatch) {
        return api.deleteNote(getProjId(), noteId)
            .then(response => {
                dispatch(deleteN());
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function addNote(note) {
    return function (dispatch) {
        return api.postNewNote(getProjId(), note)
            .then(response => {
                response.json().then((json) =>
                    dispatch(addN(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function updateNote(note) {
    return function (dispatch) {
        return api.updateNote(getProjId(), note)
            .then(response => {
                response.json().then((json) =>
                    dispatch(updateN(json)));
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