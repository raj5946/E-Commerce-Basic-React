import React from "react";
import { useCart } from "../context/CartProvider";
import GetTotalPrice from "../utils/GetTotalPrice";

const PriceDetails = () => {
  const { cart } = useCart();
  const totalPrice = GetTotalPrice(cart);
  const deliveryCharge = 50;
  return (
    <div className="w-[300px]">
      <p className="text-2xl">Price Details</p>
      <hr />
      <div className="flex flex-col gap-5">
        <div className="flex ">
          <p>Price ({cart.length})</p>
          <p className="ml-auto">Rs.{totalPrice}</p>
        </div>
        <div className="flex ">
          <p>Delivery Charges</p>
          <p className="ml-auto">Rs.{deliveryCharge}</p>
        </div>
      </div>
      <div className="flex">
        <p>Total Amount</p>
        <p className="ml-auto">Rs.{totalPrice + deliveryCharge}</p>
      </div>
      <div>
        <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default PriceDetails;
