import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './main-nav.css';

class MainNav extends Component {

  componentWillMount() {
    console.log('mounted')
  }
  render() {

    let {
      fetchProducts,
      mainNav,
      items,
      categoryList,
      addCategoryFilter
    } = this.props;

    return(
      <div id="product-nav-container" styleName="product-nav-container">
        <div className="row">
          <nav>
            <ul style={{textAlign: "center"}}>
              <li><Link to='/womens' activeStyle={{ opacity: '1', color: "white" }} onClick={() => mainNav("womens-clothes", items)}>Women</Link></li>
              <li><Link to='mens' activeStyle={{ opacity: '1', color: "white" }} onClick={() => mainNav("men", items)}>Men</Link></li>
              <li>
                <select id="category" onChange={() => addCategoryFilter(document.getElementById('category').value)}>
                  {
                    categoryList ? categoryList.map(function(category) {
                      return (
                        <option value={category}>{category}</option>
                      )
                    }) : null
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
