/**
 * Created by juan on 2017-03-20.
 */
import * as types from '../actions/ActionTypes';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case types.DO_LOGIN:

            return state;

        case types.DO_LOGOUT:
            // Do logout
            return state;

        default:
            return state;
    }
}