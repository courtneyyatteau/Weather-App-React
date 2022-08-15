import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`Weather in ${response.data.name} is ${response.data.main.temp}°F`);
  }

  let apiKey = "eb3465c9163b23fae63aa1202c8a0eb5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return <h2>WEATHER</h2>;
}
