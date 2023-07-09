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

  function handlePreviousStep() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNextStep() {
    setStep((s) => s + 1);
  }

  return (
    <div className="flex">
      <div className="steps">
        <button onClick={handlePreviousStep}>-</button>
        <h2>Step: {step}</h2>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div className="counter">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <h2>Count: {count}</h2>
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
    </div>
  );
}
