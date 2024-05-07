import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'
import personsService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService.getAllPersons()
    .then(listPersons => {
      setPersons(listPersons)
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
    }
    persons.find(p => p.name === newName) ? 
    alert(`${newName} is already added to phonebook`) 
    :  personsService.createNewPerson(newPerson)
    setNewName('')
    setNewNumber('')
  }

  const handleErase = (id) => {
    if (window.confirm(`Do you want to delete ${persons.find(p => p.id === id).name}?`)) {
      personsService.deletePerson(id)
      const newPersons = persons.filter(p => p.id !== id)
      setPersons(newPersons)
    }
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
        <Persons persons={persons} filter={filter} erase={handleErase}/>
      </div>
    </div>
  )
}

export default App