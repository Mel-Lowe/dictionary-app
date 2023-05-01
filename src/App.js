import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <h1 className="text-center">Dictionary App</h1>
        </div>
        <Dictionary defaultKeyword="sunset" />
      </div>
      <footer>
        Coded by{" "}
        <a href="https://playful-lebkuchen-8def1d.netlify.app/">Melowe</a>,
        open-sourced on{" "}
        <a href="https://github.com/Mel-Lowe/dictionary-app">GitHub</a>
      </footer>
    </div>
  );
}
