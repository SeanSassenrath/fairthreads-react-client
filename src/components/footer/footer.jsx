import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules'
import styles from './footer.css';

class Footer extends Component {

  render() {
    return(
      <footer styleName="footer">
        <h4>Footer text</h4>
      </footer>
    )
  }
}

export default CSSModules(Footer, styles)
