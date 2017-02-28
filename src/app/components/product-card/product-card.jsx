import React, { Component, PropTypes } from 'react';
import autobind from 'react-autobind';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './product-card.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    if (!this.props.isLoading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
  }

  componentWillUpdate(prevProps) {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.setState({ loading: true });
    } else if (!prevProps.isLoading && this.props.isLoading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
  }

  renderImageArea(product, isLoading) {
    const imagePlaceholder = isLoading ? styles['image-placeholder-active'] : styles['image-placeholder'];
    return (
      <div className={styles['image-container']}>
        <div className={imagePlaceholder} />
        { !isLoading ?
          <img
            src={product.imageOriginal}
            style={{ objectFit: product.objectFit }}
            role="presentation"
            className={styles.image}
          />
          : null
        }
      </div>
    );
  }

  render() {
    const { product } = this.props;
    const { loading } = this.state;
    return (
      <div id={product._id} className={styles.container}>
        <a href={product.vendUrl} target="_blank" rel="noopener noreferrer">
          {this.renderImageArea(product, loading) }
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
  }
}

ProductCard.propTypes = {
  product: PropTypes.ReactElement,
  isLoading: PropTypes.bool,
};

export default CSSModules(ProductCard, styles);
