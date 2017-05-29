import * as store from "../index";

// HEADER

export const NO_AUTH_HEADER = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const AUTH_HEADER = () => {
    return {
        'Authorization': store.store.getState().users.token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
};

// URLS

export const BASE_URL = "http://52.56.231.128:8080/";
export const LOGIN = "login";
export const USER = "user/";
export const PROJECT = "project/";
export const SPRINT = "sprint/";
export const TASK = "task/";
export const NOTE = "note/";
export const CUSTOMER = "customer/";

