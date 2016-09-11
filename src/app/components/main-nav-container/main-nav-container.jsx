import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './main-nav-container.css';

class MainNavContainer extends Component {

  render() {
    return(
      <div styleName="main-nav-container">
        {this.props.children}
      </div>
    )
  }
}

export default CSSModules(MainNavContainer, styles);
