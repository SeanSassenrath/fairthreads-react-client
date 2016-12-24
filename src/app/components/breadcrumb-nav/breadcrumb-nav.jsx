import React, { Component, PropTypes } from 'react';

const BreadcrumbNav = () => {
  return(
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
      </div>
    </div>
  )
}
