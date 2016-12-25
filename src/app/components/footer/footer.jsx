import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './footer.css';

const facebookFooter = require('../../../img/facebook-footer.png');
const instagramFooter = require('../../../img/instagram-footer.png');
const twitterFooter = require('../../../img/twitter-footer.png');

const Footer = (() =>
  <footer styleName="footer">
    <div styleName="footer-content">
      <div>
        <span>2016 Fairthreads, Inc. &nbsp;</span>
        <span>All rights reserved.</span>
      </div>
      <div>
        <a href="https://www.instagram.com/fairthreads/">
          <img src={instagramFooter} styleName="social-icon" alt="Instagram icon" />
        </a>
        <a href="https://www.facebook.com/shopfairthreads/">
          <img src={facebookFooter} styleName="social-icon" alt="Facebook icon" />
        </a>
        <a href="https://twitter.com/MyFairthreads">
          <img src={twitterFooter} styleName="social-icon" alt="Twitter icon" />
        </a>
      </div>
    </div>
  </footer>
);

export default CSSModules(Footer, styles);
