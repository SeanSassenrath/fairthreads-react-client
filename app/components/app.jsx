import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action-creators.js'
import $ from 'jquery';
import Row from './row.jsx'
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
        <nav style={{borderBottom: "1px solid gray"}}>
          <div className="row">
            <div className="top-nav">
              <h5>FairThreads</h5>
            </div>
            <div className="bottom-nav" style={{border: "1px solid purple"}}>
              <ul>
                <li><span onClick={() => fetchProducts("womens-clothes")}>Women</span> / <span onClick={() => fetchProducts("men")}>Men</span></li>
                <li>All Clothes</li>
                <li>All Prices</li>
                <li>Sale</li>
              </ul>
            </div>
          </div>
        </nav>
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
