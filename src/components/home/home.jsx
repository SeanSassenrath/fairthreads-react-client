import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.css';

class Home extends Component {
  render() {
    return(
      <div className="homepage-container">
        <div className="hero" styleName="hero">
          <div className="row">
            <header>
              <h1>Fashion<br/>With<br/>Integrity</h1>
            </header>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Home, styles);
