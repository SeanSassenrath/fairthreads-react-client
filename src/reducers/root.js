import { combineReducers } from 'redux';
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
} from '../constants'

const initialState = Immutable({
  products: {
    loading: false,
    showSaleOnly: false,
    items: [],
  }
});

function products(state = initialState.products, action) {
  switch (action.type) {
    case REQUEST_PRODUCT:
      return state
        .set('loading', true)
    case RECEIVE_PRODUCT:
      console.log('Action product', action)
      return state
        .set('loading', false)
        .set('item', action.product)
    case REQUEST_PRODUCTS:
      return state
        .set('loading', true)
    case RECEIVE_INITIAL_PRODUCTS:
      return state
        .set('loading', false)
        .set('items', action.products)
        .set('categoryList', action.categoryList)
        .set('gender', action.gender)
        .set('page', 1)
    case RECEIVE_ADDITIONAL_PRODUCTS:
      return state
        .set('items': action.products)
        .set('page': action.page)
    case RECEIVE_STYLIST_PICK_TEASERS:
      return state
        .set('stylistPickTeasers', action.picks)
    case LOWEST_TO_HIGHEST_PRODUCTS:
      if(state.sortProducts != 'lowToHigh') {
        return state
          .set('sortProducts', 'lowToHigh')
      } else {
        return state
          .set('sortProducts', null)
      }
    case HIGHEST_TO_LOWEST_PRODUCTS:
    if(state.sortProducts != 'highToLow') {
      return state
        .set('sortProducts', 'highToLow')
    } else {
      return state
        .set('sortProducts', null)
    }
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
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products,
})

export default rootReducer;
