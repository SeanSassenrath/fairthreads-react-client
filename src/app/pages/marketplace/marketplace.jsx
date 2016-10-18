import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './marketplace.css';

class MarketPlace extends Component {

  render() {
    return (
      <div styleName="marketplace-container">
      	<div styleName="marketplace-content">
      		<h1>Welcome to Marketplace</h1>
      	    <p>Fairthreads Marketplace is the ultimate platform to shop & discover brands and retailors from all over the world who are dedicated to promoting ethical, sustainable, and transparent manufacuturing processes. We are currently looking for <i>beta</i> testers (users & sellers). If you are interested in being the first to try our new platform or have a brand, website, or shop you would like to showcase on Fairthreads Marketplace please let us know! Stay tuned for what's to come...</p>	
            <div styleName="marketplace-signup">
            	  <div styleName="overlay">
            	    <h2>I am a customer</h2>
            	  </div>
    				<div styleName="overlay">
            	    <h2>I am a seller</h2>
            	  </div>
            </div>
      	</div>
        
      </div>
    )
  }
}

export default CSSModules(MarketPlace, styles);
