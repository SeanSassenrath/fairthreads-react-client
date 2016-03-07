import React, { Component, PropTypes } from 'react';
import { stickyNav } from '../helpers.js';

export default class ProductNav extends Component {

  componentDidMount() {
    stickyNav('#product-nav-container', 28)
  }

  render() {

    let {
      fetchProducts,
      toggleSaleOnly,
      showSaleOnly,
    } = this.props;

    return(
      <div id="product-nav-container">
        <div className="row">
          <nav>
            <ul style={{textAlign: "center"}}>
              <li><span onClick={() => fetchProducts("womens-clothes")}>Ladies</span></li>
              <li><span onClick={() => fetchProducts("men")}>Gents</span></li>
              <li><span>All Clothes</span></li>
              <li onClick={() => toggleSaleOnly()}><span className={showSaleOnly ? "nav-active" : null}>Sale</span></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
