import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display" >
        The Counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button"
        onClick={() => {
          setCount(count + 1);
        }}>Increment count</button>
    </div>
  );
}

export default App;
