import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.css';

class Home extends Component {
  render() {
    console.log('Home component props', this.props)
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
            <p>Easily find ethical clothes with style. Each of our brands have been curated to ensure that they provide:</p>
            <div styleName="pillars-container">
              <div>
                <h3>Ethical Practices</h3>
                <p>We believe our ethics shouldn’t be compromised for great style. We showcase products from fashion brands that uphold strong ethical manufacturing standards.</p>
              </div>
              <div>
                <h3>Quality Clothing</h3>
                <p>Quality clothes are essential for having long-lasting wardrobe. Many of our brands pride themselves on using only organic, non-toxic, recycled, or upcycled materials. </p>
              </div>
              <div>
                <h3>Transcendent Fashion</h3>
                <p>Great fashion is at the core of our identity. We offer fashion-forward styles from cutting-edge brands that are changing the industry.</p>
              </div>
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

export default CSSModules(Home, styles);
