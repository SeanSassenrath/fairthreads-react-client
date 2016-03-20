import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import App from './components/app.jsx';
import 'babel-polyfill';
import { fetchProducts } from './action-creators';
require('./styles/style.scss');


let loggerMiddleware = createLogger();
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
let store = createStoreWithMiddleware(rootReducer)
store.dispatch(fetchProducts('womens-clothes'))

render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('app')
);
