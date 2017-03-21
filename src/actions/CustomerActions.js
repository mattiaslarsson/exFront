import * as types from "./ActionTypes";
import * as api from "../api/CustomerApi";

function getC(data) {
    return {
        type: types.GET_CUSTOMER,
        data
    }
}

function getAllC(data) {
    return {
        type: types.GET_ALL_CUSTOMERS,
        data
    }
}

function deleteC() {
    return {
        type: types.DELETE_CUSTOMER
    }
}

function updateC(data) {
    return {
        type: types.UPDATE_CUSTOMER,
        data
    }
}

function addC(data) {
    return {
        type: types.ADD_CUSTOMER,
        data
    }
}

// CALLS ---------------------------------------------------------------------------------------------------------------
export function getCustomer(customerId) {
    return function (dispatch) {
        return api.getCustomer(customerId)
            .then(response => {
                response.json().then((json) =>
                    dispatch(getC(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function getAllCustomers() {
    return function(dispatch) {
        return api.getAllCustomers()
            .then(response => {
                response.json().then(json => {
                    dispatch(getAllC(json));
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function deleteCustomer(customerId) {
    return function (dispatch) {
        return api.removeCustomer(customerId)
            .then(response => {
                dispatch(deleteC());
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function addCustomer(customer) {
    return function (dispatch) {
        return api.addNewCustomer(customer)
            .then(response => {
                response.json().then((json) =>
                    dispatch(addC(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export function updateCustomer(customer) {
    return function (dispatch) {
        return api.updateCustomer(customer)
            .then(response => {
                response.json().then((json) =>
                    dispatch(updateC(json)));
            })
            .catch(err => {
                console.log(err);
            });
    }
}
