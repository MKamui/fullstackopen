import { useState, useEffect } from 'react'
import countries from './services/countries'
import CountrySelected from './components/CountrySelected'


const App = () => {
  const [search, setSearch] = useState('')
  const [dataCountries, setDataCountries] = useState()
  const [filtered, setFiltered] = useState()

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
      }
    } catch (error) {
      console.log("no filtered")
    }
  }, [search])
  

  const handleFilter = (event) => {
    setSearch(event.target.value)
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
        <CountrySelected filtered={filtered}/>
        }
      </div>
    </div>
  )
}

export default App