import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import App from './app/components/app.jsx';
import 'babel-polyfill';
import { fetchProducts } from './action-creators';


let loggerMiddleware = createLogger();
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
let store = createStoreWithMiddleware(rootReducer)
store.dispatch(fetchProducts('womens-clothes'))

ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>
  , document.getElementById('app')
);
