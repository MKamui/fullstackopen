import React from 'react'

const Persons = ({persons, filter, erase}) => {
  return (
    <div>
        {persons.filter(n => n.name.toLowerCase().includes(filter.toLowerCase())).map((p => 
        <div key={p.id}>
        {p.name} {p.number} <button onClick={() => erase(p.id)}>delete</button>
        </div>))}
    </div>
  )
}

export default Persons