import React, { Component, PropTypes } from 'react';
import ProductsNav from '../../components/products-nav/products-nav.jsx';
import ProductsContainer from '../../components/products-container/products-container.jsx';
import { connect } from 'react-redux';
import { appSelectors, selectActions } from '../../../selectors.js';
import CSSModules from 'react-css-modules';
import styles from './products.css';

class Products extends Component {

  componentDidMount() {
    let {
      fetchProducts,
      params
    } = this.props;

    fetchProducts(params.store, params.category)
  }

  componentWillReceiveProps(nextProps) {
    let {
      fetchProducts,
      params
    } = this.props;

    if (nextProps.params !== params) {
      fetchProducts(nextProps.params.store, nextProps.params.category)
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
