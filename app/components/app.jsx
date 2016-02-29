import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require("../styles/style.scss");


export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="small-2 large-4 columns">...</div>
        <div className="small-4 large-4 columns">...</div>
        <div className="small-6 large-4 columns">...</div>
      </div>
    )
  }
}
