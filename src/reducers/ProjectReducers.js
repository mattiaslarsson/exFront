import * as types from "../actions/ActionTypes";

export default function projectReducer(state = {}, action) {

    let index = -1;
    let updatedList = [];
    let found = false;
    let lists = {};
    let updatedProject = {};

    switch (action.type) {
        // Project
        case types.GET_ALL_USER_PROJECTS:
            return Object.assign({}, state,
                {
                    projectList: action.data
                });
        case types.GET_PROJECT:

            lists = buildTaskLists(action.data);

            return Object.assign({}, state,
                {
                    currProject: action.data,
                    todoTasks: lists.todoList,
                    inProgressTasks: lists.inProgressList,
                    testTasks: lists.testList,
                    doneTasks: lists.doneList
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
            lists = buildTaskLists(action.data);

            return Object.assign({}, state,
                {
                    currProject: action.data,
                    todoTasks: lists.todoList,
                    inProgressTasks: lists.inProgressList,
                    testTasks: lists.testList,
                    doneTasks: lists.doneList
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
            updatedProject = JSON.parse(JSON.stringify(state.currProject));
            updatedProject.projectTasks = updatedList.push(action.data);

            lists = buildTaskLists(updatedProject);

            return Object.assign({}, state,
                {
                    currTask: action.data,
                    currProject: updatedProject,
                    todoTasks: lists.todoList,
                    inProgressTasks: lists.inProgressList,
                    testTasks: lists.testList,
                    doneTasks: lists.doneList
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

            if (found) {
                updatedProject = JSON.parse(JSON.stringify(state.currProject));
                updatedProject.projectSprints = updatedList;
            } else {
                updatedProject = JSON.parse(JSON.stringify(state.currProject));
                updatedProject.projectTasks = updatedList;
            }

            lists = buildTaskLists(updatedProject);

            // Return new state
            return Object.assign({}, state,
                {
                    currTask: action.data,
                    currProject: updatedProject,
                    todoTasks: lists.todoList,
                    inProgressTasks: lists.inProgressList,
                    testTasks: lists.testList,
                    doneTasks: lists.doneList
                });

        case types.DELETE_TASK:
            found = false;

            // Check if task is found in currProject.projectSprints
            updatedList = JSON.parse(JSON.stringify(state.currProject.projectSprints));
            updatedList.forEach(sprint => {
                if (!found) {
                    index = sprint.sprintTasks.findIndex(item => item.id === action.data);
                    if (index > -1) {
                        sprint.sprintTasks.splice(index, 1);
                        found = true;
                    }
                }
            });

            // If not found remove from currProject.projectTasks
            if (!found) {
                updatedList = JSON.parse(JSON.stringify(state.currProject.projectTasks));
                index = updatedList.findIndex(item => item.id === action.data);
                updatedList.splice(index, 1);
            }

            if (found) {
                updatedProject = JSON.parse(JSON.stringify(state.currProject));
                updatedProject.projectSprints = updatedList;
            } else {
                updatedProject = JSON.parse(JSON.stringify(state.currProject));
                updatedProject.projectTasks = updatedList;
            }

            lists = buildTaskLists(updatedProject);

            // Return new state
            return Object.assign({}, state,
                {
                    currTask: null,
                    currProject: updatedProject,
                    todoTasks: lists.todoList,
                    inProgressTasks: lists.inProgressList,
                    testTasks: lists.testList,
                    doneTasks: lists.doneList
                });

        case types.SET_TASK:
            return Object.assign({}, state, {
                currTask: action.data
            });

        case types.REMOVE_TASK:
            return Object.assign({}, state, {
               currTask: null
            });

        default:
            return state;
    }

    function buildTaskLists(project) {
        lists = {
            todoList: [],
            inProgressList: [],
            testList: [],
            doneList: []
        };

        if (project.projectTasks.length > 0) {
            project.projectTasks.forEach(currTask => {
                switch (currTask.taskStatus) {
                    case "TODO":
                        lists.todoList.push(currTask);
                        break;
                    case "WIP":
                        lists.inProgressList.push(currTask);
                        break;
                    case "TEST":
                        lists.testList.push(currTask);
                        break;
                    case "DONE":
                        lists.doneList.push(currTask);
                        break;
                    default:
                        lists.todoList.push(currTask);
                }
            });
        }

        if (project.projectSprints.length > 0) {
            project.projectSprints.forEach(currSprint => {
                   currSprint.sprintTasks.forEach(currTask => {
                       switch (currTask.taskStatus) {
                           case "TODO":
                               lists.todoList.push(currTask);
                               break;
                           case "WIP":
                               lists.inProgressList.push(currTask);
                               break;
                           case "TEST":
                               lists.testList.push(currTask);
                               break;
                           case "DONE":
                               lists.doneList.push(currTask);
                               break;
                           default:
                               lists.todoList.push(currTask);
                       }
                   });
            });
        }
        return lists;
    }

}


