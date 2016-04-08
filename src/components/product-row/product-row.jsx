import React, { Component, PropTypes} from 'react';
import ProductCard from '../product-card/product-card.jsx';

export default class ProductRow extends Component {


  render() {
    let productKey = 0;
    let {
      row
    } = this.props;

    // console.log("Row Props", row);

    return(
        <div className="row">
            {
              row.map(function(product) {
                return <ProductCard key={productKey++} product={product}/>
              })
            }
        </div>
    )
  }
}
