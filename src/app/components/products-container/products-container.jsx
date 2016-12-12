import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Immutable from "seamless-immutable";
import CSSModules from 'react-css-modules';
import ProductCard from '../product-card/product-card.jsx';
import styles from './products-container.css';
const Waypoint = require('react-waypoint');


class ProductsContainer extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      products,
      additionalFetchProducts,
      gender,
      category,
      page,
    } = this.props;

    const mutableItems = Immutable(products).asMutable();

    return (
      <div id="products-container" styleName="products-container">
        <div styleName="wrapper">
          <div styleName="products">
            {
              mutableItems.map((item, i) => {
                return (
                  <div styleName="lazy-product" key={i}>
                    <ProductCard product={item} />
                  </div>
                );
              })
            }
          </div>
          {/*<Waypoint onEnter={() => additionalFetchProducts(gender, category, page, products)} />*/}
          <Waypoint onEnter={() => console.log('Hitting Waypoint')} bottomOffset="-40%" />
        </div>
      </div>
    );
  }
}

export default CSSModules(ProductsContainer, styles);
