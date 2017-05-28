import * as types from '../actions/ActionTypes';

export default function(state = {}, action) {
    switch(action.type){
        case types.GET_CUSTOMER:
            return Object.assign({}, state,
                {
                    currCustomer: action.data
                });
        case types.GET_ALL_CUSTOMERS:
            return Object.assign({}, state,
                {
                    customerList: action.data
                });

        case types.ADD_CUSTOMER:
            return Object.assign({}, state,
                {
                    customerList: state.customerList.push(action.data)
                });
        case types.UPDATE_CUSTOMER:
            const index = state.customerList.findIndex(item => item.id === action.data.id);
            let updatedList = state.customerList;
            if (index !== -1) {
                updatedList = state.customerList.splice(index, 1, action.data);
            }
            return Object.assign({}, state,
                {
                    customerList: updatedList
                });
        case types.DELETE_CUSTOMER:
            return Object.assign({}, state,
                {
                    customerList: state.customerList.filter(item => item.id !== action.customerId)
                });

        default:
            return state;
    }
}