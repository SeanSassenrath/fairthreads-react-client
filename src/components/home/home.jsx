import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.css';

class Home extends Component {
  render() {
    return(
      <div className="homepage-container" styleName="homepage">
        <div className="hero" styleName="hero">
          <div className="wrapper" styleName="wrapper">
              <h1>Fashion with <br />integrity</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Home, styles);
