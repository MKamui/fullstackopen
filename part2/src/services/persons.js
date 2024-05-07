import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const createNewPerson = async newPerson => {
  const request = axios.post(baseUrl, newPerson)
  const response = await request
  return response.data
}

const updatePerson = async (id, updated) => {
  const request = axios.put(`${baseUrl}/${id}`, updated)
  const response = await request
  return response.data
}

const deletePerson = async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  const response = await request
  return response.data
}

export default { getAllPersons, createNewPerson, updatePerson, deletePerson }