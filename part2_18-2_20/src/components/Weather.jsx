import React from 'react'

const Weather = ({filtered, weather}) => {
    if (filtered && weather){
        return (
          <div>
              <h3>Wheater on {filtered[0].capital}</h3>
              <p>Temperature {weather.main.temp}°C</p>
              <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
              <p>Winds {weather.wind.speed} m/s</p>
          </div>
        )
    }
}

export default Weather