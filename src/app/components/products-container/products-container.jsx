import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Immutable from "seamless-immutable";
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import ProductCard from '../product-card/product-card.jsx';
import styles from './products-container.css';
const Waypoint = require('react-waypoint');

const renderWaypoint = (props) => {
  const {
    products,
    additionalFetchProducts,
    gender,
    category,
    page,
    isLoading,
  } = props;

  if (!isLoading && isLoading !== undefined) {
    return <Waypoint onEnter={() => additionalFetchProducts(gender, category, page, products)} />;
  }
};

const ProductsContainer = (props) => {
  return (
    <div id="products-container" styleName="products-container">
      <div styleName="wrapper">
        <div styleName="products">
          { props.products.length <= 0 && props.isLoading === false ?
              <div styleName="oops-container">
                <h2>Oops!</h2>
                <p>You caught us updating our {props.category} inventory. Please check back soon.</p>
              </div>
            : props.products.map((item, i) => {
              return (
                <div styleName="lazy-product" key={i}>
                  <ProductCard product={item} />
                </div>
              );
            })
          }
        </div>
        {renderWaypoint(props)}
      </div>
    </div>
  );
};

ProductsContainer.propTypes = {
  products: PropTypes.array,
  additionalFetchProducts: PropTypes.func,
  gender: PropTypes.string,
  category: PropTypes.string,
  page: PropTypes.number,
  isLoading: PropTypes.bool,
};

export default CSSModules(ProductsContainer, styles);
