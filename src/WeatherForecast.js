import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let apiKey = props.apiKey;
  let longitude = props.longitude;
  let latitude = props.latitude;
  const [maxMin, setMaxMin] = useState([]);

  axios
    .get(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=I`
    )
    .then(showStuff);

  function showStuff(response) {
    //console.log(response);
    let stuff = [];
    for (let i = 0; i < 6; i++) {
      stuff.push({
        key: i,
        max: response.data.data[i].max_temp,
        min: response.data.data[i].min_temp,
      });
    }
    setMaxMin(stuff);
  }

  return (
    <div className="forecast">
      <div className="row forecast">
        {maxMin.map((x) => (
          <div className="col-2" key={x.key}>
            {x.max} <span className="min">{x.min}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
