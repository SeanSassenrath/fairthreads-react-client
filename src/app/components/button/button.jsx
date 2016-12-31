import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './button.css';

const Button = (props) => {
  const {
    link,
    to,
    children,
  } = props;
  const TagName = link ? Link : 'div';

  return (
    <TagName to={link || null} styleName="button" {...props}>
      {children}
    </TagName>
  );
};

Button.propTypes = {
  link: PropTypes.string,
  to: PropTypes.func,
  children: PropTypes.node,
};

export default CSSModules(Button, styles);
