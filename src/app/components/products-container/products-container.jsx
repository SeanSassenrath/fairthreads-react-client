import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Immutable from 'seamless-immutable';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import styles from './products-container.css';
import ProductCard from '../product-card/product-card.jsx';
const Waypoint = require('react-waypoint');


class ProductsContainer extends Component {

  constructor() {
    super();
    autoBind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  renderProducts() {
    const { products } = this.props;
    const mutableItems = Immutable(products).asMutable();

    mutableItems.map((item, i) => {
      return (
        <div styleName="lazy-product" key={i}>
          <ProductCard product={item} />
        </div>
      );
    });
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

    if (!isLoading && isLoading !== undefined) {
      return <Waypoint onEnter={() => additionalFetchProducts(gender, category, page, products)} />;
    }
  }

  render() {
    return (
      <div id="products-container" styleName="products-container">
        <div styleName="wrapper">
          <div styleName="products">
            {this.renderProducts()}
          </div>
          {this.renderWaypoint()}
        </div>
      </div>
    );
  }
}

export default CSSModules(ProductsContainer, styles);
