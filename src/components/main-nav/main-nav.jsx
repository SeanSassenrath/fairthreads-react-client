import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import 'semantic-ui-dropdown/dropdown.css'
import CSSModules from 'react-css-modules';
import styles from './main-nav.css';
const logo = require("../../img/fairthreads-white.png");

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
      <div id="main-nav-container" styleName="main-nav-container">
        <div className="row">
          <nav>
            <div styleName="logo">
              <img src={logo} />
            </div>
            <ul>
              <li><Link to='/womens' activeStyle={{ opacity: '1', color: "white" }} onClick={() => mainNav("womens-clothes", items)}>Women</Link></li>
              <li><Link to='mens' activeStyle={{ opacity: '1', color: "white" }} onClick={() => mainNav("men", items)}>Men</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default CSSModules(MainNav, styles);
