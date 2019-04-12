import {Observable} from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import {ajax} from 'rxjs/observable/dom/ajax';
import {combineEpics} from 'redux-observable';

import * as ActionTypes from './ActionTypes';
import {fetchMessagesFailure, fetchMessagesSuccess} from './ActionCreators'

const url = 'http://localhost:3001/messages/';

const fetchWhiskiesEpic = $action => $action.ofType(ActionTypes.FETCH_MESSAGES)
    .switchMap(() => {
        return ajax
            .getJSON(url)
            .map(data => fetchMessagesSuccess(data))
    })
    .catch(error => Observable.of(fetchMessagesFailure(error.message)));

export const rootEpic = combineEpics(fetchWhiskiesEpic);
