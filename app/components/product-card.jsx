import React, { Component, PropTypes } from 'react';

export default class ProductCard extends Component {

  render() {
    let {
      product
    } = this.props;

    console.log('product', product.name);

    return(
      <div className="small-6 large-3 columns">
          <img src={product.imageOriginal} style={{width: "80%", display: "block", margin: "0 auto", objectFit: "contain" ,maxHeight:"281px"}} />
      </div>
    )
  }
}
