import { useReducer } from "react";

export const Counter = () => {
  const counterReducer = (state = { counterValue: 0 }, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, counterValue: state.counterValue + 1 };
      case "decrement":
        return { ...state, counterValue: state.counterValue - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(counterReducer, initial_state);
  const currentValue = state.counterValue;
  return (
    <>
      <h1>Counter : {currentValue}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
};
