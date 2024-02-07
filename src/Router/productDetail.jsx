import { useParams } from "react-router-dom";
import phonesDB from "./phonesDB";

export const ProductDetail = () => {
  const { id } = useParams();
  const selectedProduct = phonesDB.data.find((phone) => phone.id === id);

  return (
    <>
      <h1>{selectedProduct.name}</h1>
    </>
  );
};
