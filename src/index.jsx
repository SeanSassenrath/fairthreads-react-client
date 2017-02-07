import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import App from './app/app.jsx';
import Home from './app/pages/home/home.jsx';
import ProductsContainer from './app/components/products-container/products-container.jsx';
import Blog from './app/pages/blog/blog.jsx';
import Post from './app/pages/blog/post.jsx';
import About from './app/pages/about/about.jsx';
import Contact from './app/pages/contact/contact.jsx';
import Product from './app/pages/product/product.jsx';
import Products from './app/pages/products/products.jsx';
import MarketPlace from './app/pages/marketplace/marketplace.jsx';
import SignUp from './app/pages/sign-up/sign-up.jsx';
import 'babel-polyfill';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'production') {
  const logger = createLogger();
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer);

render(
  <Provider store = { store }>
    <Router history={ browserHistory } render={applyRouterMiddleware(useScroll())}>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/products/(:store)" component={ Products } />
        <Route path="/products/(:store)/(:category)" component={ Products } />
        <Route path="/products/(:store)/(:category)/(:filter)" component={ Products } />
        <Route path="/products/(:store)/(:category)/(:filter)/(:sort)" component={ Products } />
        <Route path="/product/(:id)" component={ Product } />
        {/*
        <Route path="/(:store)/(:category)/filter/(:filter)/sort/(:sort)" component={ Products }/>
        <Route path="/(:store)/(:category)/product/(:id)/image/(:index)" />
        <Route path="/(:store)/(:user)/(:showcase)" />
        <Route path="/mens" component={ ProductsContainer } />
        <Route path="/mens/tops" component={ Products } />
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
        */}
        <Route path="/blog/(:post)" component={ Post } />
        <Route path="/blog" component={ Blog } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
        <Route path="/marketplace" component={ MarketPlace } />
        <Route path="/sign-up" component={ SignUp } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
