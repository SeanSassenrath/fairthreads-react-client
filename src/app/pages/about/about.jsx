import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './about.css';
const quality = require("../../../img/quality.svg");
const ethical = require("../../../img/ethical.svg");
const fashion = require("../../../img/fashion.svg");

class About extends Component {

  render() {
    return(
      <div>
        <div styleName='hero'>
          <div styleName='hero-content'>
            <p>&mdash; Discover &mdash;</p>
            <h1>Ethical Fashion</h1>
            <h2>Ethical Practice.  Quality Products.  Forward Fashion.</h2>
          </div>
        </div>
        <div styleName='container'>
          <div styleName='who-we-are'>
            <h1>Who we are</h1>
            <p>Fairthreads is a destination for discovering ethical fashion brands. Frustrated with the lack of resources and availability of websites offering ethical fashion selections from multiple brands, we decided to take action and build one ourselves! We are taking a stand against traditional and fast-fashion retailors who don't put human rights above their profit margins. We believe in fair wages, quality products, and transparency. Welcome to our fashion revolution...
            </p>
          </div>
          <div styleName='pillars'>
            <div>
              <div>
                <img src={ethical} styleName="pillar-img" />
              </div>
              <h2>Ethical Practices</h2>
              <p>At fairthreads, we believe our ethics shouldn’t be compromised for great style. We showcase products from fashion brands that uphold strong ethical manufacturing standards. No sweatshop labor. No unfair wages.</p>
            </div>
            <div styleName='center-pillar'>
              <div>
                <img src={quality} styleName="pillar-img" />
              </div>
              <h2>Quality Products</h2>
              <p>Quality products are essential for having a long-lasting wardrobe. Our brands strive to have the best quality possible. This doesn’t only speak to the garment's construction, but also to the fabric itself. Many of our brands pride themselves on using only organic, non-toxic, recycled, or upcycled materials.</p>
            </div>
            <div>
              <div>
                <img src={fashion} styleName="pillar-img" />
              </div>
              <h2>Forward Fashion</h2>
              <p>Great fashion is at the core of our identity. We offer fashion-forward styles from cutting-edge brands that are changing the industry. You don’t even need to think twice about shopping ethically, we make it second nature.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(About, styles);
