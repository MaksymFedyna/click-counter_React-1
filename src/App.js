import React, { useState } from "react";
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const addOne = () => setCounter(counter + 1);

  return (
    <div className="container">
      <h1 className="header">Click Counter</h1>
      <p className="counter">{counter}</p>
      <button className="btn" onClick={addOne}>Click</button>
    </div>
  );
}

export default App;
