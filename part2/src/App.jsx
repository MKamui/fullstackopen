import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleInputName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    persons.find(p => p.name === newName) ? 
    alert(`${newName} is already added to phonebook`) 
    : setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <p>Filter shown with <input onChange={handleFilter} id='inputFilter'/></p>
      </div>
      <form onSubmit={handleNewName}>
        <h3>Add a new</h3>
        <div>
          name: <input value={newName} onChange={handleInputName} id='inputName'/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleInputNumber} id='inputNumber'/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <div>
        {persons.filter(n => n.name.toLowerCase().includes(filter.toLowerCase())).map((p => 
        <div key={p.id}>
        {p.name} {p.number}
        </div>))}
      </div>
    </div>
  )
}

export default App