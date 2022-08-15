import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("imperial");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    let fah = Math.round(props.fahrenheit);
    return (
      <div className="temp col-6" >
        {fah}{" "}
        <a href="/" onClick={convertToFahrenheit}>
          °F
        </a>{" "}
        |{" "}
        <a href="/" onClick={convertToCelsius}>
          °C
        </a>
      </div>
    );
  } else {
    let cel = Math.round(((props.fahrenheit - 32) * 5) / 9);
    return (
      <div className="temp col-6">
        {cel}{" "}
        <a href="/" onClick={convertToFahrenheit} className="">
          °F
        </a>{" "}
        |{" "}
        <a href="/" onClick={convertToCelsius}>
          °C
        </a>
      </div>
    );
  }
}
