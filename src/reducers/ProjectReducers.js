import * as types from '../actions/ActionTypes';

var project1 = {
    id: 1,
    text: "Test 1"
};

var project2 = {
    id: 2,
    text: "Test 2"
};

export default function projectReducer(state = {}, action) {
    switch (action.type) {
        case "TEST_PROJECT":
            // DO magic
            return [...state,
            Object.assign({}, action.id)];
            // ...state - splitters the array so each element is as passed individually
            // Object.assign makes a deep copy of current element and passes in the id.

        case types.GET_PROJECT:
            console.log('In get project! id: '+action.id);
            let currProj = {};

            if (action.id === 1) {
                currProj = project1;
            }

            if (action.id === 2) {
                currProj = project2;
            }
            console.log(currProj);
            return Object.assign({}, currProj);
        default:
            return state;
    }
}
