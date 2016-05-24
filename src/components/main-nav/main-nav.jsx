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
              <li><Link to='/womens' activeStyle={{ opacity: '1', color: "#333" }} onClick={() => mainNav("womens-clothes", items)}>Women</Link></li>
              <li><Link to='mens' activeStyle={{ opacity: '1', color: "#333" }} onClick={() => mainNav("men")}>Men</Link></li>
              <li>
                <Link to='/'><img src={logo} styleName="logo" /></Link>
              </li>
              <li>About</li>
              <li>Connect</li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default CSSModules(MainNav, styles);
