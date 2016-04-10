// state = {
//   loading: false,
//   gender: women, men
//   filter: category, price, sale,
//   products: []
// }
import { combineReducers } from 'redux';
import { routerReducer } from 'redux-seamless-immutable';
import Immutable from "seamless-immutable";
import {
  REQUEST_PRODUCTS,
  RECIEVE_PRODUCTS,
  LOWEST_TO_HIGHEST_PRODUCTS,
  HIGHEST_TO_LOWEST_PRODUCTS,
  TOGGLE_SALE_ONLY,
  SET_PRICE_RANGE_FILTER,
  REMOVE_PRICE_RANGE_FILTER,
  SET_CATEGORY_LIST,
  REMOVE_CATEGORY_LIST,
  SET_CATEGORY_FILTER,
  REMOVE_CATEGORY_FILTER
} from '../constants'

const initialState = Immutable({
  products: {
    loading: false,
    showSaleOnly: false,
    items: [],
    categoryList: []
  }
});

function products(state = initialState.products, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return state.set('loading', true);
    case RECIEVE_PRODUCTS:
    console.log()
      return state
        .set('loading', false)
        .set('items', action.products)
        .set('categoryList', action.categoryList)
        .set('gender', action.gender)
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
    case SET_CATEGORY_FILTER:
      return state
        .set('categoryFilter', action.category)
    case REMOVE_CATEGORY_FILTER:
      return state
        .set('categoryFilter', null)
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products,
  routing: routerReducer
})

export default rootReducer;
