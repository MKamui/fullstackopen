import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [persons])
  

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
    : axios.post("http://localhost:3001/persons", newPerson) 
    .then(response => {
      console.log("person added")
    })
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter handleFilter={handleFilter}/>
      </div>
      <Form handleInputName={handleInputName} handleInputNumber={handleInputNumber} handleNewName={handleNewName} newName={newName} newNumber={newNumber}/>
      <h3>Numbers</h3>
      <div>
        <Persons persons={persons} filter={filter}/>
      </div>
    </div>
  )
}

export default App