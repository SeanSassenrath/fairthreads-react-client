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

function requestProducts(gender, category) {
  return {
    type: REQUEST_PRODUCTS,
    gender
  }
}

function receiveProducts(gender, json) {
  console.log('json', json)
  return {
    type: RECIEVE_PRODUCTS,
    gender,
    products: json.items,
    // categoryList: json.categoryList
  }
}

export function selectGender(gender, category) {
  console.log("in ac with ", gender)
  if (gender === 'womens') {
    console.log('womens')
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
  console.log('in fetch products')
  return dispatch => {
    dispatch(requestProducts(gender, category))
    return fetch('https://fairthreads-api.herokuapp.com/products/gender/' + gender + '/category/' + category)
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

// export function priceRangeFilter(lowestPrice, highestPrice, newPriceRange, currentPriceRange) {
//   if(currentPriceRange === newPriceRange) {
//     return dispatch => {
//       dispatch(removePriceRangeFilter())
//     }
//   } else {
//     return dispatch => {
//       dispatch(setPriceRangeFilter(lowestPrice, highestPrice, newPriceRange))
//     }
//   }
// }
