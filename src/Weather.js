import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather() {
  let [city, setCity] = useState("");
  let [visible, setVisibile] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    console.log(response);
    setVisibile(true);
    setWeather({
      location: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      realFeel: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKeyOpen = "eb3465c9163b23fae63aa1202c8a0eb5";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyOpen}&units=imperial`
      )
      .then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city..."
        onChange={updateCity}
      />
      <button type="Submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );

  if (visible) {
    return (
      <div className="weather row">
        {form}
        <ul className="col-7">
          <li className="name">{weather.location}</li>
          <FormattedDate date={weather.date} />
          <li className="row">
            <img
              className="col-5 img"
              src={weather.icon}
              alt={weather.description}
            />
            <WeatherTemperature fahrenheit={weather.temperature} />
          </li>
        </ul>
        <ul className="col-5 right-side">
          <li>Real Feel: {Math.round(weather.realFeel)}°F</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
