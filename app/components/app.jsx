import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action-creators.js'
import Row from './row.jsx'
import ProductNav from './product-nav.jsx'
import { makeFourColumns, dynamicSortHigh, dynamicSortLow } from '../helpers.js'
require("../styles/style.scss");

const selectActions = dispatch => bindActionCreators(actionCreators, dispatch)

class App extends Component {

  render() {
    let {
      fetchProducts,
      lowToHighProducts,
      highToLowProducts
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
        <ProductNav fetchProducts={fetchProducts}/>
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
      // <div className="row">
      //   <>
      // </div>
      // <div className="row">
      //   <div className="small-2 large-4 columns">...</div>
      //   <div className="small-4 large-4 columns">...</div>
      //   <div className="small-6 large-4 columns">...</div>
      // </div>
    )
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { products } = state;
  const {
    loading,
    items
  } = products;

  if (products.sortProducts === 'lowToHigh') {
    var sortedItems = items.asMutable().sort(dynamicSortLow('price'));
    return {
      loading,
      items: sortedItems
    }
  } else if (products.sortProducts === 'highToLow') {
    var sortedItems = items.asMutable().sort(dynamicSortHigh('price'))
    return {
      loading,
      items: sortedItems
    }
  } else {
    return {
      loading,
      items
    }
  }
}

export default connect(mapStateToProps, selectActions)(App);
