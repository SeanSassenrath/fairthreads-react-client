import React, { Component, PropTypes } from 'react';
import ProductRow from '../product-row/product-row.jsx';
import ProductCard from '../product-card/product-card.jsx';
import FilterNav from '../filter-nav/filter-nav.jsx'
import { connect } from 'react-redux';
import { selectActions } from '../../selectors.js';
import { testSelector } from '../../selectors.js';
import { makeThreeColumns } from '../../helpers.js';
import LazyLoad from 'react-lazy-load';


class ProductsContainer extends Component {

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

    let rowKey = 0;
    const productRows = makeThreeColumns(items);

    return(
      <div id="products-container">
        <div className="row">
          <div className="small-2 columns">
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
          <div className="small-10 columns">
            <div style={{paddingTop: "25px"}}>
              {
                productRows.map(function(productRow ) {
                  return (
                    <LazyLoad height={380} offsetVertical={2000} onContentVisible={() => console.log('look ma I have been lazyloaded!')}>
                      <ProductRow key={rowKey++} row={productRow} />
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

export default connect(testSelector, selectActions)(ProductsContainer);
