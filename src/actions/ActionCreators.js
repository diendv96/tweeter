import * as ActionTypes from './ActionTypes';

export const addMessage = (message) => ({
    type: ActionTypes.ADD_MESSAGE,
    payload: message
});

export const fetchMessages = () => ({
    type: ActionTypes.FETCH_MESSAGES,
});

export const fetchMessagesSuccess = (messages) => ({
    type: ActionTypes.FETCH_MESSAGES_SUCCESS,
    payload: messages
});

export const fetchMessagesFailure = (err) => ({
    type: ActionTypes.FETCH_MESSAGES_FAILURE,
    payload: err
});