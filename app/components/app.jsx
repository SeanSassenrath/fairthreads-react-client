import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectActions } from '../../selectors.js';
import { testSelector } from '../../selectors.js';
import Row from './row.jsx';
import ProductNav from './product-nav.jsx';
import ProductFilters from './product-filters.jsx'
import { makeFourColumns, dynamicSortHigh, dynamicSortLow, onSale } from '../helpers.js';
require("../styles/style.scss");

class App extends Component {

  render() {
    console.log('props', this.props)
    let {
      loading,
      items,
      showSaleOnly,
      gender,
      fetchProducts,
      lowToHighProducts,
      highToLowProducts,
      sortProducts,
      toggleSaleOnly,
      priceRangeFilter,
      priceRangeFilterValues,
      priceRange,
    } = this.props;

    let rowKey = 0;

    const productRows = makeFourColumns(items);

    return (
      <div className="app-container">
        <nav id="main-nav">
          <div className="row">
            <div className="logo-nav" style={{margin: "0 auto"}}>
              <img src={"./img/fairthreads-white.png"} />
            </div>
          </div>
        </nav>
        <ProductNav fetchProducts={fetchProducts} toggleSaleOnly={toggleSaleOnly} />
        <ProductFilters
          lowToHighProducts={lowToHighProducts}
          highToLowProducts={highToLowProducts}
          toggleSaleOnly={toggleSaleOnly}
          showSaleOnly={showSaleOnly}
          priceRangeFilterValues={priceRangeFilterValues}
          priceRange={priceRange}
          priceRangeFilter={priceRangeFilter}
          sortProducts={sortProducts} />
        <span className={ loading ? "spinner" : null } />
        <div className={ loading ? "loading" : null}>
          <div className="row">
          </div>
          {
            productRows.map(function(productRow ) {
              return <Row key={rowKey++} row={productRow} />
            })
          }
        </div>
      </div>
    )
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

const showProducts = (state) => {
  if (state.sortProducts === 'lowToHigh' && state.showSaleOnly) {
    var sortedItems = state.items.asMutable().sort(dynamicSortLow('price'));
    return sortedItems.filter(onSale);
  } else if (state.sortProducts === 'highToLow' && state.showSaleOnly) {
    var sortedItems = state.items.asMutable().sort(dynamicSortHigh('price'));
    return sortedItems.filter(onSale);
  } else if (state.sortProducts === 'lowToHigh' && !state.showSaleOnly) {
    return state.items.asMutable().sort(dynamicSortLow('price'));
  } else if (state.sortProducts === 'highToLow' && !state.showSaleOnly) {
    return state.items.asMutable().sort(dynamicSortHigh('price'));
  } else if (state.showSaleOnly && !state.sortProducts) {
    return state.items.filter(onSale);
  } else {
    return state.items
  }
}

function mapStateToProps(state) {
  const { products } = state;
  const {
    loading,
    gender,
    showSaleOnly,
    items,
    sortProducts,
    priceRange,
    priceRangeFilterValues,
  } = products;

  return {
    loading,
    gender,
    showSaleOnly,
    sortProducts,
    priceRangeFilterValues,
    priceRange,
    items: showProducts(products)
  }
}

export default connect(testSelector, selectActions)(App);
