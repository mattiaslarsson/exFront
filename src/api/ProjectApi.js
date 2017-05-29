import "whatwg-fetch";
import * as api from "./ApiConstants";

export function getProject(id) {
    return fetch(api.BASE_URL + api.PROJECT + id,
        {
            headers: api.AUTH_HEADER(),
            method: "GET"
        });
}

export function getAllProjects() {
    return fetch(api.BASE_URL + api.PROJECT,
        {
            headers: api.AUTH_HEADER(),
            method: "GET"
        });
}

export function postNewProject(project) {
    return fetch(api.BASE_URL + api.PROJECT,
        {
            headers: api.AUTH_HEADER(),
            method: "POST",
            body: JSON.stringify(project)
        });
}

export function updateProject(project) {
    return fetch(api.BASE_URL + api.PROJECT + project.id,
        {
            headers: api.AUTH_HEADER(),
            method: "PUT",
            body: JSON.stringify(project)
        });
}

export function deleteProject(projectId) {
    return fetch(api.BASE_URL + api.PROJECT + projectId,
        {
            headers: api.AUTH_HEADER(),
            method: "DELETE"
        });
}
