import React, { Component, PropTypes } from 'react';
import { stickyNav } from '../../helpers.js';
import CSSModules from 'react-css-modules';
import styles from './main-nav.css';

class MainNav extends Component {

  componentDidMount() {
    stickyNav('#product-nav-container', 28)
  }

  render() {

    let {
      fetchProducts,
      mainNav
    } = this.props;

    return(
      <div id="product-nav-container" styleName="product-nav-container">
        <div className="row">
          <nav>
            <ul style={{textAlign: "center"}}>
              <li><span onClick={() => mainNav("womens-clothes")}>Women</span></li>
              <li><span onClick={() => mainNav("men")}>Men</span></li>
              <li><span>About Us</span></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default CSSModules(MainNav, styles);
