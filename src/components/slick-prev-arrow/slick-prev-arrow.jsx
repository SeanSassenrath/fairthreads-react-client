import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './slick-prev-arrow.css';

class SlickPrevArrow extends Component {
  render() {
    return (
      <div {...this.props} styleName='prev-arrow'></div>
    )
  }
}

export default CSSModules(SlickPrevArrow, styles);
