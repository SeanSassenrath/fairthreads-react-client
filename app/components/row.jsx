import React, { Component, PropTypes} from 'react';

export default class Row extends Component {

  render() {

    let {
      row
    } = this.props;

    console.log("Row Props", row);

    return(
      <div className="row">
        <h4>Row Component</h4>
      </div>
    )
  }
}
