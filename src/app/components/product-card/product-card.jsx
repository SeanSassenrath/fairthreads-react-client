import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './product-card.css';

const renderImageArea = (product, isLoading) => {
  const imagePlaceholder = isLoading ? styles['image-placeholder-active'] : styles['image-placeholder'];
  return (
    <div className={styles['image-container']}>
      <div className={imagePlaceholder} />
    </div>
  );
};

const ProductCard = (props) => {
  const { product, isLoading } = props;

  return (
    <div id={product._id} className={styles.container}>
      <a href={product.vendUrl} target="_blank" rel="noopener noreferrer">
        { renderImageArea(product, isLoading) }
        <div>
          <span className={styles.brand}>{product.brand}</span>
          <span className={styles.name}>{product.name}</span>
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
  product: PropTypes.ReactElement,
  isLoading: PropTypes.bool,
};

export default CSSModules(ProductCard, styles);
