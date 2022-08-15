import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <a
        href="https://github.com/courtneyyatteau/Weather-App-React"
        target="_blank"
        rel="noreferrer"
        class="App-link"
      >
        Github Link
      </a>
    </div>
  );
}
