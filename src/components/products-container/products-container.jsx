import React, { Component, PropTypes } from 'react';
import ProductRow from '../product-row/product-row.jsx';
import ProductCard from '../product-card/product-card.jsx';
import { connect } from 'react-redux';
import { selectActions } from '../../selectors.js';
import { testSelector } from '../../selectors.js';
import { makeFourColumns } from '../../helpers.js';


class ProductsContainer extends Component {

  render() {
    let {
      items,
    } = this.props;

    console.log('sean', this.props)
    let rowKey = 0;
    const productRows = makeFourColumns(items);

    return(
      <div id="products-container">
        {
          productRows.map(function(productRow ) {
            return <ProductRow key={rowKey++} row={productRow} />
          })
        }
      </div>
    )
  }
}

export default connect(testSelector, selectActions)(ProductsContainer);
