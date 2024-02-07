import { useEffect, useState } from "react";
export const Hooks = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/products") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              products: [
                { name: "Pen", price: 30, quantity: 100 },
                { name: "Pencil", price: 50, quantity: 50 },
                { name: "Paper", price: 20, quantity: 30 },
              ],
            },
          });
        } else {
          reject({
            status: 404,
            message: "Items list not found.",
          });
        }
      }, 2000);
    });
  };
  const handleData = () => {
    setLoading(true);
    try {
      fakeFetch("https://example.com/api/products")
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            setProducts(res.data.products);
            setLoading(false);
          }
        })
        .catch((e) => console.log(e));
    } catch {}
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <>
      <h1>API calls</h1>
      {/* <button onClick={() => handleData()}>Get Products Data</button> */}
      {loading && <h1>Loading...</h1>}
      {products.map(({ name, price, quantity }) => (
        <li>
          {name}--Rs {price}--{quantity}
        </li>
      ))}
    </>
  );
};
