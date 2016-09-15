import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './mobile-nav.css';
const logo = require("../../../img/fairthreads-logo.png");

class MobileNav extends Component {

  constructor() {
    super();
    this.state = {
      isNavOpen: false,
      subNav: null
    }

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.openSubNav = this.openSubNav.bind(this);
  }

  openNav() {
    this.setState({isNavOpen: true});
  }

  closeNav() {
    this.setState({isNavOpen: false});
  }

  openSubNav(n) {
    if (n === this.state.subNav) {
      this.setState({subNav: null})
    } else {
      this.setState({subNav: n})
    }
  }

  render() {

    let {
      fetchProducts,
      mainNav,
      picks,
    } = this.props;

    return (
      <div style={{position: 'relative'}}>
        <div styleName='mobile-nav-container'>
          <div styleName="menu-container" onClick={this.openNav}>
            <div styleName="menu" />
          </div>
          <Link to='/'>
            <img src={logo} alt="Fairthreads logo" styleName='logo' />
          </Link>
        </div>
        <div styleName="overlay" style={{display: this.state.isNavOpen ? 'block' : 'none'}} onClick={this.closeNav}></div>
        <nav styleName={this.state.isNavOpen ? 'mobile-nav-active' : 'mobile-nav-hidden'}>
          <ul styleName='mobile-nav-list'>
            <li styleName='mobile-nav-logo'><img src={logo} alt="Fairthreads logo" style={{width: '150px'}}/></li>
            <li>
              <div styleName='mobile-nav-item' onClick={() =>  this.openSubNav(1)}>Womens</div>
              <ul styleName='mobile-nav-sub-list' style={{display: this.state.subNav === 1 ? 'block' : 'none'}}>
                <li>
                  <Link to='/womens/tops' onClick={() => this.closeNav()}>
                    <div  styleName='mobile-nav-sub-item'>Tops</div>
                  </Link>
                </li>
                <li>
                  <Link to='/womens/bottoms' onClick={() => this.closeNav()}>
                    <div styleName='mobile-nav-sub-item'>Bottoms</div>
                  </Link>
                </li>
                <li>
                  <Link to='/womens/dresses' onClick={() => this.closeNav()}>
                    <div styleName='mobile-nav-sub-item'>Dresses</div>
                  </Link>
                </li>
                <li>
                  <Link to='/womens/shoes' onClick={() => this.closeNav()}>
                    <div styleName='mobile-nav-sub-item'>Shoes</div>
                  </Link>
                </li>
                <li>
                  <Link to='/womens/active-wear' onClick={() => this.closeNav()}>
                    <div styleName='mobile-nav-sub-item'>Active Wear</div>
                  </Link>
                </li>
                <li>
                  <Link to='/womens/underwear' onClick={() => this.closeNav()}>
                    <div styleName='mobile-nav-sub-item'>Underwear</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div styleName='mobile-nav-item' onClick={() => this.openSubNav(2)}>Mens</div>
              <ul styleName='mobile-nav-sub-list' style={{display: this.state.subNav === 2 ? 'block' : 'none'}}>
                <li>
                  <Link to='/mens/tops' onClick={() => this.closeNav()}>
                    <div styleName='mobile-nav-sub-item'>Tops</div>
                  </Link>
                </li>
                <li>
                  <Link to='/mens/bottoms' onClick={() => this.closeNav()}>
                    <div styleName='mobile-nav-sub-item'>Bottoms</div>
                  </Link>
                </li>
                <li>
                  <Link to='/mens/shoes' onClick={() => this.closeNav()}>
                    <div styleName='mobile-nav-sub-item'>Shoes</div>
                  </Link>
                </li>
                <li>
                  <Link to='/mens/active-wear' onClick={() => this.closeNav()}>
                    <div styleName='mobile-nav-sub-item'>Active</div>
                  </Link>
                </li>
                <li>
                  <Link to='/mens/underwear' onClick={() => this.closeNav()}>
                    <div styleName='mobile-nav-sub-item'>Underwear</div>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/about' onClick={() => this.closeNav()}>
                <div styleName='mobile-nav-item'>About</div>
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={() => this.closeNav()}>
                <div styleName='mobile-nav-item'>Contact</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default CSSModules(MobileNav, styles);
