import * as ActionTypes from '../actions/ActionTypes'

export const Messages = (state = {
    isLoading: false,
    errMess: null,
    messages: []
}, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_MESSAGES:
            return {
                ...state,
                isLoading: true,
                errMess: null
            };
        case ActionTypes.FETCH_MESSAGES_SUCCESS:
            return {
                messages: [...action.payload],
                isLoading: false,
                errMess: null
            };
        case ActionTypes.FETCH_MESSAGES_FAILURE:
            return {
                messages: [],
                isLoading: false,
                errMess: action.payload
            };
        case ActionTypes.ADD_MESSAGE:
            return {
                ...state,
                messages: state.messages.concat(action.payload)
            };
        default:
            return state;
    }
};