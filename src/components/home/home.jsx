import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { testSelector } from '../../selectors.js';
import CSSModules from 'react-css-modules';
import styles from './home.css';



class Home extends Component {

  render() {
    let {
      picks,
    } = this.props;

    return(
      <div>
        <div styleName="hero">
          <div styleName="hero-content">
            <h1>Dresses</h1>
            <div>
              <a href="./womens/dresses">Shop Dresses</a>
            </div>
          </div>
        </div>
        <div styleName="about">
          <div styleName="container">
            <h1>Fashion with Integrity</h1>
            <p>Fairthreads was created to make it easier than ever to find ehtical, stylish clothing. <br />Join us in making the world a better place.</p>
            <a href="">Learn More</a>
          </div>
        </div>
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
        {/* <div styleName="request-products">
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
