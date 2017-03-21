import "whatwg-fetch";
import * as api from "./ApiConstants";

export function getNote(projectId, noteId) {
    return fetch(api.BASE_URL + api.NOTE + projectId + "/" +noteId,
        {
            headers: api.AUTH_HEADER(),
            method: "GET"
        });
}

export function postNewNote(projectId, note) {
    return fetch(api.BASE_URL+api.NOTE+projectId,
        {
            headers: api.AUTH_HEADER(),
            method: "POST",
            body: JSON.stringify(note)
        })
}

export function deleteNote(projectId, noteId) {
    return fetch(api.BASE_URL+api.NOTE+projectId+"/"+noteId,
        {
            headers: api.AUTH_HEADER(),
            method: "DELETE"
        })
}

export function updateNote(projectId, note) {
    return fetch(api.BASE_URL+api.NOTE+projectId,
        {
            headers: api.AUTH_HEADER(),
            method: "PUT",
            body: JSON.stringify(note)
        });
}

