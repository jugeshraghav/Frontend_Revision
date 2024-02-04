export const Sum = ({ myObj: { number1, number2 } }) => {
  let sum = number1 + number2;
  //Props--- it is basically an object that is formed by combining all the values passed to the Component. It can be accesses by any name, not necessarily props.
  return (
    <>
      <h1 style={{ color: "red" }}>Sum Of Numbers</h1>
      <h1 style={{ fontSize: "20px" }}>Number 1: {number1}</h1>
      <h1 style={{ fontSize: "20px" }}>Number 2: {number2}</h1>
      <h1 style={{ fontSize: "20px" }}>Sum: {sum}</h1>
    </>
  );
};
