import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './mobile-nav.css';
const logo = require("../../img/fairthreads-logo.png");

class MobileNav extends Component {

  constructor() {
    super();
    this.state = {
      isNavOpen: false
    }

    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  openNav() {
    this.setState({isNavOpen: true})
  }

  closeNav() {
    this.setState({isNavOpen: false})
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <div>
          <div styleName="menu-container" onClick={this.openNav}>
            <div styleName="menu" />
          </div>
        </div>
        <div styleName="overlay" style={{display: this.state.isNavOpen ? 'block' : 'none'}} onClick={this.closeNav}></div>
        <nav styleName='mobile-nav' style={{transform: this.state.isNavOpen ? 'translateX(0%)' : 'translateX(-100%)'}}>
          <ul styleName='mobile-nav-list'>
            <li styleName='mobile-nav-logo'><img src={logo} alt="Fairthreads logo" style={{width: '150px'}}/></li>
            <li>
              <div styleName='mobile-nav-item'>Womens</div>
              <ul styleName='mobile-nav-sub-list'>
                <li styleName='mobile-nav-sub-item'>Tops</li>
                <li styleName='mobile-nav-sub-item'>Bottoms</li>
                <li styleName='mobile-nav-sub-item'>Dresses</li>
                <li styleName='mobile-nav-sub-item'>Shoes</li>
              </ul>
            </li>
            <li styleName='mobile-nav-item'>Mens</li>
            <li styleName='mobile-nav-item'>About</li>
            <li styleName='mobile-nav-item'>Contact</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default CSSModules(MobileNav, styles);
