import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard.js';

const App = () => {
  const [weatherSummary, setWeatherSummary] = useState({});
  // error or city not found handling
  const [cityFound, setCityFound] = useState({message: '', status: false});

  const getData = async (city) => {
  const fetchData = await fetch(``)
    .then(async (response) => {
      if(!response.ok){
        throw Error("Error, Couldn't find City " + `\"${city}\"`);
        return;
          }
      const data = await response.json();
      console.log(data);
      const cityName = data.name;
      const country = data.sys.country;
      console.log("COUNTRY: ", country);
      const temperature = data.main.temp;
      const pressure = data.main.pressure;
      const wind = data.wind.speed;
      const weatherDescription = data.weather[0].main;
      const iconCode = data.weather[0].icon;
      const icon = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
      setWeatherSummary({city: cityName, temp: temperature, windSpeed: wind, weatherStatus: weatherDescription, pressure: pressure, icon: icon});
      setCityFound({...cityFound, status: true});
    })
    .catch(err => {
      console.log(err);
      // console.log(typeof(err));
      // console.log(Object.getOwnPropertyNames(err));
      // console.log("stack: ", err.stack);
      // console.log("message: ", err.message);
      setCityFound({message: err.message, status: false});
      console.log("IS SET: ", weatherSummary);
    });

  }
  const handleSubmit = (inputValueSubmitted) => {
    inputValueSubmitted.preventDefault();
    const cityEntered = inputValueSubmitted.target.children[0].value
    getData(cityEntered);
  }


  useEffect(() => {
    console.log("D: ", weatherSummary);
    console.log("C: ", weatherSummary.icon);
}, [weatherSummary]);
  /* Fetched Data Format
  const data = {
    "coord":{"lon":-0.1257,"lat":51.5085},
    "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],
    "base":"stations",
    "main":{"temp":282.73,"feels_like":279.1,"temp_min":281.48,"temp_max":284.15,"pressure":1038,"humidity":46},
    "visibility":10000,
    "wind":{"speed":2.06,"deg":310},
    "clouds":{"all":0},
    "dt":1614361838,
    "sys":{"type":1,"id":1414,"country":"GB","sunrise":1614322328,"sunset":1614360899},
    "timezone":0,"id":2643743,"name":"London","cod":200
  }
  */

  // icon URL
  // `http://openweathermap.org/img/wn/{}@2x.png`
  return(
    <div>
      <form onSubmit={input => handleSubmit(input)} className='searchForm'>
      <input type='text' placeholder='Search By City' className='form-control searchBar'></input>
      </form>
      {cityFound.status ? <WeatherCard weatherInfo={weatherSummary}/> : <p className='idleMessage'>{cityFound.message == '' ? 'Nothing To Show' : cityFound.message}</p>}
    </div>
  );
}

export default App;
