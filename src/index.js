import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {ConfigureStore} from "./store/configureStore";

import Index from './components/Index';
import * as serviceWorker from './serviceWorker';
import './style/App.css'

const store = ConfigureStore();

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
