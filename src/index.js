import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom'
import {createStore,applyMiddleware,compose,} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
  
const composeEnchancers = process.env.NODE_ENV ==="development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store=createStore(rootReducer,composeEnchancers(applyMiddleware(thunk)))
const app=(
    <Provider store={store}>
        <HashRouter basename='/'>
            <App/>
        </HashRouter>
    </Provider>
    )
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
