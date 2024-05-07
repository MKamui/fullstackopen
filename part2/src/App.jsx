import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'
import personsService from "./services/persons"
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] =useState(null)

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
    if (persons.find(p => p.name === newName) && window.confirm(`${newName} is already added to phonebook, update the phonenumber?`)) {
      personsService.updatePerson(persons.find(p => p.name === newName).id, newPerson)
      setNewName('')
      setNewNumber('')
      setMessage(`Updated ${newName}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000);
    } else {
      personsService.createNewPerson(newPerson)
      setNewName('')
      setNewNumber('')
      setMessage(`Added ${newName}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000);
    }
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
      <h1>Phonebook</h1>
      <Notification message={message}/>
      <div>
        <Filter handleFilter={handleFilter}/>
      </div>
      <Form handleInputName={handleInputName} handleInputNumber={handleInputNumber} handleNewName={handleNewName} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <div>
        <Persons persons={persons} filter={filter} erase={handleErase}/>
      </div>
    </div>
  )
}

export default App