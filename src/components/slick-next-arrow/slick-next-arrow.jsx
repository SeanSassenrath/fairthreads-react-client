import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './slick-next-arrow.css';

class SlickNextArrow extends Component {
  render() {
    return (
      <div {...this.props} styleName='next-arrow'></div>
    )
  }
}

export default CSSModules(SlickNextArrow, styles);
