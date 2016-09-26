import React, { Component, PropTypes } from 'react';
import contentful from 'contentful';
import CSSModules from 'react-css-modules';
import styles from './blog.css';

class Blog extends Component {

  render() {
    return (
      <div>
        Test
      </div>
    )
  }
}

default export CSSModules(Blog, styles);
