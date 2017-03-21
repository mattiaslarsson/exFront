import "whatwg-fetch";
import * as api from "./ApiConstants";

export function getCustomer(customerId) {
    return fetch(api.BASE_URL + api.CUSTOMER + customerId,
        {
            headers: api.AUTH_HEADER(),
            method: "GET"
        });
}

export function getAllCustomers() {
    return fetch(api.BASE_URL+api.CUSTOMER,
        {
            headers: api.AUTH_HEADER(),
            method: "GET"
        });
}

export function addNewCustomer(customer) {
    return fetch(api.BASE_URL+api.CUSTOMER,
        {
            headers: api.AUTH_HEADER(),
            method: "POST",
            body: JSON.stringify(customer)
        });
}

export function removeCustomer(customerId) {
    return fetch(api.BASE_URL+api.CUSTOMER+customerId,
        {
            headers: api.AUTH_HEADER(),
            method: "DELETE",
        });
}

export function updateCustomer(customer) {
    return fetch(api.BASE_URL+api.CUSTOMER,
        {
            headers: api.AUTH_HEADER(),
            method: "PUT",
            body: JSON.stringify(customer)
        });
}
