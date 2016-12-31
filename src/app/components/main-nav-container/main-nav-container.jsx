import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './main-nav-container.css';

const MainNavContainer = (props =>
  <div styleName="main-nav-container">
    {props.children}
  </div>
);

MainNavContainer.propTypes = {
  children: PropTypes.node,
};

export default CSSModules(MainNavContainer, styles);
