import React, { useState } from "react";
import "./Counter.css";

const ProblematicCounter = () => {
  const [counter, setCounter] = useState(15);

  // PROBLEMATIC: This will only increment by 1, not by 4
  const handleIncrementBroken = () => {
    setCounter(counter + 1); // Expected: 15 -> 16
    setCounter(counter + 1); // Expected: 16 -> 17
    setCounter(counter + 1); // Expected: 17 -> 18
    setCounter(counter + 1); // Expected: 18 -> 19
    // Actual result: 15 -> 16 (only once)
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(15);
  };

  return (
    <div className="counter-container">
      <h2>Problematic Counter (Batching Issue)</h2>
      <div className="counter-value">Counter: {counter}</div>
      <div className="button-group">
        <button onClick={handleIncrementBroken} className="btn btn-increment">
          Add Value (Broken) - Click Me!
        </button>
        <button onClick={handleDecrement} className="btn btn-decrement">
          Decrease Value
        </button>
        <button onClick={handleReset} className="btn btn-reset">
          Reset to 15
        </button>
      </div>
      <p className="explanation">
        <strong>Problem:</strong> Clicking "Add Value" should increase by 4, but
        it only increases by 1 due to React's batching.
      </p>
    </div>
  );
};

export default ProblematicCounter;

// import { useState } from "react";
// import "./App.css";

// function App() {

//   // Setting hooks
//   // keyword [stateVariable, hookName] = hookname (default value to state)
//   let [value, setCounter] = useState(5);

//   const increaseValue = function () {
//     if (value < 10) {
//       value = value + 1;
//       setCounter(value);  //call the hook to update increased value
//       console.log("Clicked increaseValue button " + value);
//     }
//   };

//   const decreaseValue = function () {
//     if (value > 0) {
//       value = value - 1;
//       setCounter(value); //call the hook to update decreased value
//       console.log("Clicked decreaseValue button " + value);
//     }
//   };

//   return (
//     <>
//       <h1>Chai aur React</h1>
//       <h2>Counter : {value}</h2>

//       <button onClick={increaseValue}>Increase Value to {value + 1}</button>
//       <br />
//       <br />
//       <button onClick={decreaseValue}>Decrease Value to {value - 1}</button>
//     </>
//   );
// }

// export default App;
