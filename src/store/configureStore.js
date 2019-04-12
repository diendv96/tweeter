import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Messages} from '../reducer/message'
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from '../actions/epics'

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            messages: Messages,
        }),
        composeEnhancers(applyMiddleware(epicMiddleware))
    );

    epicMiddleware.run(rootEpic);

    return store;
};
