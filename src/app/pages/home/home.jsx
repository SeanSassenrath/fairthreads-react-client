import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { appSelectors } from '../../../selectors.js';
import { Link } from 'react-router';
import $ from 'jquery';
import Carousel from '../../components/carousel/carousel.jsx';
import CSSModules from 'react-css-modules';
import styles from './home.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
const blog = require("../../../img/who-made-it.jpg");

class Home extends Component {

  constructor(...props) {
    super(...props);
    this.state = {
      womensCarousel: [],
      mensCarousel: []
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'https://fairthreads-api.herokuapp.com/products/home-carousel',
      dataType: 'json'
    }).done((carouselProducts) => {
      console.log('Done with getting home carousel products');
      this.setState({mensCarousel: carouselProducts.mens, womensCarousel: carouselProducts.womens});
    }).fail((e) => {
      console.log('Error', e);
    })
  }

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
              <Link to='/womens/dresses' styleName="shop-now">Shop Now</Link>
            </div>
          </div>
        </div>
        <div styleName="banner">
          <h1>Fashion with integrity</h1>
          <p>We believe that fashion doesn't have to compromise morals</p>
          <Link to='/about' styleName="learn-more">Learn More</Link>
        </div>
        <div styleName="editorial">
          <Link to="/womens" styleName="promo-women">
            <div styleName="promo-overlay">
              <h1>Shop Women</h1>
              <p>Score some great deals before they're gone!</p>
            </div>
          </Link>
          <Link to="/mens" styleName="promo-men">
            <div styleName="promo-overlay">
              <h1>Shop Men</h1>
              <p>Score some great deals before they're gone!</p>
            </div>
          </Link>
          {/*<div styleName="blog">
            <div styleName="blog-content">
              <img src={blog} alt="Ethics and Fashion" />
              <h1>Ethics + Fashion</h1>
              <p>The Fashion Revolution has begun. Discover why fairtrade matters</p>
              <div>
                <Link to='/about' styleName="blog-button">Discover Fair Fashion</Link>
              </div>
            </div>
          </div>*/}
        </div>

        <div style={{background: '#f6f6f6'}}>
          <div styleName="slideshow-container">
            {
              this.state.womensCarousel.length > 0 ?
                <Carousel products={this.state.womensCarousel} />
              : null
            }
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

export default connect(appSelectors)(StyledHome);
