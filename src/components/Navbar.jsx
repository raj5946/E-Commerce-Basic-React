import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-column justify-between py-6 px-12 bg-gradient-to-br from-cyan-500 to-blue-500 text-slate-50">
      <div className="flex gap-3 items-center">
        <span className="material-symbols-outlined text-6xl">shopping_bag</span>
        <h1
          onClick={() => navigate("/")}
          className="text-5xl hover:cursor-pointer"
        >
          Shopify
        </h1>
      </div>

      <div className="flex gap-6 items-center">
        <span
          onClick={() => navigate("/wishlist")}
          className="material-symbols-outlined text-5xl hover:cursor-pointer"
        >
          favorite
        </span>
        <span
          onClick={() => navigate("/cart")}
          className="material-symbols-outlined text-5xl hover:cursor-pointer"
        >
          shopping_cart
        </span>
        <span className="material-symbols-outlined text-5xl hover:cursor-pointer">
          account_circle
        </span>
      </div>
    </div>
  );
};

export default Navbar;
