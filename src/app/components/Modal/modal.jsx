import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CSSModules from 'react-css-modules';
import styles from './modal.css';

class Modal extends Component {

  render() {
    let {
      visible,
      transitionType
    } = this.props;

    return (
      {
        visible ?
          <ReactCSSTransitionGroup />
          <div>
            {this.props.children}
          </div>
      }
    )
  }
}
