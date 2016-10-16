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

    let key = 0;

    return(
      <div id="main-nav" styleName="main-nav">
        <div>
          <nav>
            <div styleName='logo-container'>
              <h1 styleName='logo'>
                <Link to='/'>Fairthreads</Link>
              </h1>
            </div>
            <div>
              <ul>
                {
                  mainNavRoutes.map((route) => {
                    return (
                      <li key={`route-${key++}`}>
                        <div styleName='dropdown'>
                          <MainNavLink to={route.path}>
                            {route.name}
                          </MainNavLink>
                              {
                                route.subNav ?
                                <div styleName="dropdown-content">
                                  <div styleName="list-container">
                                    {route.subNav.map((i) => {
                                      return (
                                        <ul key={`i-${key++}`}>
                                          { i.column.map((subRoute) => {
                                              return (
                                                <li key={`subRoute-${key++}`}>
                                                  <Link to={subRoute.path}>{subRoute.name}</Link>
                                                </li>
                                              )
                                            })
                                          }
                                        </ul>
                                      )
                                    })
                                  }
                                </div>
                              </div>
                              : null
                              }
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
