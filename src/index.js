import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import * as Sentry from '@sentry/browser';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

//Sentry.init({dsn: "https://19627002d84b4aa0b796b2d1a6793887@sentry.io/1519440"});
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
