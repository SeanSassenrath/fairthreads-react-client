import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Immutable from 'seamless-immutable';
import autobind from 'react-autobind';
import CSSModules from 'react-css-modules';
import ProductCard from '../product-card/product-card';
import styles from './products-container.css';

const Waypoint = require('react-waypoint');

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      lastPage: false,
    };
  }

  componentWillUpdate(prevProps) {
    const sameCategory = (prevProps.category === this.props.category);
    const samePage = (prevProps.page === this.props.page);
    console.log('prev props category', prevProps.category);
    console.log('this.props category', this.props.category);
    if (this.state.lastPage && !sameCategory) {
      console.log('update');
      this.setState({ lastPage: false });
    } else if (prevProps.page !== undefined && samePage && sameCategory && !this.state.lastPage) {
      console.log('dont update');
      this.setState({ lastPage: true });
    }
  }

  renderWaypoint() {
    const {
      products,
      additionalFetchProducts,
      gender,
      category,
      page,
      isLoading,
    } = this.props;
    const { lastPage } = this.state;

    // Only render Waypoint if there are products
    // and the initial product request has loaded
    if (products.length > 0 && !isLoading && isLoading !== undefined && !this.state.lastPage) {
      return <Waypoint onEnter={() => additionalFetchProducts(gender, category, page, products)} />;
    }
  }

  render() {
    const {
      products,
      additionalFetchProducts,
      gender,
      category,
      page,
      isLoading,
    } = this.props;

    return (
      <div id="products-container" styleName="products-container">
        <div styleName="wrapper">
          <div styleName="products">
            { products.length <= 0 && isLoading === false ?
              <div styleName="oops-container">
                <h2>Oops!</h2>
                <p>You caught us updating our {category} inventory. Please check back soon.</p>
              </div>
              : products.map((item, i) => {
                return (
                  <ProductCard product={item} key={i} isLoading={isLoading} />
                );
              })
            }
          </div>
          {this.renderWaypoint()}
        </div>
      </div>
    );
  }
}

ProductsContainer.propTypes = {
  additionalFetchProducts: PropTypes.func,
  gender: PropTypes.string,
  category: PropTypes.string,
  page: PropTypes.number,
  isLoading: PropTypes.bool,
};

export default CSSModules(ProductsContainer, styles);