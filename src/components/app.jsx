import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectActions } from '../selectors.js';
import { testSelector } from '../selectors.js';
import { asMutable } from 'seamless-immutable';
import Row from './product-row/product-row.jsx';
import MainNav from './main-nav/main-nav.jsx';
var logo = require("../img/fairthreads-white.png");
require("../styles/style.scss");

class App extends Component {

  render() {
    console.log('props', this.props.listOfCategories)
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
      categoryList,
      addCategoryFilter
    } = this.props;

    let mutableCategoryList = categoryList.asMutable();

    return (
      <div className="app-container" style={{backgroundColor: "#F8F8F8"}}>
        <nav id="main-nav">
          <div className="row">
            <div className="logo-nav" style={{margin: "0 auto"}}>
              <img src={logo} />
            </div>
          </div>
        </nav>
        <MainNav fetchProducts={fetchProducts} mainNav={mainNav} items={items} categoryList={mutableCategoryList ? mutableCategoryList : null} addCategoryFilter={addCategoryFilter}/>
        <span className={ loading ? "spinner" : null } />

        { this.props.children }
      </div>
    )
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(testSelector, selectActions)(App);
