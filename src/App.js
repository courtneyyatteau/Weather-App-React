import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App container">
      <Weather />
      <p>
        This is an open-source{" "}
        <a
          href="https://github.com/courtneyyatteau/Weather-App-React"
          target="_blank"
          rel="noreferrer"
          class="App-link"
        >
          Github project
        </a>{" "}
        created by{" "}
        <a
          href="https://courtney-yatteau-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
          class="App-link"
        >
          Courtney Yatteau
        </a>
        .
      </p>
    </div>
  );
}
