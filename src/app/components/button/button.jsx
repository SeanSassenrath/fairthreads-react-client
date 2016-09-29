import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import CSSModules from 'react-css-modules';
import styles from './button.css';

class Button extends Component {

  render() {
    let {
      link,
      to,
      children
    } = this.props;

    const TagName = link ? Link : 'div';
    return (
      <TagName to={ link ? link : null} styleName="button">
        {children}
      </TagName>
    )
  }
}

export default CSSModules(Button, styles)
