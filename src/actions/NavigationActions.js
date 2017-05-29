import * as types from "./ActionTypes";

export function gotoLogin() {
    return {
        type: types.GOTO_LOGIN
    }
}

export function gotoHome() {
    return {
        type: types.GOTO_HOME
    }
}

export function gotoProject() {
    return {
        type: types.GOTO_PROJECT
    }
}

export function gotoAdmin() {
    return {
        type: types.GOTO_ADMIN
    }
}

export function openModal() {
    return {
        type: types.MODAL_OPEN
    }
}

export function closeModal() {
    return {
        type: types.MODAL_CLOSE
    }
}