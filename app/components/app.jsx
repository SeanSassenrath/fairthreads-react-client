import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
require("../styles/style.scss");


class App extends Component {
  render() {
    const { loading, items } = this.props;
    console.log('loading', loading)
    console.log('items', items)
    return (
      <div className="app-container">
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
        <div className={ loading ? "spinner" : null } >
        {
          items ?
            items.asMutable().map(function(item) {
              return (
                <img src={item.imageOriginal} />
              )
            })
          : console.log('no items')
        }
        </div>
      </div>
      // <div className="row">
      //   <>
      // </div>
      // <div className="row">
      //   <div className="small-2 large-4 columns">...</div>
      //   <div className="small-4 large-4 columns">...</div>
      //   <div className="small-6 large-4 columns">...</div>
      // </div>
    )
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { products } = state;
  const {
    loading,
    items
  } = products;

  return {
    loading,
    items
  }
}

export default connect(mapStateToProps)(App);
