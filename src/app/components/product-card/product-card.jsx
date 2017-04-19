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
            src={product.images.imageOriginal}
            style={{ objectFit: product.css.objectFit }}
            role="presentation"
            className={styles.image}
          />
          : null
        }
      </div>
    );
  }

  render() {
    console.log('product-card props', this.props);
    const { brand, details, _id, name, prices } = this.props.product;
    const { loading } = this.state;
    return (
      <div id={_id} className={styles.container}>
        <a href={details.vendUrl} target="_blank" rel="noopener noreferrer">
          { this.renderImageArea(this.props.product, loading) }
          <div>
            <span className={styles.brand}>{brand.name}</span>
            <span className={styles.name}>{details.name}</span>
            {prices.salePrice
              ?
                <div className={styles['price-container']}>
                  <span className={styles['old-price']}>{`$${Math.ceil(prices.price)}`}</span>
                  <span>{`$${Math.ceil(prices.salePrice)}`}</span>
                </div>
              :
                <div className={styles['price-container']}>
                  <span>{`$${Math.ceil(prices.price)}`}</span>
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
