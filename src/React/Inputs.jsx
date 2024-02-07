import { useState } from "react";

export const Inputs = () => {
  const [inputText, setInputText] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [color, setColor] = useState("");
  const fullName = firstName + " " + lastName;
  const fruits = [
    { id: 1, category: "Apple", name: "Apple Shimla" },
    { id: 2, category: "Apple", name: "Kashmiri Apple" },
    { id: 3, category: "Apple", name: "Ambri Apple" },
    { id: 4, category: "Banana", name: "Banana Robusta" },
    { id: 5, category: "Banana", name: "Raw Banana Green" },
    { id: 6, category: "Orange", name: "Orange Indian" },
    { id: 7, category: "Orange", name: "Orange USA" },
    { id: 8, category: "Grapes", name: "Grapes Black" },
    { id: 9, category: "Grapes", name: "Grapes Seedless" },
    { id: 10, category: "Mango", name: "Badami" },
    { id: 11, category: "Mango", name: "Alphonso" },
    { id: 12, category: "Mango", name: "Ratnagiri" },
  ];
  const uniqueCategories = fruits.reduce(
    (acc, { category }) =>
      acc.find((item) => item === category) ? acc : [...acc, category],
    //   [...acc, category],
    []
  );

  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredFruits =
    selectedCategory.length > 0
      ? fruits.filter(({ category }) => category === selectedCategory)
      : fruits;
  return (
    <>
      <h1>Inputs</h1>
      {/* <input
        placeholder="Enter Something"
        defaultValue={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p>{inputText}</p> */}
      {/* <input
        placeholder="Enter first name"
        defaultValue={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Enter last name"
        defaultValue={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>Hi my name is {fullName}</p> */}
      {/* Drop down */}
      {/* <h1 style={{ color: color }}>Change Color</h1>
      <select onChange={(e) => setColor(e.target.value)} defaultValue={"green"}>
        <option value="selected color">Select Color</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
      </select> */}

      {/* Filter based on Dropdown Category */}
      {/* <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        defaultValue={"select category"}
      >
        <option disabled value="select category">
          Select Category
        </option>
        {uniqueCategories.map((cat) => (
          <option value={cat}>{cat}</option>
        ))}
      </select>
      {filteredFruits.map(({ name }) => (
        <li>{name}</li>
      ))} */}

      {/* checkboxes and useState */}
    </>
  );
};
