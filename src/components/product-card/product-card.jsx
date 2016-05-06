import React, { Component, PropTypes } from 'react';

export default class ProductCard extends Component {

  render() {
    let {
      product,
    } = this.props;

    // console.log('product', product.name);

    return(
      <div className="small-6 large-4 columns">
        <div className="product" style={{width: "200px", margin: "0 auto", padding: "20px 0"}}>
          <a href={product.vendUrl}>
              <div style={{width: "100%", position: "relative", margin: "0 auto", backgroundColor: 'white'}}>
                <img src={product.imageOriginal} style={{width: "100%", display: "block", margin: "0 auto", objectFit: "contain" ,height:"281px", border: "1px solid #ccc"}} />
                <h6 style={{background: "black", opacity: ".6", color: "white", width: "100%", textAlign: "left", position: "absolute", bottom: "-3%", padding: "5px 0 5px 8px"}}>${product.salePrice ? <strike>{product.price}</strike> : product.price}</h6>
                {
                  product.salePrice ?
                    <h6 style={{color: "white", textAlign: "right", position: "absolute", bottom: "-3%", right: "0", padding: "5px 8px 5px 0"}}>${product.salePrice}</h6>
                  : null
                }
              </div>
              <div style={{paddingTop: "15px"}}>
                <h5 style={{textAlign: "center", color: "#2d2d34"}}>{product.name}</h5>
              </div>
            </a>
          </div>
      </div>
    )
  }
}
