import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartContext.jsx";

export const MyContext = createContext();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContext.Provider value={{ items: 4 }}>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </MyContext.Provider>
  </React.StrictMode>
);
