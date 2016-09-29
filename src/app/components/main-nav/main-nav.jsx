import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import MainNavLink from './main-nav-link.jsx';
import { mainNavRoutes } from './main-nav-routes.js';
import CSSModules from 'react-css-modules';
import styles from './main-nav.css';
const logo = require("../../../img/fairthreads-logo.png");

class MainNav extends Component {

  render() {
    console.log('main nav routes', mainNavRoutes)

    let {
      fetchProducts,
      mainNav,
      picks,
    } = this.props;

    return(
      <div id="main-nav" styleName="main-nav">
        <div>
          <nav>
            <div>
              <h1 styleName='logo'>
                <Link to='/'>Fairthreads</Link>
              </h1>
            </div>
            <div>
              <ul>
                {
                  mainNavRoutes.map((route) => {
                    return (
                      <li>
                        <div styleName='dropdown'>
                          <MainNavLink to={route.path}>
                            {route.name}
                          </MainNavLink>
                          <div styleName="dropdown-content">
                            <div styleName="list-container">
                              {
                                route.subNav ?
                                  route.subNav.map((i) => {
                                    return (
                                      <ul>
                                        { i.column.map((subRoute) => {
                                            return (
                                              <li>
                                                <Link to={subRoute.path}>{subRoute.name}</Link>
                                              </li>
                                            )
                                          })
                                        }
                                      </ul>
                                    )
                                }) : null
                              }
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default CSSModules(MainNav, styles);
