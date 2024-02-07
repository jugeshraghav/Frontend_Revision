import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{ cartItems: 50 }}>
      {children}
    </CartContext.Provider>
  );
};
