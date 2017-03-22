import * as types from "../actions/ActionTypes";

export default function projectReducer(state = {}, action) {
    switch (action.type) {

        case types.GET_ALL_USER_PROJECTS:
            return Object.assign({}, state,
                {
                    projectList: action.data.projects
                });
        case types.GET_PROJECT:
            return Object.assign({}, state,
                {
                    currProject: action.data
                });

        case types.ADD_PROJECT:
            return Object.assign({}, state,
                {
                    currProject: action.data,
                    projectList: state.projectList.push(action.data)
                });
        case types.UPDATE_PROJECT:
            const index = state.projectList.findIndex(item => item.id === action.data.id);
            let updatedList = state.projectList;
            if (index !== -1) {
                updatedList = state.projectList.splice(index, 1, action.data);
            }
            return Object.assign({}, state,
                {
                    currProject: action.data,
                    projectList: updatedList
                });
        case types.DELETE_PROJECT:
            return Object.assign({}, state,
                {
                    projectList: state.projectList.filter(item => item.id != action.projectId)
                });


        default:
            return state;
    }
}
