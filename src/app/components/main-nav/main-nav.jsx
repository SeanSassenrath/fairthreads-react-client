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
                  <Link to='/womens' activeStyle={{ borderBottom: '1px solid #C7625B' }}>Women</Link>
                  <div id="womens-dropdown" styleName="dropdown-content">
                    <div styleName="list-container">
                      <ul>
                        <li><Link to='/womens/tops'>Tops</Link></li>
                        <li><Link to='/womens/bottoms'>Bottoms</Link></li>
                        <li><Link to='/womens/dresses'>Dresses & Jumpsuits</Link></li>
                      </ul>
                      <ul>
                        <li><Link to='/womens/shoes'>Shoes</Link></li>
                        <li><Link to='/womens/active-wear'>Athleisure</Link></li>
                        <li><Link to='/womens/underwear'>Underwear</Link></li>
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
                  <Link to='/mens' activeStyle={{ opacity: '1', color: "#333" }} styleName="dropdown-action">Men</Link>
                  <div id="mens-dropdown" styleName="dropdown-content">
                    <div styleName="list-container">
                      <ul>
                        <li><Link to='/mens/tops'>Tops</Link></li>
                        <li><Link to='/mens/bottoms'>Bottoms</Link></li>
                        <li><Link to='/mens/shoes'>Shoes</Link></li>
                      </ul>
                      <ul>
                        <li><Link to='/mens/active-wear'>Active</Link></li>
                        <li><Link to='/mens/underwear'>Underwear</Link></li>
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
              <li><Link to='/about' activeStyle={{ opacity: '1', color: "#333" }}>About</Link></li>
              <li><Link to='/contact' activeStyle={{ opacity: '1', color: "#333" }}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default CSSModules(MainNav, styles);
