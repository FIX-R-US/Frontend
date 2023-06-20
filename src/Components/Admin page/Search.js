import React from 'react'
import './Search.css'
import Form from 'react-bootstrap/Form'

function Search({handleSearch}) {
  return (
    <div className="search-container">
    <input
      type="text"
      onChange={handleSearch}
      placeholder="Search..."
      className="search-input"
    />
  </div>
  )
}

export default Search