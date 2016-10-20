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
      userFormVisible: false,
      vendorFormVisible: false
    }
    autoBind(this);
    this.openUserModal = this.openUserModal.bind(this);
    this.closeUserModal = this.closeUserModal.bind(this);
    this.openVendorModal = this.openVendorModal.bind(this);
    this.closeVendorModal = this.closeVendorModal.bind(this);
    // this.handleInputUpdate = this.handleInputUpdate.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.sendForm = this.sendForm.bind(this);
  }

  openUserModal() {
    this.setState({'userFormVisible': true});
  }

  closeUserModal() {
    this.setState({'userFormVisible': false});
  }

  openVendorModal() {
    this.setState({'vendorFormVisible': true});
  }

  closeVendorModal() {
    this.setState({'vendorFormVisible': false});
  }

  render() {
    let {
      userFormVisible,
      vendorFormVisible
    } = this.state;

    return (
      <div style={{position: 'relative'}}>
        <div styleName="marketplace-container">
          <div styleName="marketplace-content">
            <div>
              <h1>Welcome to Marketplace</h1>
              <p>Fairthreads Marketplace is the ultimate platform to shop & discover brands and retailors from all over the world who are dedicated to promoting ethical, sustainable, and transparent manufacuturing processes. We are currently looking for <i>beta</i> testers (users & sellers). If you are interested in being the first to try our new platform or have a brand, website, or shop you would like to showcase on Fairthreads Marketplace please let us know! Stay tuned for what's to come...</p>
            </div>
            <div styleName="marketplace-signup">
              <ul>
                <li onClick={this.openUserModal}><h2>I am a customer</h2></li>
                <li onClick={this.openVendorModal}><h2>I am a seller</h2></li>
              </ul>
            </div>
          </div>
        </div>
        <UserForm onClose={this.closeUserModal} styleName='sign-up-form' style={{display: userFormVisible ? 'block' : 'none'}} />
        <VendorForm onClose={this.closeVendorModal} styleName='sign-up-form' style={{display: vendorFormVisible ? 'block' : 'none'}} />
      </div>
    )
  }
}

export default CSSModules(MarketPlace, styles);
