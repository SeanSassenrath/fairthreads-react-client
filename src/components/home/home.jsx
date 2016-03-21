import React, { Component, PropTypes } from 'react';

class Home extends Component {
  render() {
    return(
      <div className="homepage-container" style={{display: homepage === true ? "block" : "none"}}>
        <div className="hero">
          <h1>This is the hero</h1>
        </div>
        <div className="sub-hero-container">
          <div className="row">
            <div className="small-12 medium-5 columns" style={{border: "1px solid green"}}>
              test box 1
            </div>
            <div className="small-12 medium-5 columns" style={{border: "1px solid green"}}>
              test box 2
            </div>
          </div>
        </div>
      </div>
    )
  }
}
