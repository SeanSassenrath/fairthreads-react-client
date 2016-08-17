import fetch from 'isomorphic-fetch';
import {
  REQUEST_PRODUCTS,
  RECIEVE_PRODUCTS,
  RECIEVE_STYLIST_PICK_TEASERS,
  LOWEST_TO_HIGHEST_PRODUCTS,
  HIGHEST_TO_LOWEST_PRODUCTS,
  TOGGLE_SALE_ONLY,
  SET_PRICE_RANGE_FILTER,
  REMOVE_PRICE_RANGE_FILTER,
 } from './constants';

function requestProducts(gender, category) {
  return {
    type: REQUEST_PRODUCTS,
    gender
  }
}

function receiveProducts(gender, json) {
  return {
    type: RECIEVE_PRODUCTS,
    gender,
    products: json.items,
  }
}

export function receiveStylistPickTeasers(json) {
  return {
    type: RECIEVE_STYLIST_PICK_TEASERS,
    picks: json,
  }
}

export function selectGender(gender, category) {
  if (gender === 'womens') {
    return dispatch => {
        dispatch(fetchProducts('womens-clothes', category))
      }
  } else if (gender === 'mens') {
    return dispatch => {
        dispatch(fetchProducts('men', category))
      }
  }
}

export function mainNav(gender, category) {
  if (gender === 'womens-clothes' || 'men') {
    return dispatch => {
      dispatch(fetchProducts(gender, category))
    }
  }
}

export function fetchProducts(gender, category) {
  if (category) {
    return dispatch => {
      dispatch(requestProducts(gender, category))
      return fetch('https://fairthreads-api.herokuapp.com/products/gender/' + gender + '/category/' + category)
      .then(req => req.json())
      .then(json => dispatch(receiveProducts(gender, json)))
    }
  } else {
    return dispatch => {
      dispatch(requestProducts(gender))
      return fetch('https://fairthreads-api.herokuapp.com/products/gender/' + gender)
      .then(req => req.json())
      .then(json => dispatch(receiveProducts(gender, json)))
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
