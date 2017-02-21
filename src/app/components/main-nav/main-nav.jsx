import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import MainNavLink from './main-nav-link';
import { mainNavRoutes } from './main-nav-routes';
import styles from './main-nav.css';

const logo = require('../../../img/fairthreads-logo.png');

const MainNavLinkWrapper = (props) => {
  const {
    route,
  } = props;

  return (
    <li className={styles['list-item']}>
      <div className={styles.dropdown}>
        <MainNavLink to={mainNavRoutes[route].path}>
          { mainNavRoutes[route].name }
        </MainNavLink>
        { mainNavRoutes[route].subNavs ?
          <DropdownContentWrapper route={route} styles={styles} />
          : null
        }
      </div>
    </li>
  );
};

MainNavLinkWrapper.propTypes = {
  route: PropTypes.string,
};

const DropdownContentWrapper = (props) => {
  const {
    route,
  } = props;

  return (
    <div className={styles['dropdown-content']}>
      <div className={styles['list-container']}>
        {
          mainNavRoutes[route].subNavs.map((subNav, i) => {
            return (
              <ul key={i}>
                {
                  subNav.column.map((subRoute, j) => {
                    return (
                      <li key={j}>
                        <Link to={subRoute.path}>
                          { subRoute.name }
                        </Link>
                      </li>
                    );
                  })
                }
              </ul>
            );
          })
        }
      </div>
    </div>
  );
};

DropdownContentWrapper.propTypes = {
  route: PropTypes.string,
};

const MainNav = (props) => {
  return (
    <div id="main-nav">
      <div>
        <nav className={styles.container}>
          <div className={styles['logo-with-nav-options-container']}>
            <div className={styles['logo-container']}>
              <div className={styles.logo}>
                <Link to="/">Fairthreads</Link>
              </div>
            </div>
            <div>
              <ul className={styles.list}>
                <MainNavLinkWrapper route={'womens'} styles={styles} />
                <MainNavLinkWrapper route={'mens'} styles={styles} />
                <MainNavLinkWrapper route={'about'} styles={styles} />
                <MainNavLinkWrapper route={'contact'} styles={styles} />
                <li className={styles['list-item']}>
                  <a href="https://shopfairthreads.com/blog" className={styles.link}>Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles['sign-up-container']}>
            <MainNavLink to={'/marketplace'} className={styles['sign-up']}>
              Sign Up
            </MainNavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
