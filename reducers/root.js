// state = {
//   loading: false,
//   gender: women, men
//   filter: category, price, sale,
//   products: []
// }
import { combineReducers } from 'redux';
import Immutable from "seamless-immutable";
import {
  REQUEST_PRODUCTS,
  RECIEVE_PRODUCTS,
  LOWEST_TO_HIGHEST_PRODUCTS,
  HIGHEST_TO_LOWEST_PRODUCTS,
  SET_SORTED_ITEMS
} from '../constants'

const initialState = Immutable({
  loading: false,
  gender: 'women',
  items: []
});

function products(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return state.set('loading', true);
    case RECIEVE_PRODUCTS:
      console.log("In receive products reducer", action.products)
      return state
        .set('loading', false)
        .set('items', action.products)
    case LOWEST_TO_HIGHEST_PRODUCTS:
      return state
        .set('sortProducts', 'lowToHigh')
    case HIGHEST_TO_LOWEST_PRODUCTS:
      return state
        .set('sortProducts', 'highToLow')
    case SET_SORTED_ITEMS:
      return state
        .set('items', action.sortedItems)
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products,
})

export default rootReducer;
