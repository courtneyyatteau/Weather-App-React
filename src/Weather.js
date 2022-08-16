import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function Weather() {
  let [city, setCity] = useState("");
  let [visible, setVisibile] = useState(false);
  let [weather, setWeather] = useState({});

  useEffect(() => {
    setVisibile(false);
  }, [city]);

  function displayWeather(response) {
    //console.log(response);
    setVisibile(true);
    setWeather({
      location: response.data.data[0].city_name,
      date: response.data.data[0].ob_time.slice(0, 10),
      time: response.data.data[0].ob_time.slice(11),
      temperature: response.data.data[0].app_temp,
      wind: response.data.data[0].wind_spd,
      precipitation: response.data.data[0].precip,
      icon: `https://www.weatherbit.io/static/img/icons/${response.data.data[0].weather.icon}.png`,
      description: response.data.data[0].weather.description,
      longitude: response.data.data[0].lon,
      latitude: response.data.data[0].lat,
    });
  }
  let apiKeyOpen = "a6371c1af3434c54ad422b8869365574";

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKeyOpen}&units=I`
      )
      .then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="weatherForm">
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
      <div className="weather">
        <div className="row">
          {form}
          <ul className="col-lg-7">
            <li className="name">{weather.location}</li>
            <li>{weather.date}</li>
            <li>{weather.time}</li>
            <li className="row">
              <img
                className="col-lg-5 img"
                src={weather.icon}
                alt={weather.description}
              />
              <WeatherTemperature fahrenheit={weather.temperature} />
            </li>
          </ul>
          <ul className="col-lg-5 right-side">
            <li>Description: {weather.description}</li>
            <li>Precipitation: {weather.precipitation}%</li>
            <li>Wind: {weather.wind}km/h</li>
          </ul>
        </div>
        <WeatherForecast
          apiKey={apiKeyOpen}
          longitude={weather.longitude}
          latitude={weather.latitude}
        />
      </div>
    );
  } else {
    return form;
  }
}
