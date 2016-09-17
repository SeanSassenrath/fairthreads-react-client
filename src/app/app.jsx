import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectActions } from '../selectors.js';
import { testSelector } from '../selectors.js';
import Immutable from 'seamless-immutable';
import Row from './components/product-row/product-row.jsx';
import MainNavContainer from './components/main-nav-container/main-nav-container.jsx';
import MainNav from './components/main-nav/main-nav.jsx';
import MobileNav from './components/mobile-nav/mobile-nav';
import Footer from './components/footer/footer.jsx';

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
      props,
    } = this.props;

    return (
      <div className="app-container" styleName='app' {...props}>
        <MainNavContainer>
          {
            (this.state.windowSize > 760) ?
              <MainNav fetchProducts={fetchProducts} mainNav={mainNav} picks={picks} />
            :
              <MobileNav fetchProducts={fetchProducts} mainNav={mainNav} picks={picks} />
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
}

export default connect(testSelector, selectActions)(App);
