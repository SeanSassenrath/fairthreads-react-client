import React, { Component, PropTypes } from 'react';
import { stickyNav } from '../helpers.js';

export default class ProductNav extends Component {

  componentDidMount() {
    stickyNav('#product-nav-container', 28)
  }

  render() {

    let {
      fetchProducts
    } = this.props;

    return(
      <div id="product-nav-container">
        <div className="row">
          <nav>
            <ul>
              <li>
                <span onClick={() =>      fetchProducts("womens-clothes")}>Ladies</span> / <span onClick={() => fetchProducts("men")}>Gents</span></li>
              <li>All Clothes</li>
              <li>All Prices</li>
              <li>Sale</li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
