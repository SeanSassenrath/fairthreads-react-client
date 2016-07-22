import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectActions } from '../selectors.js';
import { testSelector } from '../selectors.js';
import Immutable from 'seamless-immutable';
import Row from './product-row/product-row.jsx';
import MainNav from './main-nav/main-nav.jsx';
import Footer from './footer/footer.jsx';

class App extends Component {

  render() {
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

    return (
      <div className="app-container" style={{backgroundColor: "#f4f4f4"}}>
        <MainNav fetchProducts={fetchProducts} mainNav={mainNav} />
        <span className={ loading ? "spinner" : null } />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(testSelector, selectActions)(App);
