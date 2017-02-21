import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './main-nav-link.css';

const MainNavLink = (props) => {
  return (
    <Link styleName="main-nav-link" {...props}>
      {props.children}
    </Link>
  );
};

MainNavLink.propTypes = {
  children: PropTypes.node,
};

export default CSSModules(MainNavLink, styles);
