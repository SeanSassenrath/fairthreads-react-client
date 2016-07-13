import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.css';

class Home extends Component {
  render() {
    return(
      <div>
        <div styleName="hero">
          <div styleName="hero-content">
            <h1>Fashion with <br />integrity</h1>
          </div>
        </div>
        <div styleName="about">
          <h2>Ethical practices. Quality products. Killer fashion.</h2>
          <div>
            <h3>The Ethical Way</h3>
            <p>At fairthreads, we believe our ethics shouldn’t be compromised for great style. We showcase products from fashion brands that uphold strong ethical manufacturing standards. No sweatshop labor. No unfair wages.</p>
          </div>
          <div>
            <h3>Quality Matters</h3>
            <p>Quality products are essential for having long-lasting wardrobe. Our brands strive to have the best quality possible. This doesn’t only speak to the garment's construction, but also the fabric itself. Many of our brands pride themselves on using only organic, non-toxic, recycled, or upcycled materials.</p>
          </div>
          <div>
            <h3>No Compromises</h3>
            <p>Great fashion is at the core of our identity. We offer fashion-forward styles from cutting-edge brands that are changing the industry. You don’t even need to think twice about shopping ethically, we make it second nature.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Home, styles);
