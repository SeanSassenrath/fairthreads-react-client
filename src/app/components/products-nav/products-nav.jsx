import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './products-nav.css';
import { stickyNav } from '../../../helpers.js';

class ProductsNav extends Component {

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
      breadCrumbs
    } = this.props;

    console.log('sortProducts', sortProducts)

    return(
      <div id="product-filter" styleName="filter-nav-container">
        <nav>
          <div styleName="breadcrumbs">
            <Link to="">{breadCrumbs.store}</Link>
            {
              breadCrumbs.category ?
                <Link to=""> / {breadCrumbs.category}</Link>
              : null
            }
          </div>
          <div styleName="actions-container">
            <div>
              <p styleName="sort-by">Sort By:</p>
              <ul>
                <li><span styleName={sortProducts === "lowToHigh" ? "filter-active" : null} onClick={() => lowToHighProducts()}>Lowest</span></li>
                <li><span styleName={sortProducts === "highToLow" ? "filter-active" : null} onClick={() => highToLowProducts()}>Highest</span></li>
              </ul>
            </div>
            <div>
              <p styleName="filter-by">Filter By:</p>
              <ul>
                <li onClick={() => toggleSaleOnly()}><span styleName={showSaleOnly ? "filter-active" : null}>Sale</span></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default CSSModules(ProductsNav, styles)
