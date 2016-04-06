import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import App from './components/app.jsx';
import Home from './components/home/home.jsx';
import ProductsContainer from './components/products-container/products-container.jsx'
import 'babel-polyfill';
import { fetchProducts } from './action-creators';
require('./styles/style.scss');

let loggerMiddleware = createLogger();
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
let store = createStoreWithMiddleware(rootReducer)
store.dispatch(fetchProducts('womens-clothes'))

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store = { store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/mens" component={ ProductsContainer } />
        <Route path="/womens" component={ ProductsContainer } />
        <Route path="/about-us" component={ ProductsContainer } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
