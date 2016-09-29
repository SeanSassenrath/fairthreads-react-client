import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import CSSModules from 'react-css-modules';
import styles from './main-nav-link.css';

class MainNavLink extends Component {

  render() {
    return (
      <Link styleName="main-nav-link" activeClassName={styles.active}>
        {this.props.children}
      </Link>
    )
  }
}

export default CSSModules(MainNavLink, styles);
