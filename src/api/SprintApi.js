import "whatwg-fetch";
import * as api from "./ApiConstants";

export function getSprint(projectId, sprintId) {
    return fetch(api.BASE_URL + api.SPRINT + projectId + "/" + sprintId,
        {
            headers: api.AUTH_HEADER(),
            method: "GET"
        });
}

export function deleteSprint(projectId, sprintId) {
    return fetch(api.BASE_URL + api.SPRINT + projectId + "/" + sprintId,
        {
            headers: api.AUTH_HEADER(),
            method: "DELETE"
        });
}

export function addSprint(projectId, sprint) {
    return fetch(api.BASE_URL + api.SPRINT + projectId,
        {
            headers: api.AUTH_HEADER(),
            method: "POST",
            body: JSON.stringify(sprint)
        });
}

export function updateSprint(projectId, sprint) {
    return fetch(api.BASE_URL + api.SPRINT + projectId + "/" + sprint.id,
        {
            headers: api.AUTH_HEADER(),
            method: "PUT",
            body: JSON.stringify(sprint)
        });
}