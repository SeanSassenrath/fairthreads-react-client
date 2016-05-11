import React, { Component, PropTypes } from 'react';

export default class ProductCard extends Component {

  render() {
    let {
      product,
    } = this.props;

    // console.log('product', product.name);

    return(
      <div className="small-6 large-4 columns">
        <div className="product" style={{width: "300px", margin: "0 auto", padding: "20px 0"}}>
          <a href={product.vendUrl}>
              <div style={{width: "100%", position: "relative", margin: "0 auto", backgroundColor: 'white'}}>
                <img src={product.imageOriginal} style={{width: "100%", display: "block", margin: "0 auto", objectFit: "contain", height:"384px"}} />
              </div>
              <div style={{paddingTop: "15px"}}>
                <h5 style={{textAlign: "center", color: "#2d2d34"}}>{product.name}</h5>
                <div style={{display: "flex", margin: "0 auto", justifyContent: "space-around", width: "40%"}}>
                  <h6 style={{color: "#2d2d34", padding: "5px 0 5px 8px", fontSize: "14px"}}>${product.salePrice ? <strike>{product.price}</strike> : product.price}</h6>
                  {
                    product.salePrice ?
                      <h6 style={{color: "#2d2d34", padding: "5px 8px 5px 0", fontSize: "14px"}}>${product.salePrice}</h6>
                    : null
                  }
                </div>
              </div>
            </a>
          </div>
      </div>
    )
  }
}
