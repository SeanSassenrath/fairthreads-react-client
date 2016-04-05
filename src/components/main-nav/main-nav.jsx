import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
              <li><Link to='/womens' onClick={() => mainNav("womens-clothes")}>Women</Link></li>
              <li><Link to='mens' onClick={() => mainNav("men")}>Men</Link></li>
              <li><Link to='about-us'>About Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default CSSModules(MainNav, styles);
