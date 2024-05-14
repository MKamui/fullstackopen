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
  const [message, setMessage] = useState(null)
  const [type, setType] = useState()
  const [update, setUpdate] = useState()

  useEffect(() => {
    personsService.getAllPersons()
    .then(listPersons => {
      setPersons(listPersons)
    })
  }, [, update])
  

  const handleFilter = (event) => {
    event.preventDefault()
    setFilter(event.target.value)
  }

  const handleInputName = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleInputNumber = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const handleNewName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    try {
      if (persons.find(p => p.name === newName) && window.confirm(`${newName} is already added to phonebook, update the phonenumber?`)) {
        personsService.updatePerson(persons.find(p => p.name === newName).id, newPerson)
        setNewName('')
        setNewNumber('')
        setType("success")
        setMessage(`Updated ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      } else {
        personsService.createNewPerson(newPerson)
        setUpdate('created')
        setNewName('')
        setNewNumber('')
        setType("success")
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      }
    } catch (error) {
      setType("error")
      setMessage(`Something happens trying to create or update ${newName}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000);
    }
  }

  const handleErase = (id) => {
    try {
      if (window.confirm(`Do you want to delete ${persons.find(p => p.id === id).name}?`)) {
        personsService.deletePerson(id)
        setUpdate('updated')
        setType("success")
        setMessage(`Deleted ${persons.find(p => p.id === id).name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      }
    } catch (error) {
      setType("error")
      setMessage(`Something happens trying to delete ${persons.find(p => p.id === id).name}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000);
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} type={type}/>
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