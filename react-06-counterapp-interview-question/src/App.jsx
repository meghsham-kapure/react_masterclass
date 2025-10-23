import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // This is the wrong approach and to fix this us function approach

  // const incrementCounter = function () {
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   console.log(counter);
  // };

  // const decrementCounter = function () {
  //   counter-1;
  //   counter-1;
  //   setCounter(counter-1);
  // };

  const incrementCounter = function () {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    console.log(counter);
  };

  const decrementCounter = function () {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    console.log(counter);
  };

  return (
    <>
      <h1>Counter Application</h1>
      <div id="display-counter">{counter}</div>
      <div className="" id="button-container">
        <br />
        <br />
        <button onClick={incrementCounter}> Increment </button>
        <br />
        <br />
        <button onClick={decrementCounter}> Decrement </button>
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
