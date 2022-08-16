import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("imperial");
  const [fahIsActive, setFahIsActive] = useState(true);
  const [celIsActive, setCelIsActive] = useState(false);

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
    setFahIsActive(false);
    setCelIsActive(true);
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
    setFahIsActive(true);
    setCelIsActive(false);
  }

  if (unit === "imperial") {
    let fah = Math.round(props.fahrenheit);
    return (
      <div className="temp col-lg-6">
        {fah}{" "}
        <a
          href="/"
          onClick={convertToFahrenheit}
          className={fahIsActive ? "active celFah" : "celFah"}
        >
          °F
        </a>{" "}
        |{" "}
        <a
          href="/"
          onClick={convertToCelsius}
          className={celIsActive ? "active celFah" : "celFah"}
        >
          °C
        </a>
      </div>
    );
  } else {
    let cel = Math.round(((props.fahrenheit - 32) * 5) / 9);
    return (
      <div className="temp col-6">
        {cel}{" "}
        <a
          href="/"
          onClick={convertToFahrenheit}
          className={fahIsActive ? "active celFah" : "celFah"}
        >
          °F
        </a>{" "}
        |{" "}
        <a
          href="/"
          onClick={convertToCelsius}
          className={celIsActive ? "active celFah" : "celFah"}
        >
          °C
        </a>
      </div>
    );
  }
}
