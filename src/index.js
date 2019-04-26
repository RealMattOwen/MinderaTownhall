import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div className="App">
      <h1>Hello Mindera Townhall</h1>
      {status ? "Off" : "On"}
      <button
        style={{ display: "block", margin: "1rem auto" }}
        onClick={() => {
          setStatus(!status);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
