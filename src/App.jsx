import { useState } from "react";
import "./App.css";
import { ES_6 } from "./JavaScript/ES_6";
import { Counter } from "./React/Counter";
import { EmployeeCard } from "./React/EmployeeCard";
import { Fruits } from "./React/Fruits";
import { Functions_props } from "./React/Functions_props";
import { Hooks } from "./React/Hooks";
import { Inputs } from "./React/Inputs";
import { FilterableProductTable } from "./React/Mockup";
import { Product } from "./React/Product";
import { Sum } from "./React/Sum";
import { Home } from "./Router/Home";
import { Products } from "./Router/Products";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { ProductDetail } from "./Router/productDetail";
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [todosDB, setTodosDB] = useState([
    { id: 1, text: "Buy milk", isDone: false },
    { id: 2, text: "Do laundry", isDone: false },
    { id: 3, text: "Finish project", isDone: true },
    { id: 4, text: "Tell Tanvi to learn driving", isDone: false },
    { id: 5, text: "Pay bills", isDone: true },
    { id: 6, text: "Go to gym", isDone: false },
    { id: 7, text: "Cook dinner", isDone: true },
    { id: 8, text: "Read book", isDone: false },
    { id: 9, text: "Take dog for a walk", isDone: false },
    { id: 10, text: "Clean bathroom", isDone: true },
  ]);
  const toggleTodo = (todoId) => {
    const newTodosDB = todosDB.map((todo) =>
      todo.id == todoId ? { ...todo, isDone: !todo.isDone } : { ...todo }
    );
    setTodosDB(newTodosDB);
  };
  // console.log(todosDB);
  const getStyle = ({ isActive }) => {
    return { color: isActive ? "green" : "red" };
  };
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
      {/* <Inputs /> */}
      {/* <Functions_props todos={todosDB} toggleTodo={toggleTodo} /> */}
      <nav>
        <NavLink style={getStyle} to="/">
          Home
        </NavLink>
        ||
        <NavLink style={getStyle} to="/products">
          Products
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
