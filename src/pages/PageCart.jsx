import React from "react";
import Navbar from "../components/Navbar";
import HorizontalProductCard from "../components/HorizontalProductCard";
import { useCart } from "../context/CartProvider";
import PriceDetails from "../components/PriceDetails";
import { useNavigate } from "react-router-dom";

const PageCart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-6">
        {cart?.length > 0 ? (
          <>
            <h2 className="text-3xl">My Cart</h2>
            <div className="flex">
              <div className="pt-4 flex flex-col mb-6 m-12 gap-4">
                {cart?.length > 0 &&
                  cart.map((product) => (
                    <HorizontalProductCard key={product.id} product={product} />
                  ))}
              </div>
              <div className="m-12">
                <PriceDetails />
              </div>
            </div>
          </>
        ) : (
          <>
            <p>Cart is empty!, add some products</p>
            <p
              className="text-2xl hover: cursor-pointer underline"
              onClick={() => navigate("/")}
            >
              Click to buy items!!!
            </p>
          </>
        )}
      </main>
    </>
  );
};

export default PageCart;
