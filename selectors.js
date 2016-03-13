import { createSelector } from 'reselect';
import { get } from 'lodash/fp';
import { bindActionCreators } from 'redux';
import * as actionCreators from './action-creators.js';

// const productsSelector = state => state.get('products');
// const itemsSelector = state => state.get('products', 'items');
const productsSelector = get('products');
const itemsSelector = createSelector(productsSelector, get('items'));
const sortProductsSelector = createSelector(productsSelector, get('sortProducts'));
const loadingSelector = createSelector(productsSelector, get('loading'));
const saleSelector = createSelector(productsSelector, get('showSaleOnly'));
const filterSelector = createSelector(productsSelector, get('priceRangeFilterValues'));
// const priceSortSelector = createSelector(productsSelector, get('sortproducts'));
// const saleSortSelector = state => state.get('products', 'showSaleOnly');


export const testSelector = createSelector(
  itemsSelector,
  sortProductsSelector,
  loadingSelector,
  saleSelector,
  (
  items,
  sortProducts,
  loading,
  showSaleOnly
  ) => ({
    items,
    sortProducts,
    loading,
    showSaleOnly
  })
);
export const selectActions = dispatch => bindActionCreators(actionCreators, dispatch)
