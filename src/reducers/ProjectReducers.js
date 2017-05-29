import * as types from "../actions/ActionTypes";

export default function projectReducer(state = {}, action) {

    let index = -1;
    let updatedList = [];
    let found = false;

    switch (action.type) {
        // Project
        case types.GET_ALL_USER_PROJECTS:
            return Object.assign({}, state,
                {
                    projectList: action.data
                });
        case types.GET_PROJECT:
            todoTasks = [];

            return Object.assign({}, state,
                {
                    currProject: action.data
                });

        case types.ADD_PROJECT:
            updatedList = JSON.parse(JSON.stringify(state.projectList));
            updatedList.push(action.data);
            return Object.assign({}, state,
                {
                    currProject: action.data,
                    projectList: updatedList
                });
        case types.UPDATE_PROJECT:
            index = state.projectList.findIndex(item => item.id === action.data.id);
            updatedList = JSON.parse(JSON.stringify(state.projectList));
            updatedList = updatedList.splice(index, 1, action.data);
            return Object.assign({}, state,
                {
                    currProject: action.data,
                    projectList: updatedList
                });
        case types.DELETE_PROJECT:
            updatedList = JSON.parse(JSON.stringify(state.projectList));
            return Object.assign({}, state,
                {
                    projectList: updatedList.filter(item => item.id !== action.projectId)
                });
        case types.SET_PROJECT:
            return Object.assign({}, state,
                {
                    currProject: action.data
                });

        // Sprint
        case types.GET_SPRINT:
            return Object.assign({}, state,
                {
                    currSprint: action.data
                });

        case types.ADD_SPRINT:
            updatedList = JSON.parse(JSON.stringify(state.currProject.projectSprints));
            return Object.assign({}, state,
                {
                    currSprint: action.data,
                    currProject: {
                        projectSprints: updatedList.push(action.data)
                    }
                });
        case types.UPDATE_SPRINT:
            index = state.currProject.projectSprints.findIndex(item => item.id === action.data.id);
            updatedList = JSON.parse(JSON.stringify(state.currProject.projectSprints));
            if (index !== -1) {
                updatedList.splice(index, 1, action.data);
            }
            return Object.assign({}, state,
                {
                    currSprint: action.data,
                    currProject: {
                        projectSprints: updatedList
                    }
                });
        case types.DELETE_SPRINT:
            updatedList = JSON.parse(JSON.stringify(state.currProject.projectSprints));
            return Object.assign({}, state,
                {
                    currSprint: {},
                    currProject: {
                        projectSprints: updatedList.filter(item => item.id !== action.sprintId)
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
            updatedList = JSON.parse(JSON.stringify(state.currProject.projectTasks));
            return Object.assign({}, state,
                {
                    currTask: action.data,
                    currProject: {
                        projectTasks: updatedList.push(action.data)
                    }
                });
        case types.UPDATE_TASK:
            // Check if task is found in any currProject.projectSprints
            found = false;
            updatedList = JSON.parse(JSON.stringify(state.currProject.projectSprints));
            updatedList.forEach(sprint => {
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
                updatedList = JSON.parse(JSON.stringify(state.currProject.projectTasks));
                index = updatedList.findIndex(item => item.id === action.data.id);
                updatedList.splice(index, 1, action.data);
            }

            // Return modified state
            if (found) {
                return Object.assign({}, state,
                    {
                        currTask: action.data,
                        currProject: {
                            projectSprints: updatedList
                        }
                    });
            } else {
                return Object.assign({}, state,
                    {
                        currTask: action.data,
                        currProject: {
                            projectTasks: updatedList
                        }
                    });
            }


        case types.DELETE_TASK:
            found = false;

            // Check if task is found in currProject.projectSprints
            updatedList = JSON.parse(JSON.stringify(state.currProject.projectSprints));
            updatedList.forEach(sprint => {
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
                updatedList = JSON.parse(JSON.stringify(state.currProject.projectTasks));
                index = updatedList.findIndex(item => item.id === action.data.id);
                updatedList.splice(index, 1);
            }

            // Return modified state
            if (found) {
                return Object.assign({}, state,
                    {
                        currTask: action.data,
                        currProject: {
                            projectSprints: updatedList
                        }
                    });
            } else {
                return Object.assign({}, state,
                    {
                        currTask: action.data,
                        currProject: {
                            projectTasks: updatedList
                        }
                    });
            }


        default:
            return state;
    }
}


