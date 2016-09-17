import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import ProductsNav from '../../components/products-nav/products-nav.jsx';
import ProductsContainer from '../../components/products-container/products-container.jsx';
import { connect } from 'react-redux';
import { appSelectors, selectActions } from '../../../selectors.js';
import CSSModules from 'react-css-modules';
import styles from './products.css';

class Products extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    let {
      initialFetchProducts,
      params
    } = this.props;

    initialFetchProducts(params.store, params.category)
  }

  componentWillReceiveProps(nextProps) {
    let {
      initialFetchProducts,
      params
    } = this.props;

    if (nextProps.params !== params) {
      initialFetchProducts(nextProps.params.store, nextProps.params.category)
    }
  }

  getBreadCrumbs() {
    let breadCrumbs = [];

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
      sortProducts,
      props
    } = this.props;

    return (
      <div {...props}>
        <ProductsNav
          lowToHighProducts={lowToHighProducts}
          highToLowProducts={highToLowProducts}
          toggleSaleOnly={toggleSaleOnly}
          showSaleOnly={showSaleOnly}
          priceRangeFilterValues={priceRangeFilterValues}
          priceRange={priceRange}
          priceRangeFilter={priceRangeFilter}
          sortProducts={sortProducts}
          breadCrumbs={this.props.params}
        />
        <ProductsContainer products={items} />
      </div>
    )
  }
}

const styledProducts = CSSModules(Products, styles)
export default connect(appSelectors, selectActions)(styledProducts);
