import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './product-card.css';

class ProductCard extends Component {

  render() {
    let {
      product,
    } = this.props;

    return(
      <div id={product._id} styleName="product">
        <Link to={`/product/${product._id}`}>
            <div styleName="img-container">
              <img src={product.imageOriginal} style={{objectFit: product.objectFit}} />
            </div>
            <div styleName="description">
              <h5>{product.name}</h5>
              <h5 styleName="brand">{product.brand}</h5>
                {product.salePrice
                  ?
                    <div>
                      <h6 styleName="old-price">{`$${Math.ceil(product.price)}`}</h6>
                      <h6 styleName="sale-price">{`$${Math.ceil(product.salePrice)}`}</h6>
                    </div>
                  :
                    <div>
                      <h6 styleName="reg-price">{`$${Math.ceil(product.price)}`}</h6>
                    </div>
                }
            </div>
          </Link>
        </div>
      )
  }
}

export default CSSModules(ProductCard, styles);
