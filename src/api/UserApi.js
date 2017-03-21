import "whatwg-fetch";
import * as api from "./ApiConstants";

export function doLogin(username, password) {
    return fetch(api.BASE_URL + api.LOGIN,
        {
            headers: api.NO_AUTH_HEADER,
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
}

export function getUser(userId) {
    return fetch(api.BASE_URL + api.USER + userId,
        {
            headers: api.AUTH_HEADER(),
            method: "GET"
        });
}

export function getAllUsers() {
    return fetch(api.BASE_URL + api.USER,
        {
            headers: api.AUTH_HEADER(),
            method: "GET"
        });
}

export function postNewUser(user) {
    return fetch(api.BASE_URL+api.USER,
        {
           headers: api.AUTH_HEADER(),
            method: "POST",
            body: JSON.stringify(user)
        });
}

export function deleteUser(userId) {
    return fetch(api.BASE_URL+api.USER+userId,
    {
        headers: api.AUTH_HEADER(),
        method: "DELETE"
    });
}

export function updateUser(user) {
    return fetch(api.BASE_URL+api.USER+user.id,
        {
           headers: api.AUTH_HEADER(),
            method: "PUT",
            body: JSON.stringify(user)
        });
}