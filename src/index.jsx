import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import App from './components/app.jsx';
import Home from './components/home/home.jsx';
import ProductsContainer from './components/products-container/products-container.jsx';
import Contact from './components/contact/contact.jsx';
import 'babel-polyfill';
import { fetchProducts } from './action-creators';

let loggerMiddleware = createLogger();
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
let store = createStoreWithMiddleware(rootReducer)

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store = { store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/mens" component={ ProductsContainer } />
        <Route path="/mens/tops" component={ ProductsContainer } />
        <Route path="/mens/bottoms" component={ ProductsContainer } />
        <Route path="/mens/dresses" component={ ProductsContainer } />
        <Route path="/mens/shoes" component={ ProductsContainer } />
        <Route path="/mens/underwear" component={ ProductsContainer } />
        <Route path="/mens/active" component={ ProductsContainer } />
        <Route path="/womens" component={ ProductsContainer } />
        <Route path="/womens/tops" component={ ProductsContainer } />
        <Route path="/womens/bottoms" component={ ProductsContainer } />
        <Route path="/womens/dresses" component={ ProductsContainer } />
        <Route path="/womens/shoes" component={ ProductsContainer } />
        <Route path="/womens/underwear" component={ ProductsContainer } />
        <Route path="/about-us" component={ ProductsContainer } />
        <Route path="/contact" component={ Contact } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
