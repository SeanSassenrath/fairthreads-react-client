import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { testSelector } from '../../selectors.js';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './home.css';
const quality = require("../../img/quality-white.svg");
const ethical = require("../../img/ethical.svg");
const fashion = require("../../img/fashion.svg");



class Home extends Component {

  render() {
    let {
      picks,
      mainNav
    } = this.props;

    return(
      <div>
        <div styleName="hero">
          <div styleName="hero-content">
            <h1>Dresses</h1>
            <div>
              <Link to='/womens/dresses' onClick={() => mainNav("womens-clothes", "dresses")} styleName="shop-now">Shop Now</Link>
            </div>
          </div>
        </div>
        <div styleName="banner">
          <div styleName="banner-container">
            <h1>Fashion with integrity</h1>
            <p>We believe that fashion doesn't have to compromise morals</p>
            <div>
              <Link to='/about'>Learn More</Link>
            </div>
          </div>
        </div>
        <div id="about">
          <div styleName="about-container">
            <div>
              <h1>Ethical Practices</h1>
              <p>At fairthreads, we believe our ethics shouldn’t be compromised for great style. We showcase products from fashion brands that uphold strong ethical manufacturing standards. No sweatshop labor. No unfair wages.</p>
            </div>
            <div>
              <img src={ethical} styleName="about-img-right" alt="Ethical" />
            </div>
          </div>
          <div styleName="full-width-container">
            <div styleName="about-container-alternate">
              <div>
                <img src={quality} styleName="about-img-left" alt="Quality" />
              </div>
              <div>
                <h1>Quality Products</h1>
                <p>Quality products are essential for having long-lasting wardrobe. Our brands strive to have the best quality possible. This doesn’t only speak to the garment's construction, but also the fabric itself. Many of our brands pride themselves on using only organic, non-toxic, recycled, or upcycled materials.</p>
              </div>
            </div>
          </div>
          <div styleName="about-container">
            <div>
              <h1>Forward Fashion</h1>
              <p>Great fashion is at the core of our identity. We offer fashion-forward styles from cutting-edge brands that are changing the industry. You don’t even need to think twice about shopping ethically, we make it second nature.</p>
            </div>
            <div>
              <img src={fashion} styleName="about-img-right" alt="Fashion" />
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
    )
  }
}

const StyledHome = CSSModules(Home, styles);

export default connect(testSelector)(StyledHome);
