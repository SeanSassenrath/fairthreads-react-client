import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './product-card.css';

class ProductCard extends Component {

  render() {
    let {
      product,
    } = this.props;

    // console.log('product', product.name);

    return(
      <div styleName="product">
        <a href={product.vendUrl}>
            <div styleName="img-container">
              <img src={product.imageOriginal} />
            </div>
            <div styleName="description">
              <h5>{product.name}</h5>
              <div>
                <h6 styleName="reg-price">${product.salePrice ? <strike>{product.price}</strike> : product.price}</h6>
                {
                  product.salePrice ?
                    <h6 styleName="sale-price">${product.salePrice}</h6>
                  : null
                }
              </div>
            </div>
          </a>
        </div>
      )
  }
}

export default CSSModules(ProductCard, styles);
