import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './mobile-nav.css';
const logo = require("../../img/fairthreads-logo.png");

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
    this.selectCategory = this.selectCategory.bind(this);
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

  selectCategory(gender, category) {
    this.props.mainNav(gender, category);
    this.closeNav();
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
                <li styleName='mobile-nav-sub-item' >
                  <Link to='/womens/tops' onClick={() => this.selectCategory("womens-clothes", "tops")}
                  >Tops</Link>
                </li>
                <li styleName='mobile-nav-sub-item' onClick={() => this.closeNav}>
                  <Link to='/womens/bottoms' onClick={() => this.selectCategory("womens-clothes", "bottoms")}>Bottoms</Link>
                </li>
                <li styleName='mobile-nav-sub-item'>
                  <Link to='/womens/dresses' onClick={() =>this.selectCategory("womens-clothes", "dresses")}
                >Dresses</Link></li>
                <li styleName='mobile-nav-sub-item'>
                  <Link to='/womens/shoes' onClick={() => this.selectCategory("womens-clothes", "shoes")}>Shoes</Link>
                </li>
                <li styleName='mobile-nav-sub-item'>
                  <Link to='/womens/active-wear' onClick={() => this.selectCategory("womens-clothes", "active-wear")}>Active Wear</Link>
                </li>
                <li styleName='mobile-nav-sub-item'>
                  <Link to='/womens/underwear' onClick={() => this.selectCategory("womens-clothes", "underwear")}>Underwear</Link>
                </li>
              </ul>
            </li>
            <li>
              <div styleName='mobile-nav-item' onClick={() => this.openSubNav(2)}>Mens</div>
              <ul styleName='mobile-nav-sub-list' style={{display: this.state.subNav === 2 ? 'block' : 'none'}}>
                <li styleName='mobile-nav-sub-item' >
                  <Link to='/mens/tops' onClick={() =>this.selectCategory("men", "tops")}
                  >Tops</Link>
                </li>
                <li styleName='mobile-nav-sub-item' onClick={() => this.closeNav}>
                  <Link to='/mens/bottoms' onClick={() => mainNav("men", "bottoms")}>Bottoms</Link>
                </li>
                <li styleName='mobile-nav-sub-item'>
                  <Link to='/mens/shoes' onClick={() => mainNav("men", "shoes")}>Shoes</Link>
                </li>
                <li styleName='mobile-nav-sub-item'>
                  <Link to='/mens/active-wear' onClick={() => mainNav("men", "active-wear")}>Active</Link>
                </li>
                <li styleName='mobile-nav-sub-item'>
                  <Link to='/mens/underwear' onClick={() => mainNav("men", "underwear")}>Underwear</Link>
                </li>
              </ul>
            </li>
            <li>
              <div styleName='mobile-nav-item'>About</div>
            </li>
            <li>
              <div styleName='mobile-nav-item'>Contact</div>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default CSSModules(MobileNav, styles);
