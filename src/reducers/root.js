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
  TOGGLE_SALE_ONLY,
  SET_PRICE_RANGE_FILTER,
  REMOVE_PRICE_RANGE_FILTER,
  REMOVE_HOMEPAGE,
  ADD_HOMEPAGE
} from '../constants'

const initialState = Immutable({
  products: {
    loading: false,
    showSaleOnly: false,
    gender: 'women',
    items: [],
    homepage: true,
  }
});

function products(state = initialState.products, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return state.set('loading', true);
    case RECIEVE_PRODUCTS:
      return state
        .set('loading', false)
        .set('items', action.products)
    case LOWEST_TO_HIGHEST_PRODUCTS:
      return state
        .set('sortProducts', 'lowToHigh')
    case HIGHEST_TO_LOWEST_PRODUCTS:
      return state
        .set('sortProducts', 'highToLow')
    case TOGGLE_SALE_ONLY:
      return state
        .set('showSaleOnly', !state.showSaleOnly)
    case SET_PRICE_RANGE_FILTER:
      return state
        .set('priceRange', action.priceRange)
        .set('priceRangeFilterValues',
          {
            lowestPrice: action.lowestPrice,
            highestPrice: action.highestPrice
          })
    case REMOVE_PRICE_RANGE_FILTER:
      return state
        .set('priceRange', null)
        .set('priceRangeFilterValues', {})
    case REMOVE_HOMEPAGE:
      return state
        .set('homepage', false)
    case ADD_HOMEPAGE:
      return state
        .set('homepage', true)
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products,
})

export default rootReducer;
