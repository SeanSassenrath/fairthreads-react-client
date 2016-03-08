import React, { Component, PropTypes } from 'react';

export default class ProductFilters extends Component {

  render() {

    let {
      lowToHighProducts,
      highToLowProducts,
      toggleSaleOnly,
      showSaleOnly,
    } = this.props;

    return(
      <div id="product-filter-container">
        <div className="row">
          <nav>
            <ul style={{textAlign: "center"}}>
              <li onClick={() => toggleSaleOnly()}><span className={showSaleOnly ? "nav-active" : null}>Sale</span></li>
              <li><span onClick={() => lowToHighProducts()}>Lowest</span></li>
              <li><span onClick={() => highToLowProducts()}>Highest</span></li>
              <li><span onClick={() => highToLowProducts()}>Under $50</span></li>
              <li><span onClick={() => highToLowProducts()}>$50 - $150</span></li>
              <li><span onClick={() => highToLowProducts()}>$150 - $250+</span></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
