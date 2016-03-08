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
              <li><span onClick={() => fetchProducts("womens-clothes")}>Women</span></li>
              <li><span onClick={() => fetchProducts("men")}>Men</span></li>
              <li><span>About Us</span></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
