import React from "react";

const FindProductinCart = (cart, id) => {
  return cart?.length > 0 && cart.some((product) => product.id === id);
};

export default FindProductinCart;
