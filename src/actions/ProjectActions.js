import * as types from './ActionTypes';

export const getProject = id => {
    return {
        type: types.GET_PROJECT,
        id }
};

