import React, { Component, PropTypes } from 'react';
import Immutable from "seamless-immutable";
import CSSModules from 'react-css-modules';
import ProductCard from '../product-card/product-card.jsx';
import FilterNav from '../filter-nav/filter-nav.jsx'
import { connect } from 'react-redux';
import { selectActions } from '../../selectors.js';
import { testSelector } from '../../selectors.js';
import { makeThreeColumns } from '../../helpers.js';
import LazyLoad from 'react-lazy-load';
import styles from './products-container.css';


class ProductsContainer extends Component {

  componentDidMount() {
    let {
      selectGender,
      route
    } = this.props;
    var pathArray = this.props.route.path.split("/");
    selectGender(pathArray[1], pathArray[2]);
  }

  render() {
    let {
      items,
      lowToHighProducts,
      highToLowProducts,
      toggleSaleOnly,
      showSaleOnly,
      priceRangeFilterValues,
      priceRange,
      priceRangeFilter,
      sortProducts
    } = this.props;

    let mutableItems = Immutable(items).asMutable();
    let key = 0;

    return(
      <div id="products-container" styleName="products-container">
        <div styleName="wrapper">
          <div>
            <FilterNav
              lowToHighProducts={lowToHighProducts}
              highToLowProducts={highToLowProducts}
              toggleSaleOnly={toggleSaleOnly}
              showSaleOnly={showSaleOnly}
              priceRangeFilterValues={priceRangeFilterValues}
              priceRange={priceRange}
              priceRangeFilter={priceRangeFilter}
              sortProducts={sortProducts}
              />
          </div>
          <div>
            <div styleName="products">
              {
                mutableItems.map(function(item) {
                  return (
                    <LazyLoad key={key++} offset={1000} styleName="lazy-product">
                      <ProductCard product={item}/>
                    </LazyLoad>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const StyledProductsContainer = CSSModules(ProductsContainer, styles)

export default connect(testSelector, selectActions)(StyledProductsContainer);
