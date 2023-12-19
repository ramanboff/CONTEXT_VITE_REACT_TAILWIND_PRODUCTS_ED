import Card from "./Card";

const Products = () => {
  const products = [
    { name: "vest", price: 50 },
    { name: "jacket", price: 70 },
    { name: "sweater", price: 20 },
    { name: "tshirt", price: 40 },
    { name: "necklace", price: 70 },
    { name: "jumper", price: 60 },
  ];
  return (
    <div className="grid grid-cols-1 py-10 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Card name={product.name} price={product.price}/>
      ))}
    </div>
  );
};

export default Products;
