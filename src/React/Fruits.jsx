import { useState } from "react";

const fruits = [
  { id: 1, name: "Apple", price: 20 },
  { id: 2, name: "Orange", price: 54 },
  { id: 3, name: "Grapes", price: 30 },
  { id: 4, name: "Pineapple", price: 70 },
];

export const Fruits = () => {
  const [shouldHighlight, setShouldHighlight] = useState(false);
  return (
    <>
      {fruits.map(({ id, name, price }) => (
        <p
          key={id}
          //   style={price < 50 && { color: "red" }}/// wrong way ????
          //   style={price < 50 ? { color: "red" } : { fontSize: "30px" }}
          //   style={{ color: price < 50 ? "red" : "black" }}
          //   style={{ color: price < 50 && "green" }}
          style={{ color: shouldHighlight && price < 50 ? "red" : "black" }}
        >
          {name} : ${price}
        </p>
      ))}
      <button onClick={() => setShouldHighlight(!shouldHighlight)}>
        {shouldHighlight ? "Reset" : "Highlight Budget Fruits"}
      </button>
    </>
  );
};
