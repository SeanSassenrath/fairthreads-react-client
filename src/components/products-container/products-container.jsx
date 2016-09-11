import React, { Component, PropTypes } from 'react';
import Immutable from "seamless-immutable";
import CSSModules from 'react-css-modules';
import ProductCard from '../product-card/product-card.jsx';
import FilterNav from '../filter-nav/filter-nav.jsx'
import { connect } from 'react-redux';
import { selectActions } from '../../selectors.js';
import { testSelector } from '../../selectors.js';
import styles from './products-container.css';
var Waypoint = require('react-waypoint');


class ProductsContainer extends Component {

  componentDidMount() {
    let {
      selectGender,
      route
    } = this.props;
    var pathArray = this.props.route.path.split("/");
    selectGender(pathArray[1], pathArray[2]);
    console.log("Products-container mounting...")
  }

  componentWillReceiveProps() {
    console.log("Products-container will receive props...")
    console.log('this.props', this.props)
  }

  // componentWillUpdate() {
  //   console.log("Products-container will update...")
  //   console.log('this.props', this.props)
  // }
  //
  // componentDidUpdate() {
  //   console.log("Products-container did update...")
  //   console.log('this.props', this.props)
  // }

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
                mutableItems.map((item, i) => {
                  return (
                    <div styleName="lazy-product">
                      <ProductCard product={item}/>
                    </div>
                  )
                })
              }
            </div>
            {
              /* TODO - Add WayPoint for infinite scroll
              i.e. Load the first 30 items > 60 items > 90...
              <Waypoint onEnter={() => console.log("entered")}/>
              */
            }
          </div>
        </div>
      </div>
    )
  }
}

const StyledProductsContainer = CSSModules(ProductsContainer, styles)

export default connect(testSelector, selectActions)(StyledProductsContainer);
