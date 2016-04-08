import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './main-nav.css';

class MainNav extends Component {

  render() {

    let {
      fetchProducts,
      mainNav,
      categories,
      addCategoryFilter
    } = this.props;

    return(
      <div id="product-nav-container" styleName="product-nav-container">
        <div className="row">
          <nav>
            <ul style={{textAlign: "center"}}>
              <li><Link to='/womens' activeStyle={{ opacity: '1', color: "white" }} onClick={() => mainNav("womens-clothes")}>Women</Link></li>
              <li><Link to='mens' activeStyle={{ opacity: '1', color: "white" }} onClick={() => mainNav("men")}>Men</Link></li>
              <li>
                <select id="category" onChange={() => addCategoryFilter(document.getElementById('category').value)}>
                  {
                    categories.map(function(category) {
                      return (
                        <option value={category}>{category}</option>
                      )
                    })
                  }
                </select>
              </li>
              <li>Brand</li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default CSSModules(MainNav, styles);
