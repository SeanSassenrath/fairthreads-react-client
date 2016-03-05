import fetch from 'isomorphic-fetch';
import { REQUEST_PRODUCTS, RECIEVE_PRODUCTS } from './constants';

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

export function fetchProducts(gender) {
  return dispatch => {
    dispatch(requestProducts(gender))
    return fetch('https://fairthreads-api.herokuapp.com/products/gender/men')
    .then(req => req.json())
    .then(json => dispatch(receiveProducts(gender, json)))
  }
}
