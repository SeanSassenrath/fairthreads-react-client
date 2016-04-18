import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.css';

class Home extends Component {
  render() {
    return(
      <div className="homepage-container">
        <div className="hero" styleName="hero1">
          <div className="row">
            <div className="small-5 columns">
              <h1>Ethical fashion. Affordable prices.</h1>
            </div>
            <div className="small-7 columns">
              <div styleName="hero-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Home, styles);
