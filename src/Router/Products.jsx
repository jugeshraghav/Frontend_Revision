import { Link } from "react-router-dom";
import phonesDB from "./phonesDB";

export const Products = () => {
  return (
    <>
      <h1>All Products</h1>
      <ul>
        {phonesDB.data.map(({ id, name, memory, price, currency, details }) => (
          <li
            style={{
              padding: "1rem",
              listStyle: "none",
              margin: "1rem",
              border: "1px solid #efefef",
            }}
          >
            <div style={{ fontSize: "large" }}>
              {name} {memory} GB
            </div>
            <div>
              Price: {price} {currency}
            </div>
            {<Link to={`/products/${id}`}> View Details </Link>}
          </li>
        ))}
      </ul>
    </>
  );
};
