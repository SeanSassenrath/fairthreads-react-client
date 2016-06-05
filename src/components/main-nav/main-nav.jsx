import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import 'semantic-ui-dropdown/dropdown.css'
import CSSModules from 'react-css-modules';
import styles from './main-nav.css';
const logo = require("../../img/fairthreads-logo.png");

class MainNav extends Component {

  render() {

    let {
      fetchProducts,
      mainNav,
    } = this.props;

    return(
      <div id="main-nav" styleName="main-nav">
        <div className="wrapper" styleName="wrapper">
          <nav>
            <ul>
              <li>
                <div styleName="dropdown">
                  <Link to='/womens' activeStyle={{ opacity: '1', color: "#333" }} styleName="dropdown-action" onClick={() => mainNav("womens-clothes", "favorites")}>Women</Link>
                  <div id="womens-dropdown" styleName="dropdown-content">
                    <Link to='/womens/tops' onClick={() => mainNav("womens-clothes", "tops")}>Tops</Link>
                    <Link to='/womens/bottoms' onClick={() => mainNav("womens-clothes", "bottoms")}>Bottoms</Link>
                    <Link to='/womens/dresses' onClick={() => mainNav("womens-clothes", "dresses")}>Dresses</Link>
                    <Link to='/womens/shoes' onClick={() => mainNav("womens-clothes", "shoes")}>Shoes</Link>
                    <Link to='/womens/underwear' onClick={() => mainNav("womens-clothes", "underwear")}>Athleisure</Link>
                    <Link to='/womens/underwear' onClick={() => mainNav("womens-clothes", "underwear")}>Underwear</Link>
                  </div>
                </div>
              </li>
              <li>
                <div styleName="dropdown">
                  <Link to='/mens' activeStyle={{ opacity: '1', color: "#333" }} styleName="dropdown-action" onClick={() => mainNav("men")}>Men</Link>
                  <div id="mens-dropdown" styleName="dropdown-content">
                    <Link to='/womens' onClick={() => mainNav("womens-clothes")}>Tops</Link>
                    <Link to='/womens' onClick={() => mainNav("womens-clothes")}>Bottoms</Link>
                    <Link to='/womens' onClick={() => mainNav("womens-clothes")}>Shoes</Link>
                    <Link to='/womens' onClick={() => mainNav("womens-clothes")}>Active</Link>
                    <Link to='/womens' onClick={() => mainNav("womens-clothes")}>Underware</Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to='/'><img src={logo} styleName="logo" /></Link>
              </li>
              <li>
                <Link to='about' activeStyle={{ opacity: '1', color: "#333" }} onClick={() => mainNav("about")}>About</Link>
              </li>
              <li>
                <div styleName="dropdown">
                  <Link to='/connect' activeStyle={{ opacity: '1', color: "#333" }} styleName="dropdown-action" onClick={() => mainNav("men")}>Connect</Link>
                  <div id="connect-dropdown" styleName="dropdown-content">
                    <Link to='/womens' onClick={() => mainNav("womens-clothes", items)}>Message</Link>
                    <Link to='/womens' onClick={() => mainNav("womens-clothes", items)}>Instagram</Link>
                    <Link to='/womens' onClick={() => mainNav("womens-clothes", items)}>Facebook</Link>
                    <Link to='/womens' onClick={() => mainNav("womens-clothes", items)}>Snapchat</Link>
                    <Link to='/womens' onClick={() => mainNav("womens-clothes", items)}>Blog</Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default CSSModules(MainNav, styles);
