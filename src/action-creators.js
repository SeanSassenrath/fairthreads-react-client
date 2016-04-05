import fetch from 'isomorphic-fetch';
import {
  REQUEST_PRODUCTS,
  RECIEVE_PRODUCTS,
  LOWEST_TO_HIGHEST_PRODUCTS,
  HIGHEST_TO_LOWEST_PRODUCTS,
  TOGGLE_SALE_ONLY,
  SET_PRICE_RANGE_FILTER,
  REMOVE_PRICE_RANGE_FILTER,
 } from './constants';

function requestProducts(gender) {
  return {
    type: REQUEST_PRODUCTS,
    gender
  }
}

function receiveProducts(gender, json) {
  return {
    type: RECIEVE_PRODUCTS,
    gender,
    products: json
  }
}

export function mainNav(type) {
  if (type === "men" || "womens-clothes") {
    return dispatch => {
      dispatch(fetchProducts(type))
    }
  }
}

export function fetchProducts(gender) {
  return dispatch => {
    dispatch(requestProducts(gender))
    return fetch('https://fairthreads-api.herokuapp.com/products/gender/' + gender)
    .then(req => req.json())
    .then(json => dispatch(receiveProducts(gender, json)))
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
    console.log("should remove pricingFilter")
    return dispatch => {
      dispatch(removePriceRangeFilter())
    }
  } else {
    console.log("should set pricingFilter")
    return dispatch => {
      dispatch(setPriceRangeFilter(lowestPrice, highestPrice, newPriceRange))
    }
  }
}
