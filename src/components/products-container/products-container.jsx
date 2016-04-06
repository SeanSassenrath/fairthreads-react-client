import React, { Component, PropTypes } from 'react';
import ProductRow from '../product-row/product-row.jsx';
import ProductCard from '../product-card/product-card.jsx';
import { makeFourColumns } from '../../helpers.js';


export default class ProductsContainer extends Component {

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
            return <Row key={rowKey++} row={productRow} />
          })
        }
      </div>
    )
  }
}
