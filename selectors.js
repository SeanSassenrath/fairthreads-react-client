import { createSelector } from 'reselect';
import { get, sortBy } from 'lodash/fp';
import { bindActionCreators } from 'redux';
import { dynamicSortLow, dynamicSortHigh, onSale } from './app/helpers.js';
import * as actionCreators from './action-creators.js';

const productsSelector = get('products');
const itemsSelector = createSelector(productsSelector, get('items'));
const sortProductsSelector = createSelector(productsSelector, get('sortProducts'));
const loadingSelector = createSelector(productsSelector, get('loading'));
const homepageSelector = createSelector(productsSelector, get('homepage'));
const saleSelector = createSelector(productsSelector, get('showSaleOnly'));
const filterPriceSelector = createSelector(productsSelector, get('priceRangeFilterValues'));

const itemsSortSelector = createSelector(
  sortProductsSelector, itemsSelector, (sortProducts, items) => {
    if (sortProducts === "highToLow") {
      return items.asMutable().sort(dynamicSortHigh('price'))
    } else if (sortProducts === "lowToHigh") {
      return items.asMutable().sort(dynamicSortLow('price'))
    } else {
      return items;
    }
  }
)

const itemsSaleFilterSelector = createSelector(
  saleSelector, itemsSortSelector, (saleProducts, items) => {
    console.log(items)
    if(saleProducts === true) {
      return items.filter(onSale)
    } else {
      return items
    }
  }
)

const itemsTransformSelector = createSelector(
  itemsSaleFilterSelector,
  (items) => (items)
)

export const testSelector = createSelector(
  itemsTransformSelector,
  loadingSelector,
  saleSelector,
  homepageSelector,
  (
  items,
  loading,
  showSaleOnly,
  homepage
  ) => ({
    items,
    loading,
    showSaleOnly,
    homepage
  })
);
export const selectActions = dispatch => bindActionCreators(actionCreators, dispatch)
