import React, { Component, PropTypes } from 'react';

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
      </div>
    )
  }
}
