import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectActions } from '../selectors.js';
import { testSelector } from '../selectors.js';
import Immutable from 'seamless-immutable';
import Row from './product-row/product-row.jsx';
import MainNavContainer from './main-nav-container/main-nav-container.jsx';
import MainNav from './main-nav/main-nav.jsx';
import MobileNav from './mobile-nav/mobile-nav';
import Footer from './footer/footer.jsx';

class App extends Component {

  constructor() {
    super();
    this.state = {
      windowSize: window.innerWidth
    }
    this.getWindowSize = this.getWindowSize.bind(this);
  }

  getWindowSize() {
    this.setState({windowSize: window.innerWidth});
  }

  componentDidMount() {
    this.props.fetchStylistPickTeasers();
    console.log("Window width", window.innerWidth)
    window.onresize = () => this.getWindowSize();
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
        <MainNavContainer>
          {
            (this.state.windowSize > 760) ?
              <MainNav fetchProducts={fetchProducts} mainNav={mainNav} picks={picks} />
            : <MobileNav />
          }
        </MainNavContainer>
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
