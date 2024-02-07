import { useContext } from "react";
import { CartContext } from "./CartContext";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <h1>Items in Cart : {cartItems}</h1>
    </>
  );
};
