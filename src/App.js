import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="Paris" />
        <a
          href="https://github.com/courtneyyatteau/Weather-App-React"
          target="_blank"
          rel="noreferrer"
          class="App-link"
        >
          Github Link
        </a>
      </header>
    </div>
  );
}
