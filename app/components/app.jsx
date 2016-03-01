import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require("../styles/style.scss");


export default class App extends Component {
  render() {
    return (
      <nav style={{borderBottom: "1px solid gray"}}>
        <div className="row" style={{border: "1px solid red"}}>
          <div className="top-nav" style={{border: "1px solid yellow"}}>
            <h3>FairThreads</h3>
          </div>
          <div className="bottom-nav" style={{border: "1px solid purple"}}>
            <h3>Test</h3>
          </div>
        </div>
      </nav>
      // <div className="row">
      //   <div className="small-2 large-4 columns">...</div>
      //   <div className="small-4 large-4 columns">...</div>
      //   <div className="small-6 large-4 columns">...</div>
      // </div>
    )
  }
}
