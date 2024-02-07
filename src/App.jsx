import "./App.css";
import { ES_6 } from "./JavaScript/ES_6";
import { Counter } from "./React/Counter";
import { EmployeeCard } from "./React/EmployeeCard";
import { Fruits } from "./React/Fruits";
import { Hooks } from "./React/Hooks";
import { Inputs } from "./React/Inputs";
import { FilterableProductTable } from "./React/Mockup";
import { Product } from "./React/Product";
import { Sum } from "./React/Sum";
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
function App() {
  return (
    <>
      <h1>Hello from First vite react app</h1>
      {/* <ES_6 /> */}
      {/* <Sum myObj={{ number1: 5, number2: 6 }} name="Jugesh" />
      <EmployeeCard />
      <Product />
      <Fruits />
      <Counter /> */}
      {/* <FilterableProductTable products={PRODUCTS} /> */}
      {/* <Hooks /> */}
      <Inputs />
    </>
  );
}

export default App;
