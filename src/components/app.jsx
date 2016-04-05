import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectActions } from '../selectors.js';
import { testSelector } from '../selectors.js';
import Row from './product-row/product-row.jsx';
import MainNav from './main-nav/main-nav.jsx';
import FilterNav from './filter-nav/filter-nav.jsx'
var logo = require("../img/fairthreads-white.png");
require("../styles/style.scss");

class App extends Component {

  render() {
    console.log('props', this.props)
    let {
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

    // let rowKey = 0;

    // const productRows = makeFourColumns(items);

    return (
      <div className="app-container">
        <nav id="main-nav">
          <div className="row">
            <div className="logo-nav" style={{margin: "0 auto"}}>
              <img src={logo} />
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
          />
        <span className={ loading ? "spinner" : null } />


      </div>
    )
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(testSelector, selectActions)(App);
