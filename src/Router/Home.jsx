import { useContext } from "react";
import { MyContext } from "../main";

export const Home = () => {
  const { items } = useContext(MyContext);
  return (
    <>
      Home
      <h1>Items : {items}</h1>
    </>
  );
};
