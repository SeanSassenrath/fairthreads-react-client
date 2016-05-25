import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './filter-nav.css';
import { stickyNav } from '../../helpers.js';

class FilterNav extends Component {

  componentDidMount() {
    stickyNav('#product-filter-container', 28)
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
      <div id="product-filter-container" styleName="filter-nav-container">
        <nav>
          <div>
            <ul>
              <li onClick={() => toggleSaleOnly()}><span className={showSaleOnly ? "filter-nav-active" : null}>Sale</span></li>
              <li><span className={sortProducts === "lowToHigh" ? "filter-nav-active" : null} onClick={() => lowToHighProducts()}>Lowest</span></li>
              <li><span className={sortProducts === "highToLow" ? "filter-nav-active" : null} onClick={() => highToLowProducts()}>Highest</span></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default CSSModules(FilterNav, styles)
