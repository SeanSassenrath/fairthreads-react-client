import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectActions } from '../selectors.js';
import { testSelector } from '../selectors.js';
import Immutable from 'seamless-immutable';
import Row from './product-row/product-row.jsx';
import MainNav from './main-nav/main-nav.jsx';
import Footer from './footer/footer.jsx';

class App extends Component {

  componentDidMount() {
    this.props.fetchStylistPickTeasers();
  }

  render() {
    let {
      mainNav,
      loading,
      items,
      picks,
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
      <div className="app-container" style={{backgroundColor: "#fafafa"}}>
        <MainNav fetchProducts={fetchProducts} mainNav={mainNav} picks={picks} />
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
