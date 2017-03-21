import "whatwg-fetch";
import * as api from "./ApiConstants";

export function getTask(projectId, taskId) {
    return fetch(api.BASE_URL + api.TASK + projectId + "/" + taskId,
        {
            headers: api.AUTH_HEADER(),
            method: "GET"
        });
}

export function getAllTasks() {
    return fetch(api.BASE_URL + api.TASK,
        {
            headers: api.AUTH_HEADER(),
            method: "GET"
        });
}

export function postNewTask(projectId, task) {
    return fetch(api.BASE_URL + api.TASK + projectId,
        {
            headers: api.AUTH_HEADER(),
            method: "POST",
            body: JSON.stringify(task)
        });
}

export function deleteTask(projectId, taskId) {
    return fetch(api.BASE_URL + api.TASK + projectId + "/" + taskId,
        {
            headers: api.AUTH_HEADER(),
            method: "DELETE"
        });
}

export function updateTask(projectId, task) {
    return fetch(api.BASE_URL+api.TASK+projectId,
        {
            headers: api.AUTH_HEADER(),
            method: "PUT",
            body: JSON.stringify(task)
        });
}