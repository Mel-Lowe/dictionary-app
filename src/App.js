import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <h1 className="text-center">Dictionary App</h1>
          <Dictionary defaultKeyword="sunset" />
        </div>
      </div>
      <footer>Coded by Melowe, open-sourced on Github</footer>
    </div>
  );
}
