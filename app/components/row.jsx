import React, { Component, PropTypes} from 'react';
import ProductCard from './product-card.jsx';

export default class Row extends Component {


  render() {
    let itemKey = 0;
    let {
      row
    } = this.props;

    console.log("Row Props", row);

    return(
      <div className="row">
          <h4>Row Component</h4>
          {
            row.map(function(item) {
              return <ProductCard key={itemKey++} item={item}/>
            })
          }
      </div>
    )
  }
}
