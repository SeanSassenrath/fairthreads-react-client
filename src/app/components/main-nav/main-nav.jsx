import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './main-nav.css';
const logo = require("../../../img/fairthreads-logo.png");

class MainNav extends Component {

  render() {

    let {
      fetchProducts,
      mainNav,
      picks,
    } = this.props;

    return(
      <div id="main-nav" styleName="main-nav">
        <div className="wrapper" styleName="wrapper">
          <nav>
            <ul>
              <li>
                <div styleName="dropdown">
                  <Link to='/womens' activeStyle={{ borderBottom: '1px solid #C7625B' }} styleName="dropdown-action" onClick={() => mainNav("womens-clothes")}>Women</Link>
                  <div id="womens-dropdown" styleName="dropdown-content">
                    <div styleName="list-container">
                      <ul>
                        <li>
                          <Link to='/womens/tops' onClick={() => mainNav("womens-clothes", "tops")}>Tops</Link>
                        </li>
                        <li>
                          <Link to='/womens/bottoms' onClick={() => mainNav("womens-clothes", "bottoms")}>Bottoms</Link>
                        </li>
                        <li>
                          <Link to='/womens/dresses' onClick={() => mainNav("womens-clothes", "dresses")}>Dresses & Jumpsuits</Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link to='/womens/shoes' onClick={() => mainNav("womens-clothes", "shoes")}>Shoes</Link>
                        </li>
                        <li>
                          <Link to='/womens/active-wear' onClick={() => mainNav("womens-clothes", "active-wear")}>Athleisure</Link>
                        </li>
                        <li>
                          <Link to='/womens/underwear' onClick={() => mainNav("womens-clothes", "underwear")}>Underwear</Link>
                        </li>
                      </ul>
                      <div>
                        {/*
                        { picks ? <img styleName="stylistPickNav" src={picks.women.imageOriginal} /> : null }
                        */}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div styleName="dropdown">
                  <Link to='/mens' activeStyle={{ opacity: '1', color: "#333" }} styleName="dropdown-action" onClick={() => mainNav("men")}>Men</Link>
                  <div id="mens-dropdown" styleName="dropdown-content">
                    <div styleName="list-container">
                      <ul>
                        <li>
                          <Link to='/mens/tops' onClick={() => mainNav("men", "tops")}>Tops</Link>
                        </li>
                        <li>
                          <Link to='/mens/bottoms' onClick={() => mainNav("men", "bottoms")}>Bottoms</Link>
                        </li>
                        <li>
                          <Link to='/mens/shoes' onClick={() => mainNav("men", "shoes")}>Shoes</Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link to='/mens/active-wear' onClick={() => mainNav("men", "active-wear")}>Active</Link>
                        </li>
                        <li>
                          <Link to='/mens/underwear' onClick={() => mainNav("men", "underwear")}>Underwear</Link>
                        </li>
                      </ul>
                      {/*
                      <div>
                        { picks ? <img styleName="stylistPickNav" src={picks.men.imageOriginal} /> : null }
                      </div>
                      */}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to='/'><img src={logo} styleName="logo" /></Link>
              </li>
              <li>
                <Link to='/about' activeStyle={{ opacity: '1', color: "#333" }} onClick={() => mainNav("about")}>About</Link>
              </li>
              <li>
                <div styleName="dropdown">
                  <Link to='/contact' activeStyle={{ opacity: '1', color: "#333" }} styleName="dropdown-action" onClick={() => mainNav("men")}>Contact</Link>
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
