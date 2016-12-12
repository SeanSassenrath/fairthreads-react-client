import { createSelector } from 'reselect';
import { get, sortBy } from 'lodash/fp';
import { bindActionCreators } from 'redux';
import { dynamicSortLow, dynamicSortHigh, onSale } from './helpers.js';
import * as actionCreators from './action-creators.js';

const productsSelector = get('products');
const stylistPickTeaserSelector = createSelector(productsSelector, get('stylistPickTeasers'));
const genderSelector = get('gender');
const itemSelector = createSelector(productsSelector, get('item'));
const itemsSelector = createSelector(productsSelector, get('items'));
const pageSelector = createSelector(productsSelector, get('page'));
const sortProductsSelector = createSelector(productsSelector, get('sortProducts'));
const loadingSelector = createSelector(productsSelector, get('isLoading'));
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
    if(saleProducts === true) {
      return items.filter(onSale)
    } else {
      return items;
    }
  }
)

const itemsTransformSelector = createSelector(
  itemsSaleFilterSelector,
  (items) => (items)
)

export const appSelectors = createSelector(
  itemsTransformSelector,
  loadingSelector,
  saleSelector,
  sortProductsSelector,
  genderSelector,
  stylistPickTeaserSelector,
  itemSelector,
  pageSelector,
  (
  items,
  isLoading,
  showSaleOnly,
  sortProducts,
  gender,
  picks,
  item,
  page
  ) => ({
    items,
    isLoading,
    showSaleOnly,
    sortProducts,
    gender,
    picks,
    item,
    page
  })
);
export const selectActions = dispatch => bindActionCreators(actionCreators, dispatch)
