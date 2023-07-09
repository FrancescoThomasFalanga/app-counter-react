import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  // function handlePreviousStep() {
  //   if (step > 1) {
  //     setStep((s) => s - 1);
  //   }
  // }

  // function handleNextStep() {
  //   setStep((s) => s + 1);
  // }

  function reset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="flex">
      <div className="steps">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(s) => setStep(Number(s.target.value))}
        />

        <h2>{step}</h2>

        {/* <button onClick={handlePreviousStep}>-</button>
        <h2>Step: {step}</h2>
        <button onClick={handleNextStep}>+</button> */}
      </div>
      <div className="counter">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        {/* <h2>Count: {count}</h2> */}

        <input
          type="number"
          value={count}
          onChange={(c) => setCount(Number(c.target.value))}
        />

        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p style={{ fontWeight: "bold", fontSize: "32px" }}>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      <button
        onClick={reset}
        style={
          step === 1 && count === 0 ? { display: "none" } : { display: "block" }
        }
      >
        Reset
      </button>
    </div>
  );
}
