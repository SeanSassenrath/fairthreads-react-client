import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import 'semantic-ui-dropdown/dropdown.css'
import CSSModules from 'react-css-modules';
import styles from './main-nav.css';
const logo = require("../../img/fairthreads-logo.png");

class MainNav extends Component {

  componentDidUpdate() {
    console.log('Updated')
  }
  render() {

    let {
      fetchProducts,
      mainNav,
      items,
      categoryList,
      addCategoryFilter
    } = this.props;

    return(
      <div id="main-nav" styleName="main-nav">
        <div className="wrapper" styleName="wrapper">
          <nav>
            <ul>
              <li>
                <div styleName="dropdown">
                  <Link to='/womens' activeStyle={{ opacity: '1', color: "#333" }} onClick={() => mainNav("womens-clothes", items)}>Women</Link>
                  <div styleName="dropdown-content">
                    <Link to='/womens' activeStyle={{ opacity: '1', color: "#333" }} onClick={() => mainNav("womens-clothes", items)}>Tops</Link>
                    <Link to='/womens' activeStyle={{ opacity: '1', color: "#333" }} onClick={() => mainNav("womens-clothes", items)}>Bottoms</Link>
                    <Link to='/womens' activeStyle={{ opacity: '1', color: "#333" }} onClick={() => mainNav("womens-clothes", items)}>Dresses</Link>
                  </div>
                </div>
              </li>
              <li><Link to='mens' activeStyle={{ opacity: '1', color: "#333" }} onClick={() => mainNav("men")}>Men</Link></li>
              <li>
                <Link to='/'><img src={logo} styleName="logo" /></Link>
              </li>
              <li><Link to='about' activeStyle={{ opacity: '1', color: "#333" }} onClick={() => mainNav("about")}>About</Link></li>
              <li><Link to='connect' activeStyle={{ opacity: '1', color: "#333" }} onClick={() => mainNav("connect")}>Connect</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default CSSModules(MainNav, styles);
