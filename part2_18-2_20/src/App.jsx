import { useState, useEffect } from 'react'
import countries from './services/countries'
import CountrySelected from './components/CountrySelected'
import Weather from './components/Weather'

const App = () => {
  const [search, setSearch] = useState('')
  const [dataCountries, setDataCountries] = useState()
  const [filtered, setFiltered] = useState()
  const [weather, setWeather] = useState()

  useEffect(() => {
    try {
      countries.getAllCountries()
      .then(response => {
        setDataCountries(response)
      })
    } catch (error) {
      console.log("no data")
    }
  }, [])

  useEffect(() => {
    try {
      if (search){
        setFiltered(dataCountries.filter(n => n.name.common.toLowerCase().includes(search.toLowerCase())))
        setWeather()
      }
    } catch (error) {
      console.log("no filtered")
    }
  }, [search])

  useEffect(() => {
    try {
      if (filtered.length === 1){
        countries.getWeather(filtered[0].capital.toString())
        .then(response => {
          setWeather(response)
          console.log(weather)
        })
      }
    } catch (error) {
      
    }
  }, [filtered])
  
  

  const handleFilter = (event) => {
    setSearch(event.target.value)
  }

  const handleShow = (name) => {
    setFiltered(dataCountries.filter(n => n.name.common.toLowerCase().includes(name.toLowerCase())))
  }
  
  return (
    <div className='find'>
      <label>Find countries</label>
      <input onChange={handleFilter}/>
      <div>
        {search === '' ? 
        <div>
          <p>Write something on the search bar</p>
        </div>
        :
        <CountrySelected filtered={filtered} show={handleShow}/>
        }
      </div>
      <div>
        <Weather filtered={filtered} weather={weather}/>
      </div>
    </div>
  )
}

export default App