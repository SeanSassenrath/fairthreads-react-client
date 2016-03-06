import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action-creators.js'
import Row from './row.jsx'
import ProductNav from './product-nav.jsx'
import { makeFourColumns, dynamicSortHigh, dynamicSortLow, onSale } from '../helpers.js'
require("../styles/style.scss");

const selectActions = dispatch => bindActionCreators(actionCreators, dispatch)

class App extends Component {

  render() {
    let {
      fetchProducts,
      lowToHighProducts,
      highToLowProducts,
      showSaleOnly
    } = this.props;

    let rowKey = 0;

    const { loading, items } = this.props;
    const productRows = makeFourColumns(items);

    return (
      <div className="app-container">
        <nav id="main-nav">
          <div className="row">
            <div className="logo-nav">
              <img src={"./img/fairthreads-logo.png"} />
            </div>
          </div>
        </nav>
        <ProductNav fetchProducts={fetchProducts} showSaleOnly={showSaleOnly}/>
        <span className={ loading ? "spinner" : null } />
        <div className={ loading ? "loading" : null}>
          <div className="row">
            <h6 style={{margin: ".75em 1.25em"}}>Sort by price: <span onClick={() => lowToHighProducts()}>Lowest</span> / <span onClick={() => highToLowProducts()}>Highest</span></h6>
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
    items
  } = products;

  return {
    loading,
    items: showProducts(products)
  }
}

export default connect(mapStateToProps, selectActions)(App);
