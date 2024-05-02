import React from 'react'

const Form = ({handleNewName, handleInputName, handleInputNumber, newName, newNumber}) => {
  return (
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
  )
}

export default Form