import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import GetProducts from "../api/GetProducts";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartProvider";

const Pagehome = () => {
  const [prod, setProd] = useState([]);
  const { cart } = useCart();

  console.log({ cart });
  useEffect(() => {
    (async () => {
      const data = await GetProducts();
      setProd(data);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-wrap gap-8 justify-center pt-8">
        {prod?.length > 0 &&
          prod.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </main>
    </>
  );
};

export default Pagehome;
