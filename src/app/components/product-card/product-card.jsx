import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './product-card.css';

const ProductCard = ({ product }) => {
  return (
    <div id={product._id} className={styles.container}>
      <a href={product.vendUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={product.imageOriginal}
          style={{ objectFit: product.objectFit }}
          role="presentation"
          className={styles.image}
        />
        <div>
          <span className={styles.brand}>{product.brand}</span>
          {/* Do this in the API */}
          <span className={styles.name}>{(product.name).replace(`${product.brand} `, '')}</span>
          {product.salePrice
            ?
              <div className={styles['price-container']}>
                <span className={styles['old-price']}>{`$${Math.ceil(product.price)}`}</span>
                <span>{`$${Math.ceil(product.salePrice)}`}</span>
              </div>
            :
              <div className={styles['price-container']}>
                <span>{`$${Math.ceil(product.price)}`}</span>
              </div>
            }
        </div>
      </a>
    </div>
  );
};


ProductCard.propTypes = {
  product: PropTypes.element,
};

export default CSSModules(ProductCard, styles);
