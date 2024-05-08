import React from 'react'

const CountrySelected = ({filtered, show}) => {
    if (filtered) {
        if(filtered.length > 10){
            return (
                <div>
                    <p>Too many matches, specify another filter</p>
                </div>
            )
        } else if (filtered.length < 10 && filtered.length !== 1) {
            return(
                filtered.map((c => (
                    <div key={c.name.common}>
                        <p>{c.name.common} <button onClick={() => show(c.name.common)}>show</button></p>
                    </div>
                )))
            )
        } else {
            return( 
                <div>
                    <h1>{filtered[0].name.common}</h1>
                    <h3>Capital: {filtered[0].capital}</h3>
                    <p>Area: {filtered[0].area}</p>
                    <p>Languages: 
                        {Object.keys(filtered[0].languages).map((key) => (
                            <li key={key}>{filtered[0].languages[key]}</li>
                        ))}
                    </p>
                    <img src={filtered[0].flags.png}/>
                </div>
            )
        }
    }
}

export default CountrySelected