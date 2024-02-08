export const Reducer = () => {
  //   const numList = [1, 3, 55, 22, 44];
  const numList = [
    { type: "odd", payload: 1 },
    { type: "odd", payload: 3 },
    { type: "odd", payload: 55 },
    { type: "even", payload: 22 },
    { type: "even", payload: 44 },
  ];
  const sumOfOddEven = (acc, value) => {
    switch (value.type) {
      case "even":
        return { ...acc, even: acc.even + value.payload };
      case "odd":
        return { ...acc, odd: acc.odd + value.payload };
      default:
        return acc;
    }
  };
  const myObj = numList.reduce(sumOfOddEven, { odd: 0, even: 0 });
  console.log(myObj);
  return (
    <>
      <h2>Reducer</h2>
    </>
  );
};
