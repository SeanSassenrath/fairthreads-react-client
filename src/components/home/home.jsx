import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.css';

class Home extends Component {
  render() {
    return(
      <div className="homepage-container">
        <div className="hero" styleName="hero">
          <div className="row">
            <h1>Ethical fashion. Affordable prices.</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Home, styles);
