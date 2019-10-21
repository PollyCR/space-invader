import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import {ActionCableProvider} from 'react-actioncable-provider';
import BackendAdapter from './adapters/BackendAdapter';


  
ReactDOM.render(
    (<ActionCableProvider url={BackendAdapter.BASE_WS_URL} >
        <BrowserRouter>
        <Route path="/" component={routerProps => <App {...routerProps} />} />
        </BrowserRouter>
    </ActionCableProvider>
    )
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
