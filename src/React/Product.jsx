const product = {
  id: "AC1023",
  name: "Air Conditioner",
  price: 29600,
  specification: "1 Ton, 4 Star Rating",
  warranty: "5 Years Compressor Warranty",
};

export const Product = () => {
  const { name, price, specification, warranty } = product;
  return (
    <>
      <h1>Name : {name}</h1>
      <h1>Price : Rs{price} </h1>
      <h1>Specification :{specification} </h1>
      <h1>Warranty :{warranty} </h1>
    </>
  );
};
