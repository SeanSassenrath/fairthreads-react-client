import { createSelector } from 'reselect';
import { get, sortBy } from 'lodash/fp';
import { bindActionCreators } from 'redux';
import { dynamicSortLow, dynamicSortHigh, onSale } from './helpers.js';
import * as actionCreators from './action-creators.js';

const productsSelector = get('products');
const genderSelector = get('gender');
const itemsSelector = createSelector(productsSelector, get('items'));
const sortProductsSelector = createSelector(productsSelector, get('sortProducts'));
const loadingSelector = createSelector(productsSelector, get('loading'));
const saleSelector = createSelector(productsSelector, get('showSaleOnly'));
const filterPriceSelector = createSelector(productsSelector, get('priceRangeFilterValues'));
const categoryListSelector = createSelector(productsSelector, get('categoryList'));
const categoryFilterSelector = createSelector(productsSelector, get('categoryFilter'));

const itemsCategoryFilterSelector = createSelector(
  categoryFilterSelector, itemsSelector, (category, items) => {
    if(category) {
      return items.filter(function(item) {
        if(item.fairThreadsCategory === category) {
          return items
        }
      })
    }
    return items;
  }
)

const itemsSortSelector = createSelector(
  sortProductsSelector, itemsCategoryFilterSelector, (sortProducts, items) => {
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

export const testSelector = createSelector(
  itemsTransformSelector,
  loadingSelector,
  saleSelector,
  sortProductsSelector,
  genderSelector,
  categoryListSelector,
  categoryFilterSelector,
  (
  items,
  loading,
  showSaleOnly,
  sortProducts,
  gender,
  categoryList,
  category
  ) => ({
    items,
    loading,
    showSaleOnly,
    sortProducts,
    gender,
    categoryList,
    category
  })
);
export const selectActions = dispatch => bindActionCreators(actionCreators, dispatch)
