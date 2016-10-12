import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './about.css';
const quality = require("../../../img/quality-white.svg");
const ethical = require("../../../img/ethical.svg");
const fashion = require("../../../img/fashion.svg");

class About extends Component {

  render() {
    return(
      <div>
        <div styleName='container'>
          <div>
            <h1>Who we are</h1>
            <p>
              Fashion doesn’t just define the way we dress, it’s our story. Every outfit we put on is fueled by our history, our experiences.  Our style tells the story of who we are, where we come from, and what we believe in. At Fairthreads, it’s our empathy for mankind, loathing of excessive waste, and history of challenging the status quo that defines our fashion. We take a stand against traditional retailers and their unethical manufacturing processes. We take a stand against wasteful production and consumption. The #fashionrevolution has begun…
            </p>
          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(About, styles);
