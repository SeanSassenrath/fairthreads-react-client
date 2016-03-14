import React, { Component, PropTypes } from 'react';

export default class ProductFilters extends Component {

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
      homepage
    } = this.props;

    console.log('sortProducts', sortProducts)

    return(
      <div id="product-filter-container" style={{display: homepage === true ? "none" : "block"}}>
        <div className="row">
          <nav>
            <ul style={{textAlign: "center"}}>
              <li onClick={() => toggleSaleOnly()}><span className={showSaleOnly ? "filter-nav-active" : null}>Sale</span></li>
              <li><span className={sortProducts === "lowToHigh" ? "filter-nav-active" : null} onClick={() => lowToHighProducts()}>Lowest</span></li>
              <li><span className={sortProducts === "highToLow" ? "filter-nav-active" : null} onClick={() => highToLowProducts()}>Highest</span></li>
              <li><span className={priceRange === "lowPriceRange" ? "filter-nav-active" : null} onClick={() => priceRangeFilter(0, 50, "lowPriceRange", priceRange)}>Under $50</span></li>
              <li><span className={priceRange === "midPriceRange" ? "filter-nav-active" : null} onClick={() => priceRangeFilter(50, 150, "midPriceRange", priceRange)}>$50 - $150</span></li>
              <li><span className={priceRange === "highPriceRange" ? "filter-nav-active" : null} onClick={() => priceRangeFilter(150, 250, "highPriceRange", priceRange)}>$150 - $250+</span></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
