import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './filter-nav.css';
import { stickyNav } from '../../helpers.js';

class FilterNav extends Component {

  componentDidMount() {
    stickyNav('#product-filter', 28)
  }

  render() {

    let {
      lowToHighProducts,
      highToLowProducts,
      toggleSaleOnly,
      showSaleOnly,
      priceRangeFilterValues,
      priceRangeFilter,
      priceRange,
      sortProducts,
    } = this.props;

    console.log('sortProducts', sortProducts)

    return(
      <div id="product-filter" styleName="filter-nav-container">
        <nav>
          <div styleName="styles">
            <ul>
              <li><span>Slim</span></li>
              <li><span>Straight</span></li>
              <li><span>Classic</span></li>
            </ul>
          </div>
          <div styleName="price">
            <ul>
              <li onClick={() => toggleSaleOnly()}><span styleName={showSaleOnly ? "filter-active" : null}>Sale</span></li>
              <li><span styleName={sortProducts === "lowToHigh" ? "filter-active" : null} onClick={() => lowToHighProducts()}>Lowest</span></li>
              <li><span styleName={sortProducts === "highToLow" ? "filter-active" : null} onClick={() => highToLowProducts()}>Highest</span></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default CSSModules(FilterNav, styles)
