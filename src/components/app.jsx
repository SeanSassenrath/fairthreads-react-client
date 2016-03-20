import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectActions } from '../selectors.js';
import { testSelector } from '../selectors.js';
import Row from './product-row/product-row.jsx';
import MainNav from './main-nav/main-nav.jsx';
import FilterNav from './filter-nav/filter-nav.jsx'
import { makeFourColumns, dynamicSortHigh, dynamicSortLow, onSale } from '../helpers.js';
var logo = require("file!../img/fairthreads-white.png");
require("../styles/style.scss");

class App extends Component {

  render() {
    console.log('props', this.props)
    let {
      homepage,
      addHomepage,
      mainNav,
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
              <img src={logo} onClick={()=> addHomepage()} />
            </div>
          </div>
        </nav>
        <MainNav fetchProducts={fetchProducts} mainNav={mainNav} />
        <FilterNav
          lowToHighProducts={lowToHighProducts}
          highToLowProducts={highToLowProducts}
          toggleSaleOnly={toggleSaleOnly}
          showSaleOnly={showSaleOnly}
          priceRangeFilterValues={priceRangeFilterValues}
          priceRange={priceRange}
          priceRangeFilter={priceRangeFilter}
          sortProducts={sortProducts}
          homepage={homepage}
          />
        <span className={ loading ? "spinner" : null } />
        <div className="homepage-container" style={{display: homepage === true ? "block" : "none"}}>
          <div className="hero">
            <h1>This is the hero</h1>
          </div>
          <div className="sub-hero-container">
            <div className="row">
              <div className="small-12 medium-5 columns" style={{border: "1px solid green"}}>
                test box 1
              </div>
              <div className="small-12 medium-5 columns" style={{border: "1px solid green"}}>
                test box 2
              </div>
            </div>
          </div>
        </div>
        <div className={ loading ? "loading" : null} style={{display: homepage === true ? "none" : "block"}}>
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

export default connect(testSelector, selectActions)(App);
