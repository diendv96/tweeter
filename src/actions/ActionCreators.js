import * as ActionTypes from './ActionTypes';

export const addMessage = (message) => ({
    type: ActionTypes.ADD_MESSAGE,
    payload: message
});