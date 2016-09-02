import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile-nav.css';

class MobileNav extends Component {

  render() {
    return (
      <div>
        <div styleName="menu" />
        <div>
        </div>
      </div>
    )
  }
}

export default CSSModules(MobileNav, styles);
