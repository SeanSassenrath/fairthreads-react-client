import fetch from 'isomorphic-fetch';
import Immutable from "seamless-immutable";

import {
  REQUEST_PRODUCT,
  RECEIVE_PRODUCT,
  REQUEST_PRODUCTS,
  RECEIVE_INITIAL_PRODUCTS,
  RECEIVE_ADDITIONAL_PRODUCTS,
  RECEIVE_STYLIST_PICK_TEASERS,
  LOWEST_TO_HIGHEST_PRODUCTS,
  HIGHEST_TO_LOWEST_PRODUCTS,
  TOGGLE_SALE_ONLY,
  SET_PRICE_RANGE_FILTER,
  REMOVE_PRICE_RANGE_FILTER,
 } from './constants';

function requestProduct(id) {
 return {
   type: REQUEST_PRODUCT,
   id
 }
}

function receiveProduct(id, json) {
 return {
   type: RECEIVE_PRODUCT,
   product: json[0],
 }
}

function requestProducts(gender, category) {
  return {
    type: REQUEST_PRODUCTS,
    gender
  }
}

function receiveInitialProducts(gender, json) {
  return {
    type: RECEIVE_INITIAL_PRODUCTS,
    gender,
    products: json.items,
  }
}

function receiveAdditionalProducts(gender, page, items, json) {
  console.log('json items', page)
  return {
    type: RECEIVE_ADDITIONAL_PRODUCTS,
    gender,
    page: page,
    products: Immutable(json.items),
  }
}

export function receiveStylistPickTeasers(json) {
  return {
    type: RECEIVE_STYLIST_PICK_TEASERS,
    picks: json,
  }
}

export function fetchProduct(id) {
  return dispatch => {
    dispatch(requestProduct(id))
    return fetch('https://fairthreads-api.herokuapp.com/products/product/' + id)
    .then(req => req.json())
    .then(json => dispatch(receiveProduct(id, json)))
  }
}

export function initialFetchProducts(gender, category, page) {
  if (category) {
    return dispatch => {
      dispatch(requestProducts(gender, category))
      return fetch('https://fairthreads-api.herokuapp.com/products/gender/' + gender + '/category/' + category + '/page/' + page)
      .then(req => req.json())
      .then(json => dispatch(receiveInitialProducts(gender, json)))
    }
  } else {
    return dispatch => {
      dispatch(requestProducts(gender))
      return fetch('https://fairthreads-api.herokuapp.com/products/gender/' + gender + '/page/1')
      .then(req => req.json())
      .then(json => dispatch(receiveInitialProducts(gender, json)))
    }
  }
}

export function additionalFetchProducts(gender, category, page, items) {
  if (category) {
    return dispatch => {
      dispatch(requestProducts(gender, category))
      return fetch('https://fairthreads-api.herokuapp.com/products/gender/' + gender + '/category/' + category + '/page/' + page)
      .then(req => req.json())
      .then(json => dispatch(receiveAdditionalProducts(gender, page, items, json)))
    }
  } else {
    return dispatch => {
      dispatch(requestProducts(gender))
      return fetch('https://fairthreads-api.herokuapp.com/products/gender/' + gender + '/page/' + page)
      .then(req => req.json())
      .then(json => dispatch(receiveAdditionalProducts(gender, page, items, json)))
    }
  }
}

export function fetchStylistPickTeasers() {
  return dispatch => {
    return fetch('https://fairthreads-api.herokuapp.com/products/stylistpick')
      .then(req => req.json())
      .then(json => dispatch(receiveStylistPickTeasers(json)))
  }
}

export function lowToHighProducts() {
  return {
    type: LOWEST_TO_HIGHEST_PRODUCTS
  }
}

export function highToLowProducts() {
  return {
    type: HIGHEST_TO_LOWEST_PRODUCTS
  }
}

export function toggleSaleOnly() {
  return {
    type: TOGGLE_SALE_ONLY
  }
}

export function stickyNav() {
  return {
    type: STICKY_NAV,
  }
}

function setPriceRangeFilter(lowestPrice, highestPrice, priceRange) {
  return {
    type: SET_PRICE_RANGE_FILTER,
    lowestPrice: lowestPrice,
    highestPrice: highestPrice,
    priceRange: priceRange
  }
}

function removePriceRangeFilter() {
  return {
    type: REMOVE_PRICE_RANGE_FILTER,
  }
}

export function priceRangeFilter(lowestPrice, highestPrice, newPriceRange, currentPriceRange) {
  if(currentPriceRange === newPriceRange) {
    return dispatch => {
      dispatch(removePriceRangeFilter())
    }
  } else {
    return dispatch => {
      dispatch(setPriceRangeFilter(lowestPrice, highestPrice, newPriceRange))
    }
  }
}
