import * as types from "../actions/ActionTypes";

export default function (state = {}, action) {
    switch (action.type) {
        case types.GET_TASK:
            return Object.assign({}, state,
                {
                    currTask: action.data
                });
        case types.GET_ALL_TASKS:
            return Object.assign({}, state,
                {
                    taskList: action.data
                });

        case types.ADD_TASK:
            return Object.assign({}, state,
                {
                    currTask: action.data,
                    taskList: state.taskList.push(action.data)
                });
        case types.UPDATE_TASK:
            const index = state.taskList.findIndex(item => item.id === action.data.id);
            let updatedList = state.taskList;
            if (index !== -1) {
                updatedList = state.taskList.splice(index, 1, action.data);
            }
            return Object.assign({}, state,
                {
                    currTask: action.data,
                    taskList: updatedList
                });
        case types.DELETE_TASK:
            return Object.assign({}, state,
                {
                    taskList: state.taskList.filter(item => item.id != action.taskId)
                });

        default:
            return state;
    }
}