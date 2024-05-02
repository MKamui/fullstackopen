import React from 'react'

const Filter = ({handleFilter}) => {
  return (
    <p>Filter shown with <input onChange={handleFilter} id='inputFilter'/></p>
  )
}

export default Filter