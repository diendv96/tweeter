import {Observable} from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import {ajax} from 'rxjs/observable/dom/ajax';
import {combineEpics} from 'redux-observable';

import * as ActionTypes from './ActionTypes';
import {addMessage, fetchMessagesFailure, fetchMessagesSuccess, postMessageFailure} from './ActionCreators'
import {BASE_URL} from "../constant/abstract";

const fetchWhiskiesEpic = $action => $action.ofType(ActionTypes.FETCH_MESSAGES)
    .switchMap(() => {
        return ajax
            .getJSON(BASE_URL)
            .map(data => fetchMessagesSuccess(data))
    })
    .catch(error => Observable.of(fetchMessagesFailure(error.message)));

const postMessageEpic = $action => $action.ofType(ActionTypes.POST_MESSAGE)
    .mergeMap(action => {
        return ajax.post(
            url,
            JSON.stringify(action.payload),
            {'Content-Type': 'application/json'}
        )
            .map(response => addMessage(response.response))
            .catch(error => Observable.of(postMessageFailure(error)))
    });

export const rootEpic = combineEpics(fetchWhiskiesEpic, postMessageEpic);
