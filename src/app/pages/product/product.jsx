import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { appSelectors, selectActions } from '../../../selectors.js';
import CSSModules from 'react-css-modules';
import styles from './product.css';

class Product extends Component {

  componentDidMount() {
    let {
      fetchProduct,
      params
    } = this.props;

    fetchProduct(params.id);
  }

  componentWillReceiveProps(nextProps) {
    let {
      fetchProduct,
      params
    } = this.props;

    if (nextProps.params !== params) {
      fetchProduct(params.id);
    }
  }

  render() {
    let {
      item
    } = this.props;

    console.log('item', item)

    return (
      <div>
        <div>
          { item ? <img src={item.imageOriginal} /> : null }
        </div>
        <div>

        </div>
      </div>
    )
  }
}

const styledProduct = CSSModules(Product, styles);
export default connect(appSelectors, selectActions)(styledProduct);
