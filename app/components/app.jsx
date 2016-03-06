import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action-creators.js'
import Row from './row.jsx'
import ProductNav from './product-nav.jsx'
import { makeFourColumns } from '../helpers.js'
require("../styles/style.scss");

const selectActions = dispatch => bindActionCreators(actionCreators, dispatch)

class App extends Component {

  render() {
    let {
      fetchProducts
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

  return {
    loading,
    items
  }
}

export default connect(mapStateToProps, selectActions)(App);
