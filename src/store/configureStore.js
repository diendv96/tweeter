import {combineReducers, compose, createStore} from 'redux';
import {Messages} from '../reducer/message'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            messages: Messages,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};