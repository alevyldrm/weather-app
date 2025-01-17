import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [city, setCity] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=c83a0a08ca337f8a5d18d67e13d7b01d`

  const searchCity = (event) => {
    if (event.key === 'Enter') {
      axios(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setCity("")
    }
  }
  return (
    <div className='app'>
      <div className="search">
        <input
          value={city}
          onChange={event => setCity(event.target.value)}
          onKeyPress={searchCity}
          placeholder='Enter Location...'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined &&

          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.main ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default App
