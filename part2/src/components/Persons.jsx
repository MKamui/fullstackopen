import React from 'react'

const Persons = ({persons, filter}) => {
  return (
    <div>
        {persons.filter(n => n.name.toLowerCase().includes(filter.toLowerCase())).map((p => 
        <div key={p.id}>
        {p.name} {p.number}
        </div>))}
    </div>
  )
}

export default Persons