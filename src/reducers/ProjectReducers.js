import * as types from "../actions/ActionTypes";

export default function projectReducer(state = {}, action) {

    var index = -1;
    var updatedList = [];
    var found = false;

    switch (action.type) {
        // Project
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
            index = state.projectList.findIndex(item => item.id === action.data.id);
            updatedList = state.projectList;
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

        // Sprint
        case types.GET_SPRINT:
            return Object.assign({}, state,
                {
                    currSprint: action.data
                });

        case types.ADD_SPRINT:
            return Object.assign({}, state,
                {
                    currSprint: action.data,
                    currProject: {
                        projectSprints: state.currProject.projectSprints.push(action.data)
                    }
                });
        case types.UPDATE_SPRINT:
            index = state.currProject.projectSprints.findIndex(item => item.id === action.data.id);
            updatedList = state.currProject.projectSprints;
            if (index !== -1) {
                updatedList = state.currProject.projectSprints.splice(index, 1, action.data);
            }
            return Object.assign({}, state,
                {
                    currSprint: action.data,
                    currProject: {
                        projectSprints: updatedList
                    }
                });
        case types.DELETE_SPRINT:
            return Object.assign({}, state,
                {
                    currSprint: {},
                    currProject: {
                        projectSprints: state.currProject.projectSprints.filter(item => item.id != action.sprintId)
                    }
                });

        // Task
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
                    currProject: {
                        projectTasks: state.currProject.projectTasks.push(action.data)
                    }
                });
        case types.UPDATE_TASK:
            // Check if task is found in any currProject.projectSprints
            found = false;
            state.currProject.projectSprints.forEach(sprint => {
                if (!found) {
                    index = sprint.sprintTasks.findIndex(item => item.id === action.data.id);
                    if (index > -1) {
                        sprint.sprintTasks.splice(index, 1, action.data);
                        found = true;
                    }
                }
            });

            // If not found replace in currProject.projectTasks
            if (!found) {
                index = state.currProject.projectTasks.findIndex(item => item.id === action.data.id);
                state.currProject.projectTasks.splice(index, 1, action.data);
            }

            // Return modified state
            return Object.assign({}, state,
                {
                    currTask: action.data
                });
        case types.DELETE_TASK:
            found = false;

            // Check if task is found in currProject.projectSprints
            state.currProject.projectSprints.forEach(sprint => {
                if (!found) {
                    index = sprint.sprintTasks.findIndex(item => item.id === action.data.id);
                    if (index > -1) {
                        sprint.sprintTasks.splice(index, 1);
                        found = true;
                    }
                }
            });

            // If not found remove from currProject.projectTasks
            if (!found) {
                index = state.currProject.projectTasks.findIndex(item => item.id === action.data.id);
                state.currProject.projectTasks.splice(index, 1);
            }

            // Return modified state
            return Object.assign({}, state,
                {
                    currTask: {}
                });


        default:
            return state;
    }
}
