import React, { Component, PropTypes } from 'react';

export default class ProductCard extends Component {

  render() {
    let {
      product
    } = this.props;

    console.log('product', product.name);

    return(
      <div className="small-6 large-3 columns">
        <div className="product" style={{width: "95%", margin: "0 auto", padding: "20px 0"}}>
          <div style={{width: "89%", position: "relative", margin: "0 auto"}}>
            <img src={product.imageOriginal} style={{width: "100%", display: "block", margin: "0 auto", objectFit: "contain" ,maxHeight:"281px", border: "1px solid gray"}} />
            <h5 style={{background: "black", opacity: ".6", color: "white", width: "30%", textAlign: "right", position: "absolute", bottom: "5%", paddingRight: "8px"}}>${product.price}</h5>
            {
              product.salePrice ?
                <h5 style={{background: "black", opacity: ".6", color: "white", width: "30%", textAlign: "right", position: "absolute", bottom: "5%", right: "0", paddingRight: "8px"}}>${product.salePrice}</h5>
              : null
            }
          </div>
          <h5 style={{textAlign: "center"}}>{product.name}</h5>
        </div>
      </div>
    )
  }
}
