import React, { Component, PropTypes } from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
class BreadcrumbNav extends Component {

  render() {
    return(
      <div className="row">
        <div>
        </div>
        <div>
          <div>
            <select id="category" onChange={() => addCategoryFilter(document.getElementById('category').value)}>
              <option disabled>CATEGORY</option>
              {
                categoryList ? categoryList.map(function(category) {
                  return (
                    <option value={category}>{category}</option>
                  )
                }) : null
              }
            </select>
          </div>
        </div>
=======
const BreadcrumbNav = () => {
  return(
=======
const BreadcrumbNav = () => {
  return (
>>>>>>> parent of b13b0eb... Refactor Footer to be SFC
    <div className="row">
      <div>
        <select id="category" onChange={() => addCategoryFilter(document.getElementById('category').value)}>
          <option disabled>CATEGORY</option>
          {
            categoryList ? categoryList.map(function(category) {
              return (
                <option value={category}>{category}</option>
              )
            }) : null
          }
        </select>
<<<<<<< HEAD
>>>>>>> parent of faf8a48... Make Button a SFC
      </div>
    )
  }
=======
      </div>
    </div>
  )
>>>>>>> parent of b13b0eb... Refactor Footer to be SFC
}
