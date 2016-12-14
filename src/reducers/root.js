import { combineReducers } from 'redux';
import Immutable from 'seamless-immutable';
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
} from '../constants';

const initialState = Immutable({
  products: {
    showSaleOnly: false,
    items: [],
  },
});

function products(state = initialState.products, action) {
  switch (action.type) {
    case REQUEST_PRODUCT:
      return state
        .set('isLoading', true);
    case RECEIVE_PRODUCT:
      return state
        .set('isLoading', false)
        .set('item', action.product);
    case REQUEST_PRODUCTS:
      return state
        .set('isLoading', true);
    case RECEIVE_INITIAL_PRODUCTS:
      return state
        .set('isLoading', false)
        .set('items', action.products)
        .set('categoryList', action.categoryList)
        .set('gender', action.gender)
        .set('page', 2);
    case RECEIVE_ADDITIONAL_PRODUCTS:
      return state
        .set('items', state.items.concat(action.products))
        .set('page', action.page);
    case RECEIVE_STYLIST_PICK_TEASERS:
      return state
        .set('stylistPickTeasers', action.picks);
    case LOWEST_TO_HIGHEST_PRODUCTS:
      if (state.sortProducts !== 'lowToHigh') {
        return state
          .set('sortProducts', 'lowToHigh');
      }
      return state
        .set('sortProducts', null);
    case HIGHEST_TO_LOWEST_PRODUCTS:
      if (state.sortProducts !== 'highToLow') {
        return state
        .set('sortProducts', 'highToLow');
      }
      return state
        .set('sortProducts', null);
    case TOGGLE_SALE_ONLY:
      return state
        .set('showSaleOnly', !state.showSaleOnly);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
