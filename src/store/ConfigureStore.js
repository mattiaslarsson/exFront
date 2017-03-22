import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import * as init from './DefaultState';

export default function configureStore() {
    return createStore(
        rootReducer,
        init.defaultState,
        compose(
        applyMiddleware(thunk, reduxImmutableStateInvariant()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}