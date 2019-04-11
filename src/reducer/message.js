import * as ActionTypes from '../actions/ActionTypes'

export const Messages = (state = {
    isLoading: true,
    errMess: null,
    messages: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MESSAGE:
            return {...state, messages: action.payload};
        default:
            return state;
    }
};