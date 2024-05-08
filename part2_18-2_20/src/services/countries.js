import axios from 'axios'

const apiKey = import.meta.env.VITE_WEATHER_KEY

const getAllCountries = async () => {
  const request = axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
  const response = await request
  return response.data
}

const getWeather = async (city) => {
  const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  const response = await request
  return response.data
}

export default { getAllCountries, getWeather }