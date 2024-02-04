import { useState } from "react";

export const Counter = () => {
  const [currentValue, setCurrentValue] = useState(0);
  return (
    <>
      <h1>Counter App</h1>
      <h2>Current Value : {currentValue} </h2>
      <button onClick={() => setCurrentValue(currentValue + 1)}>+</button>
      <button onClick={() => setCurrentValue(currentValue - 1)}>-</button>
    </>
  );
};
