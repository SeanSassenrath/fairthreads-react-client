import fetch from 'isomorphic-fetch';
import Immutable from 'seamless-immutable';

import {
  REQUEST_PRODUCT,
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCT,
  RECEIVE_INITIAL_PRODUCTS,
  RECEIVE_ADDITIONAL_PRODUCTS,
  RECEIVE_STYLIST_PICK_TEASERS,
  LOWEST_TO_HIGHEST_PRODUCTS,
  HIGHEST_TO_LOWEST_PRODUCTS,
  TOGGLE_SALE_ONLY,
 } from './constants';

function requestProduct(id) {
  return {
    type: REQUEST_PRODUCT,
    id,
  };
}

function requestProducts(gender, category) {
  return {
    type: REQUEST_PRODUCTS,
    gender,
    category,
  };
}

function receiveProduct(id, json) {
  return {
    type: RECEIVE_PRODUCT,
    product: json[0],
  };
}

function receiveInitialProducts(gender, json) {
  return {
    type: RECEIVE_INITIAL_PRODUCTS,
    gender,
    products: json,
  };
}

function receiveAdditionalProducts(gender, page, items, json) {
  return {
    type: RECEIVE_ADDITIONAL_PRODUCTS,
    gender,
    page: page + 1,
    products: Immutable(json.items),
  };
}

export function receiveStylistPickTeasers(json) {
  return {
    type: RECEIVE_STYLIST_PICK_TEASERS,
    picks: json,
  };
}

export function fetchProduct(id) {
  return (dispatch) => {
    dispatch(requestProduct(id));
    return fetch(`https://fairthreads-api.herokuapp.com/products/product/${id}`)
    .then(req => req.json())
    .then(json => dispatch(receiveProduct(id, json)));
  };
}

export function initialFetchProducts(gender, category) {
  const baseURL = 'http://localhost:9000/api/v1/products';
  // const baseURL = 'https://fairthreads-api.herokuapp.com/products/';
  if (category) {
    return (dispatch) => {
      dispatch(requestProducts(gender, category));
      return fetch(`${baseURL}?gender=${gender}&category=${category}&page=1`)
      // return fetch(`${baseURL}?gender=${gender}&category=${category}/page/1`)
      .then(req => req.json())
      .then(json => dispatch(receiveInitialProducts(gender, json)));
    };
  }
  return (dispatch) => {
    dispatch(requestProducts(gender));
    return fetch(`${baseURL}?gender=${gender}&page=1`)
    // return fetch(`${baseURL}gender=${gender}/page/1`)
    .then(req => req.json())
    .then(json => dispatch(receiveInitialProducts(gender, json)));
  };
}

export function additionalFetchProducts(gender, category, page, items) {
  const baseURL = 'http://localhost:9000/api/v1/products';
  if (category) {
    return (dispatch) => {
      dispatch(requestProducts(gender, category));
      return fetch(`${baseURL}?gender=${gender}&category=${category}&page=${page}`)
      .then(req => req.json())
      .then(json => dispatch(receiveAdditionalProducts(gender, page, items, json)));
    };
  }
  return (dispatch) => {
    dispatch(requestProducts(gender));
    return fetch(`${baseURL}?gender=${gender}&page=${page}`)
    .then(req => req.json())
    .then(json => dispatch(receiveAdditionalProducts(gender, page, items, json)));
  };
}

export function fetchStylistPickTeasers() {
/* eslint-disable arrow-body-style*/
  return (dispatch) => {
    return fetch('https://fairthreads-api.herokuapp.com/products/stylistpick')
      .then(req => req.json())
      .then(json => dispatch(receiveStylistPickTeasers(json)));
  };
/* eslint-disable arrow-body-style*/
}

export function lowToHighProducts() {
  return {
    type: LOWEST_TO_HIGHEST_PRODUCTS,
  };
}

export function highToLowProducts() {
  return {
    type: HIGHEST_TO_LOWEST_PRODUCTS,
  };
}

export function toggleSaleOnly() {
  return {
    type: TOGGLE_SALE_ONLY,
  };
}
