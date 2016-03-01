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
  RECIEVE_PRODUCTS
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
        .set('items', action.products);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products
})

export default rootReducer;
