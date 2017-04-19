import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import $ from 'jquery';
import { appSelectors } from '../../../selectors.js';
import Button from '../../components/button/button.jsx';
import Carousel from '../../components/carousel/carousel.jsx';
import styles from './home.css';

const blog = require('../../../img/who-made-it.jpg');
const grayHeart = require('../../../img/gray-heart.svg');

class Home extends Component {

  constructor(...props) {
    super(...props);
    this.state = {
      womensCarousel: [],
      mensCarousel: [],
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'https://fairthreads-api.herokuapp.com/products/home-carousel',
      dataType: 'json',
    }).done((carouselProducts) => {
      this.setState({ mensCarousel: carouselProducts.mens, womensCarousel: carouselProducts.womens });
    }).fail((e) => {
      console.log('Error', e);
    });
  }

  render() {
    let {
      picks,
      mainNav
    } = this.props;

    return (
      <div>
        <div styleName="hero">
          <div styleName="hero-content">
            <h3>The revolution is here</h3>
            <h2>Fashion Revolution<br />Week</h2>
            <h3>April 24th - April 30th</h3>
            <div styleName="hero-button-container">
              <a href="https://shop.wildlifeworks.com/collections/rise_up/products/pret-a-revolt"><Button styleName="hero-button">Get the shirt</Button></a>
            </div>
          </div>
        </div>
        <div styleName="banner">
          <h1>Ethics<br /> + <br />Sustainability</h1>
          <p styleName="subtext">Discover brands & fashion that put ethics and
            sustainability first. Awesome fashion, zero guilt.
          </p>
        </div>
        <div styleName="editorial">
          <Link to="/products/womens" styleName="promo-women">
            <div styleName="promo-overlay">
              <h1>Shop Women</h1>
            </div>
          </Link>
          <Link to="/products/mens" styleName="promo-men">
            <div styleName="promo-overlay">
              <h1>Shop Men</h1>
            </div>
          </Link>
          {/* <div styleName="blog">
            <div styleName="blog-content">
              <img src={blog} alt="Ethics and Fashion" />
              <h1>Ethics + Fashion</h1>
              <p>The Fashion Revolution has begun. Discover why fairtrade matters</p>
              <div>
                <Link to='/about' styleName="blog-button">Discover Fair Fashion</Link>
              </div>
            </div>
          </div> */}
        </div>

        <div styleName="slideshow-header">
          <h1>Our spring favorites</h1>
        </div>

        <div styleName="slideshow-section">
          <div styleName="slideshow-container">
            <div>
              {
                this.state.womensCarousel.length > 0 ?
                  <Carousel products={this.state.womensCarousel} />
                : null
              }
            </div>
          </div>
        </div>
        {/*
        <div styleName="stylist-pick">
          <div styleName="stylist-pick-container">
            <div styleName="stylist-pick-image-container">
              <img src={picks ? picks.women.imageOriginal : null} style={{objectFit: picks ? picks.women.objectFit : null}} />
            </div>
            <div>
              <h1>Stylist Pick/Women</h1>
              <h2>{ picks ? picks.women.name : null }</h2>
              <p>{ picks ? picks.women.brand : null }</p>
              <span>${ picks ? picks.women.price : null }</span>
              <span>{ picks && picks.women.salePrice ? '$' + picks.women.salePrice : null }</span>
            </div>
          </div>
        </div>
        <div styleName="stylist-pick">
          <div styleName="stylist-pick-reverse-container">
            <div>
              <h1>Stylist Pick/Men</h1>
              <h2>{ picks ? picks.women.name : null }</h2>
              <p>{ picks ? picks.women.brand : null }</p>
              <span>${ picks ? picks.women.price : null }</span>
              <span>{ picks && picks.women.salePrice ? '$' + picks.women.salePrice : null }</span>
            </div>
            <div styleName="stylist-pick-image-container">
              <img src={picks ? picks.men.imageOriginal : null}  style={{objectFit: picks ? picks.men.objectFit : null}} />
            </div>
          </div>
        </div>
        <div styleName="request-products">
          <div styleName="container">
            <h1>Request a Brand</h1>
            <p>Not seeing your favorite ethically made brand? Send us a request!</p>
            <input type="text" />
          </div>
        </div>
        */}
      </div>
    );
  }
}

const StyledHome = CSSModules(Home, styles);

export default connect(appSelectors)(StyledHome);
