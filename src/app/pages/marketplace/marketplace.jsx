import React, { Component, PropTypes } from 'react';
import UserForm from '../../components/user-form/user-form.jsx';
import VendorForm from '../../components/vendor-form/vendor-form.jsx';
import autoBind from 'react-autobind';
import CSSModules from 'react-css-modules';
import styles from './marketplace.css';

class MarketPlace extends Component {

  constructor() {
    super()
    this.state = {
      userFormVisible: true,
      vendorFormVisible: false
    }
    autoBind(this);
    this.showUserModal = this.showUserModal.bind(this);
    this.showVendorModal = this.showVendorModal.bind(this);
  }

  showUserModal() {
    this.setState({'vendorFormVisible': false});
    this.setState({'userFormVisible': true});
  }

  showVendorModal() {
    this.setState({'userFormVisible': false});
    this.setState({'vendorFormVisible': true});
  }

  render() {
    let {
      userFormVisible,
      vendorFormVisible
    } = this.state;

    return (
      <div style={{position: 'relative'}}>
        <div styleName="marketplace-background">
          <div styleName="marketplace-container">
            <div styleName="marketplace-content">
              <div>
                <h1>Welcome to Marketplace</h1>
                <p>Fairthreads Marketplace is the ultimate platform to shop & discover brands and retailors from all over the world who are dedicated to promoting ethical, sustainable, and transparent manufacuturing processes. We are currently looking for <i>beta</i> testers (users & sellers). If you are interested in being the first to try our new platform or have a brand, website, or shop you would like to showcase on Fairthreads Marketplace please let us know! Stay tuned for what's to come...</p>
              </div>
            </div>
            <div styleName="column">
              <div styleName="marketplace-signup">
                <ul>
                  <li onClick={this.showUserModal}><h2 styleName={this.state.userFormVisible ? "bold" : "light"}>I am a customer</h2></li>
                  <li onClick={this.showVendorModal}><h2 styleName={this.state.vendorFormVisible ? "bold" : "light"}>I am a seller</h2></li>
                </ul>
              </div>
              <UserForm styleName='sign-up-form' style={{display: userFormVisible ? 'block' : 'none'}} />
              <VendorForm styleName='sign-up-form' style={{display: vendorFormVisible ? 'block' : 'none'}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(MarketPlace, styles);
